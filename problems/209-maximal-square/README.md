# 209. Maximal Square

- LeetCode: [221. Maximal Square](https://leetcode.com/problems/maximal-square/)
- Pattern: DP 2D / Kadane
- Difficulty: Hard
- Time: O(n*m) or O(n)
- Space: O(n*m) or O(1)
- Python: `code.py` (`maximal_square`)
- Go: `code.go` (`Solve209`)

## Problem Statement

In a binary matrix, return the area of the largest square containing only 1s.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximal-square/)
- [LeetCode community solutions](https://leetcode.com/problems/maximal-square/solutions/)
- [Dynamic programming topic](https://leetcode.com/tag/dynamic-programming/)

## Example

- Input: `matrix=[["1","0","1","0"],["1","0","1","1"],["1","1","1","1"]]`
- Output: `4`
- Why: A 2 by 2 square of ones exists.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.

### Brute Force Baseline

Enumerate every substring/path/subproblem and recompute its score.

### Optimized Approach

Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.

### Invariant

Each filled state stores the optimal answer for exactly its subproblem.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).

## Edge Checklist

empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.

## Common Mistakes

- Bad initialization; mixing row/column dependencies.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return the actual subarray/subsequence.
- Reduce 2D memory to rolling rows where safe.
- Handle all-negative values or empty inputs explicitly.

## Follow-up Questions

- Can the DP be space compressed safely?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
