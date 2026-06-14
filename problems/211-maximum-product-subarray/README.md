# 211. Maximum Product Subarray

- LeetCode: [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- Pattern: DP 2D / Kadane
- Difficulty: Hard
- Time: O(n*m) or O(n)
- Space: O(n*m) or O(1)
- Python: `code.py` (`maximum_product_subarray`)
- Go: `code.go` (`Solve211`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+152+Maximum+Product+Subarray+solution)

## Problem Statement

Return the maximum product of a non-empty contiguous subarray.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximum-product-subarray/)
- [LeetCode community solutions](https://leetcode.com/problems/maximum-product-subarray/solutions/)
- [Dynamic programming topic](https://leetcode.com/tag/dynamic-programming/)

## Example

- Input: `nums=[2,3,-2,4]`
- Output: `6`
- Why: Subarray [2,3] has product 6.

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
