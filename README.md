# Cheatcode 229

Cheatcode 229 is a light-theme, mobile-friendly DSA study site for 229 LeetCode-style problems. It turns the DSA 2026 PDF sheet into a searchable web app with problem statements, sample input/output, thinking notes, edge-case checklists, reference diagrams, and standalone Python plus Go code snippets.

Live site target: `https://harshityadav95.github.io/Cheatcode-229/`

## Why This Exists

Most DSA sheets are either a flat checklist or a large PDF. This repo keeps the sheet easy to browse, search, study, regenerate, test, and deploy as a static open-source site.

The project is intentionally simple to host:

- Static Vite build
- Hash-based routes that work on GitHub Pages
- Generated problem catalog from the root PDF
- Checked-in Python and Go solution registries
- GitHub Actions workflow for tests, build, and Pages deploy

## Features

- 229 problems from the DSA 2026 sheet
- Search by title, LeetCode number, or pattern
- Filters for pattern and difficulty
- Mobile navigation with a sheet drawer
- Problem pages with prompt, sample I/O, approach ladder, invariant, proof sketch, common mistakes, edge cases, and follow-ups
- Reference diagrams rendered in the app with reusable SVG primitives
- Blank per-problem notes boxes saved locally in the browser
- Standalone Python and Go snippets for every problem page
- Generated Python and Go registries for validation and future exact-solution testing
- Content validation, Python tests, Go tests, linting, and production build checks
- GitHub Pages deployment workflow

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui native components
- lucide-react icons
- pnpm for package management
- Python 3 for content generation and solution validation
- Go for generated Go solution validation

## Prerequisites

- Node.js 22 or newer
- pnpm 9
- Python 3
- Go 1.25

## Quick Start

```bash
pnpm install
pnpm dev
```

Open the printed local URL. By default, Vite serves the app at:

```text
http://127.0.0.1:5173/
```

Routes use hashes, for example:

```text
http://127.0.0.1:5173/#/problems/001-merge-strings-alternately
```

## Common Commands

```bash
pnpm generate      # regenerate catalog, solution files, manifests, and stats
pnpm test          # content validation + Python unittest + Go tests
pnpm lint          # ESLint
pnpm build         # TypeScript check and production Vite build
pnpm preview       # preview the production build
```

## Repository Layout

```text
.
├── DSA_2026_BW_RENDERED_DIAGRAMS.pdf   # source PDF parsed by the generator
├── src/
│   ├── App.tsx                         # main responsive app UI
│   ├── components/ui/                  # shadcn/ui components
│   ├── data/problems.ts                # generated problem catalog
│   └── data/stats.json                 # generated stats
├── scripts/
│   ├── generate_catalog.py             # PDF parser and asset generator
│   └── validate-content.mjs            # content integrity checks
├── solutions/
│   ├── problem_manifest.json           # generated solution manifest
│   ├── python/                         # generated Python kernels and tests
│   └── go/                             # generated Go kernels and tests
├── .github/workflows/pages.yml         # GitHub Pages CI/CD
├── components.json                     # shadcn configuration
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## How Content Generation Works

The generator reads `DSA_2026_BW_RENDERED_DIAGRAMS.pdf` from the repository root when the file exists. It decodes the PDF text streams and extracts:

- exact problem order from 1 to 229
- LeetCode id and title
- pattern, sources, companies, time, and space
- prompt and sample input/output
- approach notes, invariant, proof sketch, edge cases, mistakes, drills, and follow-ups

Then it writes:

- `src/data/problems.ts`
- `src/data/stats.json`
- `solutions/problem_manifest.json`
- `solutions/python/solutions.py`
- `solutions/go/solutions.go`

Generated files should usually be changed by editing `scripts/generate_catalog.py` or the source PDF, then running:

```bash
pnpm generate
```

## Contributing

Contributions are welcome. Good areas to work on:

- improve exact Python or Go solutions for individual problems
- add stronger sample and edge-case tests
- improve diagrams for specific patterns
- refine explanations where the generated text is too generic
- improve mobile layout and accessibility
- add search, bookmarking, progress tracking, or export features
- reduce bundle size with route or data splitting

Before opening a pull request, run:

```bash
pnpm generate
pnpm test
pnpm lint
pnpm build
```

### Contribution Rules

- Do not edit generated files by hand unless the change is only to inspect/debug and will be regenerated before commit.
- Keep generated content deterministic. Running `pnpm generate` twice should not create different output.
- Keep UI changes consistent with the existing light, practical study-tool design.
- Use shadcn/ui components already present in `src/components/ui` where possible.
- Keep diagrams readable on mobile.
- Include tests when changing generator logic or solution behavior.
- Avoid copying proprietary platform statements verbatim. Use original or paraphrased educational wording.

### Pull Request Checklist

- The change has a clear scope.
- `pnpm test` passes.
- `pnpm lint` passes.
- `pnpm build` passes.
- `pnpm-lock.yaml` is updated when dependencies change.
- Generated files are up to date if the generator or PDF-backed content changed.
- The README or comments are updated when contributor-facing behavior changes.

## Working On Solutions

The checked-in Python and Go files are generated reference kernels used by the site and test harness. They are useful for browsing and validation, but some kernels may still need adaptation for direct LeetCode submission signatures.

When improving a solution:

1. Update the generation logic or solution template.
2. Regenerate files with `pnpm generate`.
3. Add or adjust tests in `solutions/python/test_solutions.py` or `solutions/go/solutions_test.go`.
4. Run the full checks.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

To deploy:

1. In the GitHub repository settings, set Pages source to **GitHub Actions**.
2. Push to `main`, or run the workflow manually.
3. The workflow installs dependencies, runs validation, builds the Vite site, uploads `dist`, and deploys to GitHub Pages.

The Vite base path is configured as:

- `/Cheatcode-229/` in GitHub Actions
- `/` for local development

## Roadmap

- Add per-problem runnable sample tests.
- Replace generic kernels with exact accepted solutions problem by problem.
- Add saved progress in local storage.
- Add a compact revision mode.
- Add diagram variants for more problem-specific visualizations.
- Add export options for Markdown or PDF study notes.

## License

This project is released under the MIT License. See `LICENSE`.
