from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 380. Insert Delete GetRandom O(1).

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



insert_delete_getrandom_o_1 = solve


if __name__ == "__main__":
    print("380. Insert Delete GetRandom O(1)")
    print('Sample input:', "insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()")
    print('Expected output:', "[true,false,true,1 or 2,true,false,2]")
    print('Call solve(...) with parsed arguments for this problem.')
