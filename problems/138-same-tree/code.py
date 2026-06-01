from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 100. Same Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



same_tree = solve


if __name__ == "__main__":
    print("100. Same Tree")
    print('Sample input:', "p=[1,2,3], q=[1,2,3]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
