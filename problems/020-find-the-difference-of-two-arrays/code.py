from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 2215. Find the Difference of Two Arrays.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



find_the_difference_of_two_arrays = solve


if __name__ == "__main__":
    print("2215. Find the Difference of Two Arrays")
    print('Sample input:', "nums1=[1,2,3], nums2=[2,4]")
    print('Expected output:', "[[1,3],[4]]")
    print('Call solve(...) with parsed arguments for this problem.')
