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
    
    console.log("Waiting for playground frames to load...");
    await page.waitForTimeout(7000);
    
    const frames = page.frames();
    const playgroundFrames = frames.filter(f => f.url().includes('/playground/'));
    console.log(`Found ${playgroundFrames.length} playground frames.`);
    
    if (playgroundFrames.length > 0) {
      const frame = playgroundFrames[0];
      console.log("Waiting for .ace_editor inside the frame...");
      await frame.waitForSelector('.ace_editor', { timeout: 10000 });
      
      const editorHTML = await frame.evaluate(() => {
        const editor = document.querySelector('.ace_editor');
        return editor ? editor.outerHTML.slice(0, 1000) : 'EDITOR NOT FOUND';
      });
      console.log("Editor Outer HTML snippet:\n", editorHTML);
    } else {
      console.log("No playground frames found");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
}

run();
