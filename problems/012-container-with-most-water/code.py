from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 11. Container With Most Water.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



container_with_most_water = solve


if __name__ == "__main__":
    print("11. Container With Most Water")
    print('Sample input:', "height=[1,7,2,5,4,7,3,6]")
    print('Expected output:', "36")
    print('Call solve(...) with parsed arguments for this problem.')
