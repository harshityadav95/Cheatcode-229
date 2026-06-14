# 206. Interleaving String

- LeetCode: [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)
- Pattern: DP 2D / Kadane
- Difficulty: Hard
- Time: O(n*m) or O(n)
- Space: O(n*m) or O(1)
- Python: `code.py` (`interleaving_string`)
- Go: `code.go` (`Solve206`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+97+Interleaving+String+solution)

## Problem Statement

Return whether s3 is formed by interleaving s1 and s2 while preserving the order within each string.

## References

- [LeetCode problem statement](https://leetcode.com/problems/interleaving-string/)
- [LeetCode community solutions](https://leetcode.com/problems/interleaving-string/solutions/)
- [Dynamic programming topic](https://leetcode.com/tag/dynamic-programming/)

## Example

- Input: `s1="aabcc", s2="dbbca", s3="aadbbcbcac"`
- Output: `true`
- Why: Characters can be assigned to s1/s2 in order.

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
