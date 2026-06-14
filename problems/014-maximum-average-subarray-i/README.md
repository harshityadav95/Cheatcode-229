# 014. Maximum Average Subarray I

- LeetCode: [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
- Pattern: Sliding Window
- Difficulty: Medium
- Time: O(n)
- Space: O(k) to O(n)
- Python: `code.py` (`maximum_average_subarray_i`)
- Go: `code.go` (`Solve014`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+643+Maximum+Average+Subarray+I+solution)

## Problem Statement

Find the maximum average value among all contiguous subarrays of length k.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximum-average-subarray-i/)
- [LeetCode community solutions](https://leetcode.com/problems/maximum-average-subarray-i/solutions/)
- [Sliding window topic](https://leetcode.com/tag/sliding-window/)

## Example

- Input: `nums=[1,12,-5,-6,50,3], k=4`
- Output: `12.75`
- Why: The best length-4 window is [12,-5,-6,50].

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
