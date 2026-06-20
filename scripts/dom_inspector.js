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
    
    // Evaluate page DOM structure
    const elementsInfo = await page.evaluate(() => {
      // Find all divs or articles that look like editorial containers
      const results = [];
      const articles = document.querySelectorAll('article');
      articles.forEach((art, idx) => {
        results.push({
          type: 'article',
          className: art.className,
          id: art.id,
          textLength: art.innerText.length
        });
      });
      
      const potentialContainers = document.querySelectorAll('[class*="editorial"], [class*="solution"]');
      potentialContainers.forEach((div, idx) => {
        if (div.innerText && div.innerText.length > 500 && results.length < 20) {
          results.push({
            type: 'div_potential',
            className: div.className,
            textLength: div.innerText.length
          });
        }
      });
      
      // Look for images
      const images = [];
      document.querySelectorAll('img').forEach(img => {
        images.push({
          src: img.src,
          alt: img.alt,
          className: img.className
        });
      });

      // Look for code blocks
      const preBlocks = [];
      document.querySelectorAll('pre').forEach(pre => {
        preBlocks.push({
          textLength: pre.innerText.length,
          className: pre.className
        });
      });

      return { results, images, preBlocks };
    });
    
    console.log("Found containers:", JSON.stringify(elementsInfo.results, null, 2));
    console.log("Found images count:", elementsInfo.images.length);
    console.log("Images sample:", JSON.stringify(elementsInfo.images.slice(0, 5), null, 2));
    console.log("Found pre blocks count:", elementsInfo.preBlocks.length);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
