from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 136. Single Number.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



single_number = solve


if __name__ == "__main__":
    print("136. Single Number")
    print('Sample input:', "nums=[4,1,2,1,2]")
    print('Expected output:', "4")
    print('Call solve(...) with parsed arguments for this problem.')
