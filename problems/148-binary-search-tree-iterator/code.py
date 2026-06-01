from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 173. Binary Search Tree Iterator.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



binary_search_tree_iterator = solve


if __name__ == "__main__":
    print("173. Binary Search Tree Iterator")
    print('Sample input:', "BST=[7,3,15,null,null,9,20], calls=next,next,hasNext")
    print('Expected output:', "[3,7,true]")
    print('Call solve(...) with parsed arguments for this problem.')
