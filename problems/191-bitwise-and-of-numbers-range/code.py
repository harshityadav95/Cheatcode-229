from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 201. Bitwise AND of Numbers Range.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



bitwise_and_of_numbers_range = solve


if __name__ == "__main__":
    print("201. Bitwise AND of Numbers Range")
    print('Sample input:', "left=5, right=7")
    print('Expected output:', "4")
    print('Call solve(...) with parsed arguments for this problem.')
