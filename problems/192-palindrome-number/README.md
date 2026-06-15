# 192. Palindrome Number

- LeetCode: [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)
- Pattern: Math / Greedy
- Difficulty: Medium
- Time: O(n) or O(log n)
- Space: O(1)
- Python: `code.py` (`palindrome_number`)
- Go: `code.go` (`Solve192`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+9+Palindrome+Number+solution)

## Problem Statement

Return whether an integer reads the same forward and backward without converting if possible.

## References

- [LeetCode problem statement](https://leetcode.com/problems/palindrome-number/)
- [LeetCode community solutions](https://leetcode.com/problems/palindrome-number/solutions/)
- [Greedy topic](https://leetcode.com/tag/greedy/)

## Example

- Input: `x=121`
- Output: `true`
- Why: 121 is symmetric.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

Compare digits from both ends moving inward using left and right pointers.

### Brute Force Baseline

Try all choices recursively or simulate every path. Correct but exponential or quadratic.

### Optimized Approach

Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.

### Invariant

The maintained state is at least as good as any alternative state with the same processed prefix.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).

## Edge Checklist

ties; impossible states; negative values; very large values; integer overflow; proof of local choice.

## Common Mistakes

- Assuming local greedy without proof; integer division edge cases.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Prove the greedy choice with an exchange argument.
- Return the chosen sequence of actions.
- Handle overflow and impossible cases explicitly.

## Follow-up Questions

- What invariant proves the greedy choice is safe?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
