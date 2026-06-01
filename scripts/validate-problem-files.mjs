import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PROBLEMS_DIR = join(ROOT, 'problems')
const manifest = JSON.parse(readFileSync(join(ROOT, 'solutions/problem_manifest.json'), 'utf8'))

const fail = (message) => {
  console.error(message)
  process.exit(1)
}

const preview = (value) => value.toString().trim().slice(0, 2000)

const run = (command, args, label, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...options.env },
    timeout: options.timeout ?? 30_000,
  })

  if (result.error) {
    fail(`${label} failed to start: ${result.error.message}`)
  }

  if (result.status !== 0) {
    const output = [preview(result.stdout), preview(result.stderr)].filter(Boolean).join('\n')
    fail(`${label} failed with exit code ${result.status}${output ? `\n${output}` : ''}`)
  }
}

if (manifest.length !== 229) {
  fail(`Expected 229 manifest entries, found ${manifest.length}`)
}

if (!existsSync(PROBLEMS_DIR)) {
  fail('Missing problems directory')
}

const problemDirs = readdirSync(PROBLEMS_DIR).filter((entry) => {
  const path = join(PROBLEMS_DIR, entry)
  return statSync(path).isDirectory()
})

if (problemDirs.length !== 229) {
  fail(`Expected 229 problem folders, found ${problemDirs.length}`)
}

const expectedSlugs = new Set(manifest.map((problem) => problem.slug))
for (const folder of problemDirs) {
  if (!expectedSlugs.has(folder)) {
    fail(`Unexpected problem folder: ${folder}`)
  }
}

const pythonFiles = []

for (const problem of manifest) {
  const problemDir = join(PROBLEMS_DIR, problem.slug)
  const metadataPath = join(problemDir, 'problem.json')
  const readmePath = join(problemDir, 'README.md')
  const pythonPath = join(problemDir, 'code.py')
  const goPath = join(problemDir, 'code.go')

  for (const path of [metadataPath, readmePath, pythonPath, goPath]) {
    if (!existsSync(path)) {
      fail(`Problem ${problem.id} is missing ${path}`)
    }
  }

  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'))
  for (const field of ['id', 'leetcode', 'title', 'slug', 'pattern', 'pythonFunction', 'goFunction']) {
    if (metadata[field] !== problem[field]) {
      fail(`Problem ${problem.id} metadata mismatch for ${field}`)
    }
  }

  const readme = readFileSync(readmePath, 'utf8')
  if (!readme.includes(problem.title) || !readme.includes('## Problem Statement')) {
    fail(`Problem ${problem.id} README is missing required problem information`)
  }

  const pythonCode = readFileSync(pythonPath, 'utf8')
  if (!pythonCode.includes('def solve(') || !pythonCode.includes(`${problem.pythonFunction} = solve`)) {
    fail(`Problem ${problem.id} code.py does not expose solve and ${problem.pythonFunction}`)
  }
  pythonFiles.push(pythonPath)

  const goCode = readFileSync(goPath, 'utf8')
  if (!goCode.includes('package main') || !goCode.includes(`func ${problem.goFunction}(`)) {
    fail(`Problem ${problem.id} code.go does not expose ${problem.goFunction}`)
  }
}

run('python3', ['-m', 'py_compile', ...pythonFiles], 'Compile all problem code.py files')

for (const problem of manifest) {
  const problemDir = join(PROBLEMS_DIR, problem.slug)
  run('python3', [join(problemDir, 'code.py')], `Run Python problem ${problem.id}`)
}

run('go', ['test', './problems/...'], 'Compile all problem code.go files', {
  env: { GO111MODULE: 'off' },
  timeout: 120_000,
})

console.log('Validated 229 problem folders, runnable Python files, and compilable Go files.')
