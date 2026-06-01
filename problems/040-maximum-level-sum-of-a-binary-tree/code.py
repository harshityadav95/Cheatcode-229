from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1161. Maximum Level Sum of a Binary Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



maximum_level_sum_of_a_binary_tree = solve


if __name__ == "__main__":
    print("1161. Maximum Level Sum of a Binary Tree")
    print('Sample input:', "root=[1,7,0,7,-8,null,null]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
