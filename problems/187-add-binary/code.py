from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 67. Add Binary.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



add_binary = solve


if __name__ == "__main__":
    print("67. Add Binary")
    print('Sample input:', "a=\"1010\", b=\"1011\"")
    print('Expected output:', "\"10101\"")
    print('Call solve(...) with parsed arguments for this problem.')
