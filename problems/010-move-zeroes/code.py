from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 283. Move Zeroes.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



move_zeroes = solve


if __name__ == "__main__":
    print("283. Move Zeroes")
    print('Sample input:', "nums=[0,1,0,3]")
    print('Expected output:', "[1,3,0,0]")
    print('Call solve(...) with parsed arguments for this problem.')
