from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 872. Leaf-Similar Trees.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



leaf_similar_trees = solve


if __name__ == "__main__":
    print("872. Leaf-Similar Trees")
    print('Sample input:', "root1=[1,2,3], root2=[7,2,3]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
