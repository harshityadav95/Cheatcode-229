# Cheatcode-229

Cheatcode-229 is a Vite React catalog for 229 DSA problems with generated notes, diagrams, and Python/Go solution entry points.

## Problem Layout

Every problem lives under `problems/<slug>/` and includes:

- `problem.json`: generated metadata, prompt, examples, approach notes, and complexity.
- `README.md`: human-readable problem notes.
- `code.py`: standalone Python entry point.
- `code.go`: standalone Go entry point.

Regenerate the catalog and problem folders with:

```bash
pnpm run generate
```

## Validation

Pull requests run `.github/workflows/validate.yml`, which regenerates generated assets, checks for uncommitted drift, validates all 229 problem folders, runs generated Python files, compiles generated Go files, runs the central solution tests, and builds the site.

Local checks:

```bash
pnpm test
pnpm build
```
