# 051. Maximum Subsequence Score

- LeetCode: [2542. Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)
- Pattern: Heap / Priority Queue
- Difficulty: Medium
- Time: O(n log k) or O(n log n)
- Space: O(k) to O(n)
- Python: `code.py` (`maximum_subsequence_score`)
- Go: `code.go` (`Solve051`)

## Problem Statement

Choose k indices to maximize sum(nums1 chosen) multiplied by the minimum nums2 among the chosen indices.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximum-subsequence-score/)
- [LeetCode community solutions](https://leetcode.com/problems/maximum-subsequence-score/solutions/)
- [Heap priority queue topic](https://leetcode.com/tag/heap-priority-queue/)

## Example

- Input: `nums1=[1,3,3,2], nums2=[2,1,3,4], k=3`
- Output: `12`
- Why: Choose indices giving sum 6 and minimum nums2 2.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

push new Heap top is the next best candidate; discard stale entries after pop.

### Brute Force Baseline

Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.

### Optimized Approach

Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.

### Invariant

The heap contains all eligible candidates not yet chosen, ordered by the needed priority.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).

## Edge Checklist

stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.

## Common Mistakes

- Using min-heap/max-heap sign incorrectly; heap grows beyond k.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return top-k in sorted order after using the heap.
- Handle ties with a secondary key.
- Support streaming insertions and deletions.

## Follow-up Questions

- Can you reduce memory from O(n) to O(k)?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
