import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/playground/5W6dtQmk/shared';
    console.log(`Navigating directly to playground: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    const elements = await page.evaluate(() => {
      // Find all divs or pre tags that hold the code
      const preList = [];
      document.querySelectorAll('pre, code, td, div').forEach(el => {
        const cls = el.className;
        if (cls && (cls.includes('code') || cls.includes('Ace') || cls.includes('editor') || cls.includes('content'))) {
          // Check text snippet
          const txt = el.innerText ? el.innerText.trim() : '';
          if (txt.includes('class Solution') && txt.length > 50) {
            preList.push({
              tagName: el.tagName,
              className: cls,
              id: el.id,
              textSnippet: txt.slice(0, 200)
            });
          }
        }
      });
      return { preList };
    });
    
    console.log("Found editor elements:", JSON.stringify(elements, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
