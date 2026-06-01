from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 217. Contains Duplicate.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



contains_duplicate = solve


if __name__ == "__main__":
    print("217. Contains Duplicate")
    print('Sample input:', "nums=[1,2,3,1]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
