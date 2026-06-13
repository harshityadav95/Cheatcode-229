from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any
from itertools import zip_longest


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        return ''.join(a + b for a, b in zip_longest(word1, word2, fillvalue=''))


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1768. Merge Strings Alternately.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    if not args:
        return ''
    word1 = args[0]
    word2 = args[1] if len(args) > 1 else ''
    return Solution().mergeAlternately(word1, word2)


merge_strings_alternately = solve


if __name__ == "__main__":
    print("1768. Merge Strings Alternately")
    print('Sample input:', "word1=\"abc\", word2=\"pq\"")
    print('Expected output:', "\"apbqc\"")
    print('Call solve(...) with parsed arguments for this problem.')
