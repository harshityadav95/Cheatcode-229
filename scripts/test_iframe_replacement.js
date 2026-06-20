import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function run() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/problems/greatest-common-divisor-of-strings/editorial/';
    console.log(`Navigating to ${url}...`);
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    
    // Scroll to bottom to force lazy-loaded elements to load
    console.log("Scrolling to bottom to load lazy frames...");
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 200;
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
    
    // Wait another 5 seconds for all loaded frames to initialize
    console.log("Waiting for frames to initialize...");
    await page.waitForTimeout(5000);
    
    // Check if container exists
    const containerExists = await page.evaluate(() => {
      const container = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      return !!container;
    });
    
    if (!containerExists) {
      console.log("Editorial container not found");
      return;
    }
    
    // Assign classes to iframes to target them
    const iframeCount = await page.evaluate(() => {
      const container = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      const iframes = container.querySelectorAll('iframe');
      iframes.forEach((iframe, idx) => {
        iframe.classList.add(`scraped-playground-iframe-${idx}`);
      });
      return iframes.length;
    });
    console.log(`Found ${iframeCount} playground iframes inside editorial container.`);
    
    // Scraping frames
    const frameCodes = [];
    const frames = page.frames();
    console.log(`Total active frames in page: ${frames.length}`);
    
    for (let idx = 0; idx < iframeCount; idx++) {
      const iframeSrc = await page.evaluate((index) => {
        const iframe = document.querySelector(`.scraped-playground-iframe-${index}`);
        return iframe ? iframe.src : '';
      }, idx);
      
      const frame = frames.find(f => f.url() === iframeSrc);
      if (frame) {
        console.log(`Scraping frame ${idx + 1} with URL: ${iframeSrc}`);
        await frame.waitForSelector('.btn, button', { timeout: 8000 }).catch(() => {});
        
        // Find buttons in frame
        const buttons = await frame.$$eval('.btn, button', els => {
          return els.map(el => el.innerText.trim()).filter(t => t.length > 0 && t.length < 20);
        });
        
        const languages = ['C++', 'Java', 'Python', 'Python3', 'Go', 'Rust', 'TypeScript', 'JavaScript', 'C#', 'C'];
        const matchedLangs = buttons.filter(b => languages.includes(b));
        console.log(`Matched languages for frame ${idx + 1}:`, matchedLangs);
        
        const snippets = {};
        for (const lang of matchedLangs) {
          // Click tab
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
          snippets[lang] = code;
        }
        frameCodes.push(snippets);
      } else {
        console.log(`Frame not found for iframe ${idx} with src: ${iframeSrc}`);
        frameCodes.push(null);
      }
    }
    
    // Now perform replacement in the editorial HTML
    const finalHtml = await page.evaluate((codes) => {
      const container = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      if (!container) return '';
      
      // Let's replace each iframe with custom details block
      codes.forEach((snippets, idx) => {
        const iframe = container.querySelector(`.scraped-playground-iframe-${idx}`);
        if (!iframe) return;
        
        if (!snippets || Object.keys(snippets).length === 0) {
          iframe.remove();
          return;
        }
        
        // Build tabs HTML
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
  <details ${isFirst ? 'open' : ''} class="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
    <summary class="px-4 py-2 bg-slate-50 dark:bg-slate-900 font-semibold text-xs cursor-pointer select-none border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50">${lang}</summary>
    <pre class="p-4 bg-slate-100 dark:bg-slate-950 font-mono text-xs overflow-x-auto text-slate-800 dark:text-slate-200"><code>${escapedCode}</code></pre>
  </details>`;
          isFirst = false;
        }
        
        tabsHtml += `</div>`;
        
        // Replace
        const wrapper = document.createElement('div');
        wrapper.innerHTML = tabsHtml;
        iframe.parentNode.replaceChild(wrapper.firstChild, iframe);
      });
      
      return container.innerHTML;
    }, frameCodes);
    
    fs.writeFileSync('scripts/replaced_editorial.html', finalHtml);
    console.log("Saved replaced HTML to scripts/replaced_editorial.html. Length:", finalHtml.length);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
