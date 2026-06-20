import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/playground/5W6dtQmk/shared';
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    
    const debugData = await page.evaluate(() => {
      const allElements = [];
      document.querySelectorAll('*').forEach(el => {
        const text = el.innerText ? el.innerText.trim() : '';
        if (text && text.length < 50 && (el.className || '').includes('btn')) {
          allElements.push({
            tagName: el.tagName,
            className: el.className,
            text
          });
        }
      });
      return allElements;
    });
    
    console.log("Found button elements:", JSON.stringify(debugData, null, 2));
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
