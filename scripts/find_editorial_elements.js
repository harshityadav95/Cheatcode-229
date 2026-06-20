import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/problems/greatest-common-divisor-of-strings/editorial/';
    console.log(`Navigating to ${url}...`);
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);
    
    const editorialInfo = await page.evaluate(() => {
      const el = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      if (!el) return { found: false };
      
      const buttons = [];
      el.querySelectorAll('button').forEach(btn => {
        buttons.push({
          text: btn.innerText.trim(),
          className: btn.className,
          id: btn.id
        });
      });
      
      const structures = [];
      el.querySelectorAll('*').forEach(child => {
        // Let's find divs that contain multiple language buttons or look like tab buttons container
        if (child.tagName === 'DIV' && child.children.length > 1) {
          const btnTexts = Array.from(child.children)
            .filter(c => c.tagName === 'BUTTON' || c.tagName === 'SPAN' || c.tagName === 'DIV')
            .map(c => c.innerText.trim())
            .filter(t => t.length > 0 && t.length < 20);
          
          if (btnTexts.includes('C++') || btnTexts.includes('Java') || btnTexts.includes('Python')) {
            structures.push({
              tagName: child.tagName,
              className: child.className,
              childrenTexts: btnTexts
            });
          }
        }
      });
      
      const images = Array.from(el.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      return {
        found: true,
        textLength: el.innerText.length,
        buttons,
        structures,
        images
      };
    });
    
    console.log("Editorial content details:", JSON.stringify(editorialInfo, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
