from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 206. Reverse Linked List.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



reverse_linked_list = solve


if __name__ == "__main__":
    print("206. Reverse Linked List")
    print('Sample input:', "head=[1,2,3]")
    print('Expected output:', "[3,2,1]")
    print('Call solve(...) with parsed arguments for this problem.')
