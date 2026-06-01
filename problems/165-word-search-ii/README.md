# 165. Word Search II

- LeetCode: 212
- Pattern: Trie / Encoding
- Difficulty: Hard
- Time: O(total characters)
- Space: O(total characters)
- Python: `code.py` (`word_search_ii`)
- Go: `code.go` (`Solve165`)

## Problem Statement

Find all words from a list that can be formed in a board by adjacent horizontal or vertical cells without reusing a cell.

## Example

- Input: `board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words=["oath","pea","eat","rain"]`
- Output: `["eat","oath"]`
- Why: Both words can be traced in the board.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.

### Brute Force Baseline

Compare every string with every query or split by ambiguous delimiters.

### Optimized Approach

Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.

### Invariant

Every path from root represents exactly one prefix; terminal marks complete words.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).

## Edge Checklist

empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.

## Common Mistakes

- Terminal marker missing; ambiguous delimiter.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Support delete/update operations.
- Return top-k suggestions with lexicographic ties.
- Use length-prefix encoding when delimiter may appear in input.

## Follow-up Questions

- Can the trie support delete or wildcard search?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
