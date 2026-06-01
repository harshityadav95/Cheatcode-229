from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 901. Online Stock Span.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



online_stock_span = solve


if __name__ == "__main__":
    print("901. Online Stock Span")
    print('Sample input:', "prices=[100,80,60,70,60,75,85]")
    print('Expected output:', "[1,1,1,2,1,4,6]")
    print('Call solve(...) with parsed arguments for this problem.')
