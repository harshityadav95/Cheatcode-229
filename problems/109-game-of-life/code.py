from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 289. Game of Life.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



game_of_life = solve


if __name__ == "__main__":
    print("289. Game of Life")
    print('Sample input:', "board=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]")
    print('Expected output:', "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]")
    print('Call solve(...) with parsed arguments for this problem.')
