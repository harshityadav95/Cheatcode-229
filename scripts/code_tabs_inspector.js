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
    
    const elementsInfo = await page.evaluate(() => {
      const tabs = [];
      document.querySelectorAll('[role="tab"], button, div').forEach(el => {
        const text = el.innerText ? el.innerText.trim() : '';
        const role = el.getAttribute('role');
        if (role === 'tab' || ['C++', 'Java', 'Python', 'Python3', 'Go', 'Rust', 'TypeScript', 'JavaScript'].includes(text)) {
          tabs.push({
            tagName: el.tagName,
            text,
            role,
            className: el.className
          });
        }
      });
      return { tabs };
    });
    
    console.log("Matching tabs found:", JSON.stringify(elementsInfo.tabs, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
