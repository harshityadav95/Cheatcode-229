# 087. Insert Delete GetRandom O(1)

- LeetCode: [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
- Pattern: Heap / Priority Queue
- Difficulty: Medium
- Time: O(n log k) or O(n log n)
- Space: O(k) to O(n)
- Python: `code.py` (`insert_delete_getrandom_o_1`)
- Go: `code.go` (`Solve087`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+380+Insert+Delete+GetRandom+O%281%29+solution)

## Problem Statement

Design a set supporting insert, remove, and getRandom in average O(1) time.

## References

- [LeetCode problem statement](https://leetcode.com/problems/insert-delete-getrandom-o1/)
- [LeetCode community solutions](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/)
- [Heap priority queue topic](https://leetcode.com/tag/heap-priority-queue/)

## Example

- Input: `insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()`
- Output: `[true,false,true,1 or 2,true,false,2]`
- Why: The final set contains only 2.

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
