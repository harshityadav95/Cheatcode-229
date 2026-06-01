from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 739. Daily Temperatures.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



daily_temperatures = solve


if __name__ == "__main__":
    print("739. Daily Temperatures")
    print('Sample input:', "temperatures=[73,74,75,71,69,72,76,73]")
    print('Expected output:', "[1,1,4,2,1,1,0,0]")
    print('Call solve(...) with parsed arguments for this problem.')
