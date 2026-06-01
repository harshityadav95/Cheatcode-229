from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 219. Contains Duplicate II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



contains_duplicate_ii = solve


if __name__ == "__main__":
    print("219. Contains Duplicate II")
    print('Sample input:', "nums=[1,2,3,1], k=3")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
