# 015. Maximum Number of Vowels in a Substring of Given Length

- LeetCode: [1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
- Pattern: Sliding Window
- Difficulty: Medium
- Time: O(n)
- Space: O(k) to O(n)
- Python: `code.py` (`maximum_number_of_vowels_in_a_substring_of_given_length`)
- Go: `code.go` (`Solve015`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+1456+Maximum+Number+of+Vowels+in+a+Substring+of+Given+Length+solution)

## Problem Statement

Return the largest number of vowels in any substring of length k.

## References

- [LeetCode problem statement](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
- [LeetCode community solutions](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/)
- [Sliding window topic](https://leetcode.com/tag/sliding-window/)

## Example

- Input: `s="abciiidef", k=3`
- Output: `3`
- Why: Substring "iii" has three vowels.

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
