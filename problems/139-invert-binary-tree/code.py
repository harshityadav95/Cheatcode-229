from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 226. Invert Binary Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



invert_binary_tree = solve


if __name__ == "__main__":
    print("226. Invert Binary Tree")
    print('Sample input:', "root=[4,2,7,1,3,6,9]")
    print('Expected output:', "[4,7,2,9,6,3,1]")
    print('Call solve(...) with parsed arguments for this problem.')
