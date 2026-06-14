# 073. Minimum Number of Arrows to Burst Balloons

- LeetCode: [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- Pattern: Intervals
- Difficulty: Medium
- Time: O(n log n)
- Space: O(n)
- Python: `code.py` (`minimum_number_of_arrows_to_burst_balloons`)
- Go: `code.go` (`Solve073`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+452+Minimum+Number+of+Arrows+to+Burst+Balloons+solution)

## Problem Statement

Each balloon is an interval on the x-axis. Return the fewest arrows needed to burst all balloons, where one arrow hits all intervals containing its x.

## References

- [LeetCode problem statement](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- [LeetCode community solutions](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/)
- [Sorting topic](https://leetcode.com/tag/sorting/)

## Example

- Input: `points=[[10,16],[2,8],[1,6],[7,12]]`
- Output: `2`
- Why: One arrow can hit [1,6],[2,8]; another hits [7,12],[10,16].

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
