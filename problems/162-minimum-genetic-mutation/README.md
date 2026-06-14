# 162. Minimum Genetic Mutation

- LeetCode: [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
- Pattern: Graph
- Difficulty: Medium
- Time: O(V+E)
- Space: O(V+E)
- Python: `code.py` (`minimum_genetic_mutation`)
- Go: `code.go` (`Solve162`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+433+Minimum+Genetic+Mutation+solution)

## Problem Statement

Return the minimum one-character gene mutations from startGene to endGene, with every intermediate gene in bank.

## References

- [LeetCode problem statement](https://leetcode.com/problems/minimum-genetic-mutation/)
- [LeetCode community solutions](https://leetcode.com/problems/minimum-genetic-mutation/solutions/)
- [Graph topic](https://leetcode.com/tag/graph/)

## Example

- Input: `start="AACCGGTT", end="AACCGGTA", bank=["AACCGGTA"]`
- Output: `1`
- Why: One mutation changes the final T to A.

## Clarify Before Coding

- Empty or singleton input?
- Mutate input or build output?
- Duplicate/tie behavior?
- int vs int64 in Go?
- Exact return shape?

## Approach

### Intuition

visited set Build adjacency once; visited prevents cycles and double counting.

### Brute Force Baseline

Try paths without visited/pruning; cycles can explode exponentially.

### Optimized Approach

Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.

### Invariant

A visited node/component has been fully accounted for and will not be counted again.

### Proof Sketch

Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.

## Edge Checklist

disconnected components; directed vs undirected; cycles; self edges; unreachable target.

## Common Mistakes

- Not marking visited before enqueue; confusing directed and undirected edges.
- Updating state before saving the next pointer/index.
- Recording an answer while the window/state is invalid.
- Forgetting nil/empty/base cases.

## Implementation Checkpoints

- Define the exact state before coding.
- Update state in one place.
- Dry run the sample before typing loops.
- Say why discarded candidates cannot later win.

## Follow-up Drills

- Detect cycle vs produce traversal order.
- Handle disconnected components.
- Convert unweighted BFS to weighted shortest path.

## Follow-up Questions

- What happens with disconnected components or cycles?
- What changes if constraints are 10x larger?
- Which line would you unit-test first and why?
