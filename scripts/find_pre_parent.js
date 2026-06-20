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
    
    const preParents = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('pre').forEach((pre, idx) => {
        const path = [];
        let curr = pre.parentElement;
        while (curr && curr !== document.body) {
          path.push({
            tagName: curr.tagName,
            className: curr.className,
            id: curr.id
          });
          curr = curr.parentElement;
        }
        results.push({
          idx,
          textSnippet: pre.innerText.slice(0, 100).replace(/\s+/g, ' '),
          path
        });
      });
      return results;
    });
    
    console.log("Pre elements parents:", JSON.stringify(preParents, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
