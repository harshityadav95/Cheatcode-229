import fs from 'fs';
import path from 'path';

// Let's import the problems catalog directly from src/data/problems.ts
// Wait, since src/data/problems.ts is typescript, let's parse it or load it by reading the problems folder!
const problemsDir = '/Volumes/skynetevo/github/Cheatcode-229/problems';
const detailsDir = '/Volumes/skynetevo/github/Cheatcode-229/public/leetcode-main-data/details';

const problemFolders = fs.readdirSync(problemsDir).filter(f => {
  return fs.statSync(path.join(problemsDir, f)).isDirectory() && f.match(/^\d{3}-/);
});

console.log(`Found ${problemFolders.length} curated problem folders.`);

let existCount = 0;
let missingCount = 0;
const missing = [];

for (const folder of problemFolders) {
  const probJsonPath = path.join(problemsDir, folder, 'problem.json');
  if (fs.existsSync(probJsonPath)) {
    const data = JSON.parse(fs.readFileSync(probJsonPath, 'utf8'));
    const lcNum = data.leetcode;
    if (lcNum) {
      const detailJsonPath = path.join(detailsDir, `${lcNum}.json`);
      if (fs.existsSync(detailJsonPath)) {
        existCount++;
      } else {
        missingCount++;
        missing.push({ folder, lcNum });
      }
    }
  }
}

console.log(`Matching details found: ${existCount}`);
console.log(`Missing details: ${missingCount}`);
if (missing.length > 0) {
  console.log("Missing detail files list:", missing);
}
