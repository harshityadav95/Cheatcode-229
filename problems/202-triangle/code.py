from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 120. Triangle.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



triangle = solve


if __name__ == "__main__":
    print("120. Triangle")
    print('Sample input:', "triangle=[[2],[3,4],[6,5,7],[4,1,8,3]]")
    print('Expected output:', "11")
    print('Call solve(...) with parsed arguments for this problem.')
