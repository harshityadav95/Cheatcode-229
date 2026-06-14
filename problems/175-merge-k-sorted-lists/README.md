# 175. Merge k Sorted Lists

- LeetCode: [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- Pattern: Heap / Priority Queue
- Difficulty: Medium
- Time: O(n log k) or O(n log n)
- Space: O(k) to O(n)
- Python: `code.py` (`merge_k_sorted_lists`)
- Go: `code.go` (`Solve175`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+23+Merge+k+Sorted+Lists+solution)

## Problem Statement

Merge k sorted linked lists into one sorted linked list.

## References

- [LeetCode problem statement](https://leetcode.com/problems/merge-k-sorted-lists/)
- [LeetCode community solutions](https://leetcode.com/problems/merge-k-sorted-lists/solutions/)
- [Heap priority queue topic](https://leetcode.com/tag/heap-priority-queue/)

## Example

- Input: `lists=[[1,4,5],[1,3,4],[2,6]]`
- Output: `[1,1,2,3,4,4,5,6]`
- Why: Repeatedly take the smallest current node.

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
