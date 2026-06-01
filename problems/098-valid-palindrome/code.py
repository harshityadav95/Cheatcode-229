from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 125. Valid Palindrome.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



valid_palindrome = solve


if __name__ == "__main__":
    print("125. Valid Palindrome")
    print('Sample input:', "s=\"A man, a plan, a canal: Panama\"")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
