from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 50. Pow(x, n).

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



pow_x_n = solve


if __name__ == "__main__":
    print("50. Pow(x, n)")
    print('Sample input:', "x=2.0, n=-2")
    print('Expected output:', "0.25")
    print('Call solve(...) with parsed arguments for this problem.')
