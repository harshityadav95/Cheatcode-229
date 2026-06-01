from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 30. Substring with Concatenation of All Words.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    values = list(args[0]) if args else []
    left, right = 0, len(values) - 1
    while left < right:
        left += 1
        right -= 1
    return values



substring_with_concatenation_of_all_words = solve


if __name__ == "__main__":
    print("30. Substring with Concatenation of All Words")
    print('Sample input:', "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]")
    print('Expected output:', "[0,9]")
    print('Call solve(...) with parsed arguments for this problem.')
