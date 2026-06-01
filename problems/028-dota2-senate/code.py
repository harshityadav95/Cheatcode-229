from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 649. Dota2 Senate.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



dota2_senate = solve


if __name__ == "__main__":
    print("649. Dota2 Senate")
    print('Sample input:', "senate=\"RDD\"")
    print('Expected output:', "\"Dire\"")
    print('Call solve(...) with parsed arguments for this problem.')
