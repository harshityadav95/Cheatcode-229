import { chromium } from 'playwright';

async function run() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    const url = 'https://leetcode.com/problems/greatest-common-divisor-of-strings/editorial/';
    console.log(`Navigating to ${url}...`);
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    
    // Find all iframes inside the editorial
    const iframesCount = await page.evaluate(() => {
      const container = document.querySelector('.markdown-content_markdown__cVmKc, .solution-markdown_markdown__d2RC0');
      if (!container) return 0;
      const iframes = container.querySelectorAll('iframe');
      iframes.forEach((iframe, idx) => {
        iframe.classList.add(`test-iframe-${idx}`);
      });
      return iframes.length;
    });
    
    console.log(`Found ${iframesCount} iframes.`);
    
    for (let idx = 0; idx < iframesCount; idx++) {
      console.log(`\nProcessing iframe ${idx}...`);
      const selector = `.test-iframe-${idx}`;
      
      // Scroll into view to trigger lazy loading
      const iframeLocator = page.locator(selector);
      await iframeLocator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(2000);
      
      const elementHandle = await page.$(selector);
      const frame = await elementHandle.contentFrame();
      
      if (frame) {
        console.log(`Frame ${idx} obtained. URL: ${frame.url()}`);
        
        // Wait for buttons to load inside this frame
        await frame.waitForSelector('.btn, button', { timeout: 8000 }).catch(() => {});
        
        const buttons = await frame.$$eval('.btn, button', els => {
          return els.map(el => el.innerText.trim()).filter(t => t.length > 0 && t.length < 20);
        });
        console.log(`Buttons inside frame ${idx}:`, buttons);
      } else {
        console.log(`Could not get contentFrame for iframe ${idx}`);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
