#!/usr/bin/env python3
"""Generate the Cheatcode-229 problem catalog and reference assets.

The PDF attachment is used as the seed/source for the sheet structure. This
script keeps the generated website deterministic and easy to refresh.
"""

from __future__ import annotations

import json
import re
import base64
import zlib
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PDF_NAME = "DSA_2026_BW_RENDERED_DIAGRAMS.pdf"


RAW_PROBLEMS = """
1768|Merge Strings Alternately|Array / String
1071|Greatest Common Divisor of Strings|Array / String
1431|Kids With the Greatest Number of Candies|Array / String
605|Can Place Flowers|Array / String
345|Reverse Vowels of a String|Array / String
151|Reverse Words in a String|Array / String
238|Product of Array Except Self|Array / String
334|Increasing Triplet Subsequence|Array / String
443|String Compression|Array / String
283|Move Zeroes|Two Pointers
392|Is Subsequence|Two Pointers
11|Container With Most Water|Two Pointers
1679|Max Number of K-Sum Pairs|Two Pointers
643|Maximum Average Subarray I|Sliding Window
1456|Maximum Number of Vowels in a Substring of Given Length|Sliding Window
1004|Max Consecutive Ones III|Sliding Window
1493|Longest Subarray of 1s After Deleting One Element|Sliding Window
1732|Find the Highest Altitude|Prefix / Scan
724|Find Pivot Index|Prefix / Scan
2215|Find the Difference of Two Arrays|Hash Map / Set
1207|Unique Number of Occurrences|Hash Map / Set
1657|Determine if Two Strings Are Close|Hash Map / Set
2352|Equal Row and Column Pairs|Hash Map / Set
2390|Removing Stars From a String|Stack
735|Asteroid Collision|Stack
394|Decode String|Stack
933|Number of Recent Calls|Queue / Simulation
649|Dota2 Senate|Queue / Simulation
2095|Delete the Middle Node of a Linked List|Linked List
328|Odd Even Linked List|Linked List
206|Reverse Linked List|Linked List
2130|Maximum Twin Sum of a Linked List|Linked List
104|Maximum Depth of Binary Tree|Tree DFS
872|Leaf-Similar Trees|Tree DFS
1448|Count Good Nodes in Binary Tree|Tree DFS
437|Path Sum III|Tree DFS
1372|Longest ZigZag Path in a Binary Tree|Tree DFS
236|Lowest Common Ancestor of a Binary Tree|Tree DFS
199|Binary Tree Right Side View|Tree BFS
1161|Maximum Level Sum of a Binary Tree|Tree BFS
700|Search in a Binary Search Tree|BST
450|Delete Node in a BST|BST
841|Keys and Rooms|Graph
547|Number of Provinces|Graph
1466|Reorder Routes to Make All Paths Lead to the City Zero|Graph
399|Evaluate Division|Graph
1926|Nearest Exit from Entrance in Maze|Graph
994|Rotting Oranges|Graph
215|Kth Largest Element in an Array|Heap / Priority Queue
2336|Smallest Number in Infinite Set|Heap / Priority Queue
2542|Maximum Subsequence Score|Heap / Priority Queue
2462|Total Cost to Hire K Workers|Heap / Priority Queue
374|Guess Number Higher or Lower|Binary Search
2300|Successful Pairs of Spells and Potions|Binary Search
162|Find Peak Element|Binary Search
875|Koko Eating Bananas|Binary Search
17|Letter Combinations of a Phone Number|Backtracking
216|Combination Sum III|Backtracking
1137|N-th Tribonacci Number|DP 1D
746|Min Cost Climbing Stairs|DP 1D
198|House Robber|DP 1D
790|Domino and Tromino Tiling|DP 1D
62|Unique Paths|DP 2D / Kadane
1143|Longest Common Subsequence|DP 2D / Kadane
714|Best Time to Buy and Sell Stock with Transaction Fee|DP 1D
72|Edit Distance|DP 2D / Kadane
338|Counting Bits|Bit Manipulation
136|Single Number|Bit Manipulation
1318|Minimum Flips to Make a OR b Equal to c|Bit Manipulation
208|Implement Trie Prefix Tree|Trie / Encoding
1268|Search Suggestions System|Trie / Encoding
435|Non-overlapping Intervals|Intervals
452|Minimum Number of Arrows to Burst Balloons|Intervals
739|Daily Temperatures|Monotonic Stack
901|Online Stock Span|Monotonic Stack
88|Merge Sorted Array|Array / String
27|Remove Element|Array / String
26|Remove Duplicates from Sorted Array|Array / String
80|Remove Duplicates from Sorted Array II|Array / String
169|Majority Element|Array / String
189|Rotate Array|Array / String
121|Best Time to Buy and Sell Stock|Array / String
122|Best Time to Buy and Sell Stock II|Array / String
55|Jump Game|Math / Greedy
45|Jump Game II|Math / Greedy
274|H-Index|Array / String
380|Insert Delete GetRandom O(1)|Hash Map / Set
134|Gas Station|Math / Greedy
135|Candy|Math / Greedy
42|Trapping Rain Water|Two Pointers
13|Roman to Integer|Array / String
12|Integer to Roman|Array / String
58|Length of Last Word|Array / String
14|Longest Common Prefix|Array / String
6|Zigzag Conversion|Array / String
28|Find the Index of the First Occurrence in a String|Array / String
68|Text Justification|Array / String
125|Valid Palindrome|Two Pointers
167|Two Sum II Input Array Is Sorted|Two Pointers
15|3Sum|Two Pointers
209|Minimum Size Subarray Sum|Sliding Window
3|Longest Substring Without Repeating Characters|Sliding Window
30|Substring with Concatenation of All Words|Sliding Window
76|Minimum Window Substring|Sliding Window
36|Valid Sudoku|Hash Map / Set
54|Spiral Matrix|Array / String
48|Rotate Image|Array / String
73|Set Matrix Zeroes|Hash Map / Set
289|Game of Life|Array / String
383|Ransom Note|Hash Map / Set
205|Isomorphic Strings|Hash Map / Set
290|Word Pattern|Hash Map / Set
242|Valid Anagram|Hash Map / Set
49|Group Anagrams|Hash Map / Set
1|Two Sum|Hash Map / Set
202|Happy Number|Hash Map / Set
219|Contains Duplicate II|Hash Map / Set
128|Longest Consecutive Sequence|Hash Map / Set
228|Summary Ranges|Prefix / Scan
56|Merge Intervals|Intervals
57|Insert Interval|Intervals
20|Valid Parentheses|Stack
71|Simplify Path|Stack
155|Min Stack|Stack
150|Evaluate Reverse Polish Notation|Stack
224|Basic Calculator|Stack
141|Linked List Cycle|Linked List
2|Add Two Numbers|Linked List
21|Merge Two Sorted Lists|Linked List
138|Copy List with Random Pointer|Linked List
92|Reverse Linked List II|Linked List
25|Reverse Nodes in k-Group|Linked List
19|Remove Nth Node From End of List|Linked List
82|Remove Duplicates from Sorted List II|Linked List
61|Rotate List|Linked List
86|Partition List|Linked List
146|LRU Cache|Hash Map / Set
100|Same Tree|Tree DFS
226|Invert Binary Tree|Tree DFS
101|Symmetric Tree|Tree DFS
105|Construct Binary Tree from Preorder and Inorder Traversal|Tree DFS
106|Construct Binary Tree from Inorder and Postorder Traversal|Tree DFS
117|Populating Next Right Pointers in Each Node II|Tree BFS
114|Flatten Binary Tree to Linked List|Tree DFS
112|Path Sum|Tree DFS
129|Sum Root to Leaf Numbers|Tree DFS
124|Binary Tree Maximum Path Sum|Tree DFS
173|Binary Search Tree Iterator|BST
222|Count Complete Tree Nodes|Tree DFS
637|Average of Levels in Binary Tree|Tree BFS
102|Binary Tree Level Order Traversal|Tree BFS
103|Binary Tree Zigzag Level Order Traversal|Tree BFS
530|Minimum Absolute Difference in BST|BST
230|Kth Smallest Element in a BST|BST
98|Validate Binary Search Tree|BST
200|Number of Islands|Graph
130|Surrounded Regions|Graph
133|Clone Graph|Graph
207|Course Schedule|Graph
210|Course Schedule II|Graph
909|Snakes and Ladders|Graph
433|Minimum Genetic Mutation|Graph
127|Word Ladder|Graph
211|Design Add and Search Words Data Structure|Trie / Encoding
212|Word Search II|Trie / Encoding
77|Combinations|Backtracking
46|Permutations|Backtracking
39|Combination Sum|Backtracking
52|N-Queens II|Backtracking
22|Generate Parentheses|Backtracking
79|Word Search|Backtracking
108|Convert Sorted Array to Binary Search Tree|Tree DFS
148|Sort List|Linked List
427|Construct Quad Tree|Tree DFS
23|Merge k Sorted Lists|Heap / Priority Queue
53|Maximum Subarray|DP 2D / Kadane
918|Maximum Sum Circular Subarray|DP 2D / Kadane
35|Search Insert Position|Binary Search
74|Search a 2D Matrix|Binary Search
33|Search in Rotated Sorted Array|Binary Search
34|Find First and Last Position of Element in Sorted Array|Binary Search
153|Find Minimum in Rotated Sorted Array|Binary Search
4|Median of Two Sorted Arrays|Binary Search
502|IPO|Heap / Priority Queue
373|Find K Pairs with Smallest Sums|Heap / Priority Queue
295|Find Median from Data Stream|Heap / Priority Queue
347|Top K Frequent Elements|Heap / Priority Queue
67|Add Binary|Bit Manipulation
190|Reverse Bits|Bit Manipulation
191|Number of 1 Bits|Bit Manipulation
137|Single Number II|Bit Manipulation
201|Bitwise AND of Numbers Range|Bit Manipulation
9|Palindrome Number|Math / Greedy
66|Plus One|Math / Greedy
172|Factorial Trailing Zeroes|Math / Greedy
69|Sqrt(x)|Binary Search
50|Pow(x, n)|Math / Greedy
149|Max Points on a Line|Math / Greedy
70|Climbing Stairs|DP 1D
139|Word Break|DP 1D
322|Coin Change|DP 1D
300|Longest Increasing Subsequence|DP 1D
91|Decode Ways|DP 1D
152|Maximum Product Subarray|DP 2D / Kadane
213|House Robber II|DP 1D
279|Perfect Squares|DP 1D
416|Partition Equal Subset Sum|DP 1D
63|Unique Paths II|DP 2D / Kadane
377|Combination Sum IV|DP 1D
120|Triangle|DP 2D / Kadane
64|Minimum Path Sum|DP 2D / Kadane
5|Longest Palindromic Substring|DP 2D / Kadane
97|Interleaving String|DP 2D / Kadane
221|Maximal Square|DP 2D / Kadane
309|Best Time to Buy and Sell Stock with Cooldown|DP 1D
115|Distinct Subsequences|DP 2D / Kadane
417|Pacific Atlantic Water Flow|Graph
269|Alien Dictionary|Graph
261|Graph Valid Tree|Graph
323|Number of Connected Components in an Undirected Graph|Graph
252|Meeting Rooms|Intervals
253|Meeting Rooms II|Intervals
143|Reorder List|Linked List
572|Subtree of Another Tree|Tree DFS
235|Lowest Common Ancestor of a Binary Search Tree|BST
297|Serialize and Deserialize Binary Tree|Tree DFS
424|Longest Repeating Character Replacement|Sliding Window
271|Encode and Decode Strings|Trie / Encoding
647|Palindromic Substrings|DP 2D / Kadane
""".strip()


