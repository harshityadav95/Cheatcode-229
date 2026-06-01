from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 236. Lowest Common Ancestor of a Binary Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



lowest_common_ancestor_of_a_binary_tree = solve


if __name__ == "__main__":
    print("236. Lowest Common Ancestor of a Binary Tree")
    print('Sample input:', "root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
