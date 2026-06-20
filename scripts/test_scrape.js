import { chromium } from 'playwright';

async function run() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/editorial/';
    console.log(`Navigating to ${url}...`);
    
    // Set a custom User-Agent to look like a standard browser
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log("Page loaded. Waiting 3 seconds...");
    await page.waitForTimeout(3000);
    
    console.log("Title:", await page.title());
    
    const bodyText = await page.innerText('body');
    console.log("Body text length:", bodyText.length);
    console.log("Body snippet:\n", bodyText.slice(0, 1500));
  } catch (err) {
    console.error("Error during scraping:", err);
  } finally {
    await browser.close();
    console.log("Browser closed.");
  }
}

run();
