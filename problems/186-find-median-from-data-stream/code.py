from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 295. Find Median from Data Stream.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



find_median_from_data_stream = solve


if __name__ == "__main__":
    print("295. Find Median from Data Stream")
    print('Sample input:', "add 1, add 2, find, add 3, find")
    print('Expected output:', "[null,null,1.5,null,2]")
    print('Call solve(...) with parsed arguments for this problem.')
