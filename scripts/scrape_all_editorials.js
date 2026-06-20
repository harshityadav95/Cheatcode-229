import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const PROBLEMS_DIR = path.join(ROOT, 'problems');
const DETAILS_DIR = path.join(ROOT, 'public/leetcode-main-data/details');
const PUBLIC_IMAGES_DIR = path.join(ROOT, 'public/editorial-images');

async function processBatch(items, concurrency, fn) {
  let index = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (index < items.length) {
      const currentIdx = index++;
      const item = items[currentIdx];
      try {
        await fn(item, currentIdx);
      } catch (err) {
        console.error(`Error processing item ${item.slug}:`, err);
      }
    }
  });
  await Promise.all(workers);
}

async function scrapeProblem(browser, problem, index, total) {
  const { slug, folder, leetcodeNum } = problem;
  
  // We can skip if editorial JSON already exists in the problems folder and contains scraped content
  const localEditorialPath = path.join(PROBLEMS_DIR, folder, 'editorial.json');
  if (fs.existsSync(localEditorialPath)) {
    try {
      const localData = JSON.parse(fs.readFileSync(localEditorialPath, 'utf8'));
      if (localData && (localData.editorialHtml || localData.premium || localData.available === false)) {
        console.log(`[${index + 1}/${total}] Skipping ${slug} (already scraped/premium/unavailable: available=${localData.available}, premium=${localData.premium})`);
        if (localData.editorialHtml) {
          updatePublicDetailsJson(leetcodeNum, localData.editorialHtml);
        }
        return;
      }
    } catch (e) {}
  }
  
  console.log(`[${index + 1}/${total}] Scraping editorial for ${slug} (LeetCode #${leetcodeNum})...`);
  
  const page = await browser.newPage();
  try {
    const url = `https://leetcode.com/problems/${slug}/editorial/`;
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    // Visit page
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for a few seconds to let elements attach
    await page.waitForTimeout(3000);
    
    // Check if container exists
    const containerSelector = '.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0';
    const containerExists = await page.evaluate((sel) => !!document.querySelector(sel), containerSelector);
    
    if (!containerExists) {
      // Check if it's premium/locked
      const pageText = (await page.innerText('body')).toLowerCase();
      const isPremium = pageText.includes('subscribe to premium') || 
                        pageText.includes('premium answer') || 
                        pageText.includes('unlock') ||
                        pageText.includes('subscribe to unlock') ||
                        pageText.includes('subscribe to view this solution') ||
                        pageText.includes('subscribe to view the solution');
      console.log(`[${index + 1}/${total}] Editorial not found for ${slug}. Premium: ${isPremium}`);
      
      const stubData = {
        slug,
        leetcodeId: leetcodeNum,
        premium: isPremium,
        available: false,
        editorialHtml: ''
      };
      
      fs.writeFileSync(localEditorialPath, JSON.stringify(stubData, null, 2));
      return;
    }
    
    // Force lazy elements to load by scrolling down
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    
    // Wait for lazy items to initialize
    await page.waitForTimeout(3000);
    
    // Extract image URLs and download them
    const imgUrls = await page.evaluate((sel) => {
      const container = document.querySelector(sel);
      return Array.from(container.querySelectorAll('img')).map(img => img.src);
    }, containerSelector);
    
    const localImagesDir = path.join(PROBLEMS_DIR, folder, 'images');
    const publicImagesDir = path.join(PUBLIC_IMAGES_DIR, folder);
    fs.mkdirSync(localImagesDir, { recursive: true });
    fs.mkdirSync(publicImagesDir, { recursive: true });
    
    const imageMap = {};
    for (let imgIdx = 0; imgIdx < imgUrls.length; imgIdx++) {
      const imgUrl = imgUrls[imgIdx];
      if (!imgUrl) continue;
      try {
        let filename;
        if (imgUrl.startsWith('blob:')) {
          filename = `image_${imgIdx + 1}.png`;
        } else {
          try {
            const parsedUrl = new URL(imgUrl);
            filename = path.basename(parsedUrl.pathname);
          } catch (e) {}
          if (!filename || filename.indexOf('.') === -1) {
            filename = `image_${imgIdx + 1}.png`;
          }
        }
        
        let buffer;
        if (imgUrl.startsWith('blob:')) {
          const dataUrl = await page.evaluate(async (url) => {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          }, imgUrl);
          const base64 = dataUrl.split(',')[1];
          buffer = Buffer.from(base64, 'base64');
        } else {
          const imgResponse = await page.request.get(imgUrl);
          if (imgResponse.ok()) {
            buffer = await imgResponse.body();
          }
        }
        
        if (buffer) {
          fs.writeFileSync(path.join(localImagesDir, filename), buffer);
          fs.writeFileSync(path.join(publicImagesDir, filename), buffer);
          // Map original URL/src to the local path
          imageMap[imgUrl] = `/editorial-images/${folder}/${filename}`;
        }
      } catch (err) {
        console.error(`Error downloading image ${imgUrl}:`, err);
      }
    }
    
    // Find iframes inside editorial container and count them
    const iframesCount = await page.evaluate((sel) => {
      const container = document.querySelector(sel);
      const iframes = container.querySelectorAll('iframe');
      iframes.forEach((iframe, idx) => {
        iframe.classList.add(`scraped-playground-iframe-${idx}`);
      });
      return iframes.length;
    }, containerSelector);
    
    const frameCodes = [];
    for (let iframeIdx = 0; iframeIdx < iframesCount; iframeIdx++) {
      const classSelector = `.scraped-playground-iframe-${iframeIdx}`;
      const iframeLocator = page.locator(classSelector);
      
      // Ensure it's scrolled into view
      await iframeLocator.scrollIntoViewIfNeeded().catch(() => {});
      await page.waitForTimeout(1500);
      
      const elementHandle = await page.$(classSelector);
      const frame = elementHandle ? await elementHandle.contentFrame() : null;
      
      if (frame) {
        // Wait for tab buttons
        await frame.waitForSelector('.btn, button', { timeout: 6000 }).catch(() => {});
        
        const buttons = await frame.$$eval('.btn, button', els => {
          return els.map(el => el.innerText.trim()).filter(t => t.length > 0 && t.length < 20);
        });
        
        const languages = ['C++', 'Java', 'Python', 'Python3', 'Go', 'Rust', 'TypeScript', 'JavaScript', 'C#', 'C'];
        const matchedLangs = buttons.filter(b => languages.includes(b));
        
        const snippets = {};
        for (const lang of matchedLangs) {
          // Click tab button
          await frame.evaluate((langName) => {
            const els = Array.from(document.querySelectorAll('.btn, button'));
            const target = els.find(el => el.innerText.trim() === langName);
            if (target) target.click();
          }, lang);
          await page.waitForTimeout(1000);
          
          // Get CodeMirror content
          const code = await frame.evaluate(() => {
            const cmEl = document.querySelector('.CodeMirror');
            return cmEl && cmEl.CodeMirror ? cmEl.CodeMirror.getValue() : '';
          });
          
          if (code) {
            snippets[lang] = code;
          }
        }
        frameCodes.push(snippets);
      } else {
        frameCodes.push(null);
      }
    }
    
    // Perform HTML manipulation inside page context:
    // 1. Rewrite image srcs to local paths
    // 2. Replace iframes with native styled HTML details/summary elements
    const editorialHtml = await page.evaluate((args) => {
      const { sel, imgMap, codes } = args;
      const container = document.querySelector(sel);
      if (!container) return '';
      
      // Rewrite images
      container.querySelectorAll('img').forEach(img => {
        const localSrc = imgMap[img.src];
        if (localSrc) {
          img.src = localSrc;
        }
      });
      
      // Replace iframes
      codes.forEach((snippets, idx) => {
        const iframe = container.querySelector(`.scraped-playground-iframe-${idx}`);
        if (!iframe) return;
        
        if (!snippets || Object.keys(snippets).length === 0) {
          iframe.remove();
          return;
        }
        
        const match = iframe.src.match(/\/playground\/([^/]+)/);
        const playgroundId = match ? match[1] : `code-tabs-${idx}`;
        
        let tabsHtml = `<div class="editorial-code-block border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden my-4">
  <div class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
    Solutions
  </div>`;
        
        let isFirst = true;
        for (const [lang, code] of Object.entries(snippets)) {
          const escapedCode = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
            
          tabsHtml += `
  <details ${isFirst ? 'open' : ''} name="${playgroundId}" class="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
    <summary class="px-4 py-2 bg-slate-50 dark:bg-slate-900 font-semibold text-xs cursor-pointer select-none border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">${lang}</summary>
    <pre class="p-4 bg-slate-100 dark:bg-slate-950 font-mono text-xs overflow-x-auto text-slate-800 dark:text-slate-200"><code>${escapedCode}</code></pre>
  </details>`;
          isFirst = false;
        }
        
        tabsHtml += `</div>`;
        
        const wrapper = document.createElement('div');
        wrapper.innerHTML = tabsHtml;
        iframe.parentNode.replaceChild(wrapper.firstChild, iframe);
      });
      
      return container.innerHTML;
    }, { sel: containerSelector, imgMap: imageMap, codes: frameCodes });
    
    // Save to local editorial.json
    const editorialData = {
      slug,
      leetcodeId: leetcodeNum,
      available: true,
      premium: false,
      editorialHtml,
      playgrounds: frameCodes
    };
    
    fs.writeFileSync(localEditorialPath, JSON.stringify(editorialData, null, 2));
    
    // Inject into public details folder
    updatePublicDetailsJson(leetcodeNum, editorialHtml);
    
    console.log(`[${index + 1}/${total}] Successfully scraped ${slug}!`);
  } catch (err) {
    console.error(`[${index + 1}/${total}] Error scraping ${slug}:`, err);
  } finally {
    await page.close();
  }
}

