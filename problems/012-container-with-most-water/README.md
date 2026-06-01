# 012. Container With Most Water

- LeetCode: [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- Pattern: Two Pointers
- Difficulty: Medium
- Time: O(n) or O(n log n)
- Space: O(1) to O(n)
- Python: `code.py` (`container_with_most_water`)
- Go: `code.go` (`Solve012`)

## Problem Statement

Choose two vertical lines so the water container area, width times shorter height, is maximized.

## References

- [LeetCode problem statement](https://leetcode.com/problems/container-with-most-water/)
- [LeetCode community solutions](https://leetcode.com/problems/container-with-most-water/solutions/)
- [Two pointers topic](https://leetcode.com/tag/two-pointers/)

## Example

- Input: `height=[1,7,2,5,4,7,3,6]`
- Output: `36`
- Why: Lines at heights 7 and 6 with width 6 give area 36.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

move only safe side Discarded outer ranges have been proved impossible or dominated.

### Brute Force Baseline

Check all pairs/subarrays. This is clear but O(n^2) or worse.

### Optimized Approach

Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.

### Invariant

All discarded pairs are provably dominated or already evaluated.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.

## Edge Checklist

duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.

## Common Mistakes

- Moving both pointers when only one should move; duplicate skipping before recording answer.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return the actual pair/window, not only the score.
- Handle duplicates and ask for all unique answers.
- Work after sorting while preserving original indices.

## Follow-up Questions

- What changes if input is unsorted or has duplicates?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
