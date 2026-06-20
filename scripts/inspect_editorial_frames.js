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
    
    // Get all frames
    const frames = page.frames();
    console.log(`Total frames found: ${frames.length}`);
    frames.forEach((f, idx) => {
      console.log(`Frame ${idx}: URL=${f.url()} name=${f.name()}`);
    });
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
