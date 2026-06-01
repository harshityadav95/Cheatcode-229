import { readFileSync } from 'node:fs'

const manifest = JSON.parse(readFileSync('solutions/problem_manifest.json', 'utf8'))
const problemsTs = readFileSync('src/data/problems.ts', 'utf8')

const fail = (message) => {
  console.error(message)
  process.exitCode = 1
}

if (manifest.length !== 229) {
  fail(`Expected 229 manifest entries, found ${manifest.length}`)
}

const slugs = new Set(manifest.map((problem) => problem.slug))
const ids = new Set(manifest.map((problem) => problem.id))
const leetcodeIds = new Set(manifest.map((problem) => problem.leetcode))

if (slugs.size !== manifest.length) fail('Problem slugs must be unique')
if (ids.size !== manifest.length) fail('Problem ids must be unique')
if (leetcodeIds.size !== manifest.length) fail('LeetCode ids must be unique')

for (const problem of manifest) {
  const required = ['id', 'leetcode', 'title', 'slug', 'pattern', 'pythonFunction', 'goFunction', 'leetcodeUrl', 'sampleInput', 'sampleOutput']
  for (const field of required) {
    if (!problem[field]) fail(`Problem ${problem.id} is missing ${field}`)
  }
  if (!problem.leetcodeUrl.startsWith('https://leetcode.com/problems/')) {
    fail(`Problem ${problem.id} has invalid LeetCode URL: ${problem.leetcodeUrl}`)
  }
  if (!problemsTs.includes(`"slug": "${problem.slug}"`)) {
    fail(`Problem ${problem.id} is missing from src/data/problems.ts`)
  }
  if (!problemsTs.includes(`"url": "${problem.leetcodeUrl}"`)) {
    fail(`Problem ${problem.id} is missing its LeetCode reference URL from src/data/problems.ts`)
  }
}

const diagramCount = (problemsTs.match(/"diagram":/g) ?? []).length
if (diagramCount !== 229) {
  fail(`Expected 229 diagram specs, found ${diagramCount}`)
}

const leetcodeReferenceCount = (problemsTs.match(/"label": "LeetCode problem statement"/g) ?? []).length
if (leetcodeReferenceCount !== 229) {
  fail(`Expected 229 mandatory LeetCode references, found ${leetcodeReferenceCount}`)
}
