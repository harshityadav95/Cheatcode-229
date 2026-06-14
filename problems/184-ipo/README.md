# 184. IPO

- LeetCode: [502. IPO](https://leetcode.com/problems/ipo/)
- Pattern: Heap / Priority Queue
- Difficulty: Medium
- Time: O(n log k) or O(n log n)
- Space: O(k) to O(n)
- Python: `code.py` (`ipo`)
- Go: `code.go` (`Solve184`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+502+IPO+solution)

## Problem Statement

With starting capital w, choose at most k projects whose capital requirement is met to maximize final capital.

## References

- [LeetCode problem statement](https://leetcode.com/problems/ipo/)
- [LeetCode community solutions](https://leetcode.com/problems/ipo/solutions/)
- [Heap priority queue topic](https://leetcode.com/tag/heap-priority-queue/)

## Example

- Input: `k=2, w=0, profits=[1,2,3], capital=[0,1,1]`
- Output: `4`
- Why: Do profit 1, then profit 3.

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
