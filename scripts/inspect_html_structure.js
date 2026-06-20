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
    
    const htmlSnippet = await page.evaluate(() => {
      const pre = document.querySelector('pre');
      if (!pre) return "No pre element found";
      
      // Let's traverse up to the first div that contains both the pre element and the tab buttons
      let curr = pre.parentElement;
      while (curr && curr.tagName !== 'BODY') {
        const buttons = curr.querySelectorAll('button, [role="tab"], div');
        const hasTabs = Array.from(buttons).some(el => {
          const t = el.innerText ? el.innerText.trim() : '';
          return ['C++', 'Java', 'Python', 'Python3', 'Go', 'C#', 'C'].includes(t);
        });
        
        if (hasTabs) {
          return {
            ancestorTag: curr.tagName,
            ancestorClass: curr.className,
            innerHTML: curr.innerHTML.slice(0, 4000)
          };
        }
        curr = curr.parentElement;
      }
      return "No ancestor with tabs found";
    });
    
    console.log("HTML Snippet of tab ancestor:\n", htmlSnippet);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
