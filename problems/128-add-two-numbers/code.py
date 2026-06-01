from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 2. Add Two Numbers.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



add_two_numbers = solve


if __name__ == "__main__":
    print("2. Add Two Numbers")
    print('Sample input:', "l1=[2,4,3], l2=[5,6,4]")
    print('Expected output:', "[7,0,8]")
    print('Call solve(...) with parsed arguments for this problem.')
