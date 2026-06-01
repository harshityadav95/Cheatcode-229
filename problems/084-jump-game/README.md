# 084. Jump Game

- LeetCode: [55. Jump Game](https://leetcode.com/problems/jump-game/)
- Pattern: Math / Greedy
- Difficulty: Medium
- Time: O(n) or O(log n)
- Space: O(1)
- Python: `code.py` (`jump_game`)
- Go: `code.go` (`Solve084`)

## Problem Statement

Given maximum jump lengths at each index, return whether the last index is reachable from index 0.

## References

- [LeetCode problem statement](https://leetcode.com/problems/jump-game/)
- [LeetCode community solutions](https://leetcode.com/problems/jump-game/solutions/)
- [Greedy topic](https://leetcode.com/tag/greedy/)

## Example

- Input: `nums=[2,3,1,1,4]`
- Output: `true`
- Why: Reach index 1, then jump to the end.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.

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
