from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 235. Lowest Common Ancestor of a Binary Search Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



lowest_common_ancestor_of_a_binary_search_tree = solve


if __name__ == "__main__":
    print("235. Lowest Common Ancestor of a Binary Search Tree")
    print('Sample input:', "root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8")
    print('Expected output:', "6")
    print('Call solve(...) with parsed arguments for this problem.')
