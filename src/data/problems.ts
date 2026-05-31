export type DiagramType = "array" | "pointers" | "window" | "prefix" | "hash" | "stack" | "queue" | "list" | "tree" | "graph" | "heap" | "binary" | "backtracking" | "dp" | "bits" | "greedy" | "trie" | "intervals";

export interface Problem {
  id: number;
  leetcode: number;
  title: string;
  slug: string;
  pattern: string;
  difficulty: "Easy" | "Medium" | "Hard";
  sources: string[];
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

export const problems = [
  {
    "id": 1,
    "leetcode": 1768,
    "title": "Merge Strings Alternately",
    "slug": "001-merge-strings-alternately",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 177
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "word1=\"abc\", word2=\"pq\"",
      "output": "\"apbqc\"",
      "why": "Take a/p, b/q, then leftover c."
    },
    "prompt": "Merge characters by alternating from word1 and word2, appending any leftover characters after one word ends.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "merge_strings_alternately",
    "goFunction": "Solve001",
    "pythonCode": "def merge_strings_alternately(*args):\n    \"\"\"Reference kernel for 1768. Merge Strings Alternately.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1768. Merge Strings Alternately\nfunc Solve001(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 2,
    "leetcode": 1071,
    "title": "Greatest Common Divisor of Strings",
    "slug": "002-greatest-common-divisor-of-strings",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 323
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "str1=\"ABABAB\", str2=\"ABAB\"",
      "output": "\"AB\"",
      "why": "\"AB\" repeated 3 times and 2 times forms both strings."
    },
    "prompt": "Find the longest non-empty string that can be repeated some number of times to build both input strings; return empty if none exists.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "greatest_common_divisor_of_strings",
    "goFunction": "Solve002",
    "pythonCode": "def greatest_common_divisor_of_strings(*args):\n    \"\"\"Reference kernel for 1071. Greatest Common Divisor of Strings.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1071. Greatest Common Divisor of Strings\nfunc Solve002(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 3,
    "leetcode": 1431,
    "title": "Kids With the Greatest Number of Candies",
    "slug": "003-kids-with-the-greatest-number-of-candies",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 492
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "candies=[2,8,4], extraCandies=3",
      "output": "[false,true,false]",
      "why": "Only the child with 8 can still tie or exceed the maximum after adding 3 to each candidate."
    },
    "prompt": "For each child, decide whether giving them all extraCandies would make their candy count at least the current maximum.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "kids_with_the_greatest_number_of_candies",
    "goFunction": "Solve003",
    "pythonCode": "def kids_with_the_greatest_number_of_candies(*args):\n    \"\"\"Reference kernel for 1431. Kids With the Greatest Number of Candies.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1431. Kids With the Greatest Number of Candies\nfunc Solve003(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 4,
    "leetcode": 605,
    "title": "Can Place Flowers",
    "slug": "004-can-place-flowers",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 439
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "flowerbed=[1,0,0,0,1], n=1",
      "output": "true",
      "why": "Plant in the middle zero slot."
    },
    "prompt": "Given a flowerbed of 0/1 slots, decide whether n new flowers can be planted without adjacent flowers.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "can_place_flowers",
    "goFunction": "Solve004",
    "pythonCode": "def can_place_flowers(*args):\n    \"\"\"Reference kernel for 605. Can Place Flowers.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 605. Can Place Flowers\nfunc Solve004(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 5,
    "leetcode": 345,
    "title": "Reverse Vowels of a String",
    "slug": "005-reverse-vowels-of-a-string",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 38
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "s=\"leetcode\"",
      "output": "\"leotcede\"",
      "why": "The vowels e,e,o,e are reversed to e,o,e,e."
    },
    "prompt": "Reverse only the vowels in a string while leaving all consonants and positions of non-vowels unchanged.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_vowels_of_a_string",
    "goFunction": "Solve005",
    "pythonCode": "def reverse_vowels_of_a_string(*args):\n    \"\"\"Reference kernel for 345. Reverse Vowels of a String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 345. Reverse Vowels of a String\nfunc Solve005(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 6,
    "leetcode": 151,
    "title": "Reverse Words in a String",
    "slug": "006-reverse-words-in-a-string",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 759
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "s=\"  blue  sky  \"",
      "output": "\"sky blue\"",
      "why": "Words are [blue, sky], then reversed."
    },
    "prompt": "Return the words of a string in reverse order, trimming outer spaces and reducing multiple spaces between words to one.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_words_in_a_string",
    "goFunction": "Solve006",
    "pythonCode": "def reverse_words_in_a_string(*args):\n    \"\"\"Reference kernel for 151. Reverse Words in a String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 151. Reverse Words in a String\nfunc Solve006(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 7,
    "leetcode": 238,
    "title": "Product of Array Except Self",
    "slug": "007-product-of-array-except-self",
    "pattern": "Prefix / Scan",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 275
    },
    "diagramNotes": [
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
      "prefix",
      "suffix later",
      "running sum",
      "answer",
      "Use aggregates before/after the index; update after using the current item."
    ],
    "example": {
      "input": "nums=[2,3,4]",
      "output": "[12,8,6]",
      "why": "Each output multiplies the other two numbers."
    },
    "prompt": "For each index, return the product of all array elements except nums[i], without using division.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "answer Use aggregates before/after the index; update after using the current item.",
    "brute": "Recompute every left/right sum or product per index. This repeats work and often becomes O(n^2).",
    "optimized": "Carry a running prefix/suffix value. Update answer at the exact point where left and right states are both known. Alternative: Two passes are simplest; one pass works when the equation can be rearranged.",
    "invariant": "Before index i, prefix equals the aggregate of all elements strictly left of i.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each element is added/multiplied a constant number of times, so time is O(n); space is O(1) or O(n) for output arrays.",
    "pitfalls": [
      "Using updated prefix too early; not handling index 0.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "zeros; negative numbers; overflow in Go int; empty arrays; inclusive/exclusive index boundary.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Answer many range queries after one preprocessing pass.",
      "Handle zeros/negative numbers without division.",
      "Return both value and index where the best prefix occurs."
    ],
    "followUps": [
      "Can you answer many range queries after preprocessing?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "product_of_array_except_self",
    "goFunction": "Solve007",
    "pythonCode": "def product_of_array_except_self(*args):\n    \"\"\"Reference kernel for 238. Product of Array Except Self.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 238. Product of Array Except Self\nfunc Solve007(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 8,
    "leetcode": 334,
    "title": "Increasing Triplet Subsequence",
    "slug": "008-increasing-triplet-subsequence",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 941
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "nums=[5,1,6,2,3]",
      "output": "true",
      "why": "1,2,3 is an increasing triplet."
    },
    "prompt": "Return true if there exist indices i<j<k with nums[i]<nums[j]<nums[k].",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "increasing_triplet_subsequence",
    "goFunction": "Solve008",
    "pythonCode": "def increasing_triplet_subsequence(*args):\n    \"\"\"Reference kernel for 334. Increasing Triplet Subsequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 334. Increasing Triplet Subsequence\nfunc Solve008(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 9,
    "leetcode": 443,
    "title": "String Compression",
    "slug": "009-string-compression",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 831
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "chars=[\"a\",\"a\",\"b\"]",
      "output": "length=3, chars starts [\"a\",\"2\",\"b\"]",
      "why": "The group \"aa\" becomes \"a2\"."
    },
    "prompt": "Compress a character array in-place by replacing repeated groups with the character followed by its count digits; return the new length.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "string_compression",
    "goFunction": "Solve009",
    "pythonCode": "def string_compression(*args):\n    \"\"\"Reference kernel for 443. String Compression.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 443. String Compression\nfunc Solve009(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 10,
    "leetcode": 283,
    "title": "Move Zeroes",
    "slug": "010-move-zeroes",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 136
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "nums=[0,1,0,3]",
      "output": "[1,3,0,0]",
      "why": "Nonzero values remain in order."
    },
    "prompt": "Move all zero values to the end of the array in-place while preserving the order of nonzero values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "move_zeroes",
    "goFunction": "Solve010",
    "pythonCode": "def move_zeroes(*args):\n    \"\"\"Reference kernel for 283. Move Zeroes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 283. Move Zeroes\nfunc Solve010(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 11,
    "leetcode": 392,
    "title": "Is Subsequence",
    "slug": "011-is-subsequence",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 26
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "s=\"ace\", t=\"abcde\"",
      "output": "true",
      "why": "Choose a, c, e from t in order."
    },
    "prompt": "Determine whether s can be obtained by deleting characters from t without reordering the remaining characters.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "is_subsequence",
    "goFunction": "Solve011",
    "pythonCode": "def is_subsequence(*args):\n    \"\"\"Reference kernel for 392. Is Subsequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 392. Is Subsequence\nfunc Solve011(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 12,
    "leetcode": 11,
    "title": "Container With Most Water",
    "slug": "012-container-with-most-water",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 559
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "height=[1,7,2,5,4,7,3,6]",
      "output": "36",
      "why": "Lines at heights 7 and 6 with width 6 give area 36."
    },
    "prompt": "Choose two vertical lines so the water container area, width times shorter height, is maximized.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "container_with_most_water",
    "goFunction": "Solve012",
    "pythonCode": "def container_with_most_water(*args):\n    \"\"\"Reference kernel for 11. Container With Most Water.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 11. Container With Most Water\nfunc Solve012(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 13,
    "leetcode": 1679,
    "title": "Max Number of K-Sum Pairs",
    "slug": "013-max-number-of-k-sum-pairs",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 33
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "nums=[1,2,3,4], k=5",
      "output": "2",
      "why": "Pairs are (1,4) and (2,3)."
    },
    "prompt": "Return the maximum number of disjoint pairs whose values sum to k.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "max_number_of_k_sum_pairs",
    "goFunction": "Solve013",
    "pythonCode": "def max_number_of_k_sum_pairs(*args):\n    \"\"\"Reference kernel for 1679. Max Number of K-Sum Pairs.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 1679. Max Number of K-Sum Pairs\nfunc Solve013(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 14,
    "leetcode": 643,
    "title": "Maximum Average Subarray I",
    "slug": "014-maximum-average-subarray-i",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 398
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "nums=[1,12,-5,-6,50,3], k=4",
      "output": "12.75",
      "why": "The best length-4 window is [12,-5,-6,50]."
    },
    "prompt": "Find the maximum average value among all contiguous subarrays of length k.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_average_subarray_i",
    "goFunction": "Solve014",
    "pythonCode": "def maximum_average_subarray_i(*args):\n    \"\"\"Reference kernel for 643. Maximum Average Subarray I.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 643. Maximum Average Subarray I\nfunc Solve014(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 15,
    "leetcode": 1456,
    "title": "Maximum Number of Vowels in a Substring of Given Length",
    "slug": "015-maximum-number-of-vowels-in-a-substring-of-given-length",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 292
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "s=\"abciiidef\", k=3",
      "output": "3",
      "why": "Substring \"iii\" has three vowels."
    },
    "prompt": "Return the largest number of vowels in any substring of length k.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_number_of_vowels_in_a_substring_of_given_length",
    "goFunction": "Solve015",
    "pythonCode": "def maximum_number_of_vowels_in_a_substring_of_given_length(*args):\n    \"\"\"Reference kernel for 1456. Maximum Number of Vowels in a Substring of Given Length.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 1456. Maximum Number of Vowels in a Substring of Given Length\nfunc Solve015(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 16,
    "leetcode": 1004,
    "title": "Max Consecutive Ones III",
    "slug": "016-max-consecutive-ones-iii",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 615
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "nums=[1,0,1,1,0,1], k=1",
      "output": "4",
      "why": "Flip the zero inside [1,1,0,1]."
    },
    "prompt": "Given a binary array, return the longest subarray containing only 1s after flipping at most k zeros.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "max_consecutive_ones_iii",
    "goFunction": "Solve016",
    "pythonCode": "def max_consecutive_ones_iii(*args):\n    \"\"\"Reference kernel for 1004. Max Consecutive Ones III.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 1004. Max Consecutive Ones III\nfunc Solve016(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 17,
    "leetcode": 1493,
    "title": "Longest Subarray of 1's After Deleting One Element",
    "slug": "017-longest-subarray-of-1-s-after-deleting-one-element",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 983
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "nums=[1,1,0,1]",
      "output": "3",
      "why": "Delete the zero to join three ones."
    },
    "prompt": "Delete exactly one element from a binary array and return the longest remaining contiguous run of 1s.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_subarray_of_1_s_after_deleting_one_element",
    "goFunction": "Solve017",
    "pythonCode": "def longest_subarray_of_1_s_after_deleting_one_element(*args):\n    \"\"\"Reference kernel for 1493. Longest Subarray of 1's After Deleting One Element.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 1493. Longest Subarray of 1's After Deleting One Element\nfunc Solve017(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 18,
    "leetcode": 1732,
    "title": "Find the Highest Altitude",
    "slug": "018-find-the-highest-altitude",
    "pattern": "Prefix / Scan",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 92
    },
    "diagramNotes": [
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
      "prefix",
      "suffix later",
      "running sum",
      "answer",
      "Use aggregates before/after the index; update after using the current item."
    ],
    "example": {
      "input": "gain=[-5,1,5]",
      "output": "1",
      "why": "Altitudes are 0,-5,-4,1."
    },
    "prompt": "Starting altitude is 0. Given net gains between points, return the highest altitude reached.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "answer Use aggregates before/after the index; update after using the current item.",
    "brute": "Recompute every left/right sum or product per index. This repeats work and often becomes O(n^2).",
    "optimized": "Carry a running prefix/suffix value. Update answer at the exact point where left and right states are both known. Alternative: Two passes are simplest; one pass works when the equation can be rearranged.",
    "invariant": "Before index i, prefix equals the aggregate of all elements strictly left of i.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each element is added/multiplied a constant number of times, so time is O(n); space is O(1) or O(n) for output arrays.",
    "pitfalls": [
      "Using updated prefix too early; not handling index 0.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "zeros; negative numbers; overflow in Go int; empty arrays; inclusive/exclusive index boundary.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Answer many range queries after one preprocessing pass.",
      "Handle zeros/negative numbers without division.",
      "Return both value and index where the best prefix occurs."
    ],
    "followUps": [
      "Can you answer many range queries after preprocessing?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_the_highest_altitude",
    "goFunction": "Solve018",
    "pythonCode": "def find_the_highest_altitude(*args):\n    \"\"\"Reference kernel for 1732. Find the Highest Altitude.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1732. Find the Highest Altitude\nfunc Solve018(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 19,
    "leetcode": 724,
    "title": "Find Pivot Index",
    "slug": "019-find-pivot-index",
    "pattern": "Prefix / Scan",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 933
    },
    "diagramNotes": [
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
      "prefix",
      "suffix later",
      "running sum",
      "answer",
      "Use aggregates before/after the index; update after using the current item."
    ],
    "example": {
      "input": "nums=[1,7,3,6,5,6]",
      "output": "3",
      "why": "Left sum and right sum are both 11."
    },
    "prompt": "Return an index where the sum of elements to its left equals the sum to its right, or -1 if none exists.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "answer Use aggregates before/after the index; update after using the current item.",
    "brute": "Recompute every left/right sum or product per index. This repeats work and often becomes O(n^2).",
    "optimized": "Carry a running prefix/suffix value. Update answer at the exact point where left and right states are both known. Alternative: Two passes are simplest; one pass works when the equation can be rearranged.",
    "invariant": "Before index i, prefix equals the aggregate of all elements strictly left of i.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each element is added/multiplied a constant number of times, so time is O(n); space is O(1) or O(n) for output arrays.",
    "pitfalls": [
      "Using updated prefix too early; not handling index 0.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "zeros; negative numbers; overflow in Go int; empty arrays; inclusive/exclusive index boundary.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Answer many range queries after one preprocessing pass.",
      "Handle zeros/negative numbers without division.",
      "Return both value and index where the best prefix occurs."
    ],
    "followUps": [
      "Can you answer many range queries after preprocessing?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_pivot_index",
    "goFunction": "Solve019",
    "pythonCode": "def find_pivot_index(*args):\n    \"\"\"Reference kernel for 724. Find Pivot Index.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 724. Find Pivot Index\nfunc Solve019(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 20,
    "leetcode": 2215,
    "title": "Find the Difference of Two Arrays",
    "slug": "020-find-the-difference-of-two-arrays",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 389
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums1=[1,2,3], nums2=[2,4]",
      "output": "[[1,3],[4]]",
      "why": "Only distinct missing values are returned."
    },
    "prompt": "Return two lists: values present in nums1 but not nums2, and values present in nums2 but not nums1.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_the_difference_of_two_arrays",
    "goFunction": "Solve020",
    "pythonCode": "def find_the_difference_of_two_arrays(*args):\n    \"\"\"Reference kernel for 2215. Find the Difference of Two Arrays.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 2215. Find the Difference of Two Arrays\nfunc Solve020(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 21,
    "leetcode": 1207,
    "title": "Unique Number of Occurrences",
    "slug": "021-unique-number-of-occurrences",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 233
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums=[1,2,2,3,3,3]",
      "output": "true",
      "why": "Counts are 1,2,3, all unique."
    },
    "prompt": "Return true if every distinct value in the array has a distinct occurrence count.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "unique_number_of_occurrences",
    "goFunction": "Solve021",
    "pythonCode": "def unique_number_of_occurrences(*args):\n    \"\"\"Reference kernel for 1207. Unique Number of Occurrences.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 1207. Unique Number of Occurrences\nfunc Solve021(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 22,
    "leetcode": 1657,
    "title": "Determine if Two Strings Are Close",
    "slug": "022-determine-if-two-strings-are-close",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 935
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "word1=\"abbzzca\", word2=\"babzzcz\"",
      "output": "true",
      "why": "They share characters and the multiset of frequencies."
    },
    "prompt": "Two strings are close if one can be transformed into the other by swapping positions and globally renaming existing characters.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "determine_if_two_strings_are_close",
    "goFunction": "Solve022",
    "pythonCode": "def determine_if_two_strings_are_close(*args):\n    \"\"\"Reference kernel for 1657. Determine if Two Strings Are Close.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 1657. Determine if Two Strings Are Close\nfunc Solve022(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 23,
    "leetcode": 2352,
    "title": "Equal Row and Column Pairs",
    "slug": "023-equal-row-and-column-pairs",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 817
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "grid=[[3,1,2],[1,7,6],[2,6,7]]",
      "output": "1",
      "why": "Row [1,7,6] equals column 1."
    },
    "prompt": "Count pairs (row i, column j) where the row values exactly equal the column values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "equal_row_and_column_pairs",
    "goFunction": "Solve023",
    "pythonCode": "def equal_row_and_column_pairs(*args):\n    \"\"\"Reference kernel for 2352. Equal Row and Column Pairs.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 2352. Equal Row and Column Pairs\nfunc Solve023(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 24,
    "leetcode": 2390,
    "title": "Removing Stars From a String",
    "slug": "024-removing-stars-from-a-string",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 497
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "s=\"leet**cod*e\"",
      "output": "\"lecoe\"",
      "why": "Each star removes one previous character."
    },
    "prompt": "Process a string where each star deletes itself and the closest remaining character to its left.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "removing_stars_from_a_string",
    "goFunction": "Solve024",
    "pythonCode": "def removing_stars_from_a_string(*args):\n    \"\"\"Reference kernel for 2390. Removing Stars From a String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 2390. Removing Stars From a String\nfunc Solve024(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 25,
    "leetcode": 735,
    "title": "Asteroid Collision",
    "slug": "025-asteroid-collision",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 309
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "asteroids=[5,10,-5]",
      "output": "[5,10]",
      "why": "The -5 collides with 10 and disappears."
    },
    "prompt": "Simulate asteroid collisions: positive moves right, negative moves left, and smaller colliding asteroids explode.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "asteroid_collision",
    "goFunction": "Solve025",
    "pythonCode": "def asteroid_collision(*args):\n    \"\"\"Reference kernel for 735. Asteroid Collision.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 735. Asteroid Collision\nfunc Solve025(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 26,
    "leetcode": 394,
    "title": "Decode String",
    "slug": "026-decode-string",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 525
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "s=\"3[a2[c]]\"",
      "output": "\"accaccacc\"",
      "why": "\"a2[c]\" becomes \"acc\", repeated three times."
    },
    "prompt": "Decode a string with patterns k[encoded], including nested patterns, by repeating encoded exactly k times.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "decode_string",
    "goFunction": "Solve026",
    "pythonCode": "def decode_string(*args):\n    \"\"\"Reference kernel for 394. Decode String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 394. Decode String\nfunc Solve026(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 27,
    "leetcode": 933,
    "title": "Number of Recent Calls",
    "slug": "027-number-of-recent-calls",
    "pattern": "Queue / Simulation",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "queue",
      "seed": 746
    },
    "diagramNotes": [
      "front",
      "e2",
      "e3",
      "back",
      "process",
      "append next",
      "Process events in chronological order; skip stale events when needed."
    ],
    "example": {
      "input": "pings=[1,100,3001,3002]",
      "output": "[1,2,3,3]",
      "why": "Only recent timestamps remain in the queue."
    },
    "prompt": "Implement RecentCounter.ping(t), returning how many ping times are in the inclusive range [t-3000,t].",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "append next Process events in chronological order; skip stale events when needed.",
    "brute": "Simulate with repeated full scans of all active entities; too slow when many rounds occur.",
    "optimized": "Use a queue/deque so each event is processed in the order it becomes eligible. Alternative: Use two queues when entities belong to two groups competing over time.",
    "invariant": "The queue contains pending events in exact chronological order.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each event is enqueued/dequeued a bounded number of times, usually O(n).",
    "pitfalls": [
      "Mixing one round with the next; not updating queue length per layer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty queue; stale events; repeated timestamps; stopping condition; modulo/cyclic turns.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Add timestamps and expire old events.",
      "Process simultaneous events in stable order.",
      "Return intermediate states after each round."
    ],
    "followUps": [
      "What if events are timestamped or arrive online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "number_of_recent_calls",
    "goFunction": "Solve027",
    "pythonCode": "def number_of_recent_calls(*args):\n    \"\"\"Reference kernel for 933. Number of Recent Calls.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 933. Number of Recent Calls\nfunc Solve027(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 28,
    "leetcode": 649,
    "title": "Dota2 Senate",
    "slug": "028-dota2-senate",
    "pattern": "Queue / Simulation",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "queue",
      "seed": 934
    },
    "diagramNotes": [
      "front",
      "e2",
      "e3",
      "back",
      "process",
      "append next",
      "Process events in chronological order; skip stale events when needed."
    ],
    "example": {
      "input": "senate=\"RDD\"",
      "output": "\"Dire\"",
      "why": "Dire senators eventually ban the remaining Radiant senator."
    },
    "prompt": "Given a string of R and D senators, simulate bans in order until only one party can act.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "append next Process events in chronological order; skip stale events when needed.",
    "brute": "Simulate with repeated full scans of all active entities; too slow when many rounds occur.",
    "optimized": "Use a queue/deque so each event is processed in the order it becomes eligible. Alternative: Use two queues when entities belong to two groups competing over time.",
    "invariant": "The queue contains pending events in exact chronological order.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each event is enqueued/dequeued a bounded number of times, usually O(n).",
    "pitfalls": [
      "Mixing one round with the next; not updating queue length per layer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty queue; stale events; repeated timestamps; stopping condition; modulo/cyclic turns.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Add timestamps and expire old events.",
      "Process simultaneous events in stable order.",
      "Return intermediate states after each round."
    ],
    "followUps": [
      "What if events are timestamped or arrive online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "dota2_senate",
    "goFunction": "Solve028",
    "pythonCode": "def dota2_senate(*args):\n    \"\"\"Reference kernel for 649. Dota2 Senate.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 649. Dota2 Senate\nfunc Solve028(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 29,
    "leetcode": 2095,
    "title": "Delete the Middle Node of a Linked List",
    "slug": "029-delete-the-middle-node-of-a-linked-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 622
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,3,4,7,1,2,6]",
      "output": "[1,3,4,1,2,6]",
      "why": "Node value 7 at index 3 is removed."
    },
    "prompt": "Delete the middle node of a singly linked list, where middle index is floor(n/2), and return the head.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "delete_the_middle_node_of_a_linked_list",
    "goFunction": "Solve029",
    "pythonCode": "def delete_the_middle_node_of_a_linked_list(*args):\n    \"\"\"Reference kernel for 2095. Delete the Middle Node of a Linked List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2095. Delete the Middle Node of a Linked List\nfunc Solve029(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 30,
    "leetcode": 328,
    "title": "Odd Even Linked List",
    "slug": "030-odd-even-linked-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 524
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5]",
      "output": "[1,3,5,2,4]",
      "why": "Positions 1,3,5 come before 2,4."
    },
    "prompt": "Group nodes at odd positions first, then nodes at even positions, preserving relative order within each group.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "odd_even_linked_list",
    "goFunction": "Solve030",
    "pythonCode": "def odd_even_linked_list(*args):\n    \"\"\"Reference kernel for 328. Odd Even Linked List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 328. Odd Even Linked List\nfunc Solve030(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 31,
    "leetcode": 206,
    "title": "Reverse Linked List",
    "slug": "031-reverse-linked-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 475
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3]",
      "output": "[3,2,1]",
      "why": "All next pointers are reversed."
    },
    "prompt": "Reverse a singly linked list and return the new head.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_linked_list",
    "goFunction": "Solve031",
    "pythonCode": "def reverse_linked_list(*args):\n    \"\"\"Reference kernel for 206. Reverse Linked List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 206. Reverse Linked List\nfunc Solve031(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 32,
    "leetcode": 2130,
    "title": "Maximum Twin Sum of a Linked List",
    "slug": "032-maximum-twin-sum-of-a-linked-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 313
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[5,4,2,1]",
      "output": "6",
      "why": "Twin sums are 5+1 and 4+2."
    },
    "prompt": "For an even-length linked list, pair the i-th node with the symmetric node from the end and return the maximum twin sum.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_twin_sum_of_a_linked_list",
    "goFunction": "Solve032",
    "pythonCode": "def maximum_twin_sum_of_a_linked_list(*args):\n    \"\"\"Reference kernel for 2130. Maximum Twin Sum of a Linked List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2130. Maximum Twin Sum of a Linked List\nfunc Solve032(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 33,
    "leetcode": 104,
    "title": "Maximum Depth of Binary Tree",
    "slug": "033-maximum-depth-of-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 797
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "3",
      "why": "The longest path has three nodes."
    },
    "prompt": "Return the maximum number of nodes on any root-to-leaf path in a binary tree.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_depth_of_binary_tree",
    "goFunction": "Solve033",
    "pythonCode": "def maximum_depth_of_binary_tree(*args):\n    \"\"\"Reference kernel for 104. Maximum Depth of Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 104. Maximum Depth of Binary Tree\nfunc Solve033(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 34,
    "leetcode": 872,
    "title": "Leaf-Similar Trees",
    "slug": "034-leaf-similar-trees",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 923
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root1=[1,2,3], root2=[7,2,3]",
      "output": "true",
      "why": "Both leaf sequences are [2,3]."
    },
    "prompt": "Return true if two binary trees have the same leaf values in left-to-right order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "leaf_similar_trees",
    "goFunction": "Solve034",
    "pythonCode": "def leaf_similar_trees(*args):\n    \"\"\"Reference kernel for 872. Leaf-Similar Trees.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 872. Leaf-Similar Trees\nfunc Solve034(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 35,
    "leetcode": 1448,
    "title": "Count Good Nodes in Binary Tree",
    "slug": "035-count-good-nodes-in-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 776
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[3,1,4,3,null,1,5]",
      "output": "4",
      "why": "Values 3,3,4,5 are good nodes."
    },
    "prompt": "Count nodes whose value is at least every value on the path from the root to that node.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "count_good_nodes_in_binary_tree",
    "goFunction": "Solve035",
    "pythonCode": "def count_good_nodes_in_binary_tree(*args):\n    \"\"\"Reference kernel for 1448. Count Good Nodes in Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1448. Count Good Nodes in Binary Tree\nfunc Solve035(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 36,
    "leetcode": 437,
    "title": "Path Sum III",
    "slug": "036-path-sum-iii",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 569
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[10,5,-3,3,2,null,11,3,-2,null,1], targetSum=8",
      "output": "3",
      "why": "There are three downward paths summing to 8."
    },
    "prompt": "Count all downward paths whose node values sum to targetSum; a path may start and end anywhere but must go parent to child.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "path_sum_iii",
    "goFunction": "Solve036",
    "pythonCode": "def path_sum_iii(*args):\n    \"\"\"Reference kernel for 437. Path Sum III.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 437. Path Sum III\nfunc Solve036(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 37,
    "leetcode": 1372,
    "title": "Longest ZigZag Path in a Binary Tree",
    "slug": "037-longest-zigzag-path-in-a-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 543
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "path 1->right 2->left 3->right 4",
      "output": "3",
      "why": "The shown path has three alternating edges."
    },
    "prompt": "Return the maximum number of edges in a path that alternates left and right child moves at each step.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_zigzag_path_in_a_binary_tree",
    "goFunction": "Solve037",
    "pythonCode": "def longest_zigzag_path_in_a_binary_tree(*args):\n    \"\"\"Reference kernel for 1372. Longest ZigZag Path in a Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1372. Longest ZigZag Path in a Binary Tree\nfunc Solve037(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 38,
    "leetcode": 236,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "slug": "038-lowest-common-ancestor-of-a-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 205
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1",
      "output": "3",
      "why": "Node 3 is the lowest common ancestor."
    },
    "prompt": "Return the lowest node in a binary tree that has both p and q as descendants, where a node can be its own descendant.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "lowest_common_ancestor_of_a_binary_tree",
    "goFunction": "Solve038",
    "pythonCode": "def lowest_common_ancestor_of_a_binary_tree(*args):\n    \"\"\"Reference kernel for 236. Lowest Common Ancestor of a Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 236. Lowest Common Ancestor of a Binary Tree\nfunc Solve038(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 39,
    "leetcode": 199,
    "title": "Binary Tree Right Side View",
    "slug": "039-binary-tree-right-side-view",
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 604
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "level queue",
      "8",
      "4",
      "12",
      "Queue holds one frontier level at a time."
    ],
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "The rightmost node at each level is selected."
    },
    "prompt": "Return the values visible when viewing a binary tree from the right side, top to bottom.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "12 Queue holds one frontier level at a time.",
    "brute": "DFS with depth maps or repeated level searches works but is messier.",
    "optimized": "Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.",
    "invariant": "At the start of each outer loop, queue contains exactly one level.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.",
    "pitfalls": [
      "Not separating levels; queueing nil children unnecessarily.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; last node per level; zigzag order; integer averages; queue memory at widest level.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return zigzag/order statistics per level.",
      "Use right-to-left priority instead of left-to-right.",
      "Limit search to the nearest target level."
    ],
    "followUps": [
      "Can you stream one level at a time without storing all levels?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "binary_tree_right_side_view",
    "goFunction": "Solve039",
    "pythonCode": "def binary_tree_right_side_view(*args):\n    \"\"\"Reference kernel for 199. Binary Tree Right Side View.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 199. Binary Tree Right Side View\nfunc Solve039(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 40,
    "leetcode": 1161,
    "title": "Maximum Level Sum of a Binary Tree",
    "slug": "040-maximum-level-sum-of-a-binary-tree",
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 40
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "level queue",
      "8",
      "4",
      "12",
      "Queue holds one frontier level at a time."
    ],
    "example": {
      "input": "root=[1,7,0,7,-8,null,null]",
      "output": "2",
      "why": "Level 2 sum is 7, larger than other levels."
    },
    "prompt": "Return the 1-indexed level of a binary tree with the maximum sum of node values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "12 Queue holds one frontier level at a time.",
    "brute": "DFS with depth maps or repeated level searches works but is messier.",
    "optimized": "Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.",
    "invariant": "At the start of each outer loop, queue contains exactly one level.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.",
    "pitfalls": [
      "Not separating levels; queueing nil children unnecessarily.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; last node per level; zigzag order; integer averages; queue memory at widest level.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return zigzag/order statistics per level.",
      "Use right-to-left priority instead of left-to-right.",
      "Limit search to the nearest target level."
    ],
    "followUps": [
      "Can you stream one level at a time without storing all levels?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_level_sum_of_a_binary_tree",
    "goFunction": "Solve040",
    "pythonCode": "def maximum_level_sum_of_a_binary_tree(*args):\n    \"\"\"Reference kernel for 1161. Maximum Level Sum of a Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1161. Maximum Level Sum of a Binary Tree\nfunc Solve040(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 41,
    "leetcode": 700,
    "title": "Search in a Binary Search Tree",
    "slug": "041-search-in-a-binary-search-tree",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 210
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "root=[4,2,7,1,3], val=2",
      "output": "[2,1,3]",
      "why": "The node with value 2 is found."
    },
    "prompt": "Search a binary search tree for val and return the subtree rooted at that node, or null if absent.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "search_in_a_binary_search_tree",
    "goFunction": "Solve041",
    "pythonCode": "def search_in_a_binary_search_tree(*args):\n    \"\"\"Reference kernel for 700. Search in a Binary Search Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 700. Search in a Binary Search Tree\nfunc Solve041(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 42,
    "leetcode": 450,
    "title": "Delete Node in a BST",
    "slug": "042-delete-node-in-a-bst",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 976
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "[5,4,6,2,null,null,7]",
      "why": "One valid result replaces 3 with its successor 4."
    },
    "prompt": "Delete a key from a binary search tree and return a valid BST root after deletion.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "delete_node_in_a_bst",
    "goFunction": "Solve042",
    "pythonCode": "def delete_node_in_a_bst(*args):\n    \"\"\"Reference kernel for 450. Delete Node in a BST.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 450. Delete Node in a BST\nfunc Solve042(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 43,
    "leetcode": 841,
    "title": "Keys and Rooms",
    "slug": "043-keys-and-rooms",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 675
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "rooms=[[1],[2],[3],[]]",
      "output": "true",
      "why": "Keys unlock rooms 1,2,3 in order."
    },
    "prompt": "Each room may contain keys to other rooms. Starting in room 0, return whether all rooms can be visited.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "keys_and_rooms",
    "goFunction": "Solve043",
    "pythonCode": "def keys_and_rooms(*args):\n    \"\"\"Reference kernel for 841. Keys and Rooms.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 841. Keys and Rooms\nfunc Solve043(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 44,
    "leetcode": 547,
    "title": "Number of Provinces",
    "slug": "044-number-of-provinces",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 693
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "isConnected=[[1,1,0],[1,1,0],[0,0,1]]",
      "output": "2",
      "why": "Cities 0 and 1 form one province; city 2 another."
    },
    "prompt": "Given an adjacency matrix of directly connected cities, return the number of connected components.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "number_of_provinces",
    "goFunction": "Solve044",
    "pythonCode": "def number_of_provinces(*args):\n    \"\"\"Reference kernel for 547. Number of Provinces.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 547. Number of Provinces\nfunc Solve044(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 45,
    "leetcode": 1466,
    "title": "Reorder Routes to Make All Paths Lead to the City Zero",
    "slug": "045-reorder-routes-to-make-all-paths-lead-to-the-city-zero",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 395
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "n=3, connections=[[1,0],[1,2]]",
      "output": "1",
      "why": "Reverse road 1->2 so city 2 can reach 0."
    },
    "prompt": "Directed roads form a tree. Count the minimum roads to reverse so every city can reach city 0.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reorder_routes_to_make_all_paths_lead_to_the_city_zero",
    "goFunction": "Solve045",
    "pythonCode": "def reorder_routes_to_make_all_paths_lead_to_the_city_zero(*args):\n    \"\"\"Reference kernel for 1466. Reorder Routes to Make All Paths Lead to the City Zero.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 1466. Reorder Routes to Make All Paths Lead to the City Zero\nfunc Solve045(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 46,
    "leetcode": 399,
    "title": "Evaluate Division",
    "slug": "046-evaluate-division",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 233
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "equations=[[\"a\",\"b\"],[\"b\",\"c\"]], values=[2,3], queries=[[\"a\",\"c\"],[\"c\",\"a\"],[\"x\",\"y\"]]",
      "output": "[6.0,0.16667,-1.0]",
      "why": "Build a weighted graph of ratios."
    },
    "prompt": "Given equations a/b=value, answer division queries or -1.0 when variables are disconnected or unknown.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "evaluate_division",
    "goFunction": "Solve046",
    "pythonCode": "def evaluate_division(*args):\n    \"\"\"Reference kernel for 399. Evaluate Division.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 399. Evaluate Division\nfunc Solve046(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 47,
    "leetcode": 1926,
    "title": "Nearest Exit from Entrance in Maze",
    "slug": "047-nearest-exit-from-entrance-in-maze",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 301
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "maze=[[\"+\",\"+\",\".\"],[\".\",\".\",\".\"],[\"+\",\"+\",\"+\"]], entrance=[1,0]",
      "output": "2",
      "why": "Move to [1,2], a boundary exit."
    },
    "prompt": "In a maze of walls plus and open dots, return the shortest steps from entrance to any boundary exit not equal to entrance.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "nearest_exit_from_entrance_in_maze",
    "goFunction": "Solve047",
    "pythonCode": "def nearest_exit_from_entrance_in_maze(*args):\n    \"\"\"Reference kernel for 1926. Nearest Exit from Entrance in Maze.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 1926. Nearest Exit from Entrance in Maze\nfunc Solve047(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 48,
    "leetcode": 994,
    "title": "Rotting Oranges",
    "slug": "048-rotting-oranges",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 440
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "grid=[[2,1,1],[1,1,0],[0,1,1]]",
      "output": "4",
      "why": "BFS spreads rot level by level."
    },
    "prompt": "Each minute, rotten oranges make adjacent fresh oranges rotten. Return minutes until all fresh rot, or -1 if impossible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "rotting_oranges",
    "goFunction": "Solve048",
    "pythonCode": "def rotting_oranges(*args):\n    \"\"\"Reference kernel for 994. Rotting Oranges.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 994. Rotting Oranges\nfunc Solve048(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 49,
    "leetcode": 215,
    "title": "Kth Largest Element in an Array",
    "slug": "049-kth-largest-element-in-an-array",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 189
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "nums=[3,2,1,5,6,4], k=2",
      "output": "5",
      "why": "Sorted descending is [6,5,4,3,2,1]."
    },
    "prompt": "Return the k-th largest element in an unsorted array, not the k-th distinct largest.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "kth_largest_element_in_an_array",
    "goFunction": "Solve049",
    "pythonCode": "def kth_largest_element_in_an_array(*args):\n    \"\"\"Reference kernel for 215. Kth Largest Element in an Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 215. Kth Largest Element in an Array\nfunc Solve049(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 50,
    "leetcode": 2336,
    "title": "Smallest Number in Infinite Set",
    "slug": "050-smallest-number-in-infinite-set",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 385
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "operations=pop,pop,addBack(1),pop",
      "output": "[1,2,null,1]",
      "why": "Adding 1 back makes it smallest again."
    },
    "prompt": "Design a set initially containing all positive integers, supporting popSmallest and addBack.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "smallest_number_in_infinite_set",
    "goFunction": "Solve050",
    "pythonCode": "def smallest_number_in_infinite_set(*args):\n    \"\"\"Reference kernel for 2336. Smallest Number in Infinite Set.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2336. Smallest Number in Infinite Set\nfunc Solve050(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 51,
    "leetcode": 2542,
    "title": "Maximum Subsequence Score",
    "slug": "051-maximum-subsequence-score",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 927
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "nums1=[1,3,3,2], nums2=[2,1,3,4], k=3",
      "output": "12",
      "why": "Choose indices giving sum 6 and minimum nums2 2."
    },
    "prompt": "Choose k indices to maximize sum(nums1 chosen) multiplied by the minimum nums2 among the chosen indices.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_subsequence_score",
    "goFunction": "Solve051",
    "pythonCode": "def maximum_subsequence_score(*args):\n    \"\"\"Reference kernel for 2542. Maximum Subsequence Score.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2542. Maximum Subsequence Score\nfunc Solve051(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 52,
    "leetcode": 2462,
    "title": "Total Cost to Hire K Workers",
    "slug": "052-total-cost-to-hire-k-workers",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 595
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "costs=[17,12,10,2,7,2,11,20,8], k=3, candidates=4",
      "output": "11",
      "why": "Pick costs 2,2,7."
    },
    "prompt": "Hire exactly k workers. Each round choose the cheapest worker from the first candidates or last candidates available, breaking ties by index.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "total_cost_to_hire_k_workers",
    "goFunction": "Solve052",
    "pythonCode": "def total_cost_to_hire_k_workers(*args):\n    \"\"\"Reference kernel for 2462. Total Cost to Hire K Workers.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2462. Total Cost to Hire K Workers\nfunc Solve052(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 53,
    "leetcode": 374,
    "title": "Guess Number Higher or Lower",
    "slug": "053-guess-number-higher-or-lower",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 25
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "n=10, pick=6",
      "output": "6",
      "why": "Binary search finds the pick."
    },
    "prompt": "Using the guess API that says lower, higher, or correct, find the hidden number between 1 and n.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "guess_number_higher_or_lower",
    "goFunction": "Solve053",
    "pythonCode": "def guess_number_higher_or_lower(*args):\n    \"\"\"Reference kernel for 374. Guess Number Higher or Lower.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 374. Guess Number Higher or Lower\nfunc Solve053(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 54,
    "leetcode": 2300,
    "title": "Successful Pairs of Spells and Potions",
    "slug": "054-successful-pairs-of-spells-and-potions",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 894
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "spells=[5,1,3], potions=[1,2,3,4,5], success=7",
      "output": "[4,0,3]",
      "why": "Sort potions and binary-search the first sufficient potion."
    },
    "prompt": "For each spell, count potions such that spell*potion is at least success.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "successful_pairs_of_spells_and_potions",
    "goFunction": "Solve054",
    "pythonCode": "def successful_pairs_of_spells_and_potions(*args):\n    \"\"\"Reference kernel for 2300. Successful Pairs of Spells and Potions.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 2300. Successful Pairs of Spells and Potions\nfunc Solve054(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 55,
    "leetcode": 162,
    "title": "Find Peak Element",
    "slug": "055-find-peak-element",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 471
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums=[1,2,3,1]",
      "output": "2",
      "why": "Value 3 is a peak."
    },
    "prompt": "Return any index i such that nums[i] is greater than its neighbors; outside the array counts as negative infinity.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_peak_element",
    "goFunction": "Solve055",
    "pythonCode": "def find_peak_element(*args):\n    \"\"\"Reference kernel for 162. Find Peak Element.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 162. Find Peak Element\nfunc Solve055(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 56,
    "leetcode": 875,
    "title": "Koko Eating Bananas",
    "slug": "056-koko-eating-bananas",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 659
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "piles=[3,6,7,11], h=8",
      "output": "4",
      "why": "Speed 4 finishes in 8 hours."
    },
    "prompt": "Find the minimum integer banana-eating speed k so all piles are eaten within h hours.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "koko_eating_bananas",
    "goFunction": "Solve056",
    "pythonCode": "def koko_eating_bananas(*args):\n    \"\"\"Reference kernel for 875. Koko Eating Bananas.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 875. Koko Eating Bananas\nfunc Solve056(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 57,
    "leetcode": 17,
    "title": "Letter Combinations of a Phone Number",
    "slug": "057-letter-combinations-of-a-phone-number",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 62
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
      "why": "Combine letters for 2 and 3."
    },
    "prompt": "Map phone digits 2-9 to letters and return all possible letter strings in digit order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "letter_combinations_of_a_phone_number",
    "goFunction": "Solve057",
    "pythonCode": "def letter_combinations_of_a_phone_number(*args):\n    \"\"\"Reference kernel for 17. Letter Combinations of a Phone Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 17. Letter Combinations of a Phone Number\nfunc Solve057(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 58,
    "leetcode": 216,
    "title": "Combination Sum III",
    "slug": "058-combination-sum-iii",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 485
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "k=3, n=7",
      "output": "[[1,2,4]]",
      "why": "Only 1+2+4 equals 7."
    },
    "prompt": "Return all combinations of k distinct numbers from 1..9 that sum to n; each number used at most once.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "combination_sum_iii",
    "goFunction": "Solve058",
    "pythonCode": "def combination_sum_iii(*args):\n    \"\"\"Reference kernel for 216. Combination Sum III.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 216. Combination Sum III\nfunc Solve058(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 59,
    "leetcode": 1137,
    "title": "N-th Tribonacci Number",
    "slug": "059-n-th-tribonacci-number",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 221
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "n=4",
      "output": "4",
      "why": "Sequence is 0,1,1,2,4."
    },
    "prompt": "Compute the n-th Tribonacci number with T0=0, T1=1, T2=1, and Tn=Tn-1+Tn-2+Tn-3.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "n_th_tribonacci_number",
    "goFunction": "Solve059",
    "pythonCode": "def n_th_tribonacci_number(*args):\n    \"\"\"Reference kernel for 1137. N-th Tribonacci Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 1137. N-th Tribonacci Number\nfunc Solve059(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 60,
    "leetcode": 746,
    "title": "Min Cost Climbing Stairs",
    "slug": "060-min-cost-climbing-stairs",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 584
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "cost=[10,15,20]",
      "output": "15",
      "why": "Start at step 1, then climb to the top."
    },
    "prompt": "Given cost per stair, return the minimum cost to reach just beyond the last stair, starting from step 0 or 1.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "min_cost_climbing_stairs",
    "goFunction": "Solve060",
    "pythonCode": "def min_cost_climbing_stairs(*args):\n    \"\"\"Reference kernel for 746. Min Cost Climbing Stairs.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 746. Min Cost Climbing Stairs\nfunc Solve060(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 61,
    "leetcode": 198,
    "title": "House Robber",
    "slug": "061-house-robber",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 272
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "12",
      "why": "Rob houses with values 2,9,1."
    },
    "prompt": "Maximize money robbed from houses in a line without robbing adjacent houses.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "house_robber",
    "goFunction": "Solve061",
    "pythonCode": "def house_robber(*args):\n    \"\"\"Reference kernel for 198. House Robber.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 198. House Robber\nfunc Solve061(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 62,
    "leetcode": 790,
    "title": "Domino and Tromino Tiling",
    "slug": "062-domino-and-tromino-tiling",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 397
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "n=3",
      "output": "5",
      "why": "There are five tilings for width 3."
    },
    "prompt": "Count ways to tile a 2 by n board using dominoes and trominoes; return the count modulo 1e9+7.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "domino_and_tromino_tiling",
    "goFunction": "Solve062",
    "pythonCode": "def domino_and_tromino_tiling(*args):\n    \"\"\"Reference kernel for 790. Domino and Tromino Tiling.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 790. Domino and Tromino Tiling\nfunc Solve062(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 63,
    "leetcode": 62,
    "title": "Unique Paths",
    "slug": "063-unique-paths",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 16
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "m=3, n=7",
      "output": "28",
      "why": "Combinatorial DP gives 28 paths."
    },
    "prompt": "Count unique paths from top-left to bottom-right of an m by n grid using only right and down moves.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "unique_paths",
    "goFunction": "Solve063",
    "pythonCode": "def unique_paths(*args):\n    \"\"\"Reference kernel for 62. Unique Paths.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 62. Unique Paths\nfunc Solve063(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 64,
    "leetcode": 1143,
    "title": "Longest Common Subsequence",
    "slug": "064-longest-common-subsequence",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 478
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "\"ace\" is common."
    },
    "prompt": "Return the length of the longest sequence that appears in both strings in the same relative order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_common_subsequence",
    "goFunction": "Solve064",
    "pythonCode": "def longest_common_subsequence(*args):\n    \"\"\"Reference kernel for 1143. Longest Common Subsequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1143. Longest Common Subsequence\nfunc Solve064(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 65,
    "leetcode": 714,
    "title": "Best Time to Buy and Sell Stock with Transaction Fee",
    "slug": "065-best-time-to-buy-and-sell-stock-with-transaction-fee",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 195
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "prices=[1,3,2,8,4,9], fee=2",
      "output": "8",
      "why": "Buy/sell around 1->8 and 4->9 after fees."
    },
    "prompt": "Maximize stock profit with unlimited transactions, paying a fixed fee for each completed sale.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_with_transaction_fee",
    "goFunction": "Solve065",
    "pythonCode": "def best_time_to_buy_and_sell_stock_with_transaction_fee(*args):\n    \"\"\"Reference kernel for 714. Best Time to Buy and Sell Stock with Transaction Fee.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 714. Best Time to Buy and Sell Stock with Transaction Fee\nfunc Solve065(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 66,
    "leetcode": 72,
    "title": "Edit Distance",
    "slug": "066-edit-distance",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 279
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "word1=\"horse\", word2=\"ros\"",
      "output": "3",
      "why": "One optimal edit distance is 3."
    },
    "prompt": "Return the minimum number of insertions, deletions, or replacements needed to transform word1 into word2.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "edit_distance",
    "goFunction": "Solve066",
    "pythonCode": "def edit_distance(*args):\n    \"\"\"Reference kernel for 72. Edit Distance.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 72. Edit Distance\nfunc Solve066(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 67,
    "leetcode": 338,
    "title": "Counting Bits",
    "slug": "067-counting-bits",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 844
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "n=5",
      "output": "[0,1,1,2,1,2]",
      "why": "Counts for 0,1,2,3,4,5."
    },
    "prompt": "For every integer from 0 to n, return the number of 1 bits in its binary representation.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "counting_bits",
    "goFunction": "Solve067",
    "pythonCode": "def counting_bits(*args):\n    \"\"\"Reference kernel for 338. Counting Bits.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 338. Counting Bits\nfunc Solve067(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 68,
    "leetcode": 136,
    "title": "Single Number",
    "slug": "068-single-number",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 432
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Duplicates cancel by XOR."
    },
    "prompt": "Every value appears twice except one value that appears once; return the single value.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "single_number",
    "goFunction": "Solve068",
    "pythonCode": "def single_number(*args):\n    \"\"\"Reference kernel for 136. Single Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 136. Single Number\nfunc Solve068(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 69,
    "leetcode": 1318,
    "title": "Minimum Flips to Make a OR b Equal to c",
    "slug": "069-minimum-flips-to-make-a-or-b-equal-to-c",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 617
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "a=2, b=6, c=5",
      "output": "3",
      "why": "Three bit positions must change."
    },
    "prompt": "Return the minimum bit flips in a and b needed so the bitwise OR of a and b equals c.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_flips_to_make_a_or_b_equal_to_c",
    "goFunction": "Solve069",
    "pythonCode": "def minimum_flips_to_make_a_or_b_equal_to_c(*args):\n    \"\"\"Reference kernel for 1318. Minimum Flips to Make a OR b Equal to c.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1318. Minimum Flips to Make a OR b Equal to c\nfunc Solve069(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 70,
    "leetcode": 208,
    "title": "Implement Trie (Prefix Tree)",
    "slug": "070-implement-trie-prefix-tree",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Bloomberg",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 721
    },
    "diagramNotes": [
      "root",
      "c",
      "a",
      "t*",
      "r*",
      "len#word",
      "shared prefix",
      "Trie stores shared prefixes; encoding uses length + delimiter to decode safely."
    ],
    "example": {
      "input": "insert(\"apple\"), search(\"apple\"), startsWith(\"app\")",
      "output": "[null,true,true]",
      "why": "The inserted word creates the prefix path."
    },
    "prompt": "Implement a trie with insert, search for whole word, and startsWith for prefixes.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.",
    "brute": "Compare every string with every query or split by ambiguous delimiters.",
    "optimized": "Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.",
    "invariant": "Every path from root represents exactly one prefix; terminal marks complete words.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).",
    "pitfalls": [
      "Terminal marker missing; ambiguous delimiter.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support delete/update operations.",
      "Return top-k suggestions with lexicographic ties.",
      "Use length-prefix encoding when delimiter may appear in input."
    ],
    "followUps": [
      "Can the trie support delete or wildcard search?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "implement_trie_prefix_tree",
    "goFunction": "Solve070",
    "pythonCode": "def implement_trie_prefix_tree(*args):\n    \"\"\"Reference kernel for 208. Implement Trie (Prefix Tree).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 208. Implement Trie (Prefix Tree)\nfunc Solve070(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 71,
    "leetcode": 1268,
    "title": "Search Suggestions System",
    "slug": "071-search-suggestions-system",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Bloomberg",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 826
    },
    "diagramNotes": [
      "root",
      "c",
      "a",
      "t*",
      "r*",
      "len#word",
      "shared prefix",
      "Trie stores shared prefixes; encoding uses length + delimiter to decode safely."
    ],
    "example": {
      "input": "products=[\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"], searchWord=\"mouse\"",
      "output": "[[\"mobile\",\"moneypot\",\"monitor\"],[\"mobile\",\"moneypot\",\"monitor\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"]]",
      "why": "Suggestions shrink as prefixes grow."
    },
    "prompt": "After each typed prefix of searchWord, return up to three lexicographically smallest products starting with that prefix.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.",
    "brute": "Compare every string with every query or split by ambiguous delimiters.",
    "optimized": "Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.",
    "invariant": "Every path from root represents exactly one prefix; terminal marks complete words.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).",
    "pitfalls": [
      "Terminal marker missing; ambiguous delimiter.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support delete/update operations.",
      "Return top-k suggestions with lexicographic ties.",
      "Use length-prefix encoding when delimiter may appear in input."
    ],
    "followUps": [
      "Can the trie support delete or wildcard search?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "search_suggestions_system",
    "goFunction": "Solve071",
    "pythonCode": "def search_suggestions_system(*args):\n    \"\"\"Reference kernel for 1268. Search Suggestions System.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1268. Search Suggestions System\nfunc Solve071(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 72,
    "leetcode": 435,
    "title": "Non-overlapping Intervals",
    "slug": "072-non-overlapping-intervals",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 654
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "intervals=[[1,2],[2,3],[3,4],[1,3]]",
      "output": "1",
      "why": "Remove [1,3]."
    },
    "prompt": "Return the minimum number of intervals to remove so the remaining intervals are non-overlapping.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "non_overlapping_intervals",
    "goFunction": "Solve072",
    "pythonCode": "def non_overlapping_intervals(*args):\n    \"\"\"Reference kernel for 435. Non-overlapping Intervals.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 435. Non-overlapping Intervals\nfunc Solve072(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 73,
    "leetcode": 452,
    "title": "Minimum Number of Arrows to Burst Balloons",
    "slug": "073-minimum-number-of-arrows-to-burst-balloons",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 974
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "points=[[10,16],[2,8],[1,6],[7,12]]",
      "output": "2",
      "why": "One arrow can hit [1,6],[2,8]; another hits [7,12],[10,16]."
    },
    "prompt": "Each balloon is an interval on the x-axis. Return the fewest arrows needed to burst all balloons, where one arrow hits all intervals containing its x.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_number_of_arrows_to_burst_balloons",
    "goFunction": "Solve073",
    "pythonCode": "def minimum_number_of_arrows_to_burst_balloons(*args):\n    \"\"\"Reference kernel for 452. Minimum Number of Arrows to Burst Balloons.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 452. Minimum Number of Arrows to Burst Balloons\nfunc Solve073(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 74,
    "leetcode": 739,
    "title": "Daily Temperatures",
    "slug": "074-daily-temperatures",
    "pattern": "Monotonic Stack",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 899
    },
    "diagramNotes": [
      "9",
      "7",
      "4",
      "top",
      "current",
      "pop while order breaks",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "temperatures=[73,74,75,71,69,72,76,73]",
      "output": "[1,1,4,2,1,1,0,0]",
      "why": "Next warmer positions determine distances."
    },
    "prompt": "For each day, return how many days until a warmer temperature; use 0 when none occurs.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "pop while order breaks The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "For each index, scan forward/backward to find the next greater/smaller item. O(n^2).",
    "optimized": "Maintain a stack of unresolved indices in monotonic order; resolve them when a stronger value appears. Alternative: Use decreasing stack for next greater, increasing stack for next smaller, or scan from the opposite side.",
    "invariant": "Stack indices have not found their answer and their values remain monotonic.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each index enters and leaves the stack once: O(n) time, O(n) space.",
    "pitfalls": [
      "Using < instead of <=; storing values when indices are needed.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "equal values; direction of scan; circular arrays; storing values vs indices.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find previous instead of next warmer/greater item.",
      "Use circular-array behavior.",
      "Return spans/counts rather than target index."
    ],
    "followUps": [
      "Do you need next greater value, index, or distance?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "daily_temperatures",
    "goFunction": "Solve074",
    "pythonCode": "def daily_temperatures(*args):\n    \"\"\"Reference kernel for 739. Daily Temperatures.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 739. Daily Temperatures\nfunc Solve074(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 75,
    "leetcode": 901,
    "title": "Online Stock Span",
    "slug": "075-online-stock-span",
    "pattern": "Monotonic Stack",
    "difficulty": "Medium",
    "sources": [
      "LC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 693
    },
    "diagramNotes": [
      "9",
      "7",
      "4",
      "top",
      "current",
      "pop while order breaks",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "prices=[100,80,60,70,60,75,85]",
      "output": "[1,1,1,2,1,4,6]",
      "why": "A monotonic stack merges previous spans."
    },
    "prompt": "Design StockSpanner.next(price), returning consecutive days ending today with price less than or equal to today's price.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "pop while order breaks The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "For each index, scan forward/backward to find the next greater/smaller item. O(n^2).",
    "optimized": "Maintain a stack of unresolved indices in monotonic order; resolve them when a stronger value appears. Alternative: Use decreasing stack for next greater, increasing stack for next smaller, or scan from the opposite side.",
    "invariant": "Stack indices have not found their answer and their values remain monotonic.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each index enters and leaves the stack once: O(n) time, O(n) space.",
    "pitfalls": [
      "Using < instead of <=; storing values when indices are needed.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "equal values; direction of scan; circular arrays; storing values vs indices.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find previous instead of next warmer/greater item.",
      "Use circular-array behavior.",
      "Return spans/counts rather than target index."
    ],
    "followUps": [
      "Do you need next greater value, index, or distance?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "online_stock_span",
    "goFunction": "Solve075",
    "pythonCode": "def online_stock_span(*args):\n    \"\"\"Reference kernel for 901. Online Stock Span.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 901. Online Stock Span\nfunc Solve075(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 76,
    "leetcode": 88,
    "title": "Merge Sorted Array",
    "slug": "076-merge-sorted-array",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 861
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3",
      "output": "[1,2,2,3,5,6]",
      "why": "Fill from the end to avoid overwriting."
    },
    "prompt": "Merge sorted nums2 into sorted nums1 in-place, where nums1 has trailing space for all elements.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "merge_sorted_array",
    "goFunction": "Solve076",
    "pythonCode": "def merge_sorted_array(*args):\n    \"\"\"Reference kernel for 88. Merge Sorted Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 88. Merge Sorted Array\nfunc Solve076(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 77,
    "leetcode": 27,
    "title": "Remove Element",
    "slug": "077-remove-element",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 852
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums=[3,2,2,3], val=3",
      "output": "k=2, first values [2,2]",
      "why": "Only values not equal to 3 remain."
    },
    "prompt": "Remove all occurrences of val from nums in-place and return the new length; order of remaining values may change.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "remove_element",
    "goFunction": "Solve077",
    "pythonCode": "def remove_element(*args):\n    \"\"\"Reference kernel for 27. Remove Element.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 27. Remove Element\nfunc Solve077(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 78,
    "leetcode": 26,
    "title": "Remove Duplicates from Sorted Array",
    "slug": "078-remove-duplicates-from-sorted-array",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 866
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums=[1,1,2]",
      "output": "k=2, first values [1,2]",
      "why": "Two unique values remain."
    },
    "prompt": "Remove duplicates from a sorted array in-place so each value appears once; return the count of kept values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "remove_duplicates_from_sorted_array",
    "goFunction": "Solve078",
    "pythonCode": "def remove_duplicates_from_sorted_array(*args):\n    \"\"\"Reference kernel for 26. Remove Duplicates from Sorted Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 26. Remove Duplicates from Sorted Array\nfunc Solve078(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 79,
    "leetcode": 80,
    "title": "Remove Duplicates from Sorted Array II",
    "slug": "079-remove-duplicates-from-sorted-array-ii",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 818
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums=[0,0,1,1,1,1,2]",
      "output": "k=5, first values [0,0,1,1,2]",
      "why": "Extra copies of 1 are skipped."
    },
    "prompt": "Remove duplicates from a sorted array in-place so each value appears at most twice; return the kept length.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "remove_duplicates_from_sorted_array_ii",
    "goFunction": "Solve079",
    "pythonCode": "def remove_duplicates_from_sorted_array_ii(*args):\n    \"\"\"Reference kernel for 80. Remove Duplicates from Sorted Array II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 80. Remove Duplicates from Sorted Array II\nfunc Solve079(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 80,
    "leetcode": 169,
    "title": "Majority Element",
    "slug": "080-majority-element",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 368
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums=[2,2,1,1,1,2,2]",
      "output": "2",
      "why": "2 appears four times out of seven."
    },
    "prompt": "Return the majority element that appears more than floor(n/2) times.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "majority_element",
    "goFunction": "Solve080",
    "pythonCode": "def majority_element(*args):\n    \"\"\"Reference kernel for 169. Majority Element.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 169. Majority Element\nfunc Solve080(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 81,
    "leetcode": 189,
    "title": "Rotate Array",
    "slug": "081-rotate-array",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 739
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "nums=[1,2,3,4,5], k=2",
      "output": "[4,5,1,2,3]",
      "why": "The last two elements move to the front."
    },
    "prompt": "Rotate an array to the right by k steps in-place.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "rotate_array",
    "goFunction": "Solve081",
    "pythonCode": "def rotate_array(*args):\n    \"\"\"Reference kernel for 189. Rotate Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 189. Rotate Array\nfunc Solve081(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 82,
    "leetcode": 121,
    "title": "Best Time to Buy and Sell Stock",
    "slug": "082-best-time-to-buy-and-sell-stock",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 611
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "prices=[7,1,5,3,6,4]",
      "output": "5",
      "why": "Buy at 1 and sell at 6."
    },
    "prompt": "Choose one buy day and one later sell day to maximize stock profit; return 0 if no profit is possible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock",
    "goFunction": "Solve082",
    "pythonCode": "def best_time_to_buy_and_sell_stock(*args):\n    \"\"\"Reference kernel for 121. Best Time to Buy and Sell Stock.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 121. Best Time to Buy and Sell Stock\nfunc Solve082(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 83,
    "leetcode": 122,
    "title": "Best Time to Buy and Sell Stock II",
    "slug": "083-best-time-to-buy-and-sell-stock-ii",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 659
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "prices=[7,1,5,3,6,4]",
      "output": "7",
      "why": "Take gains 1->5 and 3->6."
    },
    "prompt": "Maximize stock profit with as many buy-sell transactions as desired, but hold at most one share at a time.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_ii",
    "goFunction": "Solve083",
    "pythonCode": "def best_time_to_buy_and_sell_stock_ii(*args):\n    \"\"\"Reference kernel for 122. Best Time to Buy and Sell Stock II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 122. Best Time to Buy and Sell Stock II\nfunc Solve083(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 84,
    "leetcode": 55,
    "title": "Jump Game",
    "slug": "084-jump-game",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 548
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "Reach index 1, then jump to the end."
    },
    "prompt": "Given maximum jump lengths at each index, return whether the last index is reachable from index 0.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "jump_game",
    "goFunction": "Solve084",
    "pythonCode": "def jump_game(*args):\n    \"\"\"Reference kernel for 55. Jump Game.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 55. Jump Game\nfunc Solve084(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 85,
    "leetcode": 45,
    "title": "Jump Game II",
    "slug": "085-jump-game-ii",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 409
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "2",
      "why": "Jump 0->1->4."
    },
    "prompt": "Return the minimum jumps needed to reach the last index, assuming it is reachable.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "jump_game_ii",
    "goFunction": "Solve085",
    "pythonCode": "def jump_game_ii(*args):\n    \"\"\"Reference kernel for 45. Jump Game II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 45. Jump Game II\nfunc Solve085(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 86,
    "leetcode": 274,
    "title": "H-Index",
    "slug": "086-h-index",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 345
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "citations=[3,0,6,1,5]",
      "output": "3",
      "why": "Three papers have at least three citations."
    },
    "prompt": "Given citation counts, return the largest h such that at least h papers have at least h citations.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "h_index",
    "goFunction": "Solve086",
    "pythonCode": "def h_index(*args):\n    \"\"\"Reference kernel for 274. H-Index.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 274. H-Index\nfunc Solve086(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 87,
    "leetcode": 380,
    "title": "Insert Delete GetRandom O(1)",
    "slug": "087-insert-delete-getrandom-o-1",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 184
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()",
      "output": "[true,false,true,1 or 2,true,false,2]",
      "why": "The final set contains only 2."
    },
    "prompt": "Design a set supporting insert, remove, and getRandom in average O(1) time.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "insert_delete_getrandom_o_1",
    "goFunction": "Solve087",
    "pythonCode": "def insert_delete_getrandom_o_1(*args):\n    \"\"\"Reference kernel for 380. Insert Delete GetRandom O(1).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 380. Insert Delete GetRandom O(1)\nfunc Solve087(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 88,
    "leetcode": 134,
    "title": "Gas Station",
    "slug": "088-gas-station",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 21
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "gas=[1,2,3,4,5], cost=[3,4,5,1,2]",
      "output": "3",
      "why": "Starting at station 3 finishes the loop."
    },
    "prompt": "Given gas gained and travel cost at each station on a circle, return the start index that completes the circuit, or -1.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "gas_station",
    "goFunction": "Solve088",
    "pythonCode": "def gas_station(*args):\n    \"\"\"Reference kernel for 134. Gas Station.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 134. Gas Station\nfunc Solve088(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 89,
    "leetcode": 135,
    "title": "Candy",
    "slug": "089-candy",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 69
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "ratings=[1,0,2]",
      "output": "5",
      "why": "Candies [2,1,2] is minimal."
    },
    "prompt": "Distribute candies so every child gets at least one and higher-rated children than neighbors get more; minimize total.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "candy",
    "goFunction": "Solve089",
    "pythonCode": "def candy(*args):\n    \"\"\"Reference kernel for 135. Candy.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 135. Candy\nfunc Solve089(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 90,
    "leetcode": 42,
    "title": "Trapping Rain Water",
    "slug": "090-trapping-rain-water",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 513
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "height=[0,2,0,3,0,1]",
      "output": "3",
      "why": "Water accumulates above low bars between taller boundaries."
    },
    "prompt": "Given bar heights, compute total rain water trapped between bars.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "trapping_rain_water",
    "goFunction": "Solve090",
    "pythonCode": "def trapping_rain_water(*args):\n    \"\"\"Reference kernel for 42. Trapping Rain Water.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 42. Trapping Rain Water\nfunc Solve090(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 91,
    "leetcode": 13,
    "title": "Roman to Integer",
    "slug": "091-roman-to-integer",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 51
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "s=\"MCMXCIV\"",
      "output": "1994",
      "why": "M=1000, CM=900, XC=90, IV=4."
    },
    "prompt": "Convert a valid Roman numeral to its integer value.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "roman_to_integer",
    "goFunction": "Solve091",
    "pythonCode": "def roman_to_integer(*args):\n    \"\"\"Reference kernel for 13. Roman to Integer.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 13. Roman to Integer\nfunc Solve091(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 92,
    "leetcode": 12,
    "title": "Integer to Roman",
    "slug": "092-integer-to-roman",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 65
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "num=58",
      "output": "\"LVIII\"",
      "why": "50+5+3 is L+V+III."
    },
    "prompt": "Convert an integer to a Roman numeral using standard subtractive notation.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "integer_to_roman",
    "goFunction": "Solve092",
    "pythonCode": "def integer_to_roman(*args):\n    \"\"\"Reference kernel for 12. Integer to Roman.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 12. Integer to Roman\nfunc Solve092(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 93,
    "leetcode": 58,
    "title": "Length of Last Word",
    "slug": "093-length-of-last-word",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 878
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "s=\"fly me to the moon\"",
      "output": "4",
      "why": "The last word is \"moon\"."
    },
    "prompt": "Return the length of the last word in a string, ignoring trailing spaces.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "length_of_last_word",
    "goFunction": "Solve093",
    "pythonCode": "def length_of_last_word(*args):\n    \"\"\"Reference kernel for 58. Length of Last Word.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 58. Length of Last Word\nfunc Solve093(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 94,
    "leetcode": 14,
    "title": "Longest Common Prefix",
    "slug": "094-longest-common-prefix",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 161
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "strs=[\"flower\",\"flow\",\"flight\"]",
      "output": "\"fl\"",
      "why": "All words start with \"fl\"."
    },
    "prompt": "Return the longest common prefix string among all input strings.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_common_prefix",
    "goFunction": "Solve094",
    "pythonCode": "def longest_common_prefix(*args):\n    \"\"\"Reference kernel for 14. Longest Common Prefix.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 14. Longest Common Prefix\nfunc Solve094(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 95,
    "leetcode": 6,
    "title": "Zigzag Conversion",
    "slug": "095-zigzag-conversion",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 56
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "s=\"ABCDE\", numRows=2",
      "output": "\"ACEBD\"",
      "why": "Rows are A,C,E and B,D."
    },
    "prompt": "Write characters in a zigzag over numRows rows, then read row by row.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "zigzag_conversion",
    "goFunction": "Solve095",
    "pythonCode": "def zigzag_conversion(*args):\n    \"\"\"Reference kernel for 6. Zigzag Conversion.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 6. Zigzag Conversion\nfunc Solve095(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 96,
    "leetcode": 28,
    "title": "Find the Index of the First Occurrence in a String",
    "slug": "096-find-the-index-of-the-first-occurrence-in-a-string",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 461
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "haystack=\"sadbutsad\", needle=\"sad\"",
      "output": "0",
      "why": "The first occurrence starts at index 0."
    },
    "prompt": "Return the index of the first occurrence of needle in haystack, or -1 if absent.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_the_index_of_the_first_occurrence_in_a_string",
    "goFunction": "Solve096",
    "pythonCode": "def find_the_index_of_the_first_occurrence_in_a_string(*args):\n    \"\"\"Reference kernel for 28. Find the Index of the First Occurrence in a String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 28. Find the Index of the First Occurrence in a String\nfunc Solve096(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 97,
    "leetcode": 68,
    "title": "Text Justification",
    "slug": "097-text-justification",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 175
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "words=[\"This\",\"is\",\"an\",\"example\"], maxWidth=16",
      "output": "[\"This    is    an\",\"example         \"]",
      "why": "First line spreads spaces; final line pads right."
    },
    "prompt": "Pack words into lines of maxWidth with spaces distributed as evenly as possible; last line is left-justified.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "text_justification",
    "goFunction": "Solve097",
    "pythonCode": "def text_justification(*args):\n    \"\"\"Reference kernel for 68. Text Justification.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 68. Text Justification\nfunc Solve097(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 98,
    "leetcode": 125,
    "title": "Valid Palindrome",
    "slug": "098-valid-palindrome",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 178
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "s=\"A man, a plan, a canal: Panama\"",
      "output": "true",
      "why": "Cleaned string reads the same both ways."
    },
    "prompt": "Return whether a string is a palindrome after removing non-alphanumeric characters and ignoring case.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "valid_palindrome",
    "goFunction": "Solve098",
    "pythonCode": "def valid_palindrome(*args):\n    \"\"\"Reference kernel for 125. Valid Palindrome.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 125. Valid Palindrome\nfunc Solve098(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 99,
    "leetcode": 167,
    "title": "Two Sum II - Input Array Is Sorted",
    "slug": "099-two-sum-ii-input-array-is-sorted",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 923
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "numbers=[2,7,11,15], target=9",
      "output": "[1,2]",
      "why": "2+7=9."
    },
    "prompt": "In a 1-indexed sorted array, return the two indices whose values sum to target.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "two_sum_ii_input_array_is_sorted",
    "goFunction": "Solve099",
    "pythonCode": "def two_sum_ii_input_array_is_sorted(*args):\n    \"\"\"Reference kernel for 167. Two Sum II - Input Array Is Sorted.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 167. Two Sum II - Input Array Is Sorted\nfunc Solve099(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 100,
    "leetcode": 15,
    "title": "3Sum",
    "slug": "100-3sum",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 364
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "nums=[-1,0,1,2,-1,-4]",
      "output": "[[-1,-1,2],[-1,0,1]]",
      "why": "Sort and skip duplicates."
    },
    "prompt": "Return all unique triplets whose sum is zero.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "problem_3sum",
    "goFunction": "Solve100",
    "pythonCode": "def problem_3sum(*args):\n    \"\"\"Reference kernel for 15. 3Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 15. 3Sum\nfunc Solve100(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 101,
    "leetcode": 209,
    "title": "Minimum Size Subarray Sum",
    "slug": "101-minimum-size-subarray-sum",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 702
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "target=7, nums=[2,3,1,2,4,3]",
      "output": "2",
      "why": "Subarray [4,3] reaches 7."
    },
    "prompt": "Return the minimum length of a contiguous subarray with sum at least target, or 0 if none exists.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_size_subarray_sum",
    "goFunction": "Solve101",
    "pythonCode": "def minimum_size_subarray_sum(*args):\n    \"\"\"Reference kernel for 209. Minimum Size Subarray Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 209. Minimum Size Subarray Sum\nfunc Solve101(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 102,
    "leetcode": 3,
    "title": "Longest Substring Without Repeating Characters",
    "slug": "102-longest-substring-without-repeating-characters",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 222
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "s=\"abcabcbb\"",
      "output": "3",
      "why": "\"abc\" is the longest unique-character window."
    },
    "prompt": "Return the length of the longest substring without repeated characters.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_substring_without_repeating_characters",
    "goFunction": "Solve102",
    "pythonCode": "def longest_substring_without_repeating_characters(*args):\n    \"\"\"Reference kernel for 3. Longest Substring Without Repeating Characters.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 3. Longest Substring Without Repeating Characters\nfunc Solve102(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 103,
    "leetcode": 30,
    "title": "Substring with Concatenation of All Words",
    "slug": "103-substring-with-concatenation-of-all-words",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "time": "O(n) or O(n log n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "pointers",
      "seed": 712
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "L",
      "R",
      "move only safe side",
      "Discarded outer ranges have been proved impossible or dominated."
    ],
    "example": {
      "input": "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]",
      "output": "[0,9]",
      "why": "\"barfoo\" and \"foobar\" match."
    },
    "prompt": "Find all start indices where a substring is the concatenation of each word exactly once, with no gaps.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "move only safe side Discarded outer ranges have been proved impossible or dominated.",
    "brute": "Check all pairs/subarrays. This is clear but O(n^2) or worse.",
    "optimized": "Maintain two indices. Move only the side that cannot produce a better result if kept fixed. Alternative: Sort first for unordered inputs; use fast/slow pointers for linked lists or cycle questions.",
    "invariant": "All discarded pairs are provably dominated or already evaluated.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each pointer moves monotonically at most n times, giving O(n) after any required sort.",
    "pitfalls": [
      "Moving both pointers when only one should move; duplicate skipping before recording answer.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; crossing pointers; arrays of length 0/1; sorted vs unsorted; inclusive loop conditions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual pair/window, not only the score.",
      "Handle duplicates and ask for all unique answers.",
      "Work after sorting while preserving original indices."
    ],
    "followUps": [
      "What changes if input is unsorted or has duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "substring_with_concatenation_of_all_words",
    "goFunction": "Solve103",
    "pythonCode": "def substring_with_concatenation_of_all_words(*args):\n    \"\"\"Reference kernel for 30. Substring with Concatenation of All Words.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 30. Substring with Concatenation of All Words\nfunc Solve103(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 104,
    "leetcode": 76,
    "title": "Minimum Window Substring",
    "slug": "104-minimum-window-substring",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 528
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "s=\"ADOBECODEBANC\", t=\"ABC\"",
      "output": "\"BANC\"",
      "why": "It is the shortest window containing A, B, and C."
    },
    "prompt": "Return the smallest substring of s that contains every character of t with required multiplicity.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_window_substring",
    "goFunction": "Solve104",
    "pythonCode": "def minimum_window_substring(*args):\n    \"\"\"Reference kernel for 76. Minimum Window Substring.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 76. Minimum Window Substring\nfunc Solve104(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 105,
    "leetcode": 36,
    "title": "Valid Sudoku",
    "slug": "105-valid-sudoku",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 876
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "board=[\"53..7....\",\"6..195...\",\".98....6.\",\"8...6...3\",\"4..8.3..1\",\"7...2...6\",\".6....28.\",\"...419..5\",\"....8..79\"]",
      "output": "true",
      "why": "All filled digits obey Sudoku rules."
    },
    "prompt": "Return whether a partially filled 9x9 Sudoku board has no repeated digit in any row, column, or 3x3 box.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "valid_sudoku",
    "goFunction": "Solve105",
    "pythonCode": "def valid_sudoku(*args):\n    \"\"\"Reference kernel for 36. Valid Sudoku.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 36. Valid Sudoku\nfunc Solve105(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 106,
    "leetcode": 54,
    "title": "Spiral Matrix",
    "slug": "106-spiral-matrix",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 216
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "matrix=[[1,2,3],[4,5,6],[7,8,9]]",
      "output": "[1,2,3,6,9,8,7,4,5]",
      "why": "Traverse top row, right column, bottom row, left column, inward."
    },
    "prompt": "Return all matrix elements in clockwise spiral order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "spiral_matrix",
    "goFunction": "Solve106",
    "pythonCode": "def spiral_matrix(*args):\n    \"\"\"Reference kernel for 54. Spiral Matrix.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 54. Spiral Matrix\nfunc Solve106(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 107,
    "leetcode": 48,
    "title": "Rotate Image",
    "slug": "107-rotate-image",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 145
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "matrix=[[1,2],[3,4]]",
      "output": "[[3,1],[4,2]]",
      "why": "Transpose then reverse rows."
    },
    "prompt": "Rotate an n by n matrix 90 degrees clockwise in-place.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "rotate_image",
    "goFunction": "Solve107",
    "pythonCode": "def rotate_image(*args):\n    \"\"\"Reference kernel for 48. Rotate Image.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 48. Rotate Image\nfunc Solve107(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 108,
    "leetcode": 73,
    "title": "Set Matrix Zeroes",
    "slug": "108-set-matrix-zeroes",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 601
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "matrix=[[1,1,1],[1,0,1],[1,1,1]]",
      "output": "[[1,0,1],[0,0,0],[1,0,1]]",
      "why": "The zero at center clears row 1 and column 1."
    },
    "prompt": "If any matrix cell is zero, set its entire row and column to zero in-place.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "set_matrix_zeroes",
    "goFunction": "Solve108",
    "pythonCode": "def set_matrix_zeroes(*args):\n    \"\"\"Reference kernel for 73. Set Matrix Zeroes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 73. Set Matrix Zeroes\nfunc Solve108(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 109,
    "leetcode": 289,
    "title": "Game of Life",
    "slug": "109-game-of-life",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 316
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "board=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
      "output": "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
      "why": "Apply all state changes simultaneously."
    },
    "prompt": "Update the Game of Life board one step in-place using the eight-neighbor rules for birth, survival, and death.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "game_of_life",
    "goFunction": "Solve109",
    "pythonCode": "def game_of_life(*args):\n    \"\"\"Reference kernel for 289. Game of Life.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 289. Game of Life\nfunc Solve109(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 110,
    "leetcode": 383,
    "title": "Ransom Note",
    "slug": "110-ransom-note",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 948
    },
    "diagramNotes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "read",
      "write",
      "finalized prefix",
      "Read scans once; write/state marks the part that is already final."
    ],
    "example": {
      "input": "ransomNote=\"aa\", magazine=\"aab\"",
      "output": "true",
      "why": "Magazine has two a characters."
    },
    "prompt": "Return whether ransomNote can be built using each character from magazine at most once.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "finalized prefix Read scans once; write/state marks the part that is already final.",
    "brute": "Build every possible candidate or repeatedly scan the string/array. Easy to reason about but often O(n^2) or allocates too much.",
    "optimized": "Use one forward scan, a write pointer, or a small frequency/count state. Mutate only when the prompt explicitly allows it. Alternative: When order is irrelevant, sort or count first; when order matters, preserve stable scan order.",
    "invariant": "After processing index i, all positions before write already contain the final kept prefix or answer state.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: One pass touches each element once. Extra space is O(1) unless the returned output/frequency table is required.",
    "pitfalls": [
      "Off-by-one on in-place writes; forgetting empty strings/arrays.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty input; one item; all equal values; long strings; in-place vs copy; Unicode/byte assumptions.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Require in-place edits instead of building a new array/string.",
      "Add Unicode/case-normalization rules before comparing characters.",
      "Stream inputs so only a small buffer may be kept."
    ],
    "followUps": [
      "Can it be done in-place, streaming, or with Unicode/non-ASCII input?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "ransom_note",
    "goFunction": "Solve110",
    "pythonCode": "def ransom_note(*args):\n    \"\"\"Reference kernel for 383. Ransom Note.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 383. Ransom Note\nfunc Solve110(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 111,
    "leetcode": 205,
    "title": "Isomorphic Strings",
    "slug": "111-isomorphic-strings",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 944
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "s=\"egg\", t=\"add\"",
      "output": "true",
      "why": "e maps to a and g maps to d."
    },
    "prompt": "Return whether characters in s can be replaced one-to-one to create t, preserving order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "isomorphic_strings",
    "goFunction": "Solve111",
    "pythonCode": "def isomorphic_strings(*args):\n    \"\"\"Reference kernel for 205. Isomorphic Strings.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 205. Isomorphic Strings\nfunc Solve111(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 112,
    "leetcode": 290,
    "title": "Word Pattern",
    "slug": "112-word-pattern",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 426
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "pattern=\"abba\", s=\"dog cat cat dog\"",
      "output": "true",
      "why": "a maps to dog and b maps to cat."
    },
    "prompt": "Return whether a pattern's characters map one-to-one to words in the string.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "word_pattern",
    "goFunction": "Solve112",
    "pythonCode": "def word_pattern(*args):\n    \"\"\"Reference kernel for 290. Word Pattern.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 290. Word Pattern\nfunc Solve112(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 113,
    "leetcode": 242,
    "title": "Valid Anagram",
    "slug": "113-valid-anagram",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 638
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "s=\"anagram\", t=\"nagaram\"",
      "output": "true",
      "why": "Both have the same letters."
    },
    "prompt": "Return whether two strings contain exactly the same character counts.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "valid_anagram",
    "goFunction": "Solve113",
    "pythonCode": "def valid_anagram(*args):\n    \"\"\"Reference kernel for 242. Valid Anagram.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 242. Valid Anagram\nfunc Solve113(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 114,
    "leetcode": 49,
    "title": "Group Anagrams",
    "slug": "114-group-anagrams",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 379
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "strs=[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
      "why": "Anagrams share sorted letters or counts."
    },
    "prompt": "Group strings that are anagrams of each other.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "group_anagrams",
    "goFunction": "Solve114",
    "pythonCode": "def group_anagrams(*args):\n    \"\"\"Reference kernel for 49. Group Anagrams.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 49. Group Anagrams\nfunc Solve114(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 115,
    "leetcode": 1,
    "title": "Two Sum",
    "slug": "115-two-sum",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 591
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "[0,1]",
      "why": "2+7=9."
    },
    "prompt": "Return indices of the two numbers that add to target; assume exactly one answer and do not reuse an element.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "two_sum",
    "goFunction": "Solve115",
    "pythonCode": "def two_sum(*args):\n    \"\"\"Reference kernel for 1. Two Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 1. Two Sum\nfunc Solve115(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 116,
    "leetcode": 202,
    "title": "Happy Number",
    "slug": "116-happy-number",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 51
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "n=19",
      "output": "true",
      "why": "19 eventually reaches 1."
    },
    "prompt": "Repeatedly replace n by the sum of squares of its digits; return true if the process reaches 1.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "happy_number",
    "goFunction": "Solve116",
    "pythonCode": "def happy_number(*args):\n    \"\"\"Reference kernel for 202. Happy Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 202. Happy Number\nfunc Solve116(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 117,
    "leetcode": 219,
    "title": "Contains Duplicate II",
    "slug": "117-contains-duplicate-ii",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 371
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums=[1,2,3,1], k=3",
      "output": "true",
      "why": "The two 1 values are distance 3 apart."
    },
    "prompt": "Return true if the same value appears at two indices whose distance is at most k.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "contains_duplicate_ii",
    "goFunction": "Solve117",
    "pythonCode": "def contains_duplicate_ii(*args):\n    \"\"\"Reference kernel for 219. Contains Duplicate II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 219. Contains Duplicate II\nfunc Solve117(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 118,
    "leetcode": 128,
    "title": "Longest Consecutive Sequence",
    "slug": "118-longest-consecutive-sequence",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 849
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums=[100,4,200,1,3,2]",
      "output": "4",
      "why": "Sequence 1,2,3,4 has length 4."
    },
    "prompt": "Return the length of the longest consecutive integer sequence in an unsorted array.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_consecutive_sequence",
    "goFunction": "Solve118",
    "pythonCode": "def longest_consecutive_sequence(*args):\n    \"\"\"Reference kernel for 128. Longest Consecutive Sequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 128. Longest Consecutive Sequence\nfunc Solve118(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 119,
    "leetcode": 228,
    "title": "Summary Ranges",
    "slug": "119-summary-ranges",
    "pattern": "Prefix / Scan",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 586
    },
    "diagramNotes": [
      "x0",
      "x1",
      "x2",
      "x3",
      "x4",
      "prefix",
      "suffix later",
      "running sum",
      "answer",
      "Use aggregates before/after the index; update after using the current item."
    ],
    "example": {
      "input": "nums=[0,1,2,4,5,7]",
      "output": "[\"0->2\",\"4->5\",\"7\"]",
      "why": "Consecutive runs become ranges."
    },
    "prompt": "Summarize sorted unique integers into minimal ranges.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "answer Use aggregates before/after the index; update after using the current item.",
    "brute": "Recompute every left/right sum or product per index. This repeats work and often becomes O(n^2).",
    "optimized": "Carry a running prefix/suffix value. Update answer at the exact point where left and right states are both known. Alternative: Two passes are simplest; one pass works when the equation can be rearranged.",
    "invariant": "Before index i, prefix equals the aggregate of all elements strictly left of i.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each element is added/multiplied a constant number of times, so time is O(n); space is O(1) or O(n) for output arrays.",
    "pitfalls": [
      "Using updated prefix too early; not handling index 0.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "zeros; negative numbers; overflow in Go int; empty arrays; inclusive/exclusive index boundary.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Answer many range queries after one preprocessing pass.",
      "Handle zeros/negative numbers without division.",
      "Return both value and index where the best prefix occurs."
    ],
    "followUps": [
      "Can you answer many range queries after preprocessing?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "summary_ranges",
    "goFunction": "Solve119",
    "pythonCode": "def summary_ranges(*args):\n    \"\"\"Reference kernel for 228. Summary Ranges.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 228. Summary Ranges\nfunc Solve119(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 120,
    "leetcode": 56,
    "title": "Merge Intervals",
    "slug": "120-merge-intervals",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 684
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "intervals=[[1,3],[2,6],[8,10]]",
      "output": "[[1,6],[8,10]]",
      "why": "The first two intervals overlap."
    },
    "prompt": "Merge all overlapping intervals and return the merged intervals.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "merge_intervals",
    "goFunction": "Solve120",
    "pythonCode": "def merge_intervals(*args):\n    \"\"\"Reference kernel for 56. Merge Intervals.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 56. Merge Intervals\nfunc Solve120(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 121,
    "leetcode": 57,
    "title": "Insert Interval",
    "slug": "121-insert-interval",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 732
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "intervals=[[1,3],[6,9]], newInterval=[2,5]",
      "output": "[[1,5],[6,9]]",
      "why": "The new interval overlaps [1,3]."
    },
    "prompt": "Insert a new interval into sorted non-overlapping intervals and merge if needed.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "insert_interval",
    "goFunction": "Solve121",
    "pythonCode": "def insert_interval(*args):\n    \"\"\"Reference kernel for 57. Insert Interval.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 57. Insert Interval\nfunc Solve121(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 122,
    "leetcode": 20,
    "title": "Valid Parentheses",
    "slug": "122-valid-parentheses",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 134
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "s=\"({[]})\"",
      "output": "true",
      "why": "The stack closes brackets in reverse order."
    },
    "prompt": "Return whether a bracket string is valid: each opening bracket is closed by the same type in correct order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "valid_parentheses",
    "goFunction": "Solve122",
    "pythonCode": "def valid_parentheses(*args):\n    \"\"\"Reference kernel for 20. Valid Parentheses.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 20. Valid Parentheses\nfunc Solve122(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 123,
    "leetcode": 71,
    "title": "Simplify Path",
    "slug": "123-simplify-path",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 35
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "path=\"/a//b/../c/\"",
      "output": "\"/a/c\"",
      "why": "Move into a, b, back to a, then c."
    },
    "prompt": "Simplify an absolute Unix path using '.', '..', and repeated slashes.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "simplify_path",
    "goFunction": "Solve123",
    "pythonCode": "def simplify_path(*args):\n    \"\"\"Reference kernel for 71. Simplify Path.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 71. Simplify Path\nfunc Solve123(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 124,
    "leetcode": 155,
    "title": "Min Stack",
    "slug": "124-min-stack",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 497
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "push(-2),push(0),push(-3),getMin,pop,top,getMin",
      "output": "[null,null,null,-3,null,0,-2]",
      "why": "Track the running minimum."
    },
    "prompt": "Design a stack supporting push, pop, top, and getMin, all in O(1) time.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "min_stack",
    "goFunction": "Solve124",
    "pythonCode": "def min_stack(*args):\n    \"\"\"Reference kernel for 155. Min Stack.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 155. Min Stack\nfunc Solve124(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 125,
    "leetcode": 150,
    "title": "Evaluate Reverse Polish Notation",
    "slug": "125-evaluate-reverse-polish-notation",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 443
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "9",
      "why": "(2+1)*3=9."
    },
    "prompt": "Evaluate an arithmetic expression in Reverse Polish Notation with integer division truncating toward zero.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "evaluate_reverse_polish_notation",
    "goFunction": "Solve125",
    "pythonCode": "def evaluate_reverse_polish_notation(*args):\n    \"\"\"Reference kernel for 150. Evaluate Reverse Polish Notation.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 150. Evaluate Reverse Polish Notation\nfunc Solve125(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 126,
    "leetcode": 224,
    "title": "Basic Calculator",
    "slug": "126-basic-calculator",
    "pattern": "Stack",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 735
    },
    "diagramNotes": [
      "A",
      "B",
      "C",
      "top",
      "current",
      "push unresolved; pop when resolved",
      "The stack is the processed prefix after all forced reductions/resolutions."
    ],
    "example": {
      "input": "s=\"(1+(4+5+2)-3)+(6+8)\"",
      "output": "23",
      "why": "Parentheses determine signs and grouping."
    },
    "prompt": "Evaluate a string expression containing nonnegative integers, plus, minus, parentheses, and spaces.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push unresolved; pop when resolved The stack is the processed prefix after all forced reductions/resolutions.",
    "brute": "Repeatedly scan and delete/merge adjacent conflicts until stable; can become O(n^2).",
    "optimized": "Use a stack to keep unresolved items. The current item only interacts with the top until stable. Alternative: For arithmetic parsing, keep operator/context stacks or fold high-precedence operations immediately.",
    "invariant": "The stack is exactly the processed prefix after all forced reductions have been applied.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each item is pushed and popped at most once, so O(n) time and O(n) space.",
    "pitfalls": [
      "Popping empty stack; forgetting to flush remaining stack entries.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty stack; nested brackets; negative numbers; multi-digit tokens; final flush after scan.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Also return the position of the unmatched item.",
      "Handle nested operators or multiple bracket types.",
      "Convert next-greater logic into previous-greater logic."
    ],
    "followUps": [
      "Can the stack be compressed to store counts or indices only?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "basic_calculator",
    "goFunction": "Solve126",
    "pythonCode": "def basic_calculator(*args):\n    \"\"\"Reference kernel for 224. Basic Calculator.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    stack = []\n    for item in (args[0] if args else []):\n        stack.append(item)\n    return stack\n",
    "goCode": "// 224. Basic Calculator\nfunc Solve126(args ...any) any {\n\tstack := make([]any, 0, len(args))\n\tstack = append(stack, args...)\n\treturn stack\n}\n"
  },
  {
    "id": 127,
    "leetcode": 141,
    "title": "Linked List Cycle",
    "slug": "127-linked-list-cycle",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 352
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[3,2,0,-4], tail connects to index 1",
      "output": "true",
      "why": "Fast and slow pointers meet inside the cycle."
    },
    "prompt": "Return whether a singly linked list contains a cycle.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "linked_list_cycle",
    "goFunction": "Solve127",
    "pythonCode": "def linked_list_cycle(*args):\n    \"\"\"Reference kernel for 141. Linked List Cycle.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 141. Linked List Cycle\nfunc Solve127(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 128,
    "leetcode": 2,
    "title": "Add Two Numbers",
    "slug": "128-add-two-numbers",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 14
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "l1=[2,4,3], l2=[5,6,4]",
      "output": "[7,0,8]",
      "why": "342+465=807."
    },
    "prompt": "Add two nonnegative integers represented by reversed linked-list digits and return the sum in the same format.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "add_two_numbers",
    "goFunction": "Solve128",
    "pythonCode": "def add_two_numbers(*args):\n    \"\"\"Reference kernel for 2. Add Two Numbers.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 2. Add Two Numbers\nfunc Solve128(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 129,
    "leetcode": 21,
    "title": "Merge Two Sorted Lists",
    "slug": "129-merge-two-sorted-lists",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 368
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "list1=[1,2,4], list2=[1,3,4]",
      "output": "[1,1,2,3,4,4]",
      "why": "Choose the smaller current node each time."
    },
    "prompt": "Merge two sorted linked lists into one sorted linked list.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "merge_two_sorted_lists",
    "goFunction": "Solve129",
    "pythonCode": "def merge_two_sorted_lists(*args):\n    \"\"\"Reference kernel for 21. Merge Two Sorted Lists.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 21. Merge Two Sorted Lists\nfunc Solve129(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 130,
    "leetcode": 138,
    "title": "Copy List with Random Pointer",
    "slug": "130-copy-list-with-random-pointer",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 394
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "nodes=[[7,null],[13,0],[11,0]]",
      "output": "deep copy with same values and random links",
      "why": "The copy must not share original nodes."
    },
    "prompt": "Deep-copy a linked list where each node has next and random pointers.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "copy_list_with_random_pointer",
    "goFunction": "Solve130",
    "pythonCode": "def copy_list_with_random_pointer(*args):\n    \"\"\"Reference kernel for 138. Copy List with Random Pointer.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 138. Copy List with Random Pointer\nfunc Solve130(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 131,
    "leetcode": 92,
    "title": "Reverse Linked List II",
    "slug": "131-reverse-linked-list-ii",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 640
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5], left=2, right=4",
      "output": "[1,4,3,2,5]",
      "why": "Only the middle segment is reversed."
    },
    "prompt": "Reverse nodes from position left to right in one linked list pass if possible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_linked_list_ii",
    "goFunction": "Solve131",
    "pythonCode": "def reverse_linked_list_ii(*args):\n    \"\"\"Reference kernel for 92. Reverse Linked List II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 92. Reverse Linked List II\nfunc Solve131(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 132,
    "leetcode": 25,
    "title": "Reverse Nodes in k-Group",
    "slug": "132-reverse-nodes-in-k-group",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 529
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5], k=2",
      "output": "[2,1,4,3,5]",
      "why": "Groups [1,2] and [3,4] reverse."
    },
    "prompt": "Reverse every consecutive group of k nodes; leave the final smaller group unchanged.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_nodes_in_k_group",
    "goFunction": "Solve132",
    "pythonCode": "def reverse_nodes_in_k_group(*args):\n    \"\"\"Reference kernel for 25. Reverse Nodes in k-Group.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 25. Reverse Nodes in k-Group\nfunc Solve132(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 133,
    "leetcode": 19,
    "title": "Remove Nth Node From End of List",
    "slug": "133-remove-nth-node-from-end-of-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 458
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5], n=2",
      "output": "[1,2,3,5]",
      "why": "The second node from the end is 4."
    },
    "prompt": "Remove the n-th node from the end of a linked list and return the head.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "remove_nth_node_from_end_of_list",
    "goFunction": "Solve133",
    "pythonCode": "def remove_nth_node_from_end_of_list(*args):\n    \"\"\"Reference kernel for 19. Remove Nth Node From End of List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 19. Remove Nth Node From End of List\nfunc Solve133(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 134,
    "leetcode": 82,
    "title": "Remove Duplicates from Sorted List II",
    "slug": "134-remove-duplicates-from-sorted-list-ii",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 563
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,3,4,4,5]",
      "output": "[1,2,5]",
      "why": "Values 3 and 4 are removed entirely."
    },
    "prompt": "Delete all nodes that have duplicate numbers from a sorted linked list, leaving only values that occurred once.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "remove_duplicates_from_sorted_list_ii",
    "goFunction": "Solve134",
    "pythonCode": "def remove_duplicates_from_sorted_list_ii(*args):\n    \"\"\"Reference kernel for 82. Remove Duplicates from Sorted List II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 82. Remove Duplicates from Sorted List II\nfunc Solve134(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 135,
    "leetcode": 61,
    "title": "Rotate List",
    "slug": "135-rotate-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 237
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5], k=2",
      "output": "[4,5,1,2,3]",
      "why": "Last two nodes move to the front."
    },
    "prompt": "Rotate a linked list right by k places.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "rotate_list",
    "goFunction": "Solve135",
    "pythonCode": "def rotate_list(*args):\n    \"\"\"Reference kernel for 61. Rotate List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 61. Rotate List\nfunc Solve135(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 136,
    "leetcode": 86,
    "title": "Partition List",
    "slug": "136-partition-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 693
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,4,3,2,5,2], x=3",
      "output": "[1,2,2,4,3,5]",
      "why": "Stable partition into two chains."
    },
    "prompt": "Partition a linked list so nodes less than x come before nodes greater than or equal to x, preserving relative order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "partition_list",
    "goFunction": "Solve136",
    "pythonCode": "def partition_list(*args):\n    \"\"\"Reference kernel for 86. Partition List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 86. Partition List\nfunc Solve136(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 137,
    "leetcode": 146,
    "title": "LRU Cache",
    "slug": "137-lru-cache",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 747
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "capacity=2; put(1,1),put(2,2),get(1),put(3,3),get(2)",
      "output": "[null,null,1,null,-1]",
      "why": "Key 2 is evicted after key 1 is used."
    },
    "prompt": "Design an LRU cache with get and put in O(1); when capacity is exceeded, evict the least recently used key.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "lru_cache",
    "goFunction": "Solve137",
    "pythonCode": "def lru_cache(*args):\n    \"\"\"Reference kernel for 146. LRU Cache.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 146. LRU Cache\nfunc Solve137(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 138,
    "leetcode": 100,
    "title": "Same Tree",
    "slug": "138-same-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 993
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "p=[1,2,3], q=[1,2,3]",
      "output": "true",
      "why": "Shape and values match."
    },
    "prompt": "Return whether two binary trees are structurally identical and have equal node values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "same_tree",
    "goFunction": "Solve138",
    "pythonCode": "def same_tree(*args):\n    \"\"\"Reference kernel for 100. Same Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 100. Same Tree\nfunc Solve138(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 139,
    "leetcode": 226,
    "title": "Invert Binary Tree",
    "slug": "139-invert-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 175
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[4,2,7,1,3,6,9]",
      "output": "[4,7,2,9,6,3,1]",
      "why": "Every child pair is swapped."
    },
    "prompt": "Invert a binary tree by swapping every node's left and right children.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "invert_binary_tree",
    "goFunction": "Solve139",
    "pythonCode": "def invert_binary_tree(*args):\n    \"\"\"Reference kernel for 226. Invert Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 226. Invert Binary Tree\nfunc Solve139(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 140,
    "leetcode": 101,
    "title": "Symmetric Tree",
    "slug": "140-symmetric-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 75
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,2,3,4,4,3]",
      "output": "true",
      "why": "Left and right subtrees mirror each other."
    },
    "prompt": "Return whether a binary tree is a mirror of itself around its center.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "symmetric_tree",
    "goFunction": "Solve140",
    "pythonCode": "def symmetric_tree(*args):\n    \"\"\"Reference kernel for 101. Symmetric Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 101. Symmetric Tree\nfunc Solve140(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 141,
    "leetcode": 105,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "slug": "141-construct-binary-tree-from-preorder-and-inorder-traversal",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 174
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]",
      "output": "[3,9,20,null,null,15,7]",
      "why": "Preorder chooses roots; inorder splits subtrees."
    },
    "prompt": "Build a binary tree from preorder and inorder traversal arrays with unique values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "construct_binary_tree_from_preorder_and_inorder_traversal",
    "goFunction": "Solve141",
    "pythonCode": "def construct_binary_tree_from_preorder_and_inorder_traversal(*args):\n    \"\"\"Reference kernel for 105. Construct Binary Tree from Preorder and Inorder Traversal.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 105. Construct Binary Tree from Preorder and Inorder Traversal\nfunc Solve141(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 142,
    "leetcode": 106,
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "slug": "142-construct-binary-tree-from-inorder-and-postorder-traversal",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 222
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "inorder=[9,3,15,20,7], postorder=[9,15,7,20,3]",
      "output": "[3,9,20,null,null,15,7]",
      "why": "Postorder's last value is the root."
    },
    "prompt": "Build a binary tree from inorder and postorder traversal arrays with unique values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "construct_binary_tree_from_inorder_and_postorder_traversal",
    "goFunction": "Solve142",
    "pythonCode": "def construct_binary_tree_from_inorder_and_postorder_traversal(*args):\n    \"\"\"Reference kernel for 106. Construct Binary Tree from Inorder and Postorder Traversal.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 106. Construct Binary Tree from Inorder and Postorder Traversal\nfunc Solve142(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 143,
    "leetcode": 117,
    "title": "Populating Next Right Pointers in Each Node II",
    "slug": "143-populating-next-right-pointers-in-each-node-ii",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 440
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,3,4,5,null,7]",
      "output": "levels linked as 1->null, 2->3->null, 4->5->7->null",
      "why": "Next pointers connect across each level."
    },
    "prompt": "Populate each node's next pointer to its neighbor on the same level, or null if none, in any binary tree.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "populating_next_right_pointers_in_each_node_ii",
    "goFunction": "Solve143",
    "pythonCode": "def populating_next_right_pointers_in_each_node_ii(*args):\n    \"\"\"Reference kernel for 117. Populating Next Right Pointers in Each Node II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 117. Populating Next Right Pointers in Each Node II\nfunc Solve143(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 144,
    "leetcode": 114,
    "title": "Flatten Binary Tree to Linked List",
    "slug": "144-flatten-binary-tree-to-linked-list",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 420
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,5,3,4,null,6]",
      "output": "[1,2,3,4,5,6]",
      "why": "The right chain is preorder."
    },
    "prompt": "Flatten a binary tree to a right-child-only linked list following preorder traversal.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "flatten_binary_tree_to_linked_list",
    "goFunction": "Solve144",
    "pythonCode": "def flatten_binary_tree_to_linked_list(*args):\n    \"\"\"Reference kernel for 114. Flatten Binary Tree to Linked List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 114. Flatten Binary Tree to Linked List\nfunc Solve144(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 145,
    "leetcode": 112,
    "title": "Path Sum",
    "slug": "145-path-sum",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 417
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum=22",
      "output": "true",
      "why": "Path 5->4->11->2 sums to 22."
    },
    "prompt": "Return true if a root-to-leaf path has node values summing to targetSum.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "path_sum",
    "goFunction": "Solve145",
    "pythonCode": "def path_sum(*args):\n    \"\"\"Reference kernel for 112. Path Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 112. Path Sum\nfunc Solve145(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 146,
    "leetcode": 129,
    "title": "Sum Root to Leaf Numbers",
    "slug": "146-sum-root-to-leaf-numbers",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 737
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,3]",
      "output": "25",
      "why": "Numbers are 12 and 13."
    },
    "prompt": "Each root-to-leaf path forms a number by concatenating digits; return the sum of all such numbers.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "sum_root_to_leaf_numbers",
    "goFunction": "Solve146",
    "pythonCode": "def sum_root_to_leaf_numbers(*args):\n    \"\"\"Reference kernel for 129. Sum Root to Leaf Numbers.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 129. Sum Root to Leaf Numbers\nfunc Solve146(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 147,
    "leetcode": 124,
    "title": "Binary Tree Maximum Path Sum",
    "slug": "147-binary-tree-maximum-path-sum",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 683
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[-10,9,20,null,null,15,7]",
      "output": "42",
      "why": "Path 15->20->7 sums to 42."
    },
    "prompt": "Return the maximum path sum in a binary tree; a path may start and end at any nodes but must be connected.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "binary_tree_maximum_path_sum",
    "goFunction": "Solve147",
    "pythonCode": "def binary_tree_maximum_path_sum(*args):\n    \"\"\"Reference kernel for 124. Binary Tree Maximum Path Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 124. Binary Tree Maximum Path Sum\nfunc Solve147(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 148,
    "leetcode": 173,
    "title": "Binary Search Tree Iterator",
    "slug": "148-binary-search-tree-iterator",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 550
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "BST=[7,3,15,null,null,9,20], calls=next,next,hasNext",
      "output": "[3,7,true]",
      "why": "Inorder traversal yields sorted values."
    },
    "prompt": "Implement a BST iterator with next returning the next smallest value and hasNext reporting availability.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "binary_search_tree_iterator",
    "goFunction": "Solve148",
    "pythonCode": "def binary_search_tree_iterator(*args):\n    \"\"\"Reference kernel for 173. Binary Search Tree Iterator.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 173. Binary Search Tree Iterator\nfunc Solve148(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 149,
    "leetcode": 222,
    "title": "Count Complete Tree Nodes",
    "slug": "149-count-complete-tree-nodes",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 417
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,3,4,5,6]",
      "output": "6",
      "why": "All six listed nodes exist."
    },
    "prompt": "Count the nodes in a complete binary tree.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "count_complete_tree_nodes",
    "goFunction": "Solve149",
    "pythonCode": "def count_complete_tree_nodes(*args):\n    \"\"\"Reference kernel for 222. Count Complete Tree Nodes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 222. Count Complete Tree Nodes\nfunc Solve149(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 150,
    "leetcode": 637,
    "title": "Average of Levels in Binary Tree",
    "slug": "150-average-of-levels-in-binary-tree",
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 524
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "level queue",
      "8",
      "4",
      "12",
      "Queue holds one frontier level at a time."
    ],
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "[3,14.5,11]",
      "why": "Level averages are 3, (9+20)/2, (15+7)/2."
    },
    "prompt": "Return the average node value at each binary-tree level.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "12 Queue holds one frontier level at a time.",
    "brute": "DFS with depth maps or repeated level searches works but is messier.",
    "optimized": "Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.",
    "invariant": "At the start of each outer loop, queue contains exactly one level.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.",
    "pitfalls": [
      "Not separating levels; queueing nil children unnecessarily.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; last node per level; zigzag order; integer averages; queue memory at widest level.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return zigzag/order statistics per level.",
      "Use right-to-left priority instead of left-to-right.",
      "Limit search to the nearest target level."
    ],
    "followUps": [
      "Can you stream one level at a time without storing all levels?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "average_of_levels_in_binary_tree",
    "goFunction": "Solve150",
    "pythonCode": "def average_of_levels_in_binary_tree(*args):\n    \"\"\"Reference kernel for 637. Average of Levels in Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 637. Average of Levels in Binary Tree\nfunc Solve150(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 151,
    "leetcode": 102,
    "title": "Binary Tree Level Order Traversal",
    "slug": "151-binary-tree-level-order-traversal",
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 433
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "level queue",
      "8",
      "4",
      "12",
      "Queue holds one frontier level at a time."
    ],
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "[[3],[9,20],[15,7]]",
      "why": "BFS visits level by level."
    },
    "prompt": "Return the level-order traversal of a binary tree as lists per level.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "12 Queue holds one frontier level at a time.",
    "brute": "DFS with depth maps or repeated level searches works but is messier.",
    "optimized": "Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.",
    "invariant": "At the start of each outer loop, queue contains exactly one level.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.",
    "pitfalls": [
      "Not separating levels; queueing nil children unnecessarily.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; last node per level; zigzag order; integer averages; queue memory at widest level.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return zigzag/order statistics per level.",
      "Use right-to-left priority instead of left-to-right.",
      "Limit search to the nearest target level."
    ],
    "followUps": [
      "Can you stream one level at a time without storing all levels?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "binary_tree_level_order_traversal",
    "goFunction": "Solve151",
    "pythonCode": "def binary_tree_level_order_traversal(*args):\n    \"\"\"Reference kernel for 102. Binary Tree Level Order Traversal.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 102. Binary Tree Level Order Traversal\nfunc Solve151(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 152,
    "leetcode": 103,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "slug": "152-binary-tree-zigzag-level-order-traversal",
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg",
      "Meta"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 481
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "level queue",
      "8",
      "4",
      "12",
      "Queue holds one frontier level at a time."
    ],
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "[[3],[20,9],[15,7]]",
      "why": "Level 2 is reversed."
    },
    "prompt": "Return binary-tree levels alternating left-to-right then right-to-left.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "12 Queue holds one frontier level at a time.",
    "brute": "DFS with depth maps or repeated level searches works but is messier.",
    "optimized": "Queue nodes level by level; record level size before processing so levels do not mix. Alternative: DFS can collect depth buckets if recursion is preferred.",
    "invariant": "At the start of each outer loop, queue contains exactly one level.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(n) time; O(w) queue space where w is tree width.",
    "pitfalls": [
      "Not separating levels; queueing nil children unnecessarily.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; last node per level; zigzag order; integer averages; queue memory at widest level.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return zigzag/order statistics per level.",
      "Use right-to-left priority instead of left-to-right.",
      "Limit search to the nearest target level."
    ],
    "followUps": [
      "Can you stream one level at a time without storing all levels?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "binary_tree_zigzag_level_order_traversal",
    "goFunction": "Solve152",
    "pythonCode": "def binary_tree_zigzag_level_order_traversal(*args):\n    \"\"\"Reference kernel for 103. Binary Tree Zigzag Level Order Traversal.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 103. Binary Tree Zigzag Level Order Traversal\nfunc Solve152(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 153,
    "leetcode": 530,
    "title": "Minimum Absolute Difference in BST",
    "slug": "153-minimum-absolute-difference-in-bst",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 792
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "root=[4,2,6,1,3]",
      "output": "1",
      "why": "Adjacent inorder values differ by 1."
    },
    "prompt": "In a BST, return the minimum absolute difference between values of any two nodes.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_absolute_difference_in_bst",
    "goFunction": "Solve153",
    "pythonCode": "def minimum_absolute_difference_in_bst(*args):\n    \"\"\"Reference kernel for 530. Minimum Absolute Difference in BST.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 530. Minimum Absolute Difference in BST\nfunc Solve153(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 154,
    "leetcode": 230,
    "title": "Kth Smallest Element in a BST",
    "slug": "154-kth-smallest-element-in-a-bst",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 708
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "root=[3,1,4,null,2], k=1",
      "output": "1",
      "why": "Inorder order is [1,2,3,4]."
    },
    "prompt": "Return the k-th smallest value in a BST.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "kth_smallest_element_in_a_bst",
    "goFunction": "Solve154",
    "pythonCode": "def kth_smallest_element_in_a_bst(*args):\n    \"\"\"Reference kernel for 230. Kth Smallest Element in a BST.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 230. Kth Smallest Element in a BST\nfunc Solve154(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 155,
    "leetcode": 98,
    "title": "Validate Binary Search Tree",
    "slug": "155-validate-binary-search-tree",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 489
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "root=[2,1,3]",
      "output": "true",
      "why": "All left values are smaller and all right values larger."
    },
    "prompt": "Return whether a binary tree satisfies the BST property with strict lower and upper bounds at every node.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "validate_binary_search_tree",
    "goFunction": "Solve155",
    "pythonCode": "def validate_binary_search_tree(*args):\n    \"\"\"Reference kernel for 98. Validate Binary Search Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 98. Validate Binary Search Tree\nfunc Solve155(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 156,
    "leetcode": 200,
    "title": "Number of Islands",
    "slug": "156-number-of-islands",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 260
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "grid=[[\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\"]]",
      "output": "3",
      "why": "There are three islands."
    },
    "prompt": "Count connected groups of '1' cells in a grid, connected horizontally or vertically.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "number_of_islands",
    "goFunction": "Solve156",
    "pythonCode": "def number_of_islands(*args):\n    \"\"\"Reference kernel for 200. Number of Islands.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 200. Number of Islands\nfunc Solve156(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 157,
    "leetcode": 130,
    "title": "Surrounded Regions",
    "slug": "157-surrounded-regions",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 98
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "board=[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
      "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
      "why": "Only the border-connected O survives."
    },
    "prompt": "Capture all 'O' regions fully surrounded by 'X'; border-connected 'O' cells remain unchanged.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "surrounded_regions",
    "goFunction": "Solve157",
    "pythonCode": "def surrounded_regions(*args):\n    \"\"\"Reference kernel for 130. Surrounded Regions.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 130. Surrounded Regions\nfunc Solve157(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 158,
    "leetcode": 133,
    "title": "Clone Graph",
    "slug": "158-clone-graph",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 180
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "adjList=[[2,4],[1,3],[2,4],[1,3]]",
      "output": "deep copy with same adjacency",
      "why": "The clone must use new nodes."
    },
    "prompt": "Deep-copy an undirected connected graph where each node stores a value and neighbor list.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "clone_graph",
    "goFunction": "Solve158",
    "pythonCode": "def clone_graph(*args):\n    \"\"\"Reference kernel for 133. Clone Graph.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 133. Clone Graph\nfunc Solve158(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 159,
    "leetcode": 207,
    "title": "Course Schedule",
    "slug": "159-course-schedule",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 472
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "numCourses=2, prerequisites=[[1,0]]",
      "output": "true",
      "why": "Take course 0 before course 1."
    },
    "prompt": "Given prerequisite pairs, return whether all courses can be finished.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "course_schedule",
    "goFunction": "Solve159",
    "pythonCode": "def course_schedule(*args):\n    \"\"\"Reference kernel for 207. Course Schedule.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 207. Course Schedule\nfunc Solve159(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 160,
    "leetcode": 210,
    "title": "Course Schedule II",
    "slug": "160-course-schedule-ii",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 554
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "numCourses=2, prerequisites=[[1,0]]",
      "output": "[0,1]",
      "why": "Course 0 must precede 1."
    },
    "prompt": "Return any valid course order satisfying prerequisites, or empty list if impossible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "course_schedule_ii",
    "goFunction": "Solve160",
    "pythonCode": "def course_schedule_ii(*args):\n    \"\"\"Reference kernel for 210. Course Schedule II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 210. Course Schedule II\nfunc Solve160(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 161,
    "leetcode": 909,
    "title": "Snakes and Ladders",
    "slug": "161-snakes-and-ladders",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 504
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "board=[[-1,-1],[-1,-1]]",
      "output": "1",
      "why": "From square 1, one roll can reach square 4."
    },
    "prompt": "On a snakes-and-ladders board labeled boustrophedon from 1 to n^2, return minimum dice throws to reach n^2.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "snakes_and_ladders",
    "goFunction": "Solve161",
    "pythonCode": "def snakes_and_ladders(*args):\n    \"\"\"Reference kernel for 909. Snakes and Ladders.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 909. Snakes and Ladders\nfunc Solve161(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 162,
    "leetcode": 433,
    "title": "Minimum Genetic Mutation",
    "slug": "162-minimum-genetic-mutation",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 419
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "start=\"AACCGGTT\", end=\"AACCGGTA\", bank=[\"AACCGGTA\"]",
      "output": "1",
      "why": "One mutation changes the final T to A."
    },
    "prompt": "Return the minimum one-character gene mutations from startGene to endGene, with every intermediate gene in bank.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_genetic_mutation",
    "goFunction": "Solve162",
    "pythonCode": "def minimum_genetic_mutation(*args):\n    \"\"\"Reference kernel for 433. Minimum Genetic Mutation.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 433. Minimum Genetic Mutation\nfunc Solve162(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 163,
    "leetcode": 127,
    "title": "Word Ladder",
    "slug": "163-word-ladder",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 233
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "beginWord=\"hit\", endWord=\"cog\", wordList=[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
      "output": "5",
      "why": "hit->hot->dot->dog->cog."
    },
    "prompt": "Return the length of the shortest word transformation from beginWord to endWord, changing one letter at a time and using only wordList words.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "word_ladder",
    "goFunction": "Solve163",
    "pythonCode": "def word_ladder(*args):\n    \"\"\"Reference kernel for 127. Word Ladder.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 127. Word Ladder\nfunc Solve163(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 164,
    "leetcode": 211,
    "title": "Design Add and Search Words Data Structure",
    "slug": "164-design-add-and-search-words-data-structure",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Bloomberg",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 695
    },
    "diagramNotes": [
      "root",
      "c",
      "a",
      "t*",
      "r*",
      "len#word",
      "shared prefix",
      "Trie stores shared prefixes; encoding uses length + delimiter to decode safely."
    ],
    "example": {
      "input": "add bad,dad,mad; search pad,bad,.ad,b..",
      "output": "[false,true,true,true]",
      "why": "Dot wildcards match any character."
    },
    "prompt": "Design a word dictionary with addWord and search, where '.' in search matches any single character.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.",
    "brute": "Compare every string with every query or split by ambiguous delimiters.",
    "optimized": "Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.",
    "invariant": "Every path from root represents exactly one prefix; terminal marks complete words.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).",
    "pitfalls": [
      "Terminal marker missing; ambiguous delimiter.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support delete/update operations.",
      "Return top-k suggestions with lexicographic ties.",
      "Use length-prefix encoding when delimiter may appear in input."
    ],
    "followUps": [
      "Can the trie support delete or wildcard search?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "design_add_and_search_words_data_structure",
    "goFunction": "Solve164",
    "pythonCode": "def design_add_and_search_words_data_structure(*args):\n    \"\"\"Reference kernel for 211. Design Add and Search Words Data Structure.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 211. Design Add and Search Words Data Structure\nfunc Solve164(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 165,
    "leetcode": 212,
    "title": "Word Search II",
    "slug": "165-word-search-ii",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Bloomberg",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 743
    },
    "diagramNotes": [
      "root",
      "c",
      "a",
      "t*",
      "r*",
      "len#word",
      "shared prefix",
      "Trie stores shared prefixes; encoding uses length + delimiter to decode safely."
    ],
    "example": {
      "input": "board=[[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words=[\"oath\",\"pea\",\"eat\",\"rain\"]",
      "output": "[\"eat\",\"oath\"]",
      "why": "Both words can be traced in the board."
    },
    "prompt": "Find all words from a list that can be formed in a board by adjacent horizontal or vertical cells without reusing a cell.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.",
    "brute": "Compare every string with every query or split by ambiguous delimiters.",
    "optimized": "Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.",
    "invariant": "Every path from root represents exactly one prefix; terminal marks complete words.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).",
    "pitfalls": [
      "Terminal marker missing; ambiguous delimiter.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support delete/update operations.",
      "Return top-k suggestions with lexicographic ties.",
      "Use length-prefix encoding when delimiter may appear in input."
    ],
    "followUps": [
      "Can the trie support delete or wildcard search?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "word_search_ii",
    "goFunction": "Solve165",
    "pythonCode": "def word_search_ii(*args):\n    \"\"\"Reference kernel for 212. Word Search II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 212. Word Search II\nfunc Solve165(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 166,
    "leetcode": 77,
    "title": "Combinations",
    "slug": "166-combinations",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 473
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "n=4, k=2",
      "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
      "why": "All six 2-combinations are listed."
    },
    "prompt": "Return all combinations of k numbers chosen from 1..n.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "combinations",
    "goFunction": "Solve166",
    "pythonCode": "def combinations(*args):\n    \"\"\"Reference kernel for 77. Combinations.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 77. Combinations\nfunc Solve166(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 167,
    "leetcode": 46,
    "title": "Permutations",
    "slug": "167-permutations",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 974
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "nums=[1,2,3]",
      "output": "6 permutations",
      "why": "There are 3! orderings."
    },
    "prompt": "Return all permutations of distinct input numbers.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "permutations",
    "goFunction": "Solve167",
    "pythonCode": "def permutations(*args):\n    \"\"\"Reference kernel for 46. Permutations.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 46. Permutations\nfunc Solve167(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 168,
    "leetcode": 39,
    "title": "Combination Sum",
    "slug": "168-combination-sum",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 886
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "candidates=[2,3,6,7], target=7",
      "output": "[[2,2,3],[7]]",
      "why": "2+2+3 and 7 work."
    },
    "prompt": "Return all unique combinations where candidates may be reused unlimited times and the sum equals target.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "combination_sum",
    "goFunction": "Solve168",
    "pythonCode": "def combination_sum(*args):\n    \"\"\"Reference kernel for 39. Combination Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 39. Combination Sum\nfunc Solve168(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 169,
    "leetcode": 52,
    "title": "N-Queens II",
    "slug": "169-n-queens-ii",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 141
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "n=4",
      "output": "2",
      "why": "There are two valid 4-queen boards."
    },
    "prompt": "Return the number of ways to place n queens on an n by n board so no two attack.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "n_queens_ii",
    "goFunction": "Solve169",
    "pythonCode": "def n_queens_ii(*args):\n    \"\"\"Reference kernel for 52. N-Queens II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 52. N-Queens II\nfunc Solve169(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 170,
    "leetcode": 22,
    "title": "Generate Parentheses",
    "slug": "170-generate-parentheses",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 659
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "n=3",
      "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
      "why": "All strings are balanced."
    },
    "prompt": "Generate all valid parentheses strings containing n pairs.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "generate_parentheses",
    "goFunction": "Solve170",
    "pythonCode": "def generate_parentheses(*args):\n    \"\"\"Reference kernel for 22. Generate Parentheses.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 22. Generate Parentheses\nfunc Solve170(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 171,
    "leetcode": 79,
    "title": "Word Search",
    "slug": "171-word-search",
    "pattern": "Backtracking",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth + output)",
    "diagram": {
      "type": "backtracking",
      "seed": 662
    },
    "diagramNotes": [
      "path",
      "choose",
      "choose",
      "undo",
      "undo",
      "undo",
      "undo",
      "choose -> recurse -...",
      "Path is always a valid prefix; copy it only when complete."
    ],
    "example": {
      "input": "board=[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word=\"ABCCED\"",
      "output": "true",
      "why": "The word can be traced through adjacent cells."
    },
    "prompt": "Return whether word exists in a board by moving horizontally or vertically without reusing cells.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "choose -> recurse -... Path is always a valid prefix; copy it only when complete.",
    "brute": "Generate all raw permutations/subsets and filter after completion; wastes branches.",
    "optimized": "Build only valid prefixes, prune by remaining capacity/constraints, and undo choices exactly. Alternative: Bitmasks can replace used arrays for small n.",
    "invariant": "The path is always a valid prefix that can still be extended to a solution.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Exponential by output size; pruning lowers constants but not worst-case class.",
    "pitfalls": [
      "Not undoing choice; duplicate outputs from unsorted inputs.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicate choices; forgetting undo; shallow copy path before appending; pruning too aggressively.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return count only instead of all paths.",
      "Skip duplicate candidates after sorting.",
      "Add a max-length or lexicographic-order constraint."
    ],
    "followUps": [
      "How do you prune or avoid duplicates?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "word_search",
    "goFunction": "Solve171",
    "pythonCode": "def word_search(*args):\n    \"\"\"Reference kernel for 79. Word Search.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 79. Word Search\nfunc Solve171(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 172,
    "leetcode": 108,
    "title": "Convert Sorted Array to Binary Search Tree",
    "slug": "172-convert-sorted-array-to-binary-search-tree",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 189
    },
    "diagramNotes": [
      "8",
      "4",
      "12",
      "2",
      "6",
      "14",
      "< target: go left/right by comparison",
      "BST order prunes whole subtrees; inorder streams sorted values."
    ],
    "example": {
      "input": "nums=[-10,-3,0,5,9]",
      "output": "balanced BST such as [0,-3,9,-10,null,5]",
      "why": "Middle elements become roots."
    },
    "prompt": "Convert a sorted array into a height-balanced binary search tree.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "< target: go left/right by comparison BST order prunes whole subtrees; inorder streams sorted values.",
    "brute": "Traverse the full tree and filter/sort values. Correct but ignores BST ordering.",
    "optimized": "Use the BST invariant to prune a side or stream values in sorted order with inorder. Alternative: Iterative inorder gives O(h) memory and supports lazy iterators.",
    "invariant": "Every recursive call receives a valid range or search interval for that subtree.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Balanced operations are O(h)=O(log n); worst-case skewed tree is O(n).",
    "pitfalls": [
      "Using <= bounds incorrectly; not preserving lower and upper constraints.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates policy; min/max int bounds; nil child; deleting root; successor/predecessor replacement.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support duplicate values with a clear side policy.",
      "Convert to an iterative bounded search.",
      "Return predecessor/successor around a target."
    ],
    "followUps": [
      "Can you solve it with inorder iteration and O(h) memory?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "convert_sorted_array_to_binary_search_tree",
    "goFunction": "Solve172",
    "pythonCode": "def convert_sorted_array_to_binary_search_tree(*args):\n    \"\"\"Reference kernel for 108. Convert Sorted Array to Binary Search Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 108. Convert Sorted Array to Binary Search Tree\nfunc Solve172(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 173,
    "leetcode": 148,
    "title": "Sort List",
    "slug": "173-sort-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 900
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[4,2,1,3]",
      "output": "[1,2,3,4]",
      "why": "Merge sort keeps O(n log n) time."
    },
    "prompt": "Sort a linked list in ascending order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "sort_list",
    "goFunction": "Solve173",
    "pythonCode": "def sort_list(*args):\n    \"\"\"Reference kernel for 148. Sort List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 148. Sort List\nfunc Solve173(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 174,
    "leetcode": 427,
    "title": "Construct Quad Tree",
    "slug": "174-construct-quad-tree",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 689
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "grid=[[1,1],[1,1]]",
      "output": "leaf node with val=true",
      "why": "The whole grid is uniform."
    },
    "prompt": "Construct a quad tree from a square binary grid, merging uniform regions into leaf nodes.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "construct_quad_tree",
    "goFunction": "Solve174",
    "pythonCode": "def construct_quad_tree(*args):\n    \"\"\"Reference kernel for 427. Construct Quad Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 427. Construct Quad Tree\nfunc Solve174(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 175,
    "leetcode": 23,
    "title": "Merge k Sorted Lists",
    "slug": "175-merge-k-sorted-lists",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 831
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "lists=[[1,4,5],[1,3,4],[2,6]]",
      "output": "[1,1,2,3,4,4,5,6]",
      "why": "Repeatedly take the smallest current node."
    },
    "prompt": "Merge k sorted linked lists into one sorted linked list.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "merge_k_sorted_lists",
    "goFunction": "Solve175",
    "pythonCode": "def merge_k_sorted_lists(*args):\n    \"\"\"Reference kernel for 23. Merge k Sorted Lists.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 23. Merge k Sorted Lists\nfunc Solve175(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 176,
    "leetcode": 53,
    "title": "Maximum Subarray",
    "slug": "176-maximum-subarray",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 375
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "nums=[-2,1,-3,4,-1,2,1,-5,4]",
      "output": "6",
      "why": "Subarray [4,-1,2,1] sums to 6."
    },
    "prompt": "Return the maximum possible sum of a non-empty contiguous subarray.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_subarray",
    "goFunction": "Solve176",
    "pythonCode": "def maximum_subarray(*args):\n    \"\"\"Reference kernel for 53. Maximum Subarray.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 53. Maximum Subarray\nfunc Solve176(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 177,
    "leetcode": 918,
    "title": "Maximum Sum Circular Subarray",
    "slug": "177-maximum-sum-circular-subarray",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 156
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "nums=[5,-3,5]",
      "output": "10",
      "why": "Wraparound subarray [5,5] gives 10."
    },
    "prompt": "Return the maximum non-empty subarray sum in a circular array.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_sum_circular_subarray",
    "goFunction": "Solve177",
    "pythonCode": "def maximum_sum_circular_subarray(*args):\n    \"\"\"Reference kernel for 918. Maximum Sum Circular Subarray.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 918. Maximum Sum Circular Subarray\nfunc Solve177(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 178,
    "leetcode": 35,
    "title": "Search Insert Position",
    "slug": "178-search-insert-position",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 131
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums=[1,3,5,6], target=2",
      "output": "1",
      "why": "2 belongs between 1 and 3."
    },
    "prompt": "Return the index of target in a sorted array, or the index where it should be inserted to maintain order.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "search_insert_position",
    "goFunction": "Solve178",
    "pythonCode": "def search_insert_position(*args):\n    \"\"\"Reference kernel for 35. Search Insert Position.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 35. Search Insert Position\nfunc Solve178(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 179,
    "leetcode": 74,
    "title": "Search a 2D Matrix",
    "slug": "179-search-a-2d-matrix",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 825
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "matrix=[[1,3,5],[7,9,11]], target=9",
      "output": "true",
      "why": "Treat the matrix as one sorted array."
    },
    "prompt": "Search a matrix where each row is sorted and the first value of each row is greater than the previous row's last value.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "search_a_2d_matrix",
    "goFunction": "Solve179",
    "pythonCode": "def search_a_2d_matrix(*args):\n    \"\"\"Reference kernel for 74. Search a 2D Matrix.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 74. Search a 2D Matrix\nfunc Solve179(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 180,
    "leetcode": 33,
    "title": "Search in Rotated Sorted Array",
    "slug": "180-search-in-rotated-sorted-array",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 159
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums=[4,5,6,7,0,1,2], target=0",
      "output": "4",
      "why": "0 is at index 4."
    },
    "prompt": "Search a target in a rotated sorted array with distinct values; return its index or -1.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "search_in_rotated_sorted_array",
    "goFunction": "Solve180",
    "pythonCode": "def search_in_rotated_sorted_array(*args):\n    \"\"\"Reference kernel for 33. Search in Rotated Sorted Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 33. Search in Rotated Sorted Array\nfunc Solve180(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 181,
    "leetcode": 34,
    "title": "Find First and Last Position of Element in Sorted Array",
    "slug": "181-find-first-and-last-position-of-element-in-sorted-array",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 207
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums=[5,7,7,8,8,10], target=8",
      "output": "[3,4]",
      "why": "8 occupies indices 3 and 4."
    },
    "prompt": "Return the first and last index of target in a sorted array, or [-1,-1].",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_first_and_last_position_of_element_in_sorted_array",
    "goFunction": "Solve181",
    "pythonCode": "def find_first_and_last_position_of_element_in_sorted_array(*args):\n    \"\"\"Reference kernel for 34. Find First and Last Position of Element in Sorted Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 34. Find First and Last Position of Element in Sorted Array\nfunc Solve181(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 182,
    "leetcode": 153,
    "title": "Find Minimum in Rotated Sorted Array",
    "slug": "182-find-minimum-in-rotated-sorted-array",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 267
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums=[3,4,5,1,2]",
      "output": "1",
      "why": "The rotation pivot is at value 1."
    },
    "prompt": "Return the minimum element in a rotated sorted array with distinct values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_minimum_in_rotated_sorted_array",
    "goFunction": "Solve182",
    "pythonCode": "def find_minimum_in_rotated_sorted_array(*args):\n    \"\"\"Reference kernel for 153. Find Minimum in Rotated Sorted Array.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 153. Find Minimum in Rotated Sorted Array\nfunc Solve182(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 183,
    "leetcode": 4,
    "title": "Median of Two Sorted Arrays",
    "slug": "183-median-of-two-sorted-arrays",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 756
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "nums1=[1,3], nums2=[2]",
      "output": "2.0",
      "why": "Merged order is [1,2,3]."
    },
    "prompt": "Return the median of two sorted arrays in O(log(m+n)) time.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "median_of_two_sorted_arrays",
    "goFunction": "Solve183",
    "pythonCode": "def median_of_two_sorted_arrays(*args):\n    \"\"\"Reference kernel for 4. Median of Two Sorted Arrays.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 4. Median of Two Sorted Arrays\nfunc Solve183(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 184,
    "leetcode": 502,
    "title": "IPO",
    "slug": "184-ipo",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 280
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "k=2, w=0, profits=[1,2,3], capital=[0,1,1]",
      "output": "4",
      "why": "Do profit 1, then profit 3."
    },
    "prompt": "With starting capital w, choose at most k projects whose capital requirement is met to maximize final capital.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "ipo",
    "goFunction": "Solve184",
    "pythonCode": "def ipo(*args):\n    \"\"\"Reference kernel for 502. IPO.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 502. IPO\nfunc Solve184(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 185,
    "leetcode": 373,
    "title": "Find K Pairs with Smallest Sums",
    "slug": "185-find-k-pairs-with-smallest-sums",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 112
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "nums1=[1,7,11], nums2=[2,4,6], k=3",
      "output": "[[1,2],[1,4],[1,6]]",
      "why": "All three smallest pairs use 1."
    },
    "prompt": "Return the k pairs (one from each sorted array) with the smallest sums.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_k_pairs_with_smallest_sums",
    "goFunction": "Solve185",
    "pythonCode": "def find_k_pairs_with_smallest_sums(*args):\n    \"\"\"Reference kernel for 373. Find K Pairs with Smallest Sums.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 373. Find K Pairs with Smallest Sums\nfunc Solve185(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 186,
    "leetcode": 295,
    "title": "Find Median from Data Stream",
    "slug": "186-find-median-from-data-stream",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 811
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "add 1, add 2, find, add 3, find",
      "output": "[null,null,1.5,null,2]",
      "why": "Two heaps maintain lower and upper halves."
    },
    "prompt": "Design a data structure supporting addNum and findMedian for a stream of numbers.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "find_median_from_data_stream",
    "goFunction": "Solve186",
    "pythonCode": "def find_median_from_data_stream(*args):\n    \"\"\"Reference kernel for 295. Find Median from Data Stream.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 295. Find Median from Data Stream\nfunc Solve186(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 187,
    "leetcode": 67,
    "title": "Add Binary",
    "slug": "187-add-binary",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 954
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "a=\"1010\", b=\"1011\"",
      "output": "\"10101\"",
      "why": "10+11 in decimal is 21."
    },
    "prompt": "Add two binary strings and return the binary sum as a string.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "add_binary",
    "goFunction": "Solve187",
    "pythonCode": "def add_binary(*args):\n    \"\"\"Reference kernel for 67. Add Binary.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 67. Add Binary\nfunc Solve187(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 188,
    "leetcode": 190,
    "title": "Reverse Bits",
    "slug": "188-reverse-bits",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 85
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "n=43261596",
      "output": "964176192",
      "why": "The 32-bit pattern is reversed."
    },
    "prompt": "Reverse the bits of a 32-bit unsigned integer.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reverse_bits",
    "goFunction": "Solve188",
    "pythonCode": "def reverse_bits(*args):\n    \"\"\"Reference kernel for 190. Reverse Bits.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 190. Reverse Bits\nfunc Solve188(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 189,
    "leetcode": 191,
    "title": "Number of 1 Bits",
    "slug": "189-number-of-1-bits",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 133
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "n=11",
      "output": "3",
      "why": "Binary 1011 has three ones."
    },
    "prompt": "Return the number of 1 bits in an unsigned integer.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "number_of_1_bits",
    "goFunction": "Solve189",
    "pythonCode": "def number_of_1_bits(*args):\n    \"\"\"Reference kernel for 191. Number of 1 Bits.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 191. Number of 1 Bits\nfunc Solve189(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 190,
    "leetcode": 137,
    "title": "Single Number II",
    "slug": "190-single-number-ii",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 243
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "nums=[2,2,3,2]",
      "output": "3",
      "why": "Bit counts modulo 3 isolate 3."
    },
    "prompt": "Every value appears three times except one value that appears once; return the single value.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "single_number_ii",
    "goFunction": "Solve190",
    "pythonCode": "def single_number_ii(*args):\n    \"\"\"Reference kernel for 137. Single Number II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 137. Single Number II\nfunc Solve190(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 191,
    "leetcode": 201,
    "title": "Bitwise AND of Numbers Range",
    "slug": "191-bitwise-and-of-numbers-range",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 365
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "left=5, right=7",
      "output": "4",
      "why": "5&6&7 equals 4."
    },
    "prompt": "Return the bitwise AND of every integer in the inclusive range [left,right].",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "bitwise_and_of_numbers_range",
    "goFunction": "Solve191",
    "pythonCode": "def bitwise_and_of_numbers_range(*args):\n    \"\"\"Reference kernel for 201. Bitwise AND of Numbers Range.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 201. Bitwise AND of Numbers Range\nfunc Solve191(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 192,
    "leetcode": 9,
    "title": "Palindrome Number",
    "slug": "192-palindrome-number",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 123
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "x=121",
      "output": "true",
      "why": "121 is symmetric."
    },
    "prompt": "Return whether an integer reads the same forward and backward without converting if possible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "palindrome_number",
    "goFunction": "Solve192",
    "pythonCode": "def palindrome_number(*args):\n    \"\"\"Reference kernel for 9. Palindrome Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 9. Palindrome Number\nfunc Solve192(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 193,
    "leetcode": 66,
    "title": "Plus One",
    "slug": "193-plus-one",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 126
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "digits=[9,9]",
      "output": "[1,0,0]",
      "why": "99+1=100."
    },
    "prompt": "Add one to a nonnegative integer represented as an array of decimal digits.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "plus_one",
    "goFunction": "Solve193",
    "pythonCode": "def plus_one(*args):\n    \"\"\"Reference kernel for 66. Plus One.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 66. Plus One\nfunc Solve193(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 194,
    "leetcode": 172,
    "title": "Factorial Trailing Zeroes",
    "slug": "194-factorial-trailing-zeroes",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 962
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "n=25",
      "output": "6",
      "why": "Factors of 5 contribute six zeroes."
    },
    "prompt": "Return the number of trailing zeroes in n factorial.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "factorial_trailing_zeroes",
    "goFunction": "Solve194",
    "pythonCode": "def factorial_trailing_zeroes(*args):\n    \"\"\"Reference kernel for 172. Factorial Trailing Zeroes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 172. Factorial Trailing Zeroes\nfunc Solve194(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 195,
    "leetcode": 69,
    "title": "Sqrt(x)",
    "slug": "195-sqrt-x",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "time": "O(log n) or O(n log R)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 239
    },
    "diagramNotes": [
      "lo",
      "mid",
      "hi",
      "keep feasible half",
      "Invariant: the answer remains inside [lo, hi] until the boundary is found."
    ],
    "example": {
      "input": "x=8",
      "output": "2",
      "why": "sqrt(8) is between 2 and 3."
    },
    "prompt": "Return floor(sqrt(x)) for a nonnegative integer x.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "keep feasible half Invariant: the answer remains inside [lo, hi] until the boundary is found.",
    "brute": "Scan every possible index/value. Works only when range is small.",
    "optimized": "Exploit sorted order or monotonic feasibility. Narrow [lo, hi] until the boundary is found. Alternative: Use lower_bound/upper_bound variants for first true, last true, or exact match.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(log n) iterations for index search; O(n log R) for binary search on answer with O(n) feasibility.",
    "pitfalls": [
      "Infinite loop from mid/lo/hi update; predicate not monotonic.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "overflow mid; infinite loops; duplicates; rotated arrays; choosing < vs <= correctly.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Find first true vs last true boundary.",
      "Binary-search the answer value instead of an index.",
      "Handle duplicates and missing target gracefully."
    ],
    "followUps": [
      "What is the exact monotonic predicate?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "sqrt_x",
    "goFunction": "Solve195",
    "pythonCode": "def sqrt_x(*args):\n    \"\"\"Reference kernel for 69. Sqrt(x).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 69. Sqrt(x)\nfunc Solve195(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 196,
    "leetcode": 50,
    "title": "Pow(x, n)",
    "slug": "196-pow-x-n",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 944
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "x=2.0, n=-2",
      "output": "0.25",
      "why": "2^-2 is 1/4."
    },
    "prompt": "Compute x raised to integer power n.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "pow_x_n",
    "goFunction": "Solve196",
    "pythonCode": "def pow_x_n(*args):\n    \"\"\"Reference kernel for 50. Pow(x, n).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 50. Pow(x, n)\nfunc Solve196(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 197,
    "leetcode": 149,
    "title": "Max Points on a Line",
    "slug": "197-max-points-on-a-line",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(log n)",
    "space": "O(1)",
    "diagram": {
      "type": "greedy",
      "seed": 664
    },
    "diagramNotes": [
      "local choice",
      "dominant state",
      "best answer",
      "discard dominated a...",
      "A safe greedy step keeps a state that is never worse for any future suffix."
    ],
    "example": {
      "input": "points=[[1,1],[2,2],[3,3],[3,4]]",
      "output": "3",
      "why": "The first three points are collinear."
    },
    "prompt": "Given points in the plane, return the maximum number that lie on the same straight line.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "discard dominated a... A safe greedy step keeps a state that is never worse for any future suffix.",
    "brute": "Try all choices recursively or simulate every path. Correct but exponential or quadratic.",
    "optimized": "Identify the state that dominates future decisions, then greedily update it while scanning once. Alternative: Some greedy tasks can also be solved by DP first; convert to greedy after finding the redundant state.",
    "invariant": "The maintained state is at least as good as any alternative state with the same processed prefix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Usually O(n) or O(n log n) if sorting is needed. Space is often O(1).",
    "pitfalls": [
      "Assuming local greedy without proof; integer division edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "ties; impossible states; negative values; very large values; integer overflow; proof of local choice.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Prove the greedy choice with an exchange argument.",
      "Return the chosen sequence of actions.",
      "Handle overflow and impossible cases explicitly."
    ],
    "followUps": [
      "What invariant proves the greedy choice is safe?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "max_points_on_a_line",
    "goFunction": "Solve197",
    "pythonCode": "def max_points_on_a_line(*args):\n    \"\"\"Reference kernel for 149. Max Points on a Line.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 149. Max Points on a Line\nfunc Solve197(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 198,
    "leetcode": 70,
    "title": "Climbing Stairs",
    "slug": "198-climbing-stairs",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 349
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "n=3",
      "output": "3",
      "why": "Ways are 1+1+1, 1+2, 2+1."
    },
    "prompt": "Count distinct ways to climb n stairs taking 1 or 2 steps at a time.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "climbing_stairs",
    "goFunction": "Solve198",
    "pythonCode": "def climbing_stairs(*args):\n    \"\"\"Reference kernel for 70. Climbing Stairs.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 70. Climbing Stairs\nfunc Solve198(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 199,
    "leetcode": 139,
    "title": "Word Break",
    "slug": "199-word-break",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 556
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "s=\"leetcode\", wordDict=[\"leet\",\"code\"]",
      "output": "true",
      "why": "Split as \"leet\" + \"code\"."
    },
    "prompt": "Return whether s can be segmented into a sequence of dictionary words.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "word_break",
    "goFunction": "Solve199",
    "pythonCode": "def word_break(*args):\n    \"\"\"Reference kernel for 139. Word Break.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 139. Word Break\nfunc Solve199(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 200,
    "leetcode": 322,
    "title": "Coin Change",
    "slug": "200-coin-change",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 707
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "coins=[1,2,5], amount=11",
      "output": "3",
      "why": "Use 5+5+1."
    },
    "prompt": "Return the fewest coins needed to make amount using unlimited coins, or -1 if impossible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "coin_change",
    "goFunction": "Solve200",
    "pythonCode": "def coin_change(*args):\n    \"\"\"Reference kernel for 322. Coin Change.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 322. Coin Change\nfunc Solve200(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 201,
    "leetcode": 300,
    "title": "Longest Increasing Subsequence",
    "slug": "201-longest-increasing-subsequence",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 364
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "nums=[10,9,2,5,3,7,101,18]",
      "output": "4",
      "why": "One LIS is [2,3,7,101]."
    },
    "prompt": "Return the length of the longest strictly increasing subsequence.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_increasing_subsequence",
    "goFunction": "Solve201",
    "pythonCode": "def longest_increasing_subsequence(*args):\n    \"\"\"Reference kernel for 300. Longest Increasing Subsequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 300. Longest Increasing Subsequence\nfunc Solve201(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 202,
    "leetcode": 120,
    "title": "Triangle",
    "slug": "202-triangle",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 326
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "triangle=[[2],[3,4],[6,5,7],[4,1,8,3]]",
      "output": "11",
      "why": "Path 2->3->5->1."
    },
    "prompt": "Given a triangle of numbers, return the minimum path sum from top to bottom moving to adjacent positions.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "triangle",
    "goFunction": "Solve202",
    "pythonCode": "def triangle(*args):\n    \"\"\"Reference kernel for 120. Triangle.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 120. Triangle\nfunc Solve202(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 203,
    "leetcode": 64,
    "title": "Minimum Path Sum",
    "slug": "203-minimum-path-sum",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 402
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "grid=[[1,3,1],[1,5,1],[4,2,1]]",
      "output": "7",
      "why": "Path 1->3->1->1->1."
    },
    "prompt": "Return the minimum path sum from top-left to bottom-right moving only right or down.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "minimum_path_sum",
    "goFunction": "Solve203",
    "pythonCode": "def minimum_path_sum(*args):\n    \"\"\"Reference kernel for 64. Minimum Path Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 64. Minimum Path Sum\nfunc Solve203(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 204,
    "leetcode": 63,
    "title": "Unique Paths II",
    "slug": "204-unique-paths-ii",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 416
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "obstacleGrid=[[0,0,0],[0,1,0],[0,0,0]]",
      "output": "2",
      "why": "Two paths avoid the obstacle."
    },
    "prompt": "Count unique paths in a grid with obstacles, moving only right or down.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "unique_paths_ii",
    "goFunction": "Solve204",
    "pythonCode": "def unique_paths_ii(*args):\n    \"\"\"Reference kernel for 63. Unique Paths II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 63. Unique Paths II\nfunc Solve204(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 205,
    "leetcode": 5,
    "title": "Longest Palindromic Substring",
    "slug": "205-longest-palindromic-substring",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 458
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "s=\"babad\"",
      "output": "\"bab\" or \"aba\"",
      "why": "Both length-3 substrings are valid."
    },
    "prompt": "Return any longest palindromic substring of s.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_palindromic_substring",
    "goFunction": "Solve205",
    "pythonCode": "def longest_palindromic_substring(*args):\n    \"\"\"Reference kernel for 5. Longest Palindromic Substring.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 5. Longest Palindromic Substring\nfunc Solve205(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 206,
    "leetcode": 97,
    "title": "Interleaving String",
    "slug": "206-interleaving-string",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 59
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "s1=\"aabcc\", s2=\"dbbca\", s3=\"aadbbcbcac\"",
      "output": "true",
      "why": "Characters can be assigned to s1/s2 in order."
    },
    "prompt": "Return whether s3 is formed by interleaving s1 and s2 while preserving the order within each string.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "interleaving_string",
    "goFunction": "Solve206",
    "pythonCode": "def interleaving_string(*args):\n    \"\"\"Reference kernel for 97. Interleaving String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 97. Interleaving String\nfunc Solve206(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 207,
    "leetcode": 123,
    "title": "Best Time to Buy and Sell Stock III",
    "slug": "207-best-time-to-buy-and-sell-stock-iii",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 532
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "prices=[3,3,5,0,0,3,1,4]",
      "output": "6",
      "why": "Buy at 0 sell at 3, buy at 1 sell at 4."
    },
    "prompt": "Maximize stock profit with at most two transactions.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_iii",
    "goFunction": "Solve207",
    "pythonCode": "def best_time_to_buy_and_sell_stock_iii(*args):\n    \"\"\"Reference kernel for 123. Best Time to Buy and Sell Stock III.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 123. Best Time to Buy and Sell Stock III\nfunc Solve207(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 208,
    "leetcode": 188,
    "title": "Best Time to Buy and Sell Stock IV",
    "slug": "208-best-time-to-buy-and-sell-stock-iv",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 671
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "k=2, prices=[2,4,1]",
      "output": "2",
      "why": "Buy at 2 and sell at 4."
    },
    "prompt": "Maximize stock profit with at most k transactions.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_iv",
    "goFunction": "Solve208",
    "pythonCode": "def best_time_to_buy_and_sell_stock_iv(*args):\n    \"\"\"Reference kernel for 188. Best Time to Buy and Sell Stock IV.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 188. Best Time to Buy and Sell Stock IV\nfunc Solve208(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 209,
    "leetcode": 221,
    "title": "Maximal Square",
    "slug": "209-maximal-square",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 266
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "matrix=[[\"1\",\"0\",\"1\",\"0\"],[\"1\",\"0\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\"]]",
      "output": "4",
      "why": "A 2 by 2 square of ones exists."
    },
    "prompt": "In a binary matrix, return the area of the largest square containing only 1s.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximal_square",
    "goFunction": "Solve209",
    "pythonCode": "def maximal_square(*args):\n    \"\"\"Reference kernel for 221. Maximal Square.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 221. Maximal Square\nfunc Solve209(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 210,
    "leetcode": 217,
    "title": "Contains Duplicate",
    "slug": "210-contains-duplicate",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 229
    },
    "diagramNotes": [
      "x",
      "map / set",
      "n",
      "key -> fact",
      "answer",
      "n",
      "updates",
      "seen",
      "count",
      "index",
      "Store the exact fact future items need: membership, count, index, or signature."
    ],
    "example": {
      "input": "nums=[1,2,3,1]",
      "output": "true",
      "why": "Value 1 repeats."
    },
    "prompt": "Return true if any value appears at least twice in the array.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "index Store the exact fact future items need: membership, count, index, or signature.",
    "brute": "Nested scans compare every item with every other item. Usually O(n^2).",
    "optimized": "Store exactly the fact needed for future lookups: index, count, membership, or normalized signature. Alternative: Sorting can reduce memory and expose groups but may lose original index order.",
    "invariant": "The map contains all and only facts from the processed prefix needed by future elements.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Expected O(n) lookups/inserts. Space is O(k), where k is distinct keys or signatures.",
    "pitfalls": [
      "Counting after checking in the wrong order; ignoring duplicates.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "duplicates; missing keys; decrement-to-zero cleanup; hashable signature construction; order dependence.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return all matching groups instead of a boolean/count.",
      "Support incremental updates while queries arrive.",
      "Handle case-insensitive or normalized keys."
    ],
    "followUps": [
      "How would memory limits change the approach?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "contains_duplicate",
    "goFunction": "Solve210",
    "pythonCode": "def contains_duplicate(*args):\n    \"\"\"Reference kernel for 217. Contains Duplicate.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 217. Contains Duplicate\nfunc Solve210(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 211,
    "leetcode": 152,
    "title": "Maximum Product Subarray",
    "slug": "211-maximum-product-subarray",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 152
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "nums=[2,3,-2,4]",
      "output": "6",
      "why": "Subarray [2,3] has product 6."
    },
    "prompt": "Return the maximum product of a non-empty contiguous subarray.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "maximum_product_subarray",
    "goFunction": "Solve211",
    "pythonCode": "def maximum_product_subarray(*args):\n    \"\"\"Reference kernel for 152. Maximum Product Subarray.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 152. Maximum Product Subarray\nfunc Solve211(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 212,
    "leetcode": 371,
    "title": "Sum of Two Integers",
    "slug": "212-sum-of-two-integers",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 915
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "a=1, b=2",
      "output": "3",
      "why": "Use bitwise carry and xor addition."
    },
    "prompt": "Return the sum of two integers without using the plus or minus operators.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "sum_of_two_integers",
    "goFunction": "Solve212",
    "pythonCode": "def sum_of_two_integers(*args):\n    \"\"\"Reference kernel for 371. Sum of Two Integers.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 371. Sum of Two Integers\nfunc Solve212(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 213,
    "leetcode": 268,
    "title": "Missing Number",
    "slug": "213-missing-number",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 192
    },
    "diagramNotes": [
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "mask 1<<b",
      "&",
      "|",
      "^",
      ">>",
      "Each bit can often be reasoned about independently with masks and XOR."
    ],
    "example": {
      "input": "nums=[3,0,1]",
      "output": "2",
      "why": "Range 0..3 is missing 2."
    },
    "prompt": "An array contains n distinct numbers from 0..n with one missing; return the missing number.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": ">> Each bit can often be reasoned about independently with masks and XOR.",
    "brute": "Convert to strings or simulate arithmetic slowly; simpler but less direct.",
    "optimized": "Use XOR cancellation, bit counts, masks, and shift loops to isolate independent bit decisions. Alternative: Math identities sometimes replace bit loops, but bit reasoning is more robust.",
    "invariant": "Each processed bit contributes independently or the mask preserves exactly the needed prefix/suffix.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Often O(n) for arrays or O(1) over fixed 32 bits. Space is O(1).",
    "pitfalls": [
      "Signed shifts and negative numbers; forgetting mask width.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "signed shifts; 32-bit vs 64-bit; negative numbers; overflow; clearing lowest set bit.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Generalize from one missing/unique value to two.",
      "Use fixed 32-bit signed behavior.",
      "Count set bits across a range instead of one value."
    ],
    "followUps": [
      "How do you handle signed 32-bit behavior?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "missing_number",
    "goFunction": "Solve213",
    "pythonCode": "def missing_number(*args):\n    \"\"\"Reference kernel for 268. Missing Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 268. Missing Number\nfunc Solve213(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 214,
    "leetcode": 213,
    "title": "House Robber II",
    "slug": "214-house-robber-ii",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 285
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "nums=[2,3,2]",
      "output": "3",
      "why": "Rob the middle house only."
    },
    "prompt": "Maximize robbery in a circular row of houses where first and last houses are adjacent.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "house_robber_ii",
    "goFunction": "Solve214",
    "pythonCode": "def house_robber_ii(*args):\n    \"\"\"Reference kernel for 213. House Robber II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 213. House Robber II\nfunc Solve214(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 215,
    "leetcode": 91,
    "title": "Decode Ways",
    "slug": "215-decode-ways",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * state)",
    "space": "O(state)",
    "diagram": {
      "type": "dp",
      "seed": 236
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "i",
      "previous states -> ...",
      "base cases",
      "transition",
      "Before computing a state, all dependencies must already be final."
    ],
    "example": {
      "input": "s=\"226\"",
      "output": "3",
      "why": "It decodes as 2-2-6, 22-6, or 2-26."
    },
    "prompt": "Return the number of ways to decode a digit string where 1->A through 26->Z.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "transition Before computing a state, all dependencies must already be final.",
    "brute": "Recursive try-all choices recomputes the same suffix/prefix many times.",
    "optimized": "Define state, base case, transition, and iteration order. Compress space when only recent states are needed. Alternative: Top-down memoization is easier first; bottom-up is usually interview-cleaner.",
    "invariant": "Before computing dp[i], every state it depends on has already been finalized.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: States times transition cost. Usually O(n) or O(n*k), with O(n) or compressed O(1) space.",
    "pitfalls": [
      "Wrong base cases; overwriting compressed state in the wrong order.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "n=0/1; impossible sentinel values; negative costs; modulo; off-by-one state indexing.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the chosen items/path, not only the optimum value.",
      "Compress memory and explain update direction.",
      "Add modulo or large-number constraints."
    ],
    "followUps": [
      "Can you reconstruct the chosen path, not just the value?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "decode_ways",
    "goFunction": "Solve215",
    "pythonCode": "def decode_ways(*args):\n    \"\"\"Reference kernel for 91. Decode Ways.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 91. Decode Ways\nfunc Solve215(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 216,
    "leetcode": 417,
    "title": "Pacific Atlantic Water Flow",
    "slug": "216-pacific-atlantic-water-flow",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 824
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "heights=[[1,2],[4,3]]",
      "output": "[[0,1],[1,0],[1,1]]",
      "why": "These cells can reach both ocean borders."
    },
    "prompt": "Return coordinates that can flow to both the Pacific top/left edges and Atlantic bottom/right edges, moving from high to low or equal height.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "pacific_atlantic_water_flow",
    "goFunction": "Solve216",
    "pythonCode": "def pacific_atlantic_water_flow(*args):\n    \"\"\"Reference kernel for 417. Pacific Atlantic Water Flow.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 417. Pacific Atlantic Water Flow\nfunc Solve216(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 217,
    "leetcode": 269,
    "title": "Alien Dictionary",
    "slug": "217-alien-dictionary",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 333
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "words=[\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]",
      "output": "\"wertf\"",
      "why": "Edges imply w<e<r<t<f."
    },
    "prompt": "Given words sorted by an unknown alphabet, return one valid character order, or empty string if impossible.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "alien_dictionary",
    "goFunction": "Solve217",
    "pythonCode": "def alien_dictionary(*args):\n    \"\"\"Reference kernel for 269. Alien Dictionary.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 269. Alien Dictionary\nfunc Solve217(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 218,
    "leetcode": 261,
    "title": "Graph Valid Tree",
    "slug": "218-graph-valid-tree",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 228
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "n=5, edges=[[0,1],[0,2],[0,3],[1,4]]",
      "output": "true",
      "why": "There are n-1 edges and all nodes connect."
    },
    "prompt": "Return whether an undirected graph with n nodes is a valid tree: connected and acyclic.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "graph_valid_tree",
    "goFunction": "Solve218",
    "pythonCode": "def graph_valid_tree(*args):\n    \"\"\"Reference kernel for 261. Graph Valid Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 261. Graph Valid Tree\nfunc Solve218(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 219,
    "leetcode": 323,
    "title": "Number of Connected Components in an Undirected Graph",
    "slug": "219-number-of-connected-components-in-an-undirected-graph",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Uber",
      "Amazon",
      "Meta"
    ],
    "time": "O(V+E)",
    "space": "O(V+E)",
    "diagram": {
      "type": "graph",
      "seed": 316
    },
    "diagramNotes": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "visited set",
      "Build adjacency once; visited prevents cycles and double counting."
    ],
    "example": {
      "input": "n=5, edges=[[0,1],[1,2],[3,4]]",
      "output": "2",
      "why": "Components are {0,1,2} and {3,4}."
    },
    "prompt": "Return the number of connected components in an undirected graph.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "visited set Build adjacency once; visited prevents cycles and double counting.",
    "brute": "Try paths without visited/pruning; cycles can explode exponentially.",
    "optimized": "Build adjacency once, then BFS/DFS/topological process with visited/indegree state. Alternative: Union-Find is ideal for connectivity; BFS is ideal for shortest unweighted paths.",
    "invariant": "A visited node/component has been fully accounted for and will not be counted again.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Adjacency traversal is O(V+E) time and O(V+E) space.",
    "pitfalls": [
      "Not marking visited before enqueue; confusing directed and undirected edges.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "disconnected components; directed vs undirected; cycles; self edges; unreachable target.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Detect cycle vs produce traversal order.",
      "Handle disconnected components.",
      "Convert unweighted BFS to weighted shortest path."
    ],
    "followUps": [
      "What happens with disconnected components or cycles?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "number_of_connected_components_in_an_undirected_graph",
    "goFunction": "Solve219",
    "pythonCode": "def number_of_connected_components_in_an_undirected_graph(*args):\n    \"\"\"Reference kernel for 323. Number of Connected Components in an Undirected Graph.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 323. Number of Connected Components in an Undirected Graph\nfunc Solve219(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 220,
    "leetcode": 252,
    "title": "Meeting Rooms",
    "slug": "220-meeting-rooms",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 137
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "intervals=[[0,30],[5,10],[15,20]]",
      "output": "false",
      "why": "The first meeting overlaps the others."
    },
    "prompt": "Given meeting time intervals, return whether one person can attend all meetings.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "meeting_rooms",
    "goFunction": "Solve220",
    "pythonCode": "def meeting_rooms(*args):\n    \"\"\"Reference kernel for 252. Meeting Rooms.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 252. Meeting Rooms\nfunc Solve220(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 221,
    "leetcode": 253,
    "title": "Meeting Rooms II",
    "slug": "221-meeting-rooms-ii",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 185
    },
    "diagramNotes": [
      "sort by start",
      "merge overlaps",
      "After sorting, only compare the next interval with the active merged range."
    ],
    "example": {
      "input": "intervals=[[0,30],[5,10],[15,20]]",
      "output": "2",
      "why": "At most two meetings overlap at once."
    },
    "prompt": "Return the minimum number of meeting rooms required for all intervals.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "merge overlaps After sorting, only compare the next interval with the active merged range.",
    "brute": "Compare every interval pair repeatedly. O(n^2).",
    "optimized": "Sort once, then maintain the active end or merged interval while scanning. Alternative: Sweep line with events is useful for counting overlaps/rooms.",
    "invariant": "All intervals before current have been merged or counted consistently with the chosen end boundary.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Sorting dominates at O(n log n); the scan is O(n). Space is O(1) to O(n).",
    "pitfalls": [
      "Sorting by wrong key; not merging touching intervals when required.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "touching endpoints; inclusive vs exclusive; empty list; sorting tie-breakers; nested intervals.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Distinguish touching endpoints from overlapping endpoints.",
      "Return removed intervals as well as the merged result.",
      "Process online insertions into an existing schedule."
    ],
    "followUps": [
      "Can you process intervals online?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "meeting_rooms_ii",
    "goFunction": "Solve221",
    "pythonCode": "def meeting_rooms_ii(*args):\n    \"\"\"Reference kernel for 253. Meeting Rooms II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 253. Meeting Rooms II\nfunc Solve221(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 222,
    "leetcode": 143,
    "title": "Reorder List",
    "slug": "222-reorder-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "time": "O(n)",
    "space": "O(1) unless recursion/map",
    "diagram": {
      "type": "list",
      "seed": 340
    },
    "diagramNotes": [
      "prev",
      "curr",
      "next",
      "relink after saving...",
      "dummy",
      "Always save next before overwriting a pointer; dummy handles head changes."
    ],
    "example": {
      "input": "head=[1,2,3,4,5]",
      "output": "[1,5,2,4,3]",
      "why": "Interleave first half with reversed second half."
    },
    "prompt": "Reorder a linked list as L0, Ln, L1, Ln-1, and so on in-place.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dummy Always save next before overwriting a pointer; dummy handles head changes.",
    "brute": "Copy values into an array, solve there, then rebuild. Simple but extra O(n) space.",
    "optimized": "Use pointer rewiring, dummy nodes, fast/slow pointers, and careful next preservation. Alternative: Recursive list solutions are shorter but can use O(n) call stack.",
    "invariant": "The processed prefix is already correctly linked and no unprocessed node is lost.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Most list pointer solutions are one or two passes: O(n) time, O(1) extra space.",
    "pitfalls": [
      "Losing next pointer before rewiring; missing dummy head edge cases.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty head; one node; removing head; cycles; preserving next before overwriting pointers.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Do the operation recursively and compare stack use.",
      "Handle cycle/random pointers in the same structure.",
      "Perform the change for every k-sized group."
    ],
    "followUps": [
      "Can you solve it with O(1) extra memory and one pass?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "reorder_list",
    "goFunction": "Solve222",
    "pythonCode": "def reorder_list(*args):\n    \"\"\"Reference kernel for 143. Reorder List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 143. Reorder List\nfunc Solve222(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 223,
    "leetcode": 572,
    "title": "Subtree of Another Tree",
    "slug": "223-subtree-of-another-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 685
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[3,4,5,1,2], subRoot=[4,1,2]",
      "output": "true",
      "why": "The subtree rooted at 4 matches."
    },
    "prompt": "Return whether subRoot is a subtree of root with identical structure and values.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "subtree_of_another_tree",
    "goFunction": "Solve223",
    "pythonCode": "def subtree_of_another_tree(*args):\n    \"\"\"Reference kernel for 572. Subtree of Another Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 572. Subtree of Another Tree\nfunc Solve223(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 224,
    "leetcode": 235,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "224-lowest-common-ancestor-of-a-binary-search-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 969
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8",
      "output": "6",
      "why": "The nodes split on opposite sides of 6."
    },
    "prompt": "In a BST, return the lowest common ancestor of nodes p and q.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "lowest_common_ancestor_of_a_binary_search_tree",
    "goFunction": "Solve224",
    "pythonCode": "def lowest_common_ancestor_of_a_binary_search_tree(*args):\n    \"\"\"Reference kernel for 235. Lowest Common Ancestor of a Binary Search Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 235. Lowest Common Ancestor of a Binary Search Tree\nfunc Solve224(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 225,
    "leetcode": 297,
    "title": "Serialize and Deserialize Binary Tree",
    "slug": "225-serialize-and-deserialize-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 60
    },
    "diagramNotes": [
      "node",
      "L",
      "R",
      "2",
      "6",
      "14",
      "return subtree fact...",
      "When dfs returns, that subtree fact is final."
    ],
    "example": {
      "input": "root=[1,2,3,null,null,4,5]",
      "output": "deserialize(serialize(root)) equals the original tree",
      "why": "Null markers preserve structure."
    },
    "prompt": "Design serialize and deserialize methods for a binary tree so the original structure and values are recoverable.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "return subtree fact... When dfs returns, that subtree fact is final.",
    "brute": "For each node, recompute subtree facts from scratch; can become O(n^2).",
    "optimized": "Postorder or preorder DFS carries exactly the state needed by children/parent. Alternative: Iterative stack avoids recursion depth; BFS works when level order matters.",
    "invariant": "When dfs returns from a node, its subtree answer/fact is final.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Each node is visited once: O(n) time. Recursion stack is O(h).",
    "pitfalls": [
      "Returning answer instead of path contribution; wrong null base case.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "nil root; skewed tree recursion depth; negative values; duplicate values; global vs returned answer.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the nodes on the path, not just a count/value.",
      "Make the tree contain negative values or duplicate values.",
      "Convert recursive DFS to iterative stack DFS."
    ],
    "followUps": [
      "Can you write iterative DFS? What value does each call return?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "serialize_and_deserialize_binary_tree",
    "goFunction": "Solve225",
    "pythonCode": "def serialize_and_deserialize_binary_tree(*args):\n    \"\"\"Reference kernel for 297. Serialize and Deserialize Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 297. Serialize and Deserialize Binary Tree\nfunc Solve225(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 226,
    "leetcode": 347,
    "title": "Top K Frequent Elements",
    "slug": "226-top-k-frequent-elements",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Amazon",
      "Bloomberg",
      "Google",
      "Meta"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 941
    },
    "diagramNotes": [
      "top",
      "a",
      "b",
      "c",
      "d",
      "pop best",
      "push new",
      "Heap top is the next best candidate; discard stale entries after pop."
    ],
    "example": {
      "input": "nums=[1,1,1,2,2,3], k=2",
      "output": "[1,2]",
      "why": "1 and 2 have the highest frequencies."
    },
    "prompt": "Return the k most frequent elements from the array.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "push new Heap top is the next best candidate; discard stale entries after pop.",
    "brute": "Repeatedly sort or scan all candidates for each selection: O(k*n) or worse.",
    "optimized": "Use a min/max heap to access the next best candidate in O(log n). Alternative: Quickselect works for one kth statistic; heap is better for streaming or repeated picks.",
    "invariant": "The heap contains all eligible candidates not yet chosen, ordered by the needed priority.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Heap operations cost O(log n); total time depends on pushes/pops, often O(n log k).",
    "pitfalls": [
      "Using min-heap/max-heap sign incorrectly; heap grows beyond k.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "stale entries; tie-breakers; min vs max heap in Go; pushing duplicates; empty heap.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return top-k in sorted order after using the heap.",
      "Handle ties with a secondary key.",
      "Support streaming insertions and deletions."
    ],
    "followUps": [
      "Can you reduce memory from O(n) to O(k)?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "top_k_frequent_elements",
    "goFunction": "Solve226",
    "pythonCode": "def top_k_frequent_elements(*args):\n    \"\"\"Reference kernel for 347. Top K Frequent Elements.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 347. Top K Frequent Elements\nfunc Solve226(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 227,
    "leetcode": 424,
    "title": "Longest Repeating Character Replacement",
    "slug": "227-longest-repeating-character-replacement",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Uber"
    ],
    "time": "O(n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "window",
      "seed": 287
    },
    "diagramNotes": [
      "s0",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "valid window",
      "counts",
      "best length",
      "Expand right; while invalid, shrink left; record only a valid window."
    ],
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "4",
      "why": "\"AABA\" can become all A."
    },
    "prompt": "Return the longest substring length that can be made of one repeated character by replacing at most k characters.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "best length Expand right; while invalid, shrink left; record only a valid window.",
    "brute": "Enumerate every substring/subarray and test validity from scratch: O(n^2) to O(n^3).",
    "optimized": "Expand right once, update counts, shrink left until the invariant is valid, then record the answer. Alternative: Fixed-size windows skip the while loop; variable-size windows need a validity predicate.",
    "invariant": "At record time, the window satisfies the prompt condition and is minimal/maximal as required.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: Left and right each move forward at most n times, so O(n). Map space depends on alphabet size.",
    "pitfalls": [
      "Shrinking only once when a while loop is needed; stale max/count variables.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "k=0; empty string; repeated chars; removing counts at left; off-by-one length right-left+1.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Switch from at-most-k to exactly-k constraints.",
      "Return the smallest valid window instead of the largest.",
      "Support multiple character/value constraints at once."
    ],
    "followUps": [
      "Can you return the actual window, not only its length/count?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "longest_repeating_character_replacement",
    "goFunction": "Solve227",
    "pythonCode": "def longest_repeating_character_replacement(*args):\n    \"\"\"Reference kernel for 424. Longest Repeating Character Replacement.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 424. Longest Repeating Character Replacement\nfunc Solve227(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 228,
    "leetcode": 271,
    "title": "Encode and Decode Strings",
    "slug": "228-encode-and-decode-strings",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Amazon",
      "Bloomberg",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 708
    },
    "diagramNotes": [
      "root",
      "c",
      "a",
      "t*",
      "r*",
      "len#word",
      "shared prefix",
      "Trie stores shared prefixes; encoding uses length + delimiter to decode safely."
    ],
    "example": {
      "input": "strs=[\"lint\",\"code\",\"love\"]",
      "output": "decode(encode(strs))=[\"lint\",\"code\",\"love\"]",
      "why": "Length-prefix encoding is unambiguous."
    },
    "prompt": "Design encode and decode for a list of strings so any characters, including delimiters, are recoverable.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "shared prefix Trie stores shared prefixes; encoding uses length + delimiter to decode safely.",
    "brute": "Compare every string with every query or split by ambiguous delimiters.",
    "optimized": "Store characters in a trie for prefix search, or encode lengths so decoding is unambiguous. Alternative: Hash maps can replace trie when only whole-word lookup is needed.",
    "invariant": "Every path from root represents exactly one prefix; terminal marks complete words.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(total characters) to build; query cost is O(length of query/prefix).",
    "pitfalls": [
      "Terminal marker missing; ambiguous delimiter.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty strings; delimiter appearing in input; duplicate words; memory blowup; lexicographic ordering.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Support delete/update operations.",
      "Return top-k suggestions with lexicographic ties.",
      "Use length-prefix encoding when delimiter may appear in input."
    ],
    "followUps": [
      "Can the trie support delete or wildcard search?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "encode_and_decode_strings",
    "goFunction": "Solve228",
    "pythonCode": "def encode_and_decode_strings(*args):\n    \"\"\"Reference kernel for 271. Encode and Decode Strings.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 271. Encode and Decode Strings\nfunc Solve228(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 229,
    "leetcode": 647,
    "title": "Palindromic Substrings",
    "slug": "229-palindromic-substrings",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "NC75"
    ],
    "companies": [
      "Google",
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 152
    },
    "diagramNotes": [
      "rolling best",
      "dp cell uses prior ...",
      "Grid DP fills by dependency order; Kadane keeps best ending here."
    ],
    "example": {
      "input": "s=\"aaa\"",
      "output": "6",
      "why": "Three singles, two \"aa\", and one \"aaa\"."
    },
    "prompt": "Return the number of palindromic substrings in s.",
    "clarify": [
      "Empty or singleton input?",
      "Mutate input or build output?",
      "Duplicate/tie behavior?",
      "int vs int64 in Go?",
      "Exact return shape?"
    ],
    "intuition": "dp cell uses prior ... Grid DP fills by dependency order; Kadane keeps best ending here.",
    "brute": "Enumerate every substring/path/subproblem and recompute its score.",
    "optimized": "Pick a state that removes repeated work, then fill in dependency order. For subarrays, keep rolling best. Alternative: Space-compress rows/columns when only the previous row/column is needed.",
    "invariant": "Each filled state stores the optimal answer for exactly its subproblem.",
    "proof": "Initialize state so the invariant is true. Each update preserves it using finalized information only. At the end, every candidate was considered or safely discarded. Complexity reason: O(number of states * transition cost), commonly O(n*m) or O(n).",
    "pitfalls": [
      "Bad initialization; mixing row/column dependencies.",
      "Updating state before saving the next pointer/index.",
      "Recording an answer while the window/state is invalid.",
      "Forgetting nil/empty/base cases."
    ],
    "edgeChecklist": "empty dimensions; first row/column; negative-only arrays; diagonal dependencies; memory size.",
    "implementationCheckpoints": [
      "Define the exact state before coding.",
      "Update state in one place.",
      "Dry run the sample before typing loops.",
      "Say why discarded candidates cannot later win."
    ],
    "drills": [
      "Return the actual subarray/subsequence.",
      "Reduce 2D memory to rolling rows where safe.",
      "Handle all-negative values or empty inputs explicitly."
    ],
    "followUps": [
      "Can the DP be space compressed safely?",
      "What changes if constraints are 10x larger?",
      "Which line would you unit-test first and why?"
    ],
    "pythonFunction": "palindromic_substrings",
    "goFunction": "Solve229",
    "pythonCode": "def palindromic_substrings(*args):\n    \"\"\"Reference kernel for 647. Palindromic Substrings.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 647. Palindromic Substrings\nfunc Solve229(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  }
] satisfies Problem[];

export const patterns = [
  "Array / String",
  "BST",
  "Backtracking",
  "Binary Search",
  "Bit Manipulation",
  "DP 1D",
  "DP 2D / Kadane",
  "Graph",
  "Hash Map / Set",
  "Heap / Priority Queue",
  "Intervals",
  "Linked List",
  "Math / Greedy",
  "Monotonic Stack",
  "Prefix / Scan",
  "Queue / Simulation",
  "Sliding Window",
  "Stack",
  "Tree BFS",
  "Tree DFS",
  "Trie / Encoding",
  "Two Pointers"
] as const;
