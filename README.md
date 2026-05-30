# Cheatcode 229

A light-theme, mobile-friendly DSA study site for 229 LeetCode-style problems. The app includes searchable problem navigation, pattern filters, detailed explanations, sample input/output, redrawn concept diagrams, and Python/Go reference kernels.

## Stack

- Vite, React, TypeScript
- Tailwind CSS v4
- shadcn/ui native components
- Python and Go generated reference kernels
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open the printed local URL. The app uses hash routes such as `#/problems/001-merge-strings-alternately`, so it works cleanly on GitHub Pages without a server rewrite.

## Useful Commands

```bash
npm run generate      # regenerate catalog, snippets, manifests, and solution registries
npm run test          # content validation + Python unittest + Go tests
npm run build         # TypeScript and production Vite build
npm run preview       # preview the production build
```

## Repository Layout

- `src/data/problems.ts` - generated source-of-truth problem catalog used by the website.
- `src/App.tsx` - responsive problem browser and detail UI.
- `solutions/python/solutions.py` - generated Python reference kernels.
- `solutions/go/solutions.go` - generated Go reference kernels.
- `solutions/problem_manifest.json` - language/test manifest.
- `scripts/generate_catalog.py` - deterministic generator for content and solution assets.
- `.github/workflows/pages.yml` - test, build, and deploy workflow for GitHub Pages.

## Content Notes

The catalog is based on the DSA 2026 sheet structure: one main problem per entry, with pattern metadata, sample I/O, explanation sections, code, and a reference diagram. Explanations are original educational notes rather than copied platform statements.

The generated Python and Go files provide runnable reference kernels and a stable test harness for every problem. For direct LeetCode submission, adapt the wrapper signature to the exact platform method name and input type.

## Deployment

The workflow builds the site with Vite and publishes `dist` using GitHub Pages actions. The Vite base path is `/Cheatcode-229/` in GitHub Actions and `/` locally.

In the GitHub repository settings, set Pages source to **GitHub Actions**. Push to `main` or run the workflow manually.

## License

MIT
