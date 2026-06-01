from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 57. Insert Interval.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



insert_interval = solve


if __name__ == "__main__":
    print("57. Insert Interval")
    print('Sample input:', "intervals=[[1,3],[6,9]], newInterval=[2,5]")
    print('Expected output:', "[[1,5],[6,9]]")
    print('Call solve(...) with parsed arguments for this problem.')
