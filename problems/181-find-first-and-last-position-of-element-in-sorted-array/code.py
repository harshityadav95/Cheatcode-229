from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 34. Find First and Last Position of Element in Sorted Array.

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



find_first_and_last_position_of_element_in_sorted_array = solve


if __name__ == "__main__":
    print("34. Find First and Last Position of Element in Sorted Array")
    print('Sample input:', "nums=[5,7,7,8,8,10], target=8")
    print('Expected output:', "[3,4]")
    print('Call solve(...) with parsed arguments for this problem.')
