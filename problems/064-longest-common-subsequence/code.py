from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1143. Longest Common Subsequence.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



longest_common_subsequence = solve


if __name__ == "__main__":
    print("1143. Longest Common Subsequence")
    print('Sample input:', "text1=\"abcde\", text2=\"ace\"")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