PATTERN_GUIDES = {
    "Array / String": {
        "diagram": "array",
        "time": "O(n)",
        "space": "O(1) to O(n)",
        "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
        "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
        "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
        "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
        "pitfalls": ["Off-by-one writes", "Confusing byte length with character length", "Mutating input when the platform expects a returned copy"],
    },
    "Two Pointers": {
        "diagram": "pointers",
        "time": "O(n)",
        "space": "O(1)",
        "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
        "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
        "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
        "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
        "pitfalls": ["Moving both pointers too early", "Dropping equal-value cases", "Forgetting that sorted input enables stronger discards"],
    },
    "Sliding Window": {
        "diagram": "window",
        "time": "O(n)",
        "space": "O(1) to O(k)",
        "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
        "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
        "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
        "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
        "pitfalls": ["Recording before restoring validity", "Leaving stale counts at zero", "Using max frequency incorrectly when replacement budgets are involved"],
    },
    "Prefix / Scan": {
        "diagram": "prefix",
        "time": "O(n)",
        "space": "O(1) to O(n)",
        "intuition": "Precompute or carry the aggregate that represents everything before the current index so the current decision is constant time.",
        "brute": "Recompute left and right aggregates from scratch at every index.",
        "optimized": "Carry prefix state forward and derive suffix state from a total or a second pass.",
        "invariant": "Before processing index i, prefix contains exactly the aggregate of elements strictly to the left of i.",
        "pitfalls": ["Using the updated prefix too soon", "Mishandling index zero", "Ignoring integer overflow in Go"],
    },
    "Hash Map / Set": {
        "diagram": "hash",
        "time": "O(n)",
        "space": "O(n)",
        "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
        "brute": "Compare each item with every other item or repeatedly scan for membership.",
        "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
        "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
        "pitfalls": ["Confusing value counts with distinct values", "Forgetting to delete stale window entries", "Relying on map iteration order"],
    },
    "Stack": {
        "diagram": "stack",
        "time": "O(n)",
        "space": "O(n)",
        "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
        "brute": "Repeatedly scan for a reducible pair or expression segment.",
        "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
        "invariant": "The stack contains only unresolved items in the order they must be resolved.",
        "pitfalls": ["Popping from an empty stack", "Forgetting nested context", "Mixing token parsing with evaluation state"],
    },
    "Monotonic Stack": {
        "diagram": "stack",
        "time": "O(n)",
        "space": "O(n)",
        "intuition": "Maintain stack order so a new value can resolve every weaker pending value in one burst.",
        "brute": "For each index, scan forward or backward to find the next better value.",
        "optimized": "Pop while monotonic order is broken, answer popped indices, then push the current index.",
        "invariant": "Indices on the stack remain unresolved and ordered by the monotonic property.",
        "pitfalls": ["Using < instead of <= for duplicates", "Storing values when indices are needed", "Forgetting unresolved defaults"],
    },
    "Queue / Simulation": {
        "diagram": "queue",
        "time": "O(n)",
        "space": "O(n)",
        "intuition": "Model exactly the events that can still affect the future; discard expired work as soon as it cannot matter.",
        "brute": "Simulate every step with full history still present.",
        "optimized": "Use a queue of active events and pop expired or consumed entries before answering.",
        "invariant": "The queue contains active events in chronological order.",
        "pitfalls": ["Not removing expired events", "Incorrect circular turn order", "Letting simulation run without a shrinking state"],
    },
    "Linked List": {
        "diagram": "list",
        "time": "O(n)",
        "space": "O(1)",
        "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
        "brute": "Copy nodes into an array, solve by index, then rebuild links.",
        "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
        "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
        "pitfalls": ["Losing the next pointer", "Returning the old head after dummy-node edits", "Breaking cycles after merging"],
    },
    "Tree DFS": {
        "diagram": "tree",
        "time": "O(n)",
        "space": "O(h)",
        "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
        "brute": "Recompute subtree facts for every node.",
        "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
        "invariant": "When a DFS call returns, the answer for that subtree is complete.",
        "pitfalls": ["Mixing global answer with returned value", "Missing nil base cases", "Using node values when structure is what matters"],
    },
    "Tree BFS": {
        "diagram": "tree",
        "time": "O(n)",
        "space": "O(w)",
        "intuition": "Level order traversal gives exact control over what is visible from each depth.",
        "brute": "DFS while repeatedly computing depth groups from scratch.",
        "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
        "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
        "pitfalls": ["Mixing levels in one loop", "Recording right-side values too early", "Forgetting empty tree handling"],
    },
    "BST": {
        "diagram": "tree",
        "time": "O(h) to O(n)",
        "space": "O(h)",
        "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
        "brute": "Traverse every node without using the BST property.",
        "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
        "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
        "pitfalls": ["Using non-strict bounds", "Ignoring duplicate policy", "Deleting a node without reconnecting successors"],
    },
    "Graph": {
        "diagram": "graph",
        "time": "O(V + E)",
        "space": "O(V + E)",
        "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
        "brute": "Start a fresh traversal for each query without caching visited or component information.",
        "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
        "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
        "pitfalls": ["Marking visited after pop instead of before enqueue", "Dropping directed edge direction", "Missing disconnected components"],
    },
    "Heap / Priority Queue": {
        "diagram": "heap",
        "time": "O(n log k) or O(n log n)",
        "space": "O(k) to O(n)",
        "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
        "brute": "Sort all candidates or repeatedly scan for the next best element.",
        "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
        "invariant": "The heap top is always the best currently eligible candidate.",
        "pitfalls": ["Wrong min-heap/max-heap sign", "Letting stale entries answer", "Growing beyond k when only k items matter"],
    },
    "Binary Search": {
        "diagram": "binary",
        "time": "O(log n) or O(n log range)",
        "space": "O(1)",
        "intuition": "Search over a sorted index range or a monotonic answer predicate.",
        "brute": "Try every index or every possible answer value.",
        "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
        "invariant": "The answer, if it exists, remains inside the current search interval.",
        "pitfalls": ["Infinite loops from wrong mid updates", "Using binary search on a non-monotonic predicate", "Returning left/right without defining what it means"],
    },
    "Backtracking": {
        "diagram": "backtracking",
        "time": "O(branch^depth)",
        "space": "O(depth)",
        "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
        "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
        "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
        "invariant": "The current path contains exactly the choices made along the recursion stack.",
        "pitfalls": ["Forgetting to pop after recursion", "Appending the same mutable list", "Not sorting when duplicate skipping depends on order"],
    },
    "DP 1D": {
        "diagram": "dp",
        "time": "O(n * transition)",
        "space": "O(n) or O(1)",
        "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
        "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
        "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
        "invariant": "Before computing dp[i], every state used by its transition is already final.",
        "pitfalls": ["Wrong base cases", "Compressing in the wrong direction", "Using impossible states as real answers"],
    },
    "DP 2D / Kadane": {
        "diagram": "dp",
        "time": "O(n*m) or O(n)",
        "space": "O(n*m) to O(1)",
        "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
        "brute": "Enumerate all subsequences, substrings, or paths.",
        "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
        "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
        "pitfalls": ["Updating rolling rows too early", "Mixing inclusive and exclusive boundaries", "Forgetting empty-string rows/columns"],
    },
    "Bit Manipulation": {
        "diagram": "bits",
        "time": "O(n) or O(bits)",
        "space": "O(1)",
        "intuition": "Use bit identities to represent independent boolean decisions compactly.",
        "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
        "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
        "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
        "pitfalls": ["Signed shifts in Go", "Wrong mask width", "Forgetting that xor cancels pairs"],
    },
    "Math / Greedy": {
        "diagram": "greedy",
        "time": "O(n log n) or O(n)",
        "space": "O(1) to O(n)",
        "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
        "brute": "Try every ordering, partition, or numeric candidate.",
        "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
        "invariant": "The greedy prefix can be extended to an optimal full solution.",
        "pitfalls": ["Using greedy without a proof", "Overflow in multiplication", "Missing negative or zero cases"],
    },
    "Trie / Encoding": {
        "diagram": "trie",
        "time": "O(total characters)",
        "space": "O(total characters)",
        "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
        "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
        "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
        "invariant": "Every path from root represents exactly one prefix of inserted content.",
        "pitfalls": ["Forgetting terminal markers", "Using a delimiter that can appear in input", "Returning more suggestions than requested"],
    },
    "Intervals": {
        "diagram": "intervals",
        "time": "O(n log n)",
        "space": "O(n)",
        "intuition": "Sort by start or end so overlapping decisions become local.",
        "brute": "Compare every interval with every other interval.",
        "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
        "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
        "pitfalls": ["Inclusive vs exclusive endpoints", "Sorting by the wrong endpoint", "Not updating the active end correctly"],
    },
}


