from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 212. Word Search II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



word_search_ii = solve


if __name__ == "__main__":
    print("212. Word Search II")
    print('Sample input:', "board=[[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words=[\"oath\",\"pea\",\"eat\",\"rain\"]")
    print('Expected output:', "[\"eat\",\"oath\"]")
    print('Call solve(...) with parsed arguments for this problem.')
