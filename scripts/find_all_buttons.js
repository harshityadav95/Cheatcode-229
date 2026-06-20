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
    
    const elements = await page.evaluate(() => {
      const results = [];
      const languages = ['C++', 'Java', 'Python', 'Python3', 'Go', 'Rust', 'TypeScript', 'JavaScript'];
      
      document.querySelectorAll('*').forEach(el => {
        const text = el.innerText ? el.innerText.trim() : '';
        if (languages.includes(text) && el.children.length === 0) {
          // Find path
          const path = [];
          let curr = el;
          for (let i = 0; i < 4 && curr; i++) {
            path.push({ tagName: curr.tagName, className: curr.className });
            curr = curr.parentElement;
          }
          results.push({
            tagName: el.tagName,
            text,
            path
          });
        }
      });
      return results;
    });
    
    console.log("Found language elements:", JSON.stringify(elements, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
