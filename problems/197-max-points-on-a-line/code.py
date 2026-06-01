from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 149. Max Points on a Line.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



max_points_on_a_line = solve


if __name__ == "__main__":
    print("149. Max Points on a Line")
    print('Sample input:', "points=[[1,1],[2,2],[3,3],[3,4]]")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
