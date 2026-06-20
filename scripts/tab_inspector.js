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
    
    const tabsAndCode = await page.evaluate(() => {
      const results = [];
      // Look for tab buttons (usually buttons inside a list or containers)
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        results.push({
          type: 'button',
          text: btn.innerText,
          className: btn.className
        });
      });
      
      // Look for pre/code elements
      const codeBlocks = [];
      document.querySelectorAll('pre, code').forEach(el => {
        if (el.innerText.length > 50) {
          codeBlocks.push({
            tag: el.tagName,
            className: el.className,
            text: el.innerText.slice(0, 100)
          });
        }
      });
      
      return { buttons: results.slice(0, 30), codeBlocks };
    });
    
    console.log("Buttons found:", JSON.stringify(tabsAndCode.buttons, null, 2));
    console.log("Code blocks found:", JSON.stringify(tabsAndCode.codeBlocks, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
