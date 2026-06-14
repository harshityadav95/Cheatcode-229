# 137. LRU Cache

- LeetCode: [146. LRU Cache](https://leetcode.com/problems/lru-cache/)
- Pattern: Linked List
- Difficulty: Medium
- Time: O(n)
- Space: O(1) unless recursion/map
- Python: `code.py` (`lru_cache`)
- Go: `code.go` (`Solve137`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+146+LRU+Cache+solution)

## Problem Statement

Design an LRU cache with get and put in O(1); when capacity is exceeded, evict the least recently used key.

## References

- [LeetCode problem statement](https://leetcode.com/problems/lru-cache/)
- [LeetCode community solutions](https://leetcode.com/problems/lru-cache/solutions/)
- [Linked list topic](https://leetcode.com/tag/linked-list/)

## Example

- Input: `capacity=2; put(1,1),put(2,2),get(1),put(3,3),get(2)`
- Output: `[null,null,1,null,-1]`
- Why: Key 2 is evicted after key 1 is used.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

dummy Always save next before overwriting a pointer; dummy handles head changes.

### Brute Force Baseline

Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.

### Optimized Approach

Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.

### Invariant

The processed prefix is already correctly linked and no unprocessed node is lost.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.

## Edge Checklist

empty head; one node; removing head; cycles; preserving next before overwriting pointers.

## Common Mistakes

- Losing next pointer before rewiring; missing dummy head edge cases.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Do the operation recursively and compare stack use.
- Handle cycle/random pointers in the same structure.
- Perform the change for every k-sized group.

## Follow-up Questions

- Can you solve it with O(1) extra memory and one pass?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
