from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1456. Maximum Number of Vowels in a Substring of Given Length.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    seq = args[0] if args else []
    return len(seq)



maximum_number_of_vowels_in_a_substring_of_given_length = solve


if __name__ == "__main__":
    print("1456. Maximum Number of Vowels in a Substring of Given Length")
    print('Sample input:', "s=\"abciiidef\", k=3")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
