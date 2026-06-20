import { chromium } from 'playwright';
import fs from 'fs';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/playground/5W6dtQmk/shared';
    console.log(`Navigating directly to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);
    
    const html = await page.evaluate(() => document.body.innerHTML);
    fs.writeFileSync('scripts/playground_html.html', html);
    console.log("Saved playground body HTML. Length:", html.length);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
