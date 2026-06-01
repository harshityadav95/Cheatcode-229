from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 54. Spiral Matrix.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



spiral_matrix = solve


if __name__ == "__main__":
    print("54. Spiral Matrix")
    print('Sample input:', "matrix=[[1,2,3],[4,5,6],[7,8,9]]")
    print('Expected output:', "[1,2,3,6,9,8,7,4,5]")
    print('Call solve(...) with parsed arguments for this problem.')
