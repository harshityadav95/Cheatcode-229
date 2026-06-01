# 072. Non-overlapping Intervals

- LeetCode: [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- Pattern: Intervals
- Difficulty: Medium
- Time: O(n log n)
- Space: O(n)
- Python: `code.py` (`non_overlapping_intervals`)
- Go: `code.go` (`Solve072`)

## Problem Statement

Return the minimum number of intervals to remove so the remaining intervals are non-overlapping.

## References

- [LeetCode problem statement](https://leetcode.com/problems/non-overlapping-intervals/)
- [LeetCode community solutions](https://leetcode.com/problems/non-overlapping-intervals/solutions/)
- [Sorting topic](https://leetcode.com/tag/sorting/)

## Example

- Input: `intervals=[[1,2],[2,3],[3,4],[1,3]]`
- Output: `1`
- Why: Remove [1,3].

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

merge overlaps After sorting, only compare the next interval with the active merged range.

### Brute Force Baseline

Compare every interval pair repeatedly. O(n^2).

### Optimized Approach

Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.

### Invariant

All intervals before current have been merged or counted consistently with the chosen end boundary.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).

## Edge Checklist

touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.

## Common Mistakes

- Sorting by wrong key; not merging touching intervals when required.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Distinguish touching endpoints from overlapping endpoints.
- Return removed intervals as well as the merged result.
- Process online insertions into an existing schedule.

## Follow-up Questions

- Can you process intervals online?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
