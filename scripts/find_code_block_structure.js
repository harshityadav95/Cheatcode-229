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
    
    const preDetails = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('pre').forEach((pre, idx) => {
        // Find parents
        const parents = [];
        let curr = pre.parentElement;
        for (let i = 0; i < 6 && curr; i++) {
          parents.push({
            tagName: curr.tagName,
            className: curr.className,
            id: curr.id
          });
          curr = curr.parentElement;
        }
        
        // Find buttons under the grandparent
        const siblingButtons = [];
        let grandparent = pre.parentElement;
        if (grandparent && grandparent.parentElement) {
          grandparent.parentElement.querySelectorAll('button').forEach(btn => {
            siblingButtons.push({
              text: btn.innerText.trim(),
              className: btn.className
            });
          });
        }
        
        results.push({
          idx,
          textLength: pre.innerText.length,
          snippet: pre.innerText.slice(0, 300),
          parents,
          siblingButtons
        });
      });
      return results;
    });
    
    console.log("All pre blocks on the page:", JSON.stringify(preDetails, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
