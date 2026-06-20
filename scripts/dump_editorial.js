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
    
    const htmlDump = await page.evaluate(() => {
      const el = document.querySelector('[class*="solution-markdown"], [class*="markdown-content"]');
      if (!el) return "Not found";
      
      // Let's extract information about the code blocks and their headings
      const structure = [];
      el.querySelectorAll('h3, h4, pre, [class*="tab"], button').forEach(child => {
        const text = child.innerText ? child.innerText.trim().replace(/\s+/g, ' ') : '';
        if (!text) return;
        
        if (child.tagName === 'H3' || child.tagName === 'H4') {
          structure.push({ type: child.tagName, text });
        } else if (child.tagName === 'PRE') {
          structure.push({ type: 'PRE', text: text.slice(0, 150) });
        } else if (child.tagName === 'BUTTON') {
          structure.push({ type: 'BUTTON', text, className: child.className });
        }
      });
      return structure;
    });
    
    console.log("Editorial DOM structure:", JSON.stringify(htmlDump, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
