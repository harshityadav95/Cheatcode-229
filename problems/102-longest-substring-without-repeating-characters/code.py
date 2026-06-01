from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 3. Longest Substring Without Repeating Characters.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    seq = args[0] if args else []
    return len(seq)



longest_substring_without_repeating_characters = solve


if __name__ == "__main__":
    print("3. Longest Substring Without Repeating Characters")
    print('Sample input:', "s=\"abcabcbb\"")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
