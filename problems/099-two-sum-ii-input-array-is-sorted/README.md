# 099. Two Sum II - Input Array Is Sorted

- LeetCode: 167
- Pattern: Two Pointers
- Difficulty: Medium
- Time: O(n) or O(n log n)
- Space: O(1) to O(n)
- Python: `code.py` (`two_sum_ii_input_array_is_sorted`)
- Go: `code.go` (`Solve099`)

## Problem Statement

In a 1-indexed sorted array, return the two indices whose values sum to target.

## Example

- Input: `numbers=[2,7,11,15], target=9`
- Output: `[1,2]`
- Why: 2+7=9.

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
