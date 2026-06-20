import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

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
    
    // Extract image URLs inside the editorial container
    const imgUrls = await page.evaluate(() => {
      const container = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      if (!container) return [];
      return Array.from(container.querySelectorAll('img')).map(img => img.src);
    });
    
    console.log(`Found ${imgUrls.length} images:`, imgUrls);
    
    const outputDir = '/Volumes/skynetevo/github/Cheatcode-229/public/editorial-images/002-greatest-common-divisor-of-strings';
    fs.mkdirSync(outputDir, { recursive: true });
    
    for (const imgUrl of imgUrls) {
      const parsedUrl = new URL(imgUrl);
      const filename = path.basename(parsedUrl.pathname) || 'image.png';
      console.log(`Downloading ${imgUrl} -> ${filename}...`);
      
      const response = await page.request.get(imgUrl);
      if (response.ok()) {
        const buffer = await response.body();
        fs.writeFileSync(path.join(outputDir, filename), buffer);
        console.log(`Saved ${filename} successfully (${buffer.length} bytes).`);
      } else {
        console.log(`Failed to download ${imgUrl}: ${response.status()}`);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
