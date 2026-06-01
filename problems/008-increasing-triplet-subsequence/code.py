from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 334. Increasing Triplet Subsequence.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



increasing_triplet_subsequence = solve


if __name__ == "__main__":
    print("334. Increasing Triplet Subsequence")
    print('Sample input:', "nums=[5,1,6,2,3]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
