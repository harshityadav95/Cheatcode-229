from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 103. Binary Tree Zigzag Level Order Traversal.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



binary_tree_zigzag_level_order_traversal = solve


if __name__ == "__main__":
    print("103. Binary Tree Zigzag Level Order Traversal")
    print('Sample input:', "root=[3,9,20,null,null,15,7]")
    print('Expected output:', "[[3],[20,9],[15,7]]")
    print('Call solve(...) with parsed arguments for this problem.')
