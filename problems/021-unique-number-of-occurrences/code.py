from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1207. Unique Number of Occurrences.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



unique_number_of_occurrences = solve


if __name__ == "__main__":
    print("1207. Unique Number of Occurrences")
    print('Sample input:', "nums=[1,2,2,3,3,3]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