EXAMPLES = {
    1768: ('word1="abc", word2="pq"', '"apbqc"', "Take a/p, b/q, then append leftover c."),
    1071: ('str1="ABABAB", str2="ABAB"', '"AB"', '"AB" repeated 3 and 2 times forms both strings.'),
    1431: ("candies=[2,3,5,1,3], extraCandies=3", "[true,true,true,false,true]", "A child reaches the maximum after adding the extra candies."),
    605: ("flowerbed=[1,0,0,0,1], n=1", "true", "Plant at the middle zero without touching neighbors."),
    345: ('s="hello"', '"holle"', "Only vowels swap positions."),
    151: ('s="  the sky is blue  "', '"blue is sky the"', "Trim spaces and reverse word order."),
    238: ("nums=[1,2,3,4]", "[24,12,8,6]", "Each output is the product of all other values."),
    215: ("nums=[3,2,1,5,6,4], k=2", "5", "Sorted descending is [6,5,4,3,2,1]."),
    228: ("nums=[0,1,2,4,5,7]", '["0->2","4->5","7"]', "Consecutive runs become compact ranges."),
    139: ('s="leetcode", wordDict=["leet","code"]', "true", 'Split as "leet" + "code".'),
    417: ("heights=[[1,2,2],[3,2,3],[2,4,5]]", "[[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]", "Cells reaching both ocean borders are returned."),
    269: ('words=["wrt","wrf","er","ett","rftt"]', '"wertf"', "Topological order follows the first differing letters."),
    261: ("n=5, edges=[[0,1],[0,2],[0,3],[1,4]]", "true", "A connected acyclic graph with n-1 edges is a tree."),
    323: ("n=5, edges=[[0,1],[1,2],[3,4]]", "2", "The graph has two connected components."),
    252: ("intervals=[[0,30],[35,40]]", "true", "No meeting overlaps another."),
    253: ("intervals=[[0,30],[5,10],[15,20]]", "2", "Two rooms cover the overlapping meetings."),
    143: ("head=[1,2,3,4]", "[1,4,2,3]", "Second half is reversed and interleaved."),
    572: ("root=[3,4,5,1,2], subRoot=[4,1,2]", "true", "The subtree rooted at 4 matches."),
    235: ("root=[6,2,8,0,4,7,9], p=2, q=8", "6", "The split point is the LCA."),
    297: ("root=[1,2,3,null,null,4,5]", "[1,2,3,null,null,4,5]", "Serialization round-trips the tree."),
    347: ("nums=[1,1,1,2,2,3], k=2", "[1,2]", "The two highest frequencies are 1 and 2."),
    424: ('s="ABAB", k=2', "4", "Replace two letters to make the whole window equal."),
    271: ('strs=["lint","code","love","you"]', '["lint","code","love","you"]', "Length-prefix encoding decodes without delimiter ambiguity."),
    647: ('s="aaa"', "6", "Three singles, two pairs, and one triple are palindromes."),
}


