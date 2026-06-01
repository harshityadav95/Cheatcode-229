from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 27. Remove Element.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



remove_element = solve


if __name__ == "__main__":
    print("27. Remove Element")
    print('Sample input:', "nums=[3,2,2,3], val=3")
    print('Expected output:', "k=2, first values [2,2]")
    print('Call solve(...) with parsed arguments for this problem.')
