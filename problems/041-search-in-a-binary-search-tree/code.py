from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 700. Search in a Binary Search Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



search_in_a_binary_search_tree = solve


if __name__ == "__main__":
    print("700. Search in a Binary Search Tree")
    print('Sample input:', "root=[4,2,7,1,3], val=2")
    print('Expected output:', "[2,1,3]")
    print('Call solve(...) with parsed arguments for this problem.')
