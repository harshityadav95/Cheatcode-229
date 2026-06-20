import { chromium } from 'playwright';
import fs from 'fs';

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
    
    const html = await page.evaluate(() => {
      const el = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      return el ? el.innerHTML : 'NOT FOUND';
    });
    
    fs.writeFileSync('scripts/editorial_html.html', html);
    console.log("Saved HTML. Length:", html.length);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
