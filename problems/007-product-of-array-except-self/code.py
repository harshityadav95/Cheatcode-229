from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 238. Product of Array Except Self.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



product_of_array_except_self = solve


if __name__ == "__main__":
    print("238. Product of Array Except Self")
    print('Sample input:', "nums=[2,3,4]")
    print('Expected output:', "[12,8,6]")
    print('Call solve(...) with parsed arguments for this problem.')
