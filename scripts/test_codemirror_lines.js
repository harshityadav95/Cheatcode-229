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
    await page.waitForTimeout(7000);
    
    const frames = page.frames();
    const playgroundFrames = frames.filter(f => f.url().includes('/playground/'));
    
    if (playgroundFrames.length > 0) {
      const frame = playgroundFrames[0];
      
      const results = await frame.evaluate(async () => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const out = {};
        
        const btns = Array.from(document.querySelectorAll('.btn, button')).filter(el => {
          const t = el.innerText.trim();
          return ['C++', 'Java', 'Python3'].includes(t);
        });
        
        for (const btn of btns) {
          const lang = btn.innerText.trim();
          btn.click();
          await sleep(1000);
          
          const lines = Array.from(document.querySelectorAll('.CodeMirror-line'));
          out[lang] = lines.map(l => l.innerText).join('\n');
        }
        return out;
      });
      
      console.log("Scraped from CodeMirror-line:");
      for (const [lang, val] of Object.entries(results)) {
        console.log(`--- ${lang} (${val.length} chars) ---`);
        console.log(val.slice(0, 150));
      }
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
