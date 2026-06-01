# 060. Min Cost Climbing Stairs

- LeetCode: 746
- Pattern: DP 1D
- Difficulty: Medium
- Time: O(n * state)
- Space: O(state)
- Python: `code.py` (`min_cost_climbing_stairs`)
- Go: `code.go` (`Solve060`)

## Problem Statement

Given cost per stair, return the minimum cost to reach just beyond the last stair, starting from step 0 or 1.

## Example

- Input: `cost=[10,15,20]`
- Output: `15`
- Why: Start at step 1, then climb to the top.

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
