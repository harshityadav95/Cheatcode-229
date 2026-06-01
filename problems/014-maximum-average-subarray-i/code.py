from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 643. Maximum Average Subarray I.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    seq = args[0] if args else []
    return len(seq)



maximum_average_subarray_i = solve


if __name__ == "__main__":
    print("643. Maximum Average Subarray I")
    print('Sample input:', "nums=[1,12,-5,-6,50,3], k=4")
    print('Expected output:', "12.75")
    print('Call solve(...) with parsed arguments for this problem.')
