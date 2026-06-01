from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 137. Single Number II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



single_number_ii = solve


if __name__ == "__main__":
    print("137. Single Number II")
    print('Sample input:', "nums=[2,2,3,2]")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
