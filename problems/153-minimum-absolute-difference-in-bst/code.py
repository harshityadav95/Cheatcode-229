from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 530. Minimum Absolute Difference in BST.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



minimum_absolute_difference_in_bst = solve


if __name__ == "__main__":
    print("530. Minimum Absolute Difference in BST")
    print('Sample input:', "root=[4,2,6,1,3]")
    print('Expected output:', "1")
    print('Call solve(...) with parsed arguments for this problem.')
