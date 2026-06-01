from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 169. Majority Element.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



majority_element = solve


if __name__ == "__main__":
    print("169. Majority Element")
    print('Sample input:', "nums=[2,2,1,1,1,2,2]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
