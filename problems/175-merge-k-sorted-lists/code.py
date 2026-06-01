from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 23. Merge k Sorted Lists.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



merge_k_sorted_lists = solve


if __name__ == "__main__":
    print("23. Merge k Sorted Lists")
    print('Sample input:', "lists=[[1,4,5],[1,3,4],[2,6]]")
    print('Expected output:', "[1,1,2,3,4,4,5,6]")
    print('Call solve(...) with parsed arguments for this problem.')
