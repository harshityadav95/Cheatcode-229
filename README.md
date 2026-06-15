# CodeLeet

CodeLeet is an open-source DSA practice catalog built with Vite, React, TypeScript, and Tailwind CSS. It ships a curated 229-problem learning path plus imported LeetCode problem data in a compact, LeetCode-style interface.

Live site: [harshityadav.in/Cheatcode-229](https://harshityadav.in/Cheatcode-229/)

## Features

- 229 curated DSA problems with prompts, examples, approach notes, diagrams, checklists, and reference solutions.
- Imported LeetCode catalog with statements, editorials, code snippets, source links, and video search links where available.
- Dense problemset view with filters, grouping, sorting, difficulty badges, tags, and route-based navigation.
- Split problem workspace with sidebar navigation, problem statement, editorial content, code panels, notes, and resources.
- Generated Python and Go solution entry points with validation scripts.
- GitHub Pages deployment workflow for the static site.

## Tech Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- shadcn-style UI primitives
- Python scripts for catalog generation/import
- Go and Python validation for generated solution files

## Getting Started

### Requirements

- Node.js 22 or newer
- pnpm 9
- Python 3.13
- Go 1.25

### Install

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Open the local Vite URL shown in the terminal.

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```text
.
|-- .github/workflows/       # PR validation and GitHub Pages deployment
|-- problems/                # Generated curated problem folders
|-- public/                  # Static assets and imported problem data
|-- scripts/                 # Catalog generation, import, and validation scripts
|-- solutions/               # Central Python and Go solution tests
|-- src/                     # React application source
`-- vite.config.ts           # Vite config, including GitHub Pages base path
```

Each curated problem folder under `problems/<slug>/` includes:

- `problem.json`: generated metadata, prompt, examples, approach notes, and complexity.
- `README.md`: human-readable problem notes.
- `code.py`: standalone Python entry point.
- `code.go`: standalone Go entry point.

## Data Workflows

Regenerate the curated catalog and problem folders:

```bash
pnpm run generate
```

Import or refresh LeetCode-derived data:

```bash
pnpm run import:leetcode
```

Generated files are intentionally committed. After running generation or import scripts, review the diff before opening a pull request.

## Validation

Run the full local validation suite:

```bash
pnpm test
pnpm build
```

Individual checks:

```bash
pnpm run test:content
pnpm run test:problem-files
pnpm run test:python
pnpm run test:go
```

Pull requests run `.github/workflows/validate.yml`, which regenerates generated assets, checks for uncommitted drift, validates generated Python and Go files, runs central solution tests, and builds the site.

## Contributing

Contributions are welcome. Good first contributions include:

- Fixing problem metadata, examples, or explanations.
- Improving accessibility and responsive layout behavior.
- Adding focused tests for generation or validation scripts.
- Tightening imported-data parsing and retry behavior.
- Improving documentation for contributors.

Before opening a pull request:

1. Create a branch from `main`.
2. Keep changes focused and easy to review.
3. Run `pnpm test` and `pnpm build`.
4. Commit generated file changes when they are expected.
5. Describe the user-visible impact in the PR body.

## Deployment

The site is deployed with GitHub Pages from `main` using `.github/workflows/pages.yml`. The Vite base path is configured for the repository URL during GitHub Actions builds.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

Developed by Solvepao Research.
