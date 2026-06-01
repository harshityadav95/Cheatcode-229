from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 80. Remove Duplicates from Sorted Array II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



remove_duplicates_from_sorted_array_ii = solve


if __name__ == "__main__":
    print("80. Remove Duplicates from Sorted Array II")
    print('Sample input:', "nums=[0,0,1,1,1,1,2]")
    print('Expected output:', "k=5, first values [0,0,1,1,2]")
    print('Call solve(...) with parsed arguments for this problem.')
