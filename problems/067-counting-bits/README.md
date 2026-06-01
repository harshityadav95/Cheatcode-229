# 067. Counting Bits

- LeetCode: 338
- Pattern: Bit Manipulation
- Difficulty: Easy
- Time: O(n) or O(bits)
- Space: O(1)
- Python: `code.py` (`counting_bits`)
- Go: `code.go` (`Solve067`)

## Problem Statement

For every integer from 0 to n, return the number of 1 bits in its binary representation.

## Example

- Input: `n=5`
- Output: `[0,1,1,2,1,2]`
- Why: Counts for 0,1,2,3,4,5.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

>> Each bit can often be reasoned about independently with masks and XOR.

### Brute Force Baseline

Convert to strings or simulate arithmetic slowly; simpler but less direct.

### Optimized Approach

Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.

### Invariant

Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).

## Edge Checklist

signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.

## Common Mistakes

- Signed shifts and negative numbers; forgetting mask width.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Generalize from one missing/unique value to two.
- Use fixed 32-bit signed behavior.
- Count set bits across a range instead of one value.

## Follow-up Questions

- How do you handle signed 32-bit behavior?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
