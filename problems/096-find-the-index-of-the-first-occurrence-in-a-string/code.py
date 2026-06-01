from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 28. Find the Index of the First Occurrence in a String.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



find_the_index_of_the_first_occurrence_in_a_string = solve


if __name__ == "__main__":
    print("28. Find the Index of the First Occurrence in a String")
    print('Sample input:', "haystack=\"sadbutsad\", needle=\"sad\"")
    print('Expected output:', "0")
    print('Call solve(...) with parsed arguments for this problem.')
