from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 56. Merge Intervals.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



merge_intervals = solve


if __name__ == "__main__":
    print("56. Merge Intervals")
    print('Sample input:', "intervals=[[1,3],[2,6],[8,10]]")
    print('Expected output:', "[[1,6],[8,10]]")
    print('Call solve(...) with parsed arguments for this problem.')
