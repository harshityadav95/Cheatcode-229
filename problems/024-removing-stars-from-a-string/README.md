# 024. Removing Stars From a String

- LeetCode: [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/)
- Pattern: Stack
- Difficulty: Medium
- Time: O(n)
- Space: O(n)
- Python: `code.py` (`removing_stars_from_a_string`)
- Go: `code.go` (`Solve024`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+2390+Removing+Stars+From+a+String+solution)

## Problem Statement

Process a string where each star deletes itself and the closest remaining character to its left.

## References

- [LeetCode problem statement](https://leetcode.com/problems/removing-stars-from-a-string/)
- [LeetCode community solutions](https://leetcode.com/problems/removing-stars-from-a-string/solutions/)
- [Stack topic](https://leetcode.com/tag/stack/)

## Example

- Input: `s="leet**cod*e"`
- Output: `"lecoe"`
- Why: Each star removes one previous character.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.

### Brute Force Baseline

Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).

### Optimized Approach

Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.

### Invariant

The stack is exactly the processed prefix after all forced reductions have been applied.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.

## Edge Checklist

empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.

## Common Mistakes

- Popping empty stack; forgetting to flush remaining stack entries.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Also return the position of the unmatched item.
- Handle nested operators or multiple bracket types.
- Convert next-greater logic into previous-greater logic.

## Follow-up Questions

- Can the stack be compressed to store counts or indices only?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
