from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 253. Meeting Rooms II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



meeting_rooms_ii = solve


if __name__ == "__main__":
    print("253. Meeting Rooms II")
    print('Sample input:', "intervals=[[0,30],[5,10],[15,20]]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
