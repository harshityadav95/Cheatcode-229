from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 69. Sqrt(x).

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    nums = list(args[0]) if args else []
    target = args[1] if len(args) > 1 else None
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if target is not None and nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo



sqrt_x = solve


if __name__ == "__main__":
    print("69. Sqrt(x)")
    print('Sample input:', "x=8")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
