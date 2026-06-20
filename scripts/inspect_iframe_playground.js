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
    
    // Find all iframes
    const iframeSrcs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('iframe')).map(f => f.src);
    });
    console.log("Found iframes:", iframeSrcs);
    
    if (iframeSrcs.length > 0) {
      const firstIframeUrl = iframeSrcs[0];
      console.log(`Navigating directly to playground: ${firstIframeUrl}`);
      await page.goto(firstIframeUrl, { waitUntil: 'networkidle' });
      
      const playgroundData = await page.evaluate(() => {
        // Let's find tabs and code blocks inside the playground
        const tabs = [];
        document.querySelectorAll('.tab, button, [role="tab"], .lang-btn').forEach(el => {
          tabs.push({
            text: el.innerText.trim(),
            className: el.className
          });
        });
        
        // Find all elements containing text or structure
        const buttons = Array.from(document.querySelectorAll('button, a')).map(b => b.innerText.trim());
        const bodyTextSnippet = document.body.innerText.slice(0, 1000);
        
        return {
          title: document.title,
          buttons,
          tabs,
          bodyTextSnippet
        };
      });
      
      console.log("Playground Data:", JSON.stringify(playgroundData, null, 2));
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
