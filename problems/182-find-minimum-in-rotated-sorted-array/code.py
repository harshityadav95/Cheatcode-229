from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 153. Find Minimum in Rotated Sorted Array.

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



find_minimum_in_rotated_sorted_array = solve


if __name__ == "__main__":
    print("153. Find Minimum in Rotated Sorted Array")
    print('Sample input:', "nums=[3,4,5,1,2]")
    print('Expected output:', "1")
    print('Call solve(...) with parsed arguments for this problem.')
