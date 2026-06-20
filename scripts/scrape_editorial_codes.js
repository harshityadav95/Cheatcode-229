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
    
    // Wait for the playground frames to be attached and have their buttons loaded
    console.log("Waiting for frames to load...");
    await page.waitForTimeout(7000);
    
    const frames = page.frames();
    const playgroundFrames = frames.filter(f => f.url().includes('/playground/'));
    console.log(`Found ${playgroundFrames.length} playground frames.`);
    
    for (let fIdx = 0; fIdx < playgroundFrames.length; fIdx++) {
      const frame = playgroundFrames[fIdx];
      console.log(`\nProcessing Frame ${fIdx + 1}: URL = ${frame.url()}`);
      
      // Wait for the button elements to appear in the frame
      await frame.waitForSelector('.btn, button', { timeout: 5000 }).catch(() => {});
      
      // Get all tab button texts in this frame
      const buttons = await frame.$$eval('.btn, button', els => {
        return els.map(el => el.innerText.trim()).filter(t => t.length > 0 && t.length < 20);
      });
      console.log("Buttons in frame:", buttons);
      
      const languages = ['C++', 'Java', 'Python', 'Python3', 'Go', 'Rust', 'TypeScript', 'JavaScript', 'C#', 'C', 'PHP', 'Swift', 'Kotlin', 'Scala'];
      const matchedLangs = buttons.filter(b => languages.includes(b));
      console.log("Languages to click:", matchedLangs);
      
      const results = {};
      
      for (const lang of matchedLangs) {
        console.log(`Clicking tab ${lang}...`);
        
        // Let's click it via page.evaluate on the frame context to be robust
        await frame.evaluate((langName) => {
          const els = Array.from(document.querySelectorAll('.btn, button'));
          const target = els.find(el => el.innerText.trim() === langName);
          if (target) {
            target.click();
          }
        }, lang);
        
        // Wait for code container to update
        await page.waitForTimeout(1000);
        
        // Extract code text
        const code = await frame.evaluate(() => {
          // Try Ace Editor first
          const aceEl = document.querySelector('.ace_editor');
          if (aceEl && window.ace) {
            try {
              return window.ace.edit(aceEl).getValue();
            } catch(e){}
          }
          // Fallback to lines
          const lines = Array.from(document.querySelectorAll('.ace_line'));
          if (lines.length > 0) {
            return lines.map(l => l.innerText).join('\n');
          }
          return '';
        });
        
        results[lang] = code;
      }
      
      console.log(`Scraped implementations for Frame ${fIdx + 1}:`);
      for (const [lang, code] of Object.entries(results)) {
        console.log(`- ${lang}: ${code.length} characters`);
        console.log(code.slice(0, 150));
      }
    }
  } catch (err) {
    console.error("Error during scraping:", err);
  } finally {
    await browser.close();
  }
}

run();
