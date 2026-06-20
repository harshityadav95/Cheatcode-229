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
    
    const siblings = await page.evaluate(() => {
      const results = [];
      const cppBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText.trim() === 'C++');
      if (cppBtn) {
        const parent = cppBtn.parentElement;
        if (parent) {
          Array.from(parent.children).forEach(child => {
            results.push({
              tagName: child.tagName,
              text: child.innerText.trim(),
              className: child.className
            });
          });
        }
      }
      return results;
    });
    
    console.log("Sibling buttons of C++ tab:", JSON.stringify(siblings, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