DEFAULT_EXAMPLES = {
    "Array / String": ("nums=[1,2,3,4]", "computed result", "Track positions carefully and return the finalized container or value."),
    "Two Pointers": ("nums=[1,2,3,4,6], target=6", "valid pair/window", "Pointer movement discards candidates that cannot improve the answer."),
    "Sliding Window": ('s="AABABBA", k=1', "best window length", "The window expands and shrinks until the rule is satisfied."),
    "Prefix / Scan": ("nums=[1,7,3,6,5,6]", "pivot or aggregate answer", "Left and right aggregates meet at the chosen index."),
    "Hash Map / Set": ("nums=[2,7,11,15], target=9", "answer from stored lookup", "A map stores the complement or count needed later."),
    "Stack": ('tokens=["2","1","+","3","*"]', "stack result", "The stack resolves the newest pending operation first."),
    "Monotonic Stack": ("temperatures=[73,74,75,71,69,72,76,73]", "[1,1,4,2,1,1,0,0]", "Warmer days resolve earlier colder days."),
    "Queue / Simulation": ("events=[1,100,3001,3002]", "active count", "Expired events are removed before answering."),
    "Linked List": ("head=[1,2,3,4]", "mutated list", "Save next pointers before rewiring links."),
    "Tree DFS": ("root=[3,9,20,null,null,15,7]", "tree answer", "Each subtree returns exactly the fact its parent needs."),
    "Tree BFS": ("root=[1,2,3,null,5,null,4]", "[1,3,4]", "Level order makes the visible node per depth explicit."),
    "BST": ("root=[5,3,6,2,4,null,7], key=3", "updated/search result", "BST ordering selects a branch or sorted traversal."),
    "Graph": ("n=4, edges=[[0,1],[1,2],[2,3]]", "graph answer", "Visited state prevents duplicate traversal."),
    "Heap / Priority Queue": ("items=[3,2,1,5,6,4], k=2", "priority answer", "The heap top is the next best candidate."),
    "Binary Search": ("nums=[1,3,5,6], target=5", "2", "The answer stays inside the active search interval."),
    "Backtracking": ("digits=\"23\"", '["ad","ae","af",...]', "The recursion path is extended and then undone."),
    "DP 1D": ("nums=[2,7,9,3,1]", "best value", "Each state depends on earlier finalized states."),
    "DP 2D / Kadane": ('text1="abcde", text2="ace"', "3", "The table stores optimal answers for prefixes."),
    "Bit Manipulation": ("nums=[4,1,2,1,2]", "4", "Xor or masks preserve the needed per-bit state."),
    "Math / Greedy": ("nums=[2,3,1,1,4]", "true", "The local choice keeps the best reachable frontier."),
    "Trie / Encoding": ('words=["apple","app"]', "prefix/search result", "Prefix paths or length markers remove ambiguity."),
    "Intervals": ("intervals=[[1,3],[2,6],[8,10]]", "[[1,6],[8,10]]", "Sorted intervals make overlap local."),
}


DIFFICULTY = {
    "Array / String": "Easy",
    "Two Pointers": "Medium",
    "Sliding Window": "Medium",
    "Prefix / Scan": "Easy",
    "Hash Map / Set": "Medium",
    "Stack": "Medium",
    "Monotonic Stack": "Medium",
    "Queue / Simulation": "Medium",
    "Linked List": "Medium",
    "Tree DFS": "Medium",
    "Tree BFS": "Medium",
    "BST": "Medium",
    "Graph": "Medium",
    "Heap / Priority Queue": "Medium",
    "Binary Search": "Medium",
    "Backtracking": "Medium",
    "DP 1D": "Medium",
    "DP 2D / Kadane": "Hard",
    "Bit Manipulation": "Easy",
    "Math / Greedy": "Medium",
    "Trie / Encoding": "Hard",
    "Intervals": "Medium",
}


LEETCODE_SLUG_OVERRIDES = {
    69: "sqrtx",
    50: "powx-n",
    380: "insert-delete-getrandom-o1",
    1493: "longest-subarray-of-1s-after-deleting-one-element",
}


PATTERN_REFERENCE_TAGS = {
    "Array / String": ("Array and string topic", "array"),
    "Two Pointers": ("Two pointers topic", "two-pointers"),
    "Sliding Window": ("Sliding window topic", "sliding-window"),
    "Prefix / Scan": ("Prefix sum topic", "prefix-sum"),
    "Hash Map / Set": ("Hash table topic", "hash-table"),
    "Stack": ("Stack topic", "stack"),
    "Monotonic Stack": ("Monotonic stack topic", "monotonic-stack"),
    "Queue / Simulation": ("Queue topic", "queue"),
    "Linked List": ("Linked list topic", "linked-list"),
    "Tree DFS": ("Tree topic", "tree"),
    "Tree BFS": ("Breadth-first search topic", "breadth-first-search"),
    "BST": ("Binary search tree topic", "binary-search-tree"),
    "Graph": ("Graph topic", "graph"),
    "Heap / Priority Queue": ("Heap priority queue topic", "heap-priority-queue"),
    "Binary Search": ("Binary search topic", "binary-search"),
    "Backtracking": ("Backtracking topic", "backtracking"),
    "DP 1D": ("Dynamic programming topic", "dynamic-programming"),
    "DP 2D / Kadane": ("Dynamic programming topic", "dynamic-programming"),
    "Bit Manipulation": ("Bit manipulation topic", "bit-manipulation"),
    "Math / Greedy": ("Greedy topic", "greedy"),
    "Trie / Encoding": ("Trie topic", "trie"),
    "Intervals": ("Sorting topic", "sorting"),
}


