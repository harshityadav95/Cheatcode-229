# 054. Successful Pairs of Spells and Potions

- LeetCode: [2300. Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)
- Pattern: Binary Search
- Difficulty: Medium
- Time: O(log n) or O(n log R)
- Space: O(1)
- Python: `code.py` (`successful_pairs_of_spells_and_potions`)
- Go: `code.go` (`Solve054`)

## Problem Statement

For each spell, count potions such that spell*potion is at least success.

## References

- [LeetCode problem statement](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)
- [LeetCode community solutions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/)
- [Binary search topic](https://leetcode.com/tag/binary-search/)

## Example

- Input: `spells=[5,1,3], potions=[1,2,3,4,5], success=7`
- Output: `[4,0,3]`
- Why: Sort potions and binary-search the first sufficient potion.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.

### Brute Force Baseline

Scan every possible index/value. Works only when range is small.

### Optimized Approach

Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.

### Invariant

The answer, if it exists, remains inside the current search interval.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.

## Edge Checklist

overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.

## Common Mistakes

- Infinite loop from mid/lo/hi update; predicate not monotonic.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Find first true vs last true boundary.
- Binary-search the answer value instead of an index.
- Handle duplicates and missing target gracefully.

## Follow-up Questions

- What is the exact monotonic predicate?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
