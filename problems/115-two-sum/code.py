from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1. Two Sum.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



two_sum = solve


if __name__ == "__main__":
    print("1. Two Sum")
    print('Sample input:', "nums=[2,7,11,15], target=9")
    print('Expected output:', "[0,1]")
    print('Call solve(...) with parsed arguments for this problem.')
