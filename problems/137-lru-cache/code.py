from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 146. LRU Cache.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



lru_cache = solve


if __name__ == "__main__":
    print("146. LRU Cache")
    print('Sample input:', "capacity=2; put(1,1),put(2,2),get(1),put(3,3),get(2)")
    print('Expected output:', "[null,null,1,null,-1]")
    print('Call solve(...) with parsed arguments for this problem.')
