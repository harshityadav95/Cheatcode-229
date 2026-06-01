# 023. Equal Row and Column Pairs

- LeetCode: 2352
- Pattern: Hash Map / Set
- Difficulty: Medium
- Time: O(n)
- Space: O(n)
- Python: `code.py` (`equal_row_and_column_pairs`)
- Go: `code.go` (`Solve023`)

## Problem Statement

Count pairs (row i, column j) where the row values exactly equal the column values.

## Example

- Input: `grid=[[3,1,2],[1,7,6],[2,6,7]]`
- Output: `1`
- Why: Row [1,7,6] equals column 1.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

index Store the exact fact future items need: membership, count, index, or signature.

### Brute Force Baseline

Nested scans compare every item with every other item. Usually O(n^2).

### Optimized Approach

Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.

### Invariant

The map contains all and only facts from the processed prefix needed by future elements.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.

## Edge Checklist

duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.

## Common Mistakes

- Counting after checking in the wrong order; ignoring duplicates.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Return all matching groups instead of a boolean/count.
- Support incremental updates while queries arrive.
- Handle case-insensitive or normalized keys.

## Follow-up Questions

- How would memory limits change the approach?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