function updatePublicDetailsJson(leetcodeNum, editorialHtml) {
  const detailJsonPath = path.join(DETAILS_DIR, `${leetcodeNum}.json`);
  if (fs.existsSync(detailJsonPath)) {
    try {
      const detailData = JSON.parse(fs.readFileSync(detailJsonPath, 'utf8'));
      detailData.editorialHtml = editorialHtml;
      fs.writeFileSync(detailJsonPath, JSON.stringify(detailData, null, 2));
    } catch (e) {
      console.error(`Error updating public details JSON for ${leetcodeNum}:`, e);
    }
  }
}

async function main() {
  // 1. Gather all curated problems from problems/
  const problemFolders = fs.readdirSync(PROBLEMS_DIR).filter(f => {
    return fs.statSync(path.join(PROBLEMS_DIR, f)).isDirectory() && f.match(/^\d{3}-/);
  });
  
  const problems = [];
  for (const folder of problemFolders) {
    const probJsonPath = path.join(PROBLEMS_DIR, folder, 'problem.json');
    if (fs.existsSync(probJsonPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(probJsonPath, 'utf8'));
        const leetcodeNum = data.leetcode;
        // Extract slug from problem URL or folder name
        let slug = '';
        if (data.references) {
          const mainProbRef = data.references.find(ref => ref.kind === 'problem');
          if (mainProbRef && mainProbRef.url) {
            const match = mainProbRef.url.match(/https:\/\/leetcode\.com\/problems\/([^/]+)/);
            if (match) slug = match[1];
          }
        }
        if (!slug) {
          // fallback to removing the folder number prefix
          slug = folder.replace(/^\d{3}-/, '');
        }
        
        if (leetcodeNum && slug) {
          problems.push({ folder, slug, leetcodeNum });
        }
      } catch (e) {
        console.error(`Error loading problem.json for folder ${folder}:`, e);
      }
    }
  }
  
  console.log(`Loaded ${problems.length} problems for scraping.`);
  
  // Create directories
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  
  // Launch playwright chromium browser
  console.log("Launching playwright chromium browser...");
  const browser = await chromium.launch({ headless: true });
  
  try {
    // Process in batches (concurrency of 3 to be safe and polite to Leetcode)
    await processBatch(problems, 3, async (prob, idx) => {
      await scrapeProblem(browser, prob, idx, problems.length);
    });
  } catch (err) {
    console.error("Batch processing error:", err);
  } finally {
    await browser.close();
    console.log("Browser closed. Scraping complete!");
  }
}

main();
