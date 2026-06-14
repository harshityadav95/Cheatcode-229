# 140. Symmetric Tree

- LeetCode: [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
- Pattern: Tree DFS
- Difficulty: Medium
- Time: O(n)
- Space: O(h)
- Python: `code.py` (`symmetric_tree`)
- Go: `code.go` (`Solve140`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+101+Symmetric+Tree+solution)

## Problem Statement

Return whether a binary tree is a mirror of itself around its center.

## References

- [LeetCode problem statement](https://leetcode.com/problems/symmetric-tree/)
- [LeetCode community solutions](https://leetcode.com/problems/symmetric-tree/solutions/)
- [Tree topic](https://leetcode.com/tag/tree/)

## Example

- Input: `root=[1,2,2,3,4,4,3]`
- Output: `true`
- Why: Left and right subtrees mirror each other.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

return subtree fact... When dfs returns, that subtree fact is final.

### Brute Force Baseline

For each node, recompute subtree facts from scratch; can become O(n^2).

### Optimized Approach

Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.

### Invariant

When dfs returns from a node, its subtree answer/fact is final.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).

## Edge Checklist

nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.

## Common Mistakes

- Returning answer instead of path contribution; wrong null base case.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return the nodes on the path, not just a count/value.
- Make the tree contain negative values or duplicate values.
- Convert recursive DFS to iterative stack DFS.

## Follow-up Questions

- Can you write iterative DFS? What value does each call return?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
