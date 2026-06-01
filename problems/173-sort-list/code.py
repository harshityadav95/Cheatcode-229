from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 148. Sort List.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



sort_list = solve


if __name__ == "__main__":
    print("148. Sort List")
    print('Sample input:', "head=[4,2,1,3]")
    print('Expected output:', "[1,2,3,4]")
    print('Call solve(...) with parsed arguments for this problem.')
