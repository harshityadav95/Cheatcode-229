# 148. Binary Search Tree Iterator

- LeetCode: [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
- Pattern: BST
- Difficulty: Medium
- Time: O(h) to O(n)
- Space: O(h)
- Python: `code.py` (`binary_search_tree_iterator`)
- Go: `code.go` (`Solve148`)

## Problem Statement

Implement a BST iterator with next returning the next smallest value and hasNext reporting availability.

## References

- [LeetCode problem statement](https://leetcode.com/problems/binary-search-tree-iterator/)
- [LeetCode community solutions](https://leetcode.com/problems/binary-search-tree-iterator/solutions/)
- [Binary search tree topic](https://leetcode.com/tag/binary-search-tree/)

## Example

- Input: `BST=[7,3,15,null,null,9,20], calls=next,next,hasNext`
- Output: `[3,7,true]`
- Why: Inorder traversal yields sorted values.

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
