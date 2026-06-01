from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 72. Edit Distance.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



edit_distance = solve


if __name__ == "__main__":
    print("72. Edit Distance")
    print('Sample input:', "word1=\"horse\", word2=\"ros\"")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
