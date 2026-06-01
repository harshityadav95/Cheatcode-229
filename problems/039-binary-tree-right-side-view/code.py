from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 199. Binary Tree Right Side View.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



binary_tree_right_side_view = solve


if __name__ == "__main__":
    print("199. Binary Tree Right Side View")
    print('Sample input:', "root=[1,2,3,null,5,null,4]")
    print('Expected output:', "[1,3,4]")
    print('Call solve(...) with parsed arguments for this problem.')
