# 198. Climbing Stairs

- LeetCode: [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- Pattern: DP 1D
- Difficulty: Medium
- Time: O(n * state)
- Space: O(state)
- Python: `code.py` (`climbing_stairs`)
- Go: `code.go` (`Solve198`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+70+Climbing+Stairs+solution)

## Problem Statement

Count distinct ways to climb n stairs taking 1 or 2 steps at a time.

## References

- [LeetCode problem statement](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode community solutions](https://leetcode.com/problems/climbing-stairs/solutions/)
- [Dynamic programming topic](https://leetcode.com/tag/dynamic-programming/)

## Example

- Input: `n=3`
- Output: `3`
- Why: Ways are 1+1+1, 1+2, 2+1.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

transition Before computing a state, all dependencies must already be final.

### Brute Force Baseline

Recursive try-all choices recomputes the same suffix/prefix many times.

### Optimized Approach

Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.

### Invariant

Before computing dp[i], every state it depends on has already been finalized.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.

## Edge Checklist

n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.

## Common Mistakes

- Wrong base cases; overwriting compressed state in the wrong order.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return the chosen items/path, not only the optimum value.
- Compress memory and explain update direction.
- Add modulo or large-number constraints.

## Follow-up Questions

- Can you reconstruct the chosen path, not just the value?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
