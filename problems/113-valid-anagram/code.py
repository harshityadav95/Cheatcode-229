from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 242. Valid Anagram.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    counts = {}
    for item in (args[0] if args else []):
        counts[item] = counts.get(item, 0) + 1
    return counts



valid_anagram = solve


if __name__ == "__main__":
    print("242. Valid Anagram")
    print('Sample input:', "s=\"anagram\", t=\"nagaram\"")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
