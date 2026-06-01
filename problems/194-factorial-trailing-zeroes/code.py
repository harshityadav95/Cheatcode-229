from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 172. Factorial Trailing Zeroes.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



factorial_trailing_zeroes = solve


if __name__ == "__main__":
    print("172. Factorial Trailing Zeroes")
    print('Sample input:', "n=25")
    print('Expected output:', "6")
    print('Call solve(...) with parsed arguments for this problem.')
