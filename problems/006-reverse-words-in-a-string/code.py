from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 151. Reverse Words in a String.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



reverse_words_in_a_string = solve


if __name__ == "__main__":
    print("151. Reverse Words in a String")
    print('Sample input:', "s=\"  blue  sky  \"")
    print('Expected output:', "\"sky blue\"")
    print('Call solve(...) with parsed arguments for this problem.')
