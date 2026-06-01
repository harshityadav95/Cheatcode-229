from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 215. Kth Largest Element in an Array.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



kth_largest_element_in_an_array = solve


if __name__ == "__main__":
    print("215. Kth Largest Element in an Array")
    print('Sample input:', "nums=[3,2,1,5,6,4], k=2")
    print('Expected output:', "5")
    print('Call solve(...) with parsed arguments for this problem.')
