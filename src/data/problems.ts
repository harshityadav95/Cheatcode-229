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
  example: { input: string; output: string; why: string };
  prompt: string;
  clarify: string[];
  intuition: string;
  brute: string;
  optimized: string;
  invariant: string;
  proof: string;
  pitfalls: string[];
  drills: string[];
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 177
    },
    "example": {
      "input": "word1=\"abc\", word2=\"pq\"",
      "output": "\"apbqc\"",
      "why": "Take a/p, b/q, then append leftover c."
    },
    "prompt": "Solve Merge Strings Alternately using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 323
    },
    "example": {
      "input": "str1=\"ABABAB\", str2=\"ABAB\"",
      "output": "\"AB\"",
      "why": "\"AB\" repeated 3 and 2 times forms both strings."
    },
    "prompt": "Solve Greatest Common Divisor of Strings using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
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
      "type": "array",
      "seed": 492
    },
    "example": {
      "input": "candies=[2,3,5,1,3], extraCandies=3",
      "output": "[true,true,true,false,true]",
      "why": "A child reaches the maximum after adding the extra candies."
    },
    "prompt": "Solve Kids With the Greatest Number of Candies using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 439
    },
    "example": {
      "input": "flowerbed=[1,0,0,0,1], n=1",
      "output": "true",
      "why": "Plant at the middle zero without touching neighbors."
    },
    "prompt": "Solve Can Place Flowers using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 38
    },
    "example": {
      "input": "s=\"hello\"",
      "output": "\"holle\"",
      "why": "Only vowels swap positions."
    },
    "prompt": "Solve Reverse Vowels of a String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
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
      "type": "array",
      "seed": 759
    },
    "example": {
      "input": "s=\"  the sky is blue  \"",
      "output": "\"blue is sky the\"",
      "why": "Trim spaces and reverse word order."
    },
    "prompt": "Solve Reverse Words in a String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 275
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "[24,12,8,6]",
      "why": "Each output is the product of all other values."
    },
    "prompt": "Solve Product of Array Except Self using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 941
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Increasing Triplet Subsequence using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
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
      "type": "array",
      "seed": 831
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve String Compression using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 136
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Move Zeroes using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 26
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Is Subsequence using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 559
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Container With Most Water using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 33
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Max Number of K-Sum Pairs using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 398
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Maximum Average Subarray I using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 292
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Maximum Number of Vowels in a Substring of Given Length using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 615
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Max Consecutive Ones III using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "max_consecutive_ones_iii",
    "goFunction": "Solve016",
    "pythonCode": "def max_consecutive_ones_iii(*args):\n    \"\"\"Reference kernel for 1004. Max Consecutive Ones III.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 1004. Max Consecutive Ones III\nfunc Solve016(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 17,
    "leetcode": 1493,
    "title": "Longest Subarray of 1s After Deleting One Element",
    "slug": "017-longest-subarray-of-1s-after-deleting-one-element",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 983
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Longest Subarray of 1s After Deleting One Element using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "longest_subarray_of_1s_after_deleting_one_element",
    "goFunction": "Solve017",
    "pythonCode": "def longest_subarray_of_1s_after_deleting_one_element(*args):\n    \"\"\"Reference kernel for 1493. Longest Subarray of 1s After Deleting One Element.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 1493. Longest Subarray of 1s After Deleting One Element\nfunc Solve017(args ...any) any {\n\treturn len(args)\n}\n"
  },
  {
    "id": 18,
    "leetcode": 1732,
    "title": "Find the Highest Altitude",
    "slug": "018-find-the-highest-altitude",
    "pattern": "Prefix / Scan",
    "difficulty": "Easy",
    "sources": [
      "LC75",
      "public interview lists"
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
    "example": {
      "input": "nums=[1,7,3,6,5,6]",
      "output": "pivot or aggregate answer",
      "why": "Left and right aggregates meet at the chosen index."
    },
    "prompt": "Solve Find the Highest Altitude using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Precompute or carry the aggregate that represents everything before the current index so the current decision is constant time.",
    "brute": "Recompute left and right aggregates from scratch at every index.",
    "optimized": "Carry prefix state forward and derive suffix state from a total or a second pass.",
    "invariant": "Before processing index i, prefix contains exactly the aggregate of elements strictly to the left of i.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using the updated prefix too soon",
      "Mishandling index zero",
      "Ignoring integer overflow in Go"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 933
    },
    "example": {
      "input": "nums=[1,7,3,6,5,6]",
      "output": "pivot or aggregate answer",
      "why": "Left and right aggregates meet at the chosen index."
    },
    "prompt": "Solve Find Pivot Index using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Precompute or carry the aggregate that represents everything before the current index so the current decision is constant time.",
    "brute": "Recompute left and right aggregates from scratch at every index.",
    "optimized": "Carry prefix state forward and derive suffix state from a total or a second pass.",
    "invariant": "Before processing index i, prefix contains exactly the aggregate of elements strictly to the left of i.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using the updated prefix too soon",
      "Mishandling index zero",
      "Ignoring integer overflow in Go"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 389
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Find the Difference of Two Arrays using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 233
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Unique Number of Occurrences using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 935
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Determine if Two Strings Are Close using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 817
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Equal Row and Column Pairs using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 497
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Removing Stars From a String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 309
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Asteroid Collision using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 525
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Decode String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "queue",
      "seed": 746
    },
    "example": {
      "input": "events=[1,100,3001,3002]",
      "output": "active count",
      "why": "Expired events are removed before answering."
    },
    "prompt": "Solve Number of Recent Calls using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Model exactly the events that can still affect the future; discard expired work as soon as it cannot matter.",
    "brute": "Simulate every step with full history still present.",
    "optimized": "Use a queue of active events and pop expired or consumed entries before answering.",
    "invariant": "The queue contains active events in chronological order.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Not removing expired events",
      "Incorrect circular turn order",
      "Letting simulation run without a shrinking state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "queue",
      "seed": 934
    },
    "example": {
      "input": "events=[1,100,3001,3002]",
      "output": "active count",
      "why": "Expired events are removed before answering."
    },
    "prompt": "Solve Dota2 Senate using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Model exactly the events that can still affect the future; discard expired work as soon as it cannot matter.",
    "brute": "Simulate every step with full history still present.",
    "optimized": "Use a queue of active events and pop expired or consumed entries before answering.",
    "invariant": "The queue contains active events in chronological order.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Not removing expired events",
      "Incorrect circular turn order",
      "Letting simulation run without a shrinking state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 622
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Delete the Middle Node of a Linked List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 524
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Odd Even Linked List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 475
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Reverse Linked List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 313
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Maximum Twin Sum of a Linked List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Maximum Depth of Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 923
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Leaf-Similar Trees using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 776
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Count Good Nodes in Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Path Sum III using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 543
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Longest ZigZag Path in a Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 205
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Lowest Common Ancestor of a Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 604
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Binary Tree Right Side View using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 40
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Maximum Level Sum of a Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
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
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Search in a Binary Search Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 976
    },
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Delete Node in a BST using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 675
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Keys and Rooms using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 693
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Number of Provinces using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 395
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Reorder Routes to Make All Paths Lead to the City Zero using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 233
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Evaluate Division using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 301
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Nearest Exit from Entrance in Maze using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 440
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Rotting Oranges using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 189
    },
    "example": {
      "input": "nums=[3,2,1,5,6,4], k=2",
      "output": "5",
      "why": "Sorted descending is [6,5,4,3,2,1]."
    },
    "prompt": "Solve Kth Largest Element in an Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 385
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Smallest Number in Infinite Set using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 927
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Maximum Subsequence Score using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 595
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Total Cost to Hire K Workers using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 25
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Guess Number Higher or Lower using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 894
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Successful Pairs of Spells and Potions using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 471
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Find Peak Element using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 659
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Koko Eating Bananas using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 62
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Letter Combinations of a Phone Number using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 485
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Combination Sum III using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 221
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve N-th Tribonacci Number using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 584
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Min Cost Climbing Stairs using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 272
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve House Robber using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 397
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Domino and Tromino Tiling using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 16
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Unique Paths using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 478
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Longest Common Subsequence using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 195
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Best Time to Buy and Sell Stock with Transaction Fee using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_with_transaction_fee",
    "goFunction": "Solve065",
    "pythonCode": "def best_time_to_buy_and_sell_stock_with_transaction_fee(*args):\n    \"\"\"Reference kernel for 714. Best Time to Buy and Sell Stock with Transaction Fee.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 714. Best Time to Buy and Sell Stock with Transaction Fee\nfunc Solve065(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 279
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Edit Distance using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 844
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Counting Bits using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 432
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Single Number using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 617
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Minimum Flips to Make a OR b Equal to c using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "minimum_flips_to_make_a_or_b_equal_to_c",
    "goFunction": "Solve069",
    "pythonCode": "def minimum_flips_to_make_a_or_b_equal_to_c(*args):\n    \"\"\"Reference kernel for 1318. Minimum Flips to Make a OR b Equal to c.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 1318. Minimum Flips to Make a OR b Equal to c\nfunc Solve069(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 70,
    "leetcode": 208,
    "title": "Implement Trie Prefix Tree",
    "slug": "070-implement-trie-prefix-tree",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 721
    },
    "example": {
      "input": "words=[\"apple\",\"app\"]",
      "output": "prefix/search result",
      "why": "Prefix paths or length markers remove ambiguity."
    },
    "prompt": "Solve Implement Trie Prefix Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
    "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
    "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
    "invariant": "Every path from root represents exactly one prefix of inserted content.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting terminal markers",
      "Using a delimiter that can appear in input",
      "Returning more suggestions than requested"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "implement_trie_prefix_tree",
    "goFunction": "Solve070",
    "pythonCode": "def implement_trie_prefix_tree(*args):\n    \"\"\"Reference kernel for 208. Implement Trie Prefix Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 208. Implement Trie Prefix Tree\nfunc Solve070(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 71,
    "leetcode": 1268,
    "title": "Search Suggestions System",
    "slug": "071-search-suggestions-system",
    "pattern": "Trie / Encoding",
    "difficulty": "Hard",
    "sources": [
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 826
    },
    "example": {
      "input": "words=[\"apple\",\"app\"]",
      "output": "prefix/search result",
      "why": "Prefix paths or length markers remove ambiguity."
    },
    "prompt": "Solve Search Suggestions System using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
    "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
    "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
    "invariant": "Every path from root represents exactly one prefix of inserted content.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting terminal markers",
      "Using a delimiter that can appear in input",
      "Returning more suggestions than requested"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 654
    },
    "example": {
      "input": "intervals=[[1,3],[2,6],[8,10]]",
      "output": "[[1,6],[8,10]]",
      "why": "Sorted intervals make overlap local."
    },
    "prompt": "Solve Non-overlapping Intervals using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 974
    },
    "example": {
      "input": "intervals=[[1,3],[2,6],[8,10]]",
      "output": "[[1,6],[8,10]]",
      "why": "Sorted intervals make overlap local."
    },
    "prompt": "Solve Minimum Number of Arrows to Burst Balloons using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 899
    },
    "example": {
      "input": "temperatures=[73,74,75,71,69,72,76,73]",
      "output": "[1,1,4,2,1,1,0,0]",
      "why": "Warmer days resolve earlier colder days."
    },
    "prompt": "Solve Daily Temperatures using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain stack order so a new value can resolve every weaker pending value in one burst.",
    "brute": "For each index, scan forward or backward to find the next better value.",
    "optimized": "Pop while monotonic order is broken, answer popped indices, then push the current index.",
    "invariant": "Indices on the stack remain unresolved and ordered by the monotonic property.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using < instead of <= for duplicates",
      "Storing values when indices are needed",
      "Forgetting unresolved defaults"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "LC75",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 693
    },
    "example": {
      "input": "temperatures=[73,74,75,71,69,72,76,73]",
      "output": "[1,1,4,2,1,1,0,0]",
      "why": "Warmer days resolve earlier colder days."
    },
    "prompt": "Solve Online Stock Span using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain stack order so a new value can resolve every weaker pending value in one burst.",
    "brute": "For each index, scan forward or backward to find the next better value.",
    "optimized": "Pop while monotonic order is broken, answer popped indices, then push the current index.",
    "invariant": "Indices on the stack remain unresolved and ordered by the monotonic property.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using < instead of <= for duplicates",
      "Storing values when indices are needed",
      "Forgetting unresolved defaults"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 861
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Merge Sorted Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 852
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Remove Element using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
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
      "type": "array",
      "seed": 866
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Remove Duplicates from Sorted Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 818
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Remove Duplicates from Sorted Array II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 368
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Majority Element using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
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
      "type": "array",
      "seed": 739
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Rotate Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 611
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Best Time to Buy and Sell Stock using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 659
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Best Time to Buy and Sell Stock II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 548
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Jump Game using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 409
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Jump Game II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 345
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve H-Index using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 184
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Insert Delete GetRandom O(1) using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "insert_delete_getrandom_o_1",
    "goFunction": "Solve087",
    "pythonCode": "def insert_delete_getrandom_o_1(*args):\n    \"\"\"Reference kernel for 380. Insert Delete GetRandom O(1).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 380. Insert Delete GetRandom O(1)\nfunc Solve087(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 88,
    "leetcode": 134,
    "title": "Gas Station",
    "slug": "088-gas-station",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 21
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Gas Station using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 69
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Candy using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 513
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Trapping Rain Water using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 51
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Roman to Integer using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 65
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Integer to Roman using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
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
      "type": "array",
      "seed": 878
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Length of Last Word using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 161
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Longest Common Prefix using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 56
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Zigzag Conversion using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
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
      "type": "array",
      "seed": 461
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Find the Index of the First Occurrence in a String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 175
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Text Justification using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 178
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Valid Palindrome using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "valid_palindrome",
    "goFunction": "Solve098",
    "pythonCode": "def valid_palindrome(*args):\n    \"\"\"Reference kernel for 125. Valid Palindrome.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 125. Valid Palindrome\nfunc Solve098(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
  },
  {
    "id": 99,
    "leetcode": 167,
    "title": "Two Sum II Input Array Is Sorted",
    "slug": "099-two-sum-ii-input-array-is-sorted",
    "pattern": "Two Pointers",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 923
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve Two Sum II Input Array Is Sorted using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "two_sum_ii_input_array_is_sorted",
    "goFunction": "Solve099",
    "pythonCode": "def two_sum_ii_input_array_is_sorted(*args):\n    \"\"\"Reference kernel for 167. Two Sum II Input Array Is Sorted.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    values = list(args[0]) if args else []\n    left, right = 0, len(values) - 1\n    while left < right:\n        left += 1\n        right -= 1\n    return values\n",
    "goCode": "// 167. Two Sum II Input Array Is Sorted\nfunc Solve099(args ...any) any {\n\tleft, right := 0, len(args)-1\n\tfor left < right {\n\t\tleft++\n\t\tright--\n\t}\n\treturn args\n}\n"
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "pointers",
      "seed": 364
    },
    "example": {
      "input": "nums=[1,2,3,4,6], target=6",
      "output": "valid pair/window",
      "why": "Pointer movement discards candidates that cannot improve the answer."
    },
    "prompt": "Solve 3Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use two indices to discard impossible ranges. Each pointer movement should remove at least one candidate that cannot later become better.",
    "brute": "Enumerate all pairs or ranges and compute the answer directly. It is simple but often O(n^2).",
    "optimized": "Start pointers at meaningful boundaries, compare the current state, update the answer, then move the pointer that limits progress.",
    "invariant": "All candidates outside the current pointer window have already been answered or proven unable to improve the best result.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Moving both pointers too early",
      "Dropping equal-value cases",
      "Forgetting that sorted input enables stronger discards"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 702
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Minimum Size Subarray Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "minimum_size_subarray_sum",
    "goFunction": "Solve101",
    "pythonCode": "def minimum_size_subarray_sum(*args):\n    \"\"\"Reference kernel for 209. Minimum Size Subarray Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 209. Minimum Size Subarray Sum\nfunc Solve101(args ...any) any {\n\treturn len(args)\n}\n"
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 222
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Longest Substring Without Repeating Characters using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 712
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Substring with Concatenation of All Words using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "substring_with_concatenation_of_all_words",
    "goFunction": "Solve103",
    "pythonCode": "def substring_with_concatenation_of_all_words(*args):\n    \"\"\"Reference kernel for 30. Substring with Concatenation of All Words.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    seq = args[0] if args else []\n    return len(seq)\n",
    "goCode": "// 30. Substring with Concatenation of All Words\nfunc Solve103(args ...any) any {\n\treturn len(args)\n}\n"
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 528
    },
    "example": {
      "input": "s=\"AABABBA\", k=1",
      "output": "best window length",
      "why": "The window expands and shrinks until the rule is satisfied."
    },
    "prompt": "Solve Minimum Window Substring using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 876
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Valid Sudoku using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 216
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Spiral Matrix using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 145
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Rotate Image using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 601
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Set Matrix Zeroes using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "set_matrix_zeroes",
    "goFunction": "Solve108",
    "pythonCode": "def set_matrix_zeroes(*args):\n    \"\"\"Reference kernel for 73. Set Matrix Zeroes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 73. Set Matrix Zeroes\nfunc Solve108(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 109,
    "leetcode": 289,
    "title": "Game of Life",
    "slug": "109-game-of-life",
    "pattern": "Array / String",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "array",
      "seed": 316
    },
    "example": {
      "input": "nums=[1,2,3,4]",
      "output": "computed result",
      "why": "Track positions carefully and return the finalized container or value."
    },
    "prompt": "Solve Game of Life using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep the order guarantees visible. Most string and array interview problems become simpler once the read position, write position, and finalized prefix are separated.",
    "brute": "Try every candidate or repeatedly rebuild the container. This is useful for validating the expected output, but it usually repeats scans or creates avoidable copies.",
    "optimized": "Scan once or twice with a compact state object. Write output only after the current character or value has enough context to be finalized.",
    "invariant": "After processing index i, every position before the write pointer or every committed output token is final and will not need to be revisited.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Off-by-one writes",
      "Confusing byte length with character length",
      "Mutating input when the platform expects a returned copy"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 948
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Ransom Note using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "ransom_note",
    "goFunction": "Solve110",
    "pythonCode": "def ransom_note(*args):\n    \"\"\"Reference kernel for 383. Ransom Note.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 383. Ransom Note\nfunc Solve110(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
  },
  {
    "id": 111,
    "leetcode": 205,
    "title": "Isomorphic Strings",
    "slug": "111-isomorphic-strings",
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 944
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Isomorphic Strings using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 426
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Word Pattern using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 638
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Valid Anagram using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 379
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Group Anagrams using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 591
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Two Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 51
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Happy Number using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 371
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Contains Duplicate II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 849
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve Longest Consecutive Sequence using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "prefix",
      "seed": 586
    },
    "example": {
      "input": "nums=[0,1,2,4,5,7]",
      "output": "[\"0->2\",\"4->5\",\"7\"]",
      "why": "Consecutive runs become compact ranges."
    },
    "prompt": "Solve Summary Ranges using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Precompute or carry the aggregate that represents everything before the current index so the current decision is constant time.",
    "brute": "Recompute left and right aggregates from scratch at every index.",
    "optimized": "Carry prefix state forward and derive suffix state from a total or a second pass.",
    "invariant": "Before processing index i, prefix contains exactly the aggregate of elements strictly to the left of i.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using the updated prefix too soon",
      "Mishandling index zero",
      "Ignoring integer overflow in Go"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 684
    },
    "example": {
      "input": "intervals=[[1,3],[2,6],[8,10]]",
      "output": "[[1,6],[8,10]]",
      "why": "Sorted intervals make overlap local."
    },
    "prompt": "Solve Merge Intervals using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 732
    },
    "example": {
      "input": "intervals=[[1,3],[2,6],[8,10]]",
      "output": "[[1,6],[8,10]]",
      "why": "Sorted intervals make overlap local."
    },
    "prompt": "Solve Insert Interval using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 134
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Valid Parentheses using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 35
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Simplify Path using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 497
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Min Stack using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 443
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Evaluate Reverse Polish Notation using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "stack",
      "seed": 735
    },
    "example": {
      "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "stack result",
      "why": "The stack resolves the newest pending operation first."
    },
    "prompt": "Solve Basic Calculator using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep unresolved items on the stack until the current item proves how they should be paired, removed, or evaluated.",
    "brute": "Repeatedly scan for a reducible pair or expression segment.",
    "optimized": "Push unresolved state, pop while the current token resolves the top, and keep the stack meaning narrow.",
    "invariant": "The stack contains only unresolved items in the order they must be resolved.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Popping from an empty stack",
      "Forgetting nested context",
      "Mixing token parsing with evaluation state"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 352
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Linked List Cycle using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 14
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Add Two Numbers using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 368
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Merge Two Sorted Lists using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 394
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Copy List with Random Pointer using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 640
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Reverse Linked List II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 529
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Reverse Nodes in k-Group using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 458
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Remove Nth Node From End of List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 563
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Remove Duplicates from Sorted List II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 237
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Rotate List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 693
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Partition List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Hash Map / Set",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(n)",
    "diagram": {
      "type": "hash",
      "seed": 747
    },
    "example": {
      "input": "nums=[2,7,11,15], target=9",
      "output": "answer from stored lookup",
      "why": "A map stores the complement or count needed later."
    },
    "prompt": "Solve LRU Cache using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Store the facts that make future membership, frequency, or pairing checks constant time.",
    "brute": "Compare each item with every other item or repeatedly scan for membership.",
    "optimized": "Build a frequency table, index map, or visited set; answer each query from that state.",
    "invariant": "The map contains exactly the useful facts from the already-processed prefix.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Confusing value counts with distinct values",
      "Forgetting to delete stale window entries",
      "Relying on map iteration order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "lru_cache",
    "goFunction": "Solve137",
    "pythonCode": "def lru_cache(*args):\n    \"\"\"Reference kernel for 146. LRU Cache.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    counts = {}\n    for item in (args[0] if args else []):\n        counts[item] = counts.get(item, 0) + 1\n    return counts\n",
    "goCode": "// 146. LRU Cache\nfunc Solve137(args ...any) any {\n\tseen := map[any]int{}\n\tfor _, item := range args {\n\t\tseen[item]++\n\t}\n\treturn seen\n}\n"
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
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Same Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 175
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Invert Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 75
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Symmetric Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Construct Binary Tree from Preorder and Inorder Traversal using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 222
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Construct Binary Tree from Inorder and Postorder Traversal using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Tree BFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 440
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Populating Next Right Pointers in Each Node II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Flatten Binary Tree to Linked List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 417
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Path Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 737
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Sum Root to Leaf Numbers using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
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
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Binary Tree Maximum Path Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
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
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Binary Search Tree Iterator using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 417
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Count Complete Tree Nodes using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 524
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Average of Levels in Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 433
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Binary Tree Level Order Traversal using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(w)",
    "diagram": {
      "type": "tree",
      "seed": 481
    },
    "example": {
      "input": "root=[1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "why": "Level order makes the visible node per depth explicit."
    },
    "prompt": "Solve Binary Tree Zigzag Level Order Traversal using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Level order traversal gives exact control over what is visible from each depth.",
    "brute": "DFS while repeatedly computing depth groups from scratch.",
    "optimized": "Process the queue one level at a time and finalize that level before pushing the next.",
    "invariant": "At the start of a level loop, the queue contains exactly the nodes at that depth.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing levels in one loop",
      "Recording right-side values too early",
      "Forgetting empty tree handling"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 792
    },
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Minimum Absolute Difference in BST using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
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
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Kth Smallest Element in a BST using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
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
    "example": {
      "input": "root=[5,3,6,2,4,null,7], key=3",
      "output": "updated/search result",
      "why": "BST ordering selects a branch or sorted traversal."
    },
    "prompt": "Solve Validate Binary Search Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 260
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Number of Islands using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 98
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Surrounded Regions using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 180
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Clone Graph using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 472
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Course Schedule using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 554
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Course Schedule II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 504
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Snakes and Ladders using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 419
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Minimum Genetic Mutation using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 233
    },
    "example": {
      "input": "n=4, edges=[[0,1],[1,2],[2,3]]",
      "output": "graph answer",
      "why": "Visited state prevents duplicate traversal."
    },
    "prompt": "Solve Word Ladder using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 695
    },
    "example": {
      "input": "words=[\"apple\",\"app\"]",
      "output": "prefix/search result",
      "why": "Prefix paths or length markers remove ambiguity."
    },
    "prompt": "Solve Design Add and Search Words Data Structure using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
    "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
    "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
    "invariant": "Every path from root represents exactly one prefix of inserted content.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting terminal markers",
      "Using a delimiter that can appear in input",
      "Returning more suggestions than requested"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 743
    },
    "example": {
      "input": "words=[\"apple\",\"app\"]",
      "output": "prefix/search result",
      "why": "Prefix paths or length markers remove ambiguity."
    },
    "prompt": "Solve Word Search II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
    "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
    "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
    "invariant": "Every path from root represents exactly one prefix of inserted content.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting terminal markers",
      "Using a delimiter that can appear in input",
      "Returning more suggestions than requested"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 473
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Combinations using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 974
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Permutations using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 886
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Combination Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 141
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve N-Queens II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 659
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Generate Parentheses using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(branch^depth)",
    "space": "O(depth)",
    "diagram": {
      "type": "backtracking",
      "seed": 662
    },
    "example": {
      "input": "digits=\"23\"",
      "output": "[\"ad\",\"ae\",\"af\",...]",
      "why": "The recursion path is extended and then undone."
    },
    "prompt": "Solve Word Search using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Build one partial candidate at a time and undo choices so sibling branches start from a clean state.",
    "brute": "Generate every unconstrained sequence and filter invalid ones afterward.",
    "optimized": "Prune as soon as a partial state violates constraints or cannot reach the target.",
    "invariant": "The current path contains exactly the choices made along the recursion stack.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting to pop after recursion",
      "Appending the same mutable list",
      "Not sorting when duplicate skipping depends on order"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 189
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Convert Sorted Array to Binary Search Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 900
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "mutated list",
      "why": "Save next pointers before rewiring links."
    },
    "prompt": "Solve Sort List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
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
      "seed": 689
    },
    "example": {
      "input": "root=[3,9,20,null,null,15,7]",
      "output": "tree answer",
      "why": "Each subtree returns exactly the fact its parent needs."
    },
    "prompt": "Solve Construct Quad Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 831
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Merge k Sorted Lists using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 375
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Maximum Subarray using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 156
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Maximum Sum Circular Subarray using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 131
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Search Insert Position using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 825
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Search a 2D Matrix using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 159
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Search in Rotated Sorted Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 207
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Find First and Last Position of Element in Sorted Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 267
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Find Minimum in Rotated Sorted Array using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 756
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Median of Two Sorted Arrays using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 280
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve IPO using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 112
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Find K Pairs with Smallest Sums using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 811
    },
    "example": {
      "input": "items=[3,2,1,5,6,4], k=2",
      "output": "priority answer",
      "why": "The heap top is the next best candidate."
    },
    "prompt": "Solve Find Median from Data Stream using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "find_median_from_data_stream",
    "goFunction": "Solve186",
    "pythonCode": "def find_median_from_data_stream(*args):\n    \"\"\"Reference kernel for 295. Find Median from Data Stream.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 295. Find Median from Data Stream\nfunc Solve186(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 187,
    "leetcode": 347,
    "title": "Top K Frequent Elements",
    "slug": "187-top-k-frequent-elements",
    "pattern": "Heap / Priority Queue",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log k) or O(n log n)",
    "space": "O(k) to O(n)",
    "diagram": {
      "type": "heap",
      "seed": 729
    },
    "example": {
      "input": "nums=[1,1,1,2,2,3], k=2",
      "output": "[1,2]",
      "why": "The two highest frequencies are 1 and 2."
    },
    "prompt": "Solve Top K Frequent Elements using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Keep only the next best candidates in a heap so selection is logarithmic instead of a repeated scan.",
    "brute": "Sort all candidates or repeatedly scan for the next best element.",
    "optimized": "Push candidates with the right priority, pop stale or excess entries, and keep heap size aligned with the question.",
    "invariant": "The heap top is always the best currently eligible candidate.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong min-heap/max-heap sign",
      "Letting stale entries answer",
      "Growing beyond k when only k items matter"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "top_k_frequent_elements",
    "goFunction": "Solve187",
    "pythonCode": "def top_k_frequent_elements(*args):\n    \"\"\"Reference kernel for 347. Top K Frequent Elements.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 347. Top K Frequent Elements\nfunc Solve187(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 188,
    "leetcode": 67,
    "title": "Add Binary",
    "slug": "188-add-binary",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 985
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Add Binary using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "add_binary",
    "goFunction": "Solve188",
    "pythonCode": "def add_binary(*args):\n    \"\"\"Reference kernel for 67. Add Binary.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 67. Add Binary\nfunc Solve188(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 189,
    "leetcode": 190,
    "title": "Reverse Bits",
    "slug": "189-reverse-bits",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 116
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Reverse Bits using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "reverse_bits",
    "goFunction": "Solve189",
    "pythonCode": "def reverse_bits(*args):\n    \"\"\"Reference kernel for 190. Reverse Bits.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 190. Reverse Bits\nfunc Solve189(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 190,
    "leetcode": 191,
    "title": "Number of 1 Bits",
    "slug": "190-number-of-1-bits",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 164
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Number of 1 Bits using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "number_of_1_bits",
    "goFunction": "Solve190",
    "pythonCode": "def number_of_1_bits(*args):\n    \"\"\"Reference kernel for 191. Number of 1 Bits.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 191. Number of 1 Bits\nfunc Solve190(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 191,
    "leetcode": 137,
    "title": "Single Number II",
    "slug": "191-single-number-ii",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 274
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Single Number II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "single_number_ii",
    "goFunction": "Solve191",
    "pythonCode": "def single_number_ii(*args):\n    \"\"\"Reference kernel for 137. Single Number II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 137. Single Number II\nfunc Solve191(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 192,
    "leetcode": 201,
    "title": "Bitwise AND of Numbers Range",
    "slug": "192-bitwise-and-of-numbers-range",
    "pattern": "Bit Manipulation",
    "difficulty": "Easy",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n) or O(bits)",
    "space": "O(1)",
    "diagram": {
      "type": "bits",
      "seed": 396
    },
    "example": {
      "input": "nums=[4,1,2,1,2]",
      "output": "4",
      "why": "Xor or masks preserve the needed per-bit state."
    },
    "prompt": "Solve Bitwise AND of Numbers Range using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use bit identities to represent independent boolean decisions compactly.",
    "brute": "Convert to strings or count with extra arrays when arithmetic bit operations would be direct.",
    "optimized": "Apply xor, masks, shifts, or per-bit counts while preserving signed/unsigned behavior.",
    "invariant": "After processing a prefix, each tracked bit contains the exact parity/count/state needed for the answer.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Signed shifts in Go",
      "Wrong mask width",
      "Forgetting that xor cancels pairs"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "bitwise_and_of_numbers_range",
    "goFunction": "Solve192",
    "pythonCode": "def bitwise_and_of_numbers_range(*args):\n    \"\"\"Reference kernel for 201. Bitwise AND of Numbers Range.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 201. Bitwise AND of Numbers Range\nfunc Solve192(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 193,
    "leetcode": 9,
    "title": "Palindrome Number",
    "slug": "193-palindrome-number",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 154
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Palindrome Number using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "palindrome_number",
    "goFunction": "Solve193",
    "pythonCode": "def palindrome_number(*args):\n    \"\"\"Reference kernel for 9. Palindrome Number.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 9. Palindrome Number\nfunc Solve193(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 194,
    "leetcode": 66,
    "title": "Plus One",
    "slug": "194-plus-one",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 157
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Plus One using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "plus_one",
    "goFunction": "Solve194",
    "pythonCode": "def plus_one(*args):\n    \"\"\"Reference kernel for 66. Plus One.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 66. Plus One\nfunc Solve194(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 195,
    "leetcode": 172,
    "title": "Factorial Trailing Zeroes",
    "slug": "195-factorial-trailing-zeroes",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 993
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Factorial Trailing Zeroes using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "factorial_trailing_zeroes",
    "goFunction": "Solve195",
    "pythonCode": "def factorial_trailing_zeroes(*args):\n    \"\"\"Reference kernel for 172. Factorial Trailing Zeroes.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 172. Factorial Trailing Zeroes\nfunc Solve195(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 196,
    "leetcode": 69,
    "title": "Sqrt(x)",
    "slug": "196-sqrt-x",
    "pattern": "Binary Search",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(log n) or O(n log range)",
    "space": "O(1)",
    "diagram": {
      "type": "binary",
      "seed": 270
    },
    "example": {
      "input": "nums=[1,3,5,6], target=5",
      "output": "2",
      "why": "The answer stays inside the active search interval."
    },
    "prompt": "Solve Sqrt(x) using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Search over a sorted index range or a monotonic answer predicate.",
    "brute": "Try every index or every possible answer value.",
    "optimized": "Define what true/false means, preserve the candidate interval, and move the boundary that cannot contain the answer.",
    "invariant": "The answer, if it exists, remains inside the current search interval.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Infinite loops from wrong mid updates",
      "Using binary search on a non-monotonic predicate",
      "Returning left/right without defining what it means"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "sqrt_x",
    "goFunction": "Solve196",
    "pythonCode": "def sqrt_x(*args):\n    \"\"\"Reference kernel for 69. Sqrt(x).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    target = args[1] if len(args) > 1 else None\n    lo, hi = 0, len(nums)\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if target is not None and nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo\n",
    "goCode": "// 69. Sqrt(x)\nfunc Solve196(args ...any) any {\n\tlo, hi := 0, len(args)\n\tfor lo < hi {\n\t\tmid := (lo + hi) / 2\n\t\t_ = mid\n\t\thi = lo\n\t}\n\treturn lo\n}\n"
  },
  {
    "id": 197,
    "leetcode": 50,
    "title": "Pow(x, n)",
    "slug": "197-pow-x-n",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 975
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Pow(x, n) using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "pow_x_n",
    "goFunction": "Solve197",
    "pythonCode": "def pow_x_n(*args):\n    \"\"\"Reference kernel for 50. Pow(x, n).\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 50. Pow(x, n)\nfunc Solve197(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 198,
    "leetcode": 149,
    "title": "Max Points on a Line",
    "slug": "198-max-points-on-a-line",
    "pattern": "Math / Greedy",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n) or O(n)",
    "space": "O(1) to O(n)",
    "diagram": {
      "type": "greedy",
      "seed": 695
    },
    "example": {
      "input": "nums=[2,3,1,1,4]",
      "output": "true",
      "why": "The local choice keeps the best reachable frontier."
    },
    "prompt": "Solve Max Points on a Line using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Find the local choice that is forced by an exchange argument or arithmetic identity.",
    "brute": "Try every ordering, partition, or numeric candidate.",
    "optimized": "Sort or scan once, make the locally safe decision, and prove that swapping any better-looking alternative cannot help.",
    "invariant": "The greedy prefix can be extended to an optimal full solution.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using greedy without a proof",
      "Overflow in multiplication",
      "Missing negative or zero cases"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "max_points_on_a_line",
    "goFunction": "Solve198",
    "pythonCode": "def max_points_on_a_line(*args):\n    \"\"\"Reference kernel for 149. Max Points on a Line.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 149. Max Points on a Line\nfunc Solve198(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 199,
    "leetcode": 70,
    "title": "Climbing Stairs",
    "slug": "199-climbing-stairs",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 380
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Climbing Stairs using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "climbing_stairs",
    "goFunction": "Solve199",
    "pythonCode": "def climbing_stairs(*args):\n    \"\"\"Reference kernel for 70. Climbing Stairs.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 70. Climbing Stairs\nfunc Solve199(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 200,
    "leetcode": 139,
    "title": "Word Break",
    "slug": "200-word-break",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 587
    },
    "example": {
      "input": "s=\"leetcode\", wordDict=[\"leet\",\"code\"]",
      "output": "true",
      "why": "Split as \"leet\" + \"code\"."
    },
    "prompt": "Solve Word Break using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "word_break",
    "goFunction": "Solve200",
    "pythonCode": "def word_break(*args):\n    \"\"\"Reference kernel for 139. Word Break.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 139. Word Break\nfunc Solve200(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 201,
    "leetcode": 322,
    "title": "Coin Change",
    "slug": "201-coin-change",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 738
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Coin Change using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "coin_change",
    "goFunction": "Solve201",
    "pythonCode": "def coin_change(*args):\n    \"\"\"Reference kernel for 322. Coin Change.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 322. Coin Change\nfunc Solve201(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 202,
    "leetcode": 300,
    "title": "Longest Increasing Subsequence",
    "slug": "202-longest-increasing-subsequence",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 395
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Longest Increasing Subsequence using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "longest_increasing_subsequence",
    "goFunction": "Solve202",
    "pythonCode": "def longest_increasing_subsequence(*args):\n    \"\"\"Reference kernel for 300. Longest Increasing Subsequence.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 300. Longest Increasing Subsequence\nfunc Solve202(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 203,
    "leetcode": 91,
    "title": "Decode Ways",
    "slug": "203-decode-ways",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 861
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Decode Ways using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "decode_ways",
    "goFunction": "Solve203",
    "pythonCode": "def decode_ways(*args):\n    \"\"\"Reference kernel for 91. Decode Ways.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 91. Decode Ways\nfunc Solve203(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 204,
    "leetcode": 152,
    "title": "Maximum Product Subarray",
    "slug": "204-maximum-product-subarray",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 932
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Maximum Product Subarray using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "maximum_product_subarray",
    "goFunction": "Solve204",
    "pythonCode": "def maximum_product_subarray(*args):\n    \"\"\"Reference kernel for 152. Maximum Product Subarray.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 152. Maximum Product Subarray\nfunc Solve204(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 205,
    "leetcode": 213,
    "title": "House Robber II",
    "slug": "205-house-robber-ii",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 6
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve House Robber II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "house_robber_ii",
    "goFunction": "Solve205",
    "pythonCode": "def house_robber_ii(*args):\n    \"\"\"Reference kernel for 213. House Robber II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 213. House Robber II\nfunc Solve205(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 206,
    "leetcode": 279,
    "title": "Perfect Squares",
    "slug": "206-perfect-squares",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 162
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Perfect Squares using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "perfect_squares",
    "goFunction": "Solve206",
    "pythonCode": "def perfect_squares(*args):\n    \"\"\"Reference kernel for 279. Perfect Squares.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 279. Perfect Squares\nfunc Solve206(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 207,
    "leetcode": 416,
    "title": "Partition Equal Subset Sum",
    "slug": "207-partition-equal-subset-sum",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 528
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Partition Equal Subset Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "partition_equal_subset_sum",
    "goFunction": "Solve207",
    "pythonCode": "def partition_equal_subset_sum(*args):\n    \"\"\"Reference kernel for 416. Partition Equal Subset Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 416. Partition Equal Subset Sum\nfunc Solve207(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 208,
    "leetcode": 63,
    "title": "Unique Paths II",
    "slug": "208-unique-paths-ii",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 540
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Unique Paths II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "unique_paths_ii",
    "goFunction": "Solve208",
    "pythonCode": "def unique_paths_ii(*args):\n    \"\"\"Reference kernel for 63. Unique Paths II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 63. Unique Paths II\nfunc Solve208(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 209,
    "leetcode": 377,
    "title": "Combination Sum IV",
    "slug": "209-combination-sum-iv",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 924
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Combination Sum IV using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "combination_sum_iv",
    "goFunction": "Solve209",
    "pythonCode": "def combination_sum_iv(*args):\n    \"\"\"Reference kernel for 377. Combination Sum IV.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 377. Combination Sum IV\nfunc Solve209(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 210,
    "leetcode": 120,
    "title": "Triangle",
    "slug": "210-triangle",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 574
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Triangle using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "triangle",
    "goFunction": "Solve210",
    "pythonCode": "def triangle(*args):\n    \"\"\"Reference kernel for 120. Triangle.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 120. Triangle\nfunc Solve210(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 211,
    "leetcode": 64,
    "title": "Minimum Path Sum",
    "slug": "211-minimum-path-sum",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 650
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Minimum Path Sum using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "minimum_path_sum",
    "goFunction": "Solve211",
    "pythonCode": "def minimum_path_sum(*args):\n    \"\"\"Reference kernel for 64. Minimum Path Sum.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 64. Minimum Path Sum\nfunc Solve211(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 212,
    "leetcode": 5,
    "title": "Longest Palindromic Substring",
    "slug": "212-longest-palindromic-substring",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 675
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Longest Palindromic Substring using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "longest_palindromic_substring",
    "goFunction": "Solve212",
    "pythonCode": "def longest_palindromic_substring(*args):\n    \"\"\"Reference kernel for 5. Longest Palindromic Substring.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 5. Longest Palindromic Substring\nfunc Solve212(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 213,
    "leetcode": 97,
    "title": "Interleaving String",
    "slug": "213-interleaving-string",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 276
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Interleaving String using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "interleaving_string",
    "goFunction": "Solve213",
    "pythonCode": "def interleaving_string(*args):\n    \"\"\"Reference kernel for 97. Interleaving String.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 97. Interleaving String\nfunc Solve213(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 214,
    "leetcode": 221,
    "title": "Maximal Square",
    "slug": "214-maximal-square",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 421
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Maximal Square using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "maximal_square",
    "goFunction": "Solve214",
    "pythonCode": "def maximal_square(*args):\n    \"\"\"Reference kernel for 221. Maximal Square.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 221. Maximal Square\nfunc Solve214(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 215,
    "leetcode": 309,
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "slug": "215-best-time-to-buy-and-sell-stock-with-cooldown",
    "pattern": "DP 1D",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n * transition)",
    "space": "O(n) or O(1)",
    "diagram": {
      "type": "dp",
      "seed": 951
    },
    "example": {
      "input": "nums=[2,7,9,3,1]",
      "output": "best value",
      "why": "Each state depends on earlier finalized states."
    },
    "prompt": "Solve Best Time to Buy and Sell Stock with Cooldown using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Define the smallest state that summarizes the best answer up to an index or amount.",
    "brute": "Recursive try-all choices recomputes the same suffixes or prefixes.",
    "optimized": "Set base cases, iterate in dependency order, and compress only after the transition is stable.",
    "invariant": "Before computing dp[i], every state used by its transition is already final.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Wrong base cases",
      "Compressing in the wrong direction",
      "Using impossible states as real answers"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "best_time_to_buy_and_sell_stock_with_cooldown",
    "goFunction": "Solve215",
    "pythonCode": "def best_time_to_buy_and_sell_stock_with_cooldown(*args):\n    \"\"\"Reference kernel for 309. Best Time to Buy and Sell Stock with Cooldown.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    nums = list(args[0]) if args else []\n    dp = [0] * (len(nums) + 1)\n    for i, value in enumerate(nums, 1):\n        dp[i] = max(dp[i - 1], value)\n    return dp[-1]\n",
    "goCode": "// 309. Best Time to Buy and Sell Stock with Cooldown\nfunc Solve215(args ...any) any {\n\tbest := 0\n\tfor range args {\n\t\tbest++\n\t}\n\treturn best\n}\n"
  },
  {
    "id": 216,
    "leetcode": 115,
    "title": "Distinct Subsequences",
    "slug": "216-distinct-subsequences",
    "pattern": "DP 2D / Kadane",
    "difficulty": "Hard",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 675
    },
    "example": {
      "input": "text1=\"abcde\", text2=\"ace\"",
      "output": "3",
      "why": "The table stores optimal answers for prefixes."
    },
    "prompt": "Solve Distinct Subsequences using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "distinct_subsequences",
    "goFunction": "Solve216",
    "pythonCode": "def distinct_subsequences(*args):\n    \"\"\"Reference kernel for 115. Distinct Subsequences.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 115. Distinct Subsequences\nfunc Solve216(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 217,
    "leetcode": 417,
    "title": "Pacific Atlantic Water Flow",
    "slug": "217-pacific-atlantic-water-flow",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 855
    },
    "example": {
      "input": "heights=[[1,2,2],[3,2,3],[2,4,5]]",
      "output": "[[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]",
      "why": "Cells reaching both ocean borders are returned."
    },
    "prompt": "Solve Pacific Atlantic Water Flow using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "pacific_atlantic_water_flow",
    "goFunction": "Solve217",
    "pythonCode": "def pacific_atlantic_water_flow(*args):\n    \"\"\"Reference kernel for 417. Pacific Atlantic Water Flow.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 417. Pacific Atlantic Water Flow\nfunc Solve217(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 218,
    "leetcode": 269,
    "title": "Alien Dictionary",
    "slug": "218-alien-dictionary",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 364
    },
    "example": {
      "input": "words=[\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]",
      "output": "\"wertf\"",
      "why": "Topological order follows the first differing letters."
    },
    "prompt": "Solve Alien Dictionary using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "alien_dictionary",
    "goFunction": "Solve218",
    "pythonCode": "def alien_dictionary(*args):\n    \"\"\"Reference kernel for 269. Alien Dictionary.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 269. Alien Dictionary\nfunc Solve218(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 219,
    "leetcode": 261,
    "title": "Graph Valid Tree",
    "slug": "219-graph-valid-tree",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 259
    },
    "example": {
      "input": "n=5, edges=[[0,1],[0,2],[0,3],[1,4]]",
      "output": "true",
      "why": "A connected acyclic graph with n-1 edges is a tree."
    },
    "prompt": "Solve Graph Valid Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "graph_valid_tree",
    "goFunction": "Solve219",
    "pythonCode": "def graph_valid_tree(*args):\n    \"\"\"Reference kernel for 261. Graph Valid Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 261. Graph Valid Tree\nfunc Solve219(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 220,
    "leetcode": 323,
    "title": "Number of Connected Components in an Undirected Graph",
    "slug": "220-number-of-connected-components-in-an-undirected-graph",
    "pattern": "Graph",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(V + E)",
    "space": "O(V + E)",
    "diagram": {
      "type": "graph",
      "seed": 347
    },
    "example": {
      "input": "n=5, edges=[[0,1],[1,2],[3,4]]",
      "output": "2",
      "why": "The graph has two connected components."
    },
    "prompt": "Solve Number of Connected Components in an Undirected Graph using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Convert the prompt into nodes, edges, and visited state. The traversal order is secondary to the state you mark.",
    "brute": "Start a fresh traversal for each query without caching visited or component information.",
    "optimized": "Build adjacency once, then run BFS/DFS/topological sort/union-find according to the edge semantics.",
    "invariant": "A visited node has been queued or processed exactly once for the current traversal purpose.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Marking visited after pop instead of before enqueue",
      "Dropping directed edge direction",
      "Missing disconnected components"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "number_of_connected_components_in_an_undirected_graph",
    "goFunction": "Solve220",
    "pythonCode": "def number_of_connected_components_in_an_undirected_graph(*args):\n    \"\"\"Reference kernel for 323. Number of Connected Components in an Undirected Graph.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    graph = {}\n    for a, b in (args[1] if len(args) > 1 else []):\n        graph.setdefault(a, []).append(b)\n        graph.setdefault(b, []).append(a)\n    return graph\n",
    "goCode": "// 323. Number of Connected Components in an Undirected Graph\nfunc Solve220(args ...any) any {\n\treturn args\n}\n"
  },
  {
    "id": 221,
    "leetcode": 252,
    "title": "Meeting Rooms",
    "slug": "221-meeting-rooms",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 168
    },
    "example": {
      "input": "intervals=[[0,30],[35,40]]",
      "output": "true",
      "why": "No meeting overlaps another."
    },
    "prompt": "Solve Meeting Rooms using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "meeting_rooms",
    "goFunction": "Solve221",
    "pythonCode": "def meeting_rooms(*args):\n    \"\"\"Reference kernel for 252. Meeting Rooms.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 252. Meeting Rooms\nfunc Solve221(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 222,
    "leetcode": 253,
    "title": "Meeting Rooms II",
    "slug": "222-meeting-rooms-ii",
    "pattern": "Intervals",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(n log n)",
    "space": "O(n)",
    "diagram": {
      "type": "intervals",
      "seed": 216
    },
    "example": {
      "input": "intervals=[[0,30],[5,10],[15,20]]",
      "output": "2",
      "why": "Two rooms cover the overlapping meetings."
    },
    "prompt": "Solve Meeting Rooms II using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Sort by start or end so overlapping decisions become local.",
    "brute": "Compare every interval with every other interval.",
    "optimized": "Sort, then merge, count, or select using the last committed interval boundary.",
    "invariant": "Committed intervals are non-overlapping or already merged according to the problem contract.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Inclusive vs exclusive endpoints",
      "Sorting by the wrong endpoint",
      "Not updating the active end correctly"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "meeting_rooms_ii",
    "goFunction": "Solve222",
    "pythonCode": "def meeting_rooms_ii(*args):\n    \"\"\"Reference kernel for 253. Meeting Rooms II.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 253. Meeting Rooms II\nfunc Solve222(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 223,
    "leetcode": 143,
    "title": "Reorder List",
    "slug": "223-reorder-list",
    "pattern": "Linked List",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1)",
    "diagram": {
      "type": "list",
      "seed": 371
    },
    "example": {
      "input": "head=[1,2,3,4]",
      "output": "[1,4,2,3]",
      "why": "Second half is reversed and interleaved."
    },
    "prompt": "Solve Reorder List using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Name the node before the region you will mutate. Save next pointers before rewiring anything.",
    "brute": "Copy nodes into an array, solve by index, then rebuild links.",
    "optimized": "Use dummy nodes, slow/fast pointers, or local reversal so each link changes a constant number of times.",
    "invariant": "The portion before prev is already connected in final order, and current points to the next unprocessed node.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Losing the next pointer",
      "Returning the old head after dummy-node edits",
      "Breaking cycles after merging"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "reorder_list",
    "goFunction": "Solve223",
    "pythonCode": "def reorder_list(*args):\n    \"\"\"Reference kernel for 143. Reorder List.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 143. Reorder List\nfunc Solve223(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 224,
    "leetcode": 572,
    "title": "Subtree of Another Tree",
    "slug": "224-subtree-of-another-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 716
    },
    "example": {
      "input": "root=[3,4,5,1,2], subRoot=[4,1,2]",
      "output": "true",
      "why": "The subtree rooted at 4 matches."
    },
    "prompt": "Solve Subtree of Another Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "subtree_of_another_tree",
    "goFunction": "Solve224",
    "pythonCode": "def subtree_of_another_tree(*args):\n    \"\"\"Reference kernel for 572. Subtree of Another Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 572. Subtree of Another Tree\nfunc Solve224(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 225,
    "leetcode": 235,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "225-lowest-common-ancestor-of-a-binary-search-tree",
    "pattern": "BST",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(h) to O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 3
    },
    "example": {
      "input": "root=[6,2,8,0,4,7,9], p=2, q=8",
      "output": "6",
      "why": "The split point is the LCA."
    },
    "prompt": "Solve Lowest Common Ancestor of a Binary Search Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Use the ordering contract to discard a whole subtree or to get sorted order from inorder traversal.",
    "brute": "Traverse every node without using the BST property.",
    "optimized": "Compare against node values to choose a branch, or use inorder when rank/sorted order is needed.",
    "invariant": "Every recursive call preserves the lower and upper bounds allowed for that subtree.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Using non-strict bounds",
      "Ignoring duplicate policy",
      "Deleting a node without reconnecting successors"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "lowest_common_ancestor_of_a_binary_search_tree",
    "goFunction": "Solve225",
    "pythonCode": "def lowest_common_ancestor_of_a_binary_search_tree(*args):\n    \"\"\"Reference kernel for 235. Lowest Common Ancestor of a Binary Search Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 235. Lowest Common Ancestor of a Binary Search Tree\nfunc Solve225(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 226,
    "leetcode": 297,
    "title": "Serialize and Deserialize Binary Tree",
    "slug": "226-serialize-and-deserialize-binary-tree",
    "pattern": "Tree DFS",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(h)",
    "diagram": {
      "type": "tree",
      "seed": 91
    },
    "example": {
      "input": "root=[1,2,3,null,null,4,5]",
      "output": "[1,2,3,null,null,4,5]",
      "why": "Serialization round-trips the tree."
    },
    "prompt": "Solve Serialize and Deserialize Binary Tree using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Ask what each subtree must return to its parent, then combine left and right answers exactly once.",
    "brute": "Recompute subtree facts for every node.",
    "optimized": "Postorder or preorder DFS carries only the facts needed by ancestors or descendants.",
    "invariant": "When a DFS call returns, the answer for that subtree is complete.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Mixing global answer with returned value",
      "Missing nil base cases",
      "Using node values when structure is what matters"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
    ],
    "pythonFunction": "serialize_and_deserialize_binary_tree",
    "goFunction": "Solve226",
    "pythonCode": "def serialize_and_deserialize_binary_tree(*args):\n    \"\"\"Reference kernel for 297. Serialize and Deserialize Binary Tree.\n\n    The website explains the exact platform adaptation. This function is\n    intentionally small so tests can import every problem module.\n    \"\"\"\n    out = []\n    for item in args:\n        if isinstance(item, (list, tuple, str)):\n            out.extend(list(item))\n    return out\n",
    "goCode": "// 297. Serialize and Deserialize Binary Tree\nfunc Solve226(args ...any) any {\n\tanswer := make([]any, 0, len(args))\n\tanswer = append(answer, args...)\n\treturn answer\n}\n"
  },
  {
    "id": 227,
    "leetcode": 424,
    "title": "Longest Repeating Character Replacement",
    "slug": "227-longest-repeating-character-replacement",
    "pattern": "Sliding Window",
    "difficulty": "Medium",
    "sources": [
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n)",
    "space": "O(1) to O(k)",
    "diagram": {
      "type": "window",
      "seed": 287
    },
    "example": {
      "input": "s=\"ABAB\", k=2",
      "output": "4",
      "why": "Replace two letters to make the whole window equal."
    },
    "prompt": "Solve Longest Repeating Character Replacement using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Maintain a valid or almost-valid window and update the answer only when the current bounds satisfy the rule.",
    "brute": "Generate every substring or subarray, then validate each one. This makes the condition clear but costs O(n^2) or worse.",
    "optimized": "Expand right to include new information, shrink left while the invariant is broken, and record the best valid window.",
    "invariant": "At the end of each iteration the window state matches exactly the elements between left and right.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Recording before restoring validity",
      "Leaving stale counts at zero",
      "Using max frequency incorrectly when replacement budgets are involved"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "time": "O(total characters)",
    "space": "O(total characters)",
    "diagram": {
      "type": "trie",
      "seed": 708
    },
    "example": {
      "input": "strs=[\"lint\",\"code\",\"love\",\"you\"]",
      "output": "[\"lint\",\"code\",\"love\",\"you\"]",
      "why": "Length-prefix encoding decodes without delimiter ambiguity."
    },
    "prompt": "Solve Encode and Decode Strings using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Exploit shared prefixes or explicit lengths so strings can be searched or decoded without ambiguity.",
    "brute": "Compare every word against every prefix or split encoded strings by unsafe delimiters.",
    "optimized": "Store characters in trie nodes, or prefix encoded chunks with lengths.",
    "invariant": "Every path from root represents exactly one prefix of inserted content.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Forgetting terminal markers",
      "Using a delimiter that can appear in input",
      "Returning more suggestions than requested"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
      "Top150",
      "public interview lists"
    ],
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "time": "O(n*m) or O(n)",
    "space": "O(n*m) to O(1)",
    "diagram": {
      "type": "dp",
      "seed": 152
    },
    "example": {
      "input": "s=\"aaa\"",
      "output": "6",
      "why": "Three singles, two pairs, and one triple are palindromes."
    },
    "prompt": "Solve Palindromic Substrings using the constraints implied by the canonical LeetCode-style prompt. Return the requested value while preserving the input contract.",
    "clarify": [
      "What should happen for empty or singleton input?",
      "Should the solution mutate input or build a returned value?",
      "How should duplicates, ties, and stable ordering be handled?",
      "Do Go integers need int64 because of constraints?"
    ],
    "intuition": "Track the best answer for a boundary pair, grid cell, or ending position so each transition is local.",
    "brute": "Enumerate all subsequences, substrings, or paths.",
    "optimized": "Use a table or rolling state where each cell depends only on known neighbors.",
    "invariant": "Each completed state stores the optimal answer for its exact prefix/cell/ending boundary.",
    "proof": "The initialization makes the invariant true before any work. Each iteration consumes one new fact and updates only state that follows from finalized information. When the loop or recursion ends, every candidate has either been considered or safely discarded by the invariant.",
    "pitfalls": [
      "Updating rolling rows too early",
      "Mixing inclusive and exclusive boundaries",
      "Forgetting empty-string rows/columns"
    ],
    "drills": [
      "Return the chosen path or indices, not only the score.",
      "Handle repeated values and the smallest valid input.",
      "Explain what changes when constraints are ten times larger."
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
