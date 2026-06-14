# 040. Maximum Level Sum of a Binary Tree

- LeetCode: [1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
- Pattern: Tree BFS
- Difficulty: Medium
- Time: O(n)
- Space: O(w)
- Python: `code.py` (`maximum_level_sum_of_a_binary_tree`)
- Go: `code.go` (`Solve040`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+1161+Maximum+Level+Sum+of+a+Binary+Tree+solution)

## Problem Statement

Return the 1-indexed level of a binary tree with the maximum sum of node values.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
- [LeetCode community solutions](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/)
- [Breadth-first search topic](https://leetcode.com/tag/breadth-first-search/)

## Example

- Input: `root=[1,7,0,7,-8,null,null]`
- Output: `2`
- Why: Level 2 sum is 7, larger than other levels.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

12 Queue holds one frontier level at a time.

### Brute Force Baseline

DFS with depth maps or repeated level searches works but is messier.

### Optimized Approach

Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.

### Invariant

At the start of each outer loop, queue contains exactly one level.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.

## Edge Checklist

nil root; last node per level; zigzag order; integer averages; queue memory at widest level.

## Common Mistakes

- Not separating levels; queueing nil children unnecessarily.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return zigzag/order statistics per level.
- Use right-to-left priority instead of left-to-right.
- Limit search to the nearest target level.

## Follow-up Questions

- Can you stream one level at a time without storing all levels?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
