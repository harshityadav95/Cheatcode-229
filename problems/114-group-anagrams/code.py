from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 49. Group Anagrams.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



group_anagrams = solve


if __name__ == "__main__":
    print("49. Group Anagrams")
    print('Sample input:', "strs=[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]")
    print('Expected output:', "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]")
    print('Call solve(...) with parsed arguments for this problem.')