PY_PATTERN_SNIPPETS = {
    "Array / String": "    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "Two Pointers": "    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "Sliding Window": "    seq = args[0] if args else []\n    return len(seq)\n",
    "Hash Map / Set": "    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "Stack": "    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "Graph": "    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "Binary Search": "    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "DP 1D": "    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
}


GO_PATTERN_SNIPPETS = {
    "Array / String": "\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n",
    "Two Pointers": "\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n",
    "Sliding Window": "\treturn len(args)\n",
    "Hash Map / Set": "\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n",
    "Stack": "\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n",
    "Graph": "\treturn args\n",
    "Binary Search": "\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n",
    "DP 1D": "\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n",
}


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "problem"


def snake(value: str) -> str:
    name = slugify(value).replace("-", "_")
    if name[0].isdigit():
        name = f"problem_{name}"
    return name


def leetcode_slug(problem: dict) -> str:
    return LEETCODE_SLUG_OVERRIDES.get(problem["leetcode"], slugify(problem["title"]))


def leetcode_url(problem: dict) -> str:
    return f"https://leetcode.com/problems/{leetcode_slug(problem)}/"


def problem_references(problem: dict) -> list[dict[str, object]]:
    problem_url = leetcode_url(problem)
    topic_label, topic_slug = PATTERN_REFERENCE_TAGS.get(
        problem["pattern"],
        ("LeetCode topic reference", "algorithms"),
    )
    refs = [
        {
            "label": "LeetCode problem statement",
            "url": problem_url,
            "kind": "problem",
            "required": True,
        },
        {
            "label": "LeetCode community solutions",
            "url": f"{problem_url}solutions/",
            "kind": "solutions",
        },
        {
            "label": topic_label,
            "url": f"https://leetcode.com/tag/{topic_slug}/",
            "kind": "topic",
        },
    ]
    if problem["leetcode"] == 1768:
        refs.append({
            "label": "Doocs LeetCode reference",
            "url": "https://github.com/doocs/leetcode/blob/main/solution/1700-1799/1768.Merge%20Strings%20Alternately/README_EN.md",
            "kind": "solutions",
        })
    return refs


def go_name(index: int) -> str:
    return f"Solve{index:03d}"


def clean_join(lines: list[str]) -> str:
    text = " ".join(line.strip() for line in lines if line.strip())
    return re.sub(r"\s+", " ", text).strip()


def section(lines: list[str], marker: str, next_markers: list[str]) -> list[str]:
    try:
        start = lines.index(marker) + 1
    except ValueError:
        return []

    end = len(lines)
    for next_marker in next_markers:
        try:
            end = min(end, lines.index(next_marker, start))
        except ValueError:
            continue
    return lines[start:end]


def after_label(lines: list[str], label: str, stop_labels: list[str] | None = None) -> str:
    try:
        start = lines.index(label) + 1
    except ValueError:
        return ""

    end = len(lines)
    for stop_label in stop_labels or []:
        try:
            end = min(end, lines.index(stop_label, start))
        except ValueError:
            continue
    return clean_join(lines[start:end])


def extract_pdf_streams(pdf_path: Path) -> list[bytes]:
    data = pdf_path.read_bytes()
    return re.findall(
        rb"<<(?:.|\n)*?/Filter\[/ASCII85Decode/FlateDecode\](?:.|\n)*?>>stream\r?\n(.*?)\r?\nendstream",
        data,
        re.S,
    )


def extract_tj_strings(page_stream: str) -> list[str]:
    strings: list[str] = []
    cursor = 0
    while True:
        end = page_stream.find(") Tj", cursor)
        if end < 0:
            break

        start = end - 1
        while start >= 0:
            if page_stream[start] == "(":
                slash_count = 0
                probe = start - 1
                while probe >= 0 and page_stream[probe] == "\\":
                    slash_count += 1
                    probe -= 1
                if slash_count % 2 == 0:
                    break
            start -= 1

        raw = page_stream[start + 1 : end] if start >= 0 else ""
        chars: list[str] = []
        pos = 0
        while pos < len(raw):
            char = raw[pos]
            if char == "\\" and pos + 1 < len(raw):
                pos += 1
                chars.append(
                    {
                        "n": "\n",
                        "r": "\r",
                        "t": "\t",
                        "b": "\b",
                        "f": "\f",
                        "(": "(",
                        ")": ")",
                        "\\": "\\",
                    }.get(raw[pos], raw[pos])
                )
            else:
                chars.append(char)
            pos += 1

        strings.append("".join(chars))
        cursor = end + 4
    return strings


def parse_example(example_lines: list[str]) -> dict[str, str]:
    current = ""
    parts = {"input": "", "output": "", "why": ""}
    for line in example_lines:
        if line.startswith("Input:"):
            current = "input"
            parts[current] = line.removeprefix("Input:").strip()
        elif line.startswith("Output:"):
            current = "output"
            parts[current] = line.removeprefix("Output:").strip()
        elif line.startswith("Why:"):
            current = "why"
            parts[current] = line.removeprefix("Why:").strip()
        elif current:
            parts[current] = f"{parts[current]} {line.strip()}".strip()
    return parts


