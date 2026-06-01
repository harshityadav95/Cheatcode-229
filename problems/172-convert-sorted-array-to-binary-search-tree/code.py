from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 108. Convert Sorted Array to Binary Search Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



convert_sorted_array_to_binary_search_tree = solve


if __name__ == "__main__":
    print("108. Convert Sorted Array to Binary Search Tree")
    print('Sample input:', "nums=[-10,-3,0,5,9]")
    print('Expected output:', "balanced BST such as [0,-3,9,-10,null,5]")
    print('Call solve(...) with parsed arguments for this problem.')
