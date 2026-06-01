# 089. Candy

- LeetCode: 135
- Pattern: Array / String
- Difficulty: Easy
- Time: O(n)
- Space: O(1) to O(n)
- Python: `code.py` (`candy`)
- Go: `code.go` (`Solve089`)

## Problem Statement

Distribute candies so every child gets at least one and higher-rated children than neighbors get more; minimize total.

## Example

- Input: `ratings=[1,0,2]`
- Output: `5`
- Why: Candies [2,1,2] is minimal.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

finalized prefix Read scans once; write/state marks the part that is already final.

### Brute Force Baseline

Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.

### Optimized Approach

Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.

### Invariant

After processing index i, all positions before write already contain the final kept prefix or answer state.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.

## Edge Checklist

empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.

## Common Mistakes

- Off-by-one on in-place writes; forgetting empty strings/arrays.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Require in-place edits instead of building a new array/string.
- Add Unicode/case-normalization rules before comparing characters.
- Stream inputs so only a small buffer may be kept.

## Follow-up Questions

- Can it be done in-place, streaming, or with Unicode/non-ASCII input?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
