# 207. Best Time to Buy and Sell Stock III

- LeetCode: [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- Pattern: DP 2D / Kadane
- Difficulty: Hard
- Time: O(n*m) or O(n)
- Space: O(n*m) or O(1)
- Python: `code.py` (`best_time_to_buy_and_sell_stock_iii`)
- Go: `code.go` (`Solve207`)

## Problem Statement

Maximize stock profit with at most two transactions.

## References

- [LeetCode problem statement](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [LeetCode community solutions](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/)
- [Dynamic programming topic](https://leetcode.com/tag/dynamic-programming/)

## Example

- Input: `prices=[3,3,5,0,0,3,1,4]`
- Output: `6`
- Why: Buy at 0 sell at 3, buy at 1 sell at 4.

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
