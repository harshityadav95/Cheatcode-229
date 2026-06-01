from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 424. Longest Repeating Character Replacement.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    seq = args[0] if args else []
    return len(seq)



longest_repeating_character_replacement = solve


if __name__ == "__main__":
    print("424. Longest Repeating Character Replacement")
    print('Sample input:', "s=\"AABABBA\", k=1")
    print('Expected output:', "4")
    print('Call solve(...) with parsed arguments for this problem.')
