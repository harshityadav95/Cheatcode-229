# 018. Find the Highest Altitude

- LeetCode: [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)
- Pattern: Prefix / Scan
- Difficulty: Easy
- Time: O(n)
- Space: O(1) to O(n)
- Python: `code.py` (`find_the_highest_altitude`)
- Go: `code.go` (`Solve018`)

## Problem Statement

Starting altitude is 0. Given net gains between points, return the highest altitude reached.

## References

- [LeetCode problem statement](https://leetcode.com/problems/find-the-highest-altitude/)
- [LeetCode community solutions](https://leetcode.com/problems/find-the-highest-altitude/solutions/)
- [Prefix sum topic](https://leetcode.com/tag/prefix-sum/)

## Example

- Input: `gain=[-5,1,5]`
- Output: `1`
- Why: Altitudes are 0,-5,-4,1.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

answer Use aggregates before/after the index; update after using the current item.

### Brute Force Baseline

Recompute every left/right sum or product per index. This repeats work and often becomes O(n^2).

### Optimized Approach

Carry a running prefix/suffix value. Update answer at the exact point where left and right states are both known. Alternative: Two passes are simplest; one pass works when the equation can be rearranged.

### Invariant

Before index i, prefix equals the aggregate of all elements strictly left of i.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each element is added/multiplied a constant number of times, so time is O(n); space is O(1) or O(n) for output arrays.

## Edge Checklist

zeros; negative numbers; overflow in Go int; empty arrays; inclusive/exclusive index boundary.

## Common Mistakes

- Using updated prefix too early; not handling index 0.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Answer many range queries after one preprocessing pass.
- Handle zeros/negative numbers without division.
- Return both value and index where the best prefix occurs.

## Follow-up Questions

- Can you answer many range queries after preprocessing?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
