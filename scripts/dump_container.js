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
    
    const blockHTMLs = await page.evaluate(() => {
      const results = [];
      const cppBtns = Array.from(document.querySelectorAll('button')).filter(btn => btn.innerText.trim() === 'C++');
      
      cppBtns.forEach((btn, idx) => {
        // Find a common ancestor containing both the tab bar and the code/pre element
        let parent = btn.parentElement;
        // Let's go up a few levels to cover the whole tab container and code block container
        for (let i = 0; i < 4; i++) {
          if (parent && parent.parentElement) {
            parent = parent.parentElement;
          }
        }
        
        if (parent) {
          results.push({
            idx,
            outerHTMLSnippet: parent.outerHTML.slice(0, 1500),
            buttons: Array.from(parent.querySelectorAll('button')).map(b => b.innerText.trim())
          });
        }
      });
      return results;
    });
    
    console.log("Found containers around C++ buttons:", JSON.stringify(blockHTMLs, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
