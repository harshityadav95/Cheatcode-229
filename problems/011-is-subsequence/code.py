from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 392. Is Subsequence.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



is_subsequence = solve


if __name__ == "__main__":
    print("392. Is Subsequence")
    print('Sample input:', "s=\"ace\", t=\"abcde\"")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
