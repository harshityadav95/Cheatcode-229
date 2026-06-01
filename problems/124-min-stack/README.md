# 124. Min Stack

- LeetCode: 155
- Pattern: Stack
- Difficulty: Medium
- Time: O(n)
- Space: O(n)
- Python: `code.py` (`min_stack`)
- Go: `code.go` (`Solve124`)

## Problem Statement

Design a stack supporting push, pop, top, and getMin, all in O(1) time.

## Example

- Input: `push(-2),push(0),push(-3),getMin,pop,top,getMin`
- Output: `[null,null,null,-3,null,0,-2]`
- Why: Track the running minimum.

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
