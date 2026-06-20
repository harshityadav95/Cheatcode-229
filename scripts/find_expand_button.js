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
    
    const pageButtons = await page.evaluate(() => {
      const btns = [];
      document.querySelectorAll('button, a, div, span').forEach(el => {
        const text = el.innerText ? el.innerText.trim() : '';
        if (text.length > 0 && text.length < 50) {
          const lower = text.toLowerCase();
          if (lower.includes('show') || lower.includes('more') || lower.includes('read') || lower.includes('unlock') || lower.includes('premium') || lower.includes('expand') || lower.includes('lock')) {
            btns.push({
              tagName: el.tagName,
              text,
              className: el.className
            });
          }
        }
      });
      return btns;
    });
    
    console.log("Found matching expand/lock/paywall elements:", JSON.stringify(pageButtons, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