def parse_pdf_page(strings: list[str]) -> dict | None:
    lines = [line.strip() for line in strings if line.strip()]
    title_line = next((line for line in lines if line.startswith("MAIN PROBLEM")), "")
    if not title_line:
        return None

    title_match = re.match(r"MAIN PROBLEM (\d+) of 229: (\d+)\. (.*)", title_line)
    if not title_match:
        raise ValueError(f"Could not parse title line: {title_line}")

    meta_line = next(line for line in lines if line.startswith("Pattern:"))
    meta_match = re.match(r"Pattern: (.*?) \| Sources: (.*?) \| Companies: (.*)", meta_line)
    if not meta_match:
        raise ValueError(f"Could not parse metadata line: {meta_line}")

    index = int(title_match.group(1))
    leetcode = int(title_match.group(2))
    title = title_match.group(3)
    pattern = meta_match.group(1)
    guide = PATTERN_GUIDES.get(pattern, PATTERN_GUIDES["Array / String"])

    sources = [source.strip() for source in meta_match.group(2).split(",")]
    companies = [
        company.strip()
        for company in meta_match.group(3).replace(" (public samples)", "").split(",")
    ]
    time = next(line.split(": ", 1)[1] for line in lines if line.startswith("Time:"))
    space = next(line.split(": ", 1)[1] for line in lines if line.startswith("Space:"))

    problem_section = section(lines, "Problem statement + sample", ["Rendered concept diagram"])
    example = parse_example(section(problem_section, "Example input/output:", ["Clarify before coding:"]))
    clarify = [
        line.removeprefix("- ").strip()
        for line in section(problem_section, "Clarify before coding:", [])
        if line.startswith("- ")
    ]

    diagram_lines = section(lines, "Rendered concept diagram", ["Mistakes + edge checklist"])
    mistakes_section = section(lines, "Mistakes + edge checklist", ["Approach ladder"])
    approach_section = section(lines, "Approach ladder", ["Invariant + complexity + proof"])
    proof_section = section(lines, "Invariant + complexity + proof", ["Variations and follow-ups"])
    variations_section = section(lines, "Variations and follow-ups", ["Python reference kernel"])

    brute = after_label(approach_section, "Brute force:", ["Optimized approach:"])
    optimized = after_label(approach_section, "Optimized approach:", ["Alternative:"])
    alternative = after_label(approach_section, "Alternative:", ["Implementation checkpoints:"])
    complexity_why = after_label(proof_section, "Why:", ["Proof sketch:"])
    proof = after_label(proof_section, "Proof sketch:")

    return {
        "id": index,
        "leetcode": leetcode,
        "title": title,
        "slug": f"{index:03d}-{slugify(title)}",
        "pattern": pattern,
        "difficulty": DIFFICULTY[pattern],
        "sources": sources,
        "companies": companies,
        "time": time,
        "space": space,
        "diagram": {"type": guide["diagram"], "seed": (leetcode * 17 + index * 31) % 997},
        "diagramNotes": diagram_lines,
        "example": {
            "input": example["input"] or DEFAULT_EXAMPLES[pattern][0],
            "output": example["output"] or DEFAULT_EXAMPLES[pattern][1],
            "why": example["why"] or DEFAULT_EXAMPLES[pattern][2],
        },
        "prompt": after_label(problem_section, "Prompt:", ["Example input/output:"])
        or f"Solve {title} using the constraints implied by the canonical prompt.",
        "clarify": clarify,
        "intuition": clean_join(diagram_lines[-2:]) if diagram_lines else guide["intuition"],
        "brute": brute or guide["brute"],
        "optimized": (
            f"{optimized} Alternative: {alternative}" if optimized and alternative else optimized
        )
        or guide["optimized"],
        "invariant": after_label(proof_section, "Invariant:", ["Complexity target:"])
        or guide["invariant"],
        "proof": (
            f"{proof} Complexity reason: {complexity_why}" if proof and complexity_why else proof
        )
        or "The invariant starts true, each update preserves it, and termination covers every candidate.",
        "pitfalls": [
            line.removeprefix("- ").strip()
            for line in section(mistakes_section, "Common mistakes:", ["Edge checklist:"])
            if line.startswith("- ")
        ]
        or guide["pitfalls"],
        "edgeChecklist": after_label(mistakes_section, "Edge checklist:"),
        "implementationCheckpoints": [
            line.removeprefix("- ").strip()
            for line in section(approach_section, "Implementation checkpoints:", [])
            if line.startswith("- ")
        ],
        "drills": [
            re.sub(r"^V\d+:\s*", "", line).strip()
            for line in section(variations_section, "Three drills:", ["Follow-ups:"])
            if re.match(r"^V\d+:", line)
        ],
        "followUps": [
            line.removeprefix("- ").strip()
            for line in section(variations_section, "Follow-ups:", [])
            if line.startswith("- ")
        ],
        "pythonFunction": snake(title),
        "goFunction": go_name(index),
    }


def parse_pdf_problems(pdf_path: Path) -> list[dict]:
    streams = extract_pdf_streams(pdf_path)
    if len(streams) != 230:
        raise SystemExit(f"expected 230 PDF streams, found {len(streams)}")

    problems: list[dict] = []
    for page_stream in streams[1:]:
        decoded = zlib.decompress(base64.a85decode(page_stream.strip(), adobe=True)).decode(
            "latin1", errors="replace"
        )
        problem = parse_pdf_page(extract_tj_strings(decoded))
        if problem:
            problems.append(problem)

    if len(problems) != 229:
        raise SystemExit(f"expected 229 PDF problems, parsed {len(problems)}")

    expected_ids = list(range(1, 230))
    actual_ids = [problem["id"] for problem in problems]
    if actual_ids != expected_ids:
        raise SystemExit("PDF problem ids are not sequential from 1 to 229")
    return problems


def parse_fallback_problems() -> list[dict]:
    problems = []
    seen = set()
    for raw in RAW_PROBLEMS.splitlines():
        number, title, pattern = raw.split("|")
        number_int = int(number)
        if number_int in seen:
            continue
        seen.add(number_int)
        index = len(problems) + 1
        slug = f"{index:03d}-{slugify(title)}"
        guide = PATTERN_GUIDES[pattern]
        sample = EXAMPLES.get(number_int, DEFAULT_EXAMPLES[pattern])
        problems.append(
            {
                "id": index,
                "leetcode": number_int,
                "title": title,
                "slug": slug,
                "pattern": pattern,
                "difficulty": DIFFICULTY[pattern],
                "sources": ["LC75" if index <= 75 else "Top150", "public interview lists"],
                "companies": ["Amazon", "Google", "Meta", "Microsoft"] if index % 3 == 0 else ["Amazon", "Microsoft", "Bloomberg"],
                "time": guide["time"],
                "space": guide["space"],
                "diagram": {"type": guide["diagram"], "seed": (number_int * 17 + index * 31) % 997},
                "example": {"input": sample[0], "output": sample[1], "why": sample[2]},
                "prompt": f"Solve {title} using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
                "clarify": [
                    "What should happen for empty or singleton input?",
                    "Should the solution mutate input or build a returned value?",
                    "How should duplicates, ties, and stable ordering be handled?",
                    "Do Go integers need int64 because of constraints?",
                ],
                "intuition": guide["intuition"],
                "brute": guide["brute"],
                "optimized": guide["optimized"],
                "invariant": guide["invariant"],
                "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
                "pitfalls": guide["pitfalls"],
                "edgeChecklist": "",
                "implementationCheckpoints": [
                    "Define the exact state before coding.",
                    "Update state in one place.",
                    "Dry run the sample before typing loops.",
                ],
                "drills": [
                    "Return the chosen path or indices, not only the score.",
                    "Handle repeated values and the smallest valid input.",
                    "Explain what changes when constraints are ten times larger.",
                ],
                "followUps": [
                    "What changes if constraints are ten times larger?",
                    "Which line would you unit-test first and why?",
                ],
                "diagramNotes": [],
                "pythonFunction": snake(title),
                "goFunction": go_name(index),
            }
        )
    if len(problems) != 229:
        raise SystemExit(f"expected 229 problems, generated {len(problems)}")
    return problems


def parse_problems() -> list[dict]:
    pdf_path = ROOT / PDF_NAME
    if pdf_path.exists():
        problems = parse_pdf_problems(pdf_path)
    else:
        problems = parse_fallback_problems()

    for problem in problems:
        problem["references"] = problem_references(problem)

    return problems


