from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 88. Merge Sorted Array.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



merge_sorted_array = solve


if __name__ == "__main__":
    print("88. Merge Sorted Array")
    print('Sample input:', "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3")
    print('Expected output:', "[1,2,2,3,5,6]")
    print('Call solve(...) with parsed arguments for this problem.')
