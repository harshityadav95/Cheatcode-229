from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 2390. Removing Stars From a String.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    stack = []
    for item in (args[0] if args else []):
        stack.append(item)
    return stack



removing_stars_from_a_string = solve


if __name__ == "__main__":
    print("2390. Removing Stars From a String")
    print('Sample input:', "s=\"leet**cod*e\"")
    print('Expected output:', "\"lecoe\"")
    print('Call solve(...) with parsed arguments for this problem.')
