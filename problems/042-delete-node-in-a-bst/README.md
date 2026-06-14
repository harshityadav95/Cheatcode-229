# 042. Delete Node in a BST

- LeetCode: [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)
- Pattern: BST
- Difficulty: Medium
- Time: O(h) to O(n)
- Space: O(h)
- Python: `code.py` (`delete_node_in_a_bst`)
- Go: `code.go` (`Solve042`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+450+Delete+Node+in+a+BST+solution)

## Problem Statement

Delete a key from a binary search tree and return a valid BST root after deletion.

## References

- [LeetCode problem statement](https://leetcode.com/problems/delete-node-in-a-bst/)
- [LeetCode community solutions](https://leetcode.com/problems/delete-node-in-a-bst/solutions/)
- [Binary search tree topic](https://leetcode.com/tag/binary-search-tree/)

## Example

- Input: `root=[5,3,6,2,4,null,7], key=3`
- Output: `[5,4,6,2,null,null,7]`
- Why: One valid result replaces 3 with its successor 4.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.

### Brute Force Baseline

Traverse the full tree and filter/sort values. Correct but ignores BST ordering.

### Optimized Approach

Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.

### Invariant

Every recursive call receives a valid range or search interval for that subtree.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).

## Edge Checklist

duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.

## Common Mistakes

- Using <= bounds incorrectly; not preserving lower and upper constraints.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Support duplicate values with a clear side policy.
- Convert to an iterative bounded search.
- Return predecessor/successor around a target.

## Follow-up Questions

- Can you solve it with inorder iteration and O(h) memory?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
