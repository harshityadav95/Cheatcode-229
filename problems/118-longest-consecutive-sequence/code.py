from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 128. Longest Consecutive Sequence.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



longest_consecutive_sequence = solve


if __name__ == "__main__":
    print("128. Longest Consecutive Sequence")
    print('Sample input:', "nums=[100,4,200,1,3,2]")
    print('Expected output:', "4")
    print('Call solve(...) with parsed arguments for this problem.')
