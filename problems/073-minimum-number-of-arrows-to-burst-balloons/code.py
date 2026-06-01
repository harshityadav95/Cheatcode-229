from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 452. Minimum Number of Arrows to Burst Balloons.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



minimum_number_of_arrows_to_burst_balloons = solve


if __name__ == "__main__":
    print("452. Minimum Number of Arrows to Burst Balloons")
    print('Sample input:', "points=[[10,16],[2,8],[1,6],[7,12]]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
