# 028. Dota2 Senate

- LeetCode: [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/)
- Pattern: Queue / Simulation
- Difficulty: Medium
- Time: O(n)
- Space: O(n)
- Python: `code.py` (`dota2_senate`)
- Go: `code.go` (`Solve028`)

## Problem Statement

Given a string of R and D senators, simulate bans in order until only one party can act.

## References

- [LeetCode problem statement](https://leetcode.com/problems/dota2-senate/)
- [LeetCode community solutions](https://leetcode.com/problems/dota2-senate/solutions/)
- [Queue topic](https://leetcode.com/tag/queue/)

## Example

- Input: `senate="RDD"`
- Output: `"Dire"`
- Why: Dire senators eventually ban the remaining Radiant senator.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

append next Process events in chronological order; skip stale events when needed.

### Brute Force Baseline

Simulate with repeated full scans of all active entities; too slow when many rounds occur.

### Optimized Approach

Use a queue/deque so each event is processed in the order it becomes eligible. Alternative: Use two queues when entities belong to two groups competing over time.

### Invariant

The queue contains pending events in exact chronological order.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each event is enqueued/dequeued a bounded number of times, usually O(n).

## Edge Checklist

empty queue; stale events; repeated timestamps; stopping condition; modulo/cyclic turns.

## Common Mistakes

- Mixing one round with the next; not updating queue length per layer.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Add timestamps and expire old events.
- Process simultaneous events in stable order.
- Return intermediate states after each round.

## Follow-up Questions

- What if events are timestamped or arrive online?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
