# 074. Daily Temperatures

- LeetCode: 739
- Pattern: Monotonic Stack
- Difficulty: Medium
- Time: O(n)
- Space: O(n)
- Python: `code.py` (`daily_temperatures`)
- Go: `code.go` (`Solve074`)

## Problem Statement

For each day, return how many days until a warmer temperature; use 0 when none occurs.

## Example

- Input: `temperatures=[73,74,75,71,69,72,76,73]`
- Output: `[1,1,4,2,1,1,0,0]`
- Why: Next warmer positions determine distances.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

pop while order breaks The stack is the processed prefix after all forced reductions/resolutions.

### Brute Force Baseline

For each index, scan forward/backward to find the next greater/smaller item. O(n^2).

### Optimized Approach

Maintain a stack of unresolved indices in monotonic order; resolve them when a stronger value appears. Alternative: Use decreasing stack for next greater, increasing stack for next smaller, or scan from the opposite side.

### Invariant

Stack indices have not found their answer and their values remain monotonic.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each index enters and leaves the stack once: O(n) time, O(n) space.

## Edge Checklist

equal values; direction of scan; circular arrays; storing values vs indices.

## Common Mistakes

- Using < instead of <=; storing values when indices are needed.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Find previous instead of next warmer/greater item.
- Use circular-array behavior.
- Return spans/counts rather than target index.

## Follow-up Questions

- Do you need next greater value, index, or distance?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
