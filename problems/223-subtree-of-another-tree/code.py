from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 572. Subtree of Another Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



subtree_of_another_tree = solve


if __name__ == "__main__":
    print("572. Subtree of Another Tree")
    print('Sample input:', "root=[3,4,5,1,2], subRoot=[4,1,2]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