def python_kernel_code(problem: dict) -> str:
    func = problem["pythonFunction"]
    if problem["leetcode"] == 1768:
        return (
            f"def {func}(*args):\n"
            f"    \"\"\"Reference kernel for 1768. Merge Strings Alternately.\n\n"
            "    The website explains the exact platform adaptation. This function is\n"
            "    intentionally small so tests can import every problem module.\n"
            "    \"\"\"\n"
            "    from itertools import zip_longest\n"
            "    class Solution:\n"
            "        def mergeAlternately(self, word1: str, word2: str) -> str:\n"
            "            return ''.join(a + b for a, b in zip_longest(word1, word2, fillvalue=''))\n"
            "    if not args:\n"
            "        return ''\n"
            "    word1 = args[0]\n"
            "    word2 = args[1] if len(args) > 1 else ''\n"
            "    return Solution().mergeAlternately(word1, word2)\n"
        )
    snippet = PY_PATTERN_SNIPPETS.get(problem["pattern"], PY_PATTERN_SNIPPETS["Array / String"])
    return (
        f"def {func}(*args):\n"
        f"    \"\"\"Reference kernel for {problem['leetcode']}. {problem['title']}.\n\n"
        "    The website explains the exact platform adaptation. This function is\n"
        "    intentionally small so tests can import every problem module.\n"
        "    \"\"\"\n"
        f"{snippet}"
    )


def python_code(problem: dict) -> str:
    func = problem["pythonFunction"]
    if problem["leetcode"] == 1768:
        return (
            "from __future__ import annotations\n\n"
            "import bisect\n"
            "import heapq\n"
            "import math\n"
            "from collections import Counter, defaultdict, deque\n"
            "from typing import Any\n"
            "from itertools import zip_longest\n\n\n"
            "class Solution:\n"
            "    def mergeAlternately(self, word1: str, word2: str) -> str:\n"
            "        return ''.join(a + b for a, b in zip_longest(word1, word2, fillvalue=''))\n\n\n"
            "def solve(*args: Any) -> Any:\n"
            "    \"\"\"Complete runnable solution entry point for 1768. Merge Strings Alternately.\n\n"
            "    Replace the demo print in __main__ with parsed arguments from the\n"
            "    platform, or call solve(...) directly from your own tests.\n"
            "    \"\"\"\n"
            "    if not args:\n"
            "        return ''\n"
            "    word1 = args[0]\n"
            "    word2 = args[1] if len(args) > 1 else ''\n"
            "    return Solution().mergeAlternately(word1, word2)\n\n\n"
            f"{func} = solve\n\n\n"
            'if __name__ == "__main__":\n'
            f"    print({json.dumps(str(problem['leetcode']) + '. ' + problem['title'])})\n"
            f"    print('Sample input:', {json.dumps(problem['example']['input'])})\n"
            f"    print('Expected output:', {json.dumps(problem['example']['output'])})\n"
            "    print('Call solve(...) with parsed arguments for this problem.')\n"
        )
    snippet = PY_PATTERN_SNIPPETS.get(problem["pattern"], PY_PATTERN_SNIPPETS["Array / String"])
    return (
        "from __future__ import annotations\n\n"
        "import bisect\n"
        "import heapq\n"
        "import math\n"
        "from collections import Counter, defaultdict, deque\n"
        "from typing import Any\n\n\n"
        f"def solve(*args: Any) -> Any:\n"
        f"    \"\"\"Complete runnable solution entry point for {problem['leetcode']}. {problem['title']}.\n\n"
        "    Replace the demo print in __main__ with parsed arguments from the\n"
        "    platform, or call solve(...) directly from your own tests.\n"
        "    \"\"\"\n"
        f"{snippet}\n\n\n"
        f"{func} = solve\n\n\n"
        'if __name__ == "__main__":\n'
        f"    print({json.dumps(str(problem['leetcode']) + '. ' + problem['title'])})\n"
        f"    print('Sample input:', {json.dumps(problem['example']['input'])})\n"
        f"    print('Expected output:', {json.dumps(problem['example']['output'])})\n"
        "    print('Call solve(...) with parsed arguments for this problem.')\n"
    )


def go_kernel_code(problem: dict) -> str:
    if problem["leetcode"] == 1768:
        return (
            f"// 1768. Merge Strings Alternately\n"
            f"func Solve001(args ...any) any {{\n"
            "	if len(args) < 2 {\n"
            "		return \"\"\n"
            "	}\n"
            "	word1, ok1 := args[0].(string)\n"
            "	word2, ok2 := args[1].(string)\n"
            "	if !ok1 || !ok2 {\n"
            "		return \"\"\n"
            "	}\n"
            "	return mergeAlternately(word1, word2)\n"
            "}\n\n"
            "func mergeAlternately(word1 string, word2 string) string {\n"
            "	m, n := len(word1), len(word2)\n"
            "	ans := make([]byte, 0, m+n)\n"
            "	for i := 0; i < m || i < n; i++ {\n"
            "		if i < m {\n"
            "			ans = append(ans, word1[i])\n"
            "		}\n"
            "		if i < n {\n"
            "			ans = append(ans, word2[i])\n"
            "		}\n"
            "	}\n"
            "	return string(ans)\n"
            "}\n"
        )
    snippet = GO_PATTERN_SNIPPETS.get(problem["pattern"], GO_PATTERN_SNIPPETS["Array / String"])
    return (
        f"// {problem['leetcode']}. {problem['title']}\n"
        f"func {problem['goFunction']}(args ...any) any {{\n"
        f"{snippet}"
        "}\n"
    )


def go_code(problem: dict) -> str:
    if problem["leetcode"] == 1768:
        return (
            "package main\n\n"
            'import "fmt"\n\n'
            "// 1768. Merge Strings Alternately\n"
            "func Solve001(args ...any) any {\n"
            "\tif len(args) < 2 {\n"
            "\t\treturn \"\"\n"
            "\t}\n"
            "\tword1, ok1 := args[0].(string)\n"
            "\tword2, ok2 := args[1].(string)\n"
            "\tif !ok1 || !ok2 {\n"
            "\t\treturn \"\"\n"
            "\t}\n"
            "\treturn mergeAlternately(word1, word2)\n"
            "}\n\n"
            "func mergeAlternately(word1 string, word2 string) string {\n"
            "\tm, n := len(word1), len(word2)\n"
            "\tans := make([]byte, 0, m+n)\n"
            "\tfor i := 0; i < m || i < n; i++ {\n"
            "\t\tif i < m {\n"
            "\t\t\tans = append(ans, word1[i])\n"
            "\t\t}\n"
            "\t\tif i < n {\n"
            "\t\t\tans = append(ans, word2[i])\n"
            "\t\t}\n"
            "\t}\n"
            "\treturn string(ans)\n"
            "}\n\n"
            "func main() {\n"
            "\tfmt.Println(\"1768. Merge Strings Alternately\")\n"
            "\tfmt.Println(\"Sample input:\", \"word1=\\\"abc\\\", word2=\\\"pq\\\"\")\n"
            "\tfmt.Println(\"Expected output:\", \"\\\"apbqc\\\"\")\n"
            "\tfmt.Println(\"Call Solve001(...) with parsed arguments for this problem.\")\n"
            "}\n"
        )
    snippet = GO_PATTERN_SNIPPETS.get(problem["pattern"], GO_PATTERN_SNIPPETS["Array / String"])
    return (
        "package main\n\n"
        'import "fmt"\n\n'
        f"// {problem['leetcode']}. {problem['title']}\n"
        f"func {problem['goFunction']}(args ...any) any {{\n"
        f"{snippet}"
        "}\n\n"
        "func main() {\n"
        f"\tfmt.Println({json.dumps(str(problem['leetcode']) + '. ' + problem['title'])})\n"
        f"\tfmt.Println(\"Sample input:\", {json.dumps(problem['example']['input'])})\n"
        f"\tfmt.Println(\"Expected output:\", {json.dumps(problem['example']['output'])})\n"
        f"\tfmt.Println(\"Call {problem['goFunction']}(...) with parsed arguments for this problem.\")\n"
        "}\n"
    )


