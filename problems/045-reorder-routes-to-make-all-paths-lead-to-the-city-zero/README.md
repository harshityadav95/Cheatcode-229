# 045. Reorder Routes to Make All Paths Lead to the City Zero

- LeetCode: [1466. Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
- Pattern: Graph
- Difficulty: Medium
- Time: O(V+E)
- Space: O(V+E)
- Python: `code.py` (`reorder_routes_to_make_all_paths_lead_to_the_city_zero`)
- Go: `code.go` (`Solve045`)
- Video: [YouTube search](https://www.youtube.com/results?search_query=LeetCode+1466+Reorder+Routes+to+Make+All+Paths+Lead+to+the+City+Zero+solution)

## Problem Statement

Directed roads form a tree. Count the minimum roads to reverse so every city can reach city 0.

## References

- [LeetCode problem statement](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
- [LeetCode community solutions](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/)
- [Graph topic](https://leetcode.com/tag/graph/)

## Example

- Input: `n=3, connections=[[1,0],[1,2]]`
- Output: `1`
- Why: Reverse road 1->2 so city 2 can reach 0.

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
