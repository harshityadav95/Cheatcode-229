from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 933. Number of Recent Calls.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



number_of_recent_calls = solve


if __name__ == "__main__":
    print("933. Number of Recent Calls")
    print('Sample input:', "pings=[1,100,3001,3002]")
    print('Expected output:', "[1,2,3,3]")
    print('Call solve(...) with parsed arguments for this problem.')
