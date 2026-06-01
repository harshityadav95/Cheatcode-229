from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 17. Letter Combinations of a Phone Number.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



letter_combinations_of_a_phone_number = solve


if __name__ == "__main__":
    print("17. Letter Combinations of a Phone Number")
    print('Sample input:', "digits=\"23\"")
    print('Expected output:', "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]")
    print('Call solve(...) with parsed arguments for this problem.')
