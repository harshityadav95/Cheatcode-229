from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 167. Two Sum II - Input Array Is Sorted.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



two_sum_ii_input_array_is_sorted = solve


if __name__ == "__main__":
    print("167. Two Sum II - Input Array Is Sorted")
    print('Sample input:', "numbers=[2,7,11,15], target=9")
    print('Expected output:', "[1,2]")
    print('Call solve(...) with parsed arguments for this problem.')
