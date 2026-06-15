#!/usr/bin/env python3
"""Generate app data from a local doocs/leetcode checkout.

The source checkout is intentionally ignored by git. This script ingests the
English main-site LeetCode problems into public JSON assets that the Vite app
can search and lazy-load.
"""

from __future__ import annotations

import html
import json
import re
import shutil
from pathlib import Path
from urllib.parse import quote_plus


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "leetcode-main" / "solution"
OUTPUT_ROOT = ROOT / "public" / "leetcode-main-data"
DETAILS_ROOT = OUTPUT_ROOT / "details"

LANGUAGE_FILES = {
    "python": ("Python", "python", "Solution.py"),
    "go": ("Go", "go", "Solution.go"),
    "java": ("Java", "java", "Solution.java"),
    "cpp": ("C++", "cpp", "Solution.cpp"),
    "typescript": ("TypeScript", "ts", "Solution.ts"),
    "javascript": ("JavaScript", "javascript", "Solution.js"),
    "rust": ("Rust", "rust", "Solution.rs"),
    "csharp": ("C#", "csharp", "Solution.cs"),
    "c": ("C", "c", "Solution.c"),
    "kotlin": ("Kotlin", "kotlin", "Solution.kt"),
    "swift": ("Swift", "swift", "Solution.swift"),
    "sql": ("SQL", "sql", "Solution.sql"),
}


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_json(path: Path, payload: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"&[a-z]+;", " ", value)
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "problem"


def parse_frontmatter(markdown: str) -> dict[str, object]:
    if not markdown.startswith("---"):
        return {}
    match = re.match(r"---\n(.*?)\n---", markdown, re.S)
    if not match:
        return {}

    fields: dict[str, object] = {}
    current_list: str | None = None
    for raw_line in match.group(1).splitlines():
        line = raw_line.rstrip()
        if not line:
            continue
        if line.startswith("    - ") and current_list:
            fields.setdefault(current_list, []).append(line[6:].strip())
            continue
        current_list = None
        if ":" not in line:
            continue
        key, raw_value = line.split(":", 1)
        value = raw_value.strip()
        if value:
            fields[key] = value
        else:
            fields[key] = []
            current_list = key
    return fields


def between(markdown: str, start: str, end: str) -> str:
    start_index = markdown.find(start)
    if start_index == -1:
        return ""
    start_index += len(start)
    end_index = markdown.find(end, start_index)
    if end_index == -1:
        end_index = len(markdown)
    return markdown[start_index:end_index].strip()


def strip_scripts(html_value: str) -> str:
    html_value = re.sub(r"<script\b[^>]*>.*?</script>", "", html_value, flags=re.I | re.S)
    html_value = re.sub(r"\s+on\w+=(\"[^\"]*\"|'[^']*')", "", html_value, flags=re.I)
    return html_value.strip()


def markdown_to_text(markdown: str) -> str:
    markdown = re.sub(r"```[\s\S]*?```", "", markdown)
    markdown = re.sub(r"<!--.*?-->", "", markdown, flags=re.S)
    markdown = re.sub(r"^#+\s*", "", markdown, flags=re.M)
    markdown = re.sub(r"\*\*(.*?)\*\*", r"\1", markdown)
    markdown = re.sub(r"`([^`]*)`", r"\1", markdown)
    markdown = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", markdown)
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)
    return html.unescape(markdown).strip()


def title_from_readme(markdown: str, fallback_number: int, fallback_title: str) -> tuple[str, str]:
    match = re.search(r"^# \[(?:\d+\.\s*)?([^\]]+)\]\(([^)]+)\)", markdown, flags=re.M)
    if match:
        return html.unescape(match.group(1).strip()), match.group(2).strip()
    return fallback_title, f"https://leetcode.com/problems/{slugify(fallback_title)}"


def parse_problem_dir(readme_path: Path) -> dict[str, object] | None:
    problem_dir = readme_path.parent
    folder_match = re.match(r"^(\d+)\.(.+)$", problem_dir.name)
    if not folder_match:
        return None

    number = int(folder_match.group(1))
    folder_title = folder_match.group(2).strip()
    markdown = read(readme_path)
    frontmatter = parse_frontmatter(markdown)
    title, url = title_from_readme(markdown, number, folder_title)
    difficulty = str(frontmatter.get("difficulty") or "Unknown")
    tags = frontmatter.get("tags") if isinstance(frontmatter.get("tags"), list) else []
    source = str(frontmatter.get("source") or "")
    rating = str(frontmatter.get("rating") or "")
    slug = f"{number:04d}-{slugify(title)}"
    detail_path = f"/leetcode-main-data/details/{number}.json"
    description_html = strip_scripts(between(markdown, "<!-- description:start -->", "<!-- description:end -->"))
    solution_markdown = between(markdown, "## Solutions", "<!-- problem:end -->")
    solution_text = markdown_to_text(solution_markdown.split("<!-- tabs:start -->", 1)[0])

    code: dict[str, dict[str, str]] = {}
    for key, (label, language, filename) in LANGUAGE_FILES.items():
        path = problem_dir / filename
        if path.exists():
            code[key] = {
                "label": label,
                "language": language,
                "code": read(path).strip(),
            }

    video_url = "https://www.youtube.com/results?search_query=" + quote_plus(
        f"LeetCode {number} {title} solution"
    )

    detail = {
        "number": number,
        "title": title,
        "slug": slug,
        "difficulty": difficulty,
        "tags": tags,
        "source": source,
        "rating": rating,
        "url": url,
        "videoUrl": video_url,
        "descriptionHtml": description_html,
        "solutionText": solution_text,
        "solutionMarkdown": solution_markdown,
        "code": code,
        "sourcePath": str(problem_dir.relative_to(ROOT)),
    }
    write_json(DETAILS_ROOT / f"{number}.json", detail)

    return {
        "number": number,
        "title": title,
        "slug": slug,
        "difficulty": difficulty,
        "tags": tags,
        "source": source,
        "rating": rating,
        "url": url,
        "videoUrl": video_url,
        "detailPath": detail_path,
    }


def main() -> None:
    if not SOURCE_ROOT.exists():
        raise SystemExit(f"missing source directory: {SOURCE_ROOT}")

    if OUTPUT_ROOT.exists():
        for _ in range(5):
            try:
                shutil.rmtree(OUTPUT_ROOT)
                break
            except OSError:
                import time
                time.sleep(0.2)
        else:
            shutil.rmtree(OUTPUT_ROOT, ignore_errors=True)
    DETAILS_ROOT.mkdir(parents=True, exist_ok=True)

    problems = []
    for readme_path in sorted(SOURCE_ROOT.glob("*/*/README_EN.md")):
        problem = parse_problem_dir(readme_path)
        if problem:
            problems.append(problem)

    problems.sort(key=lambda problem: (int(problem["number"]), str(problem["title"])))
    write_json(OUTPUT_ROOT / "index.json", {"total": len(problems), "problems": problems})
    print(f"Imported {len(problems)} LeetCode problems into {OUTPUT_ROOT}")


if __name__ == "__main__":
    main()
