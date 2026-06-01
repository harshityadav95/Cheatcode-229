from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 724. Find Pivot Index.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



find_pivot_index = solve


if __name__ == "__main__":
    print("724. Find Pivot Index")
    print('Sample input:', "nums=[1,7,3,6,5,6]")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
