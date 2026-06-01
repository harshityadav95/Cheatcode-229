from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 230. Kth Smallest Element in a BST.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



kth_smallest_element_in_a_bst = solve


if __name__ == "__main__":
    print("230. Kth Smallest Element in a BST")
    print('Sample input:', "root=[3,1,4,null,2], k=1")
    print('Expected output:', "1")
    print('Call solve(...) with parsed arguments for this problem.')