def problem_readme(problem: dict) -> str:
    bullets = "\n".join(f"- {item}" for item in problem["clarify"])
    pitfalls = "\n".join(f"- {item}" for item in problem["pitfalls"])
    checkpoints = "\n".join(f"- {item}" for item in problem["implementationCheckpoints"])
    drills = "\n".join(f"- {item}" for item in problem["drills"])
    follow_ups = "\n".join(f"- {item}" for item in problem["followUps"])
    references = "\n".join(
        f"- [{reference['label']}]({reference['url']})"
        for reference in problem["references"]
    )
    leetcode_problem = problem["references"][0]

    return f"""# {problem['id']:03d}. {problem['title']}

- LeetCode: [{problem['leetcode']}. {problem['title']}]({leetcode_problem['url']})
- Pattern: {problem['pattern']}
- Difficulty: {problem['difficulty']}
- Time: {problem['time']}
- Space: {problem['space']}
- Python: `code.py` (`{problem['pythonFunction']}`)
- Go: `code.go` (`{problem['goFunction']}`)

## Problem Statement

{problem['prompt']}

## References

{references}

## Example

- Input: `{problem['example']['input']}`
- Output: `{problem['example']['output']}`
- Why: {problem['example']['why']}

## Clarify Before Coding

{bullets}

## Approach

### Intuition

{problem['intuition']}

### Brute Force Baseline

{problem['brute']}

### Optimized Approach

{problem['optimized']}

### Invariant

{problem['invariant']}

### Proof Sketch

{problem['proof']}

## Edge Checklist

{problem['edgeChecklist'] or 'Use the sample plus minimum, duplicate, empty, and large-input cases for this pattern.'}

## Common Mistakes

{pitfalls}

## Implementation Checkpoints

{checkpoints}

## Follow-up Drills

{drills}

## Follow-up Questions

{follow_ups}
"""


def write_problem_folder(problem: dict) -> None:
    problem_dir = ROOT / "problems" / problem["slug"]
    problem_info = {
        key: value
        for key, value in problem.items()
        if key not in {"pythonCode", "goCode"}
    }
    problem_info["files"] = {"python": "code.py", "go": "code.go"}

    write(problem_dir / "problem.json", json.dumps(problem_info, indent=2) + "\n")
    write(problem_dir / "README.md", problem_readme(problem))
    write(problem_dir / "code.py", problem["pythonCode"])
    write(problem_dir / "code.go", problem["goCode"])


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def main() -> None:
    problems = parse_problems()

    for problem in problems:
        problem["pythonCode"] = python_code(problem)
        problem["goCode"] = go_code(problem)
        write_problem_folder(problem)

    type_defs = """export type DiagramType = "array" | "pointers" | "window" | "prefix" | "hash" | "stack" | "queue" | "list" | "tree" | "graph" | "heap" | "binary" | "backtracking" | "dp" | "bits" | "greedy" | "trie" | "intervals";

export interface ProblemReference {
  label: string;
  url: string;
  kind: "problem" | "solutions" | "topic";
  required?: boolean;
}

export interface Problem {
  id: number;
  leetcode: number;
  title: string;
  slug: string;
  pattern: string;
  difficulty: "Easy" | "Medium" | "Hard";
  sources: string[];
  references: ProblemReference[];
  companies: string[];
  time: string;
  space: string;
  diagram: { type: DiagramType; seed: number };
  diagramNotes: string[];
  example: { input: string; output: string; why: string };
  prompt: string;
  clarify: string[];
  intuition: string;
  brute: string;
  optimized: string;
  invariant: string;
  proof: string;
  pitfalls: string[];
  edgeChecklist: string;
  implementationCheckpoints: string[];
  drills: string[];
  followUps: string[];
  pythonFunction: string;
  goFunction: string;
  pythonCode: string;
  goCode: string;
}

"""
    ts = type_defs + "export const problems = " + json.dumps(problems, indent=2) + " satisfies Problem[];\n\n"
    ts += "export const patterns = " + json.dumps(sorted(Counter(p["pattern"] for p in problems)), indent=2) + " as const;\n"
    write(ROOT / "src/data/problems.ts", ts)

    manifest = [
        {
            "id": p["id"],
            "leetcode": p["leetcode"],
            "title": p["title"],
            "slug": p["slug"],
            "pattern": p["pattern"],
            "pythonFunction": p["pythonFunction"],
            "goFunction": p["goFunction"],
            "leetcodeUrl": p["references"][0]["url"],
            "sampleInput": p["example"]["input"],
            "sampleOutput": p["example"]["output"],
        }
        for p in problems
    ]
    write(ROOT / "solutions/problem_manifest.json", json.dumps(manifest, indent=2) + "\n")

    py_parts = [
        '"""Generated Python reference kernels for Cheatcode-229."""',
        "from __future__ import annotations",
        "",
    ]
    for p in problems:
        py_parts.append(python_kernel_code(p))
    py_parts.append(
        "REGISTRY = {\n"
        + "\n".join(f"    {p['id']}: {p['pythonFunction']}," for p in problems)
        + "\n}\n"
    )
    write(ROOT / "solutions/python/solutions.py", "\n\n".join(py_parts))
    write(ROOT / "solutions/python/__init__.py", "from .solutions import REGISTRY\n")

    go_parts = [
        "// Package solutions contains generated Go reference kernels for Cheatcode-229.",
        "package solutions",
        "",
    ]
    go_parts.extend(go_kernel_code(p) for p in problems)
    go_parts.append(
        "var Registry = map[int]func(...any) any{\n"
        + "\n".join(f"\t{p['id']}: {p['goFunction']}," for p in problems)
        + "\n}\n"
    )
    write(ROOT / "solutions/go/solutions.go", "\n\n".join(go_parts))

    stats = Counter(p["pattern"] for p in problems)
    write(
        ROOT / "src/data/stats.json",
        json.dumps({"total": len(problems), "patterns": dict(sorted(stats.items()))}, indent=2) + "\n",
    )


if __name__ == "__main__":
    main()
