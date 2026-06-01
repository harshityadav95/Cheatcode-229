from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 374. Guess Number Higher or Lower.

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



guess_number_higher_or_lower = solve


if __name__ == "__main__":
    print("374. Guess Number Higher or Lower")
    print('Sample input:', "n=10, pick=6")
    print('Expected output:', "6")
    print('Call solve(...) with parsed arguments for this problem.')
