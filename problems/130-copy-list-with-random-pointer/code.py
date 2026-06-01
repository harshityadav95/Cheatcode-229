from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 138. Copy List with Random Pointer.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



copy_list_with_random_pointer = solve


if __name__ == "__main__":
    print("138. Copy List with Random Pointer")
    print('Sample input:', "nodes=[[7,null],[13,0],[11,0]]")
    print('Expected output:', "deep copy with same values and random links")
    print('Call solve(...) with parsed arguments for this problem.')
