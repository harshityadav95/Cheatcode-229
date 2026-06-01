# 169. N-Queens II

- LeetCode: 52
- Pattern: Backtracking
- Difficulty: Medium
- Time: O(branch^depth)
- Space: O(depth + output)
- Python: `code.py` (`n_queens_ii`)
- Go: `code.go` (`Solve169`)

## Problem Statement

Return the number of ways to place n queens on an n by n board so no two attack.

## Example

- Input: `n=4`
- Output: `2`
- Why: There are two valid 4-queen boards.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

choose -> recurse -... Path is always a valid prefix; copy it only when complete.

### Brute Force Baseline

Generate all raw permutations/subsets and filter after completion; wastes branches.

### Optimized Approach

Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.

### Invariant

The path is always a valid prefix that can still be extended to a solution.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.

## Edge Checklist

duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.

## Common Mistakes

- Not undoing choice; duplicate outputs from unsorted inputs.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return count only instead of all paths.
- Skip duplicate candidates after sorting.
- Add a max-length or lexicographic-order constraint.

## Follow-up Questions

- How do you prune or avoid duplicates?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
