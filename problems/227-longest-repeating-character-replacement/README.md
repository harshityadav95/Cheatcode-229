# 227. Longest Repeating Character Replacement

- LeetCode: 424
- Pattern: Sliding Window
- Difficulty: Medium
- Time: O(n)
- Space: O(k) to O(n)
- Python: `code.py` (`longest_repeating_character_replacement`)
- Go: `code.go` (`Solve227`)

## Problem Statement

Return the longest substring length that can be made of one repeated character by replacing at most k characters.

## Example

- Input: `s="AABABBA", k=1`
- Output: `4`
- Why: "AABA" can become all A.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

best length Expand right; while invalid, shrink left; record only a valid window.

### Brute Force Baseline

Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).

### Optimized Approach

Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.

### Invariant

At record time, the window satisfies the prompt condition and is minimal/maximal as required.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.

## Edge Checklist

k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.

## Common Mistakes

- Shrinking only once when a while loop is needed; stale max/count variables.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Switch from at-most-k to exactly-k constraints.
- Return the smallest valid window instead of the largest.
- Support multiple character/value constraints at once.

## Follow-up Questions

- Can you return the actual window, not only its length/count?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
