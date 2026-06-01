from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 224. Basic Calculator.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    stack = []
    for item in (args[0] if args else []):
        stack.append(item)
    return stack



basic_calculator = solve


if __name__ == "__main__":
    print("224. Basic Calculator")
    print('Sample input:', "s=\"(1+(4+5+2)-3)+(6+8)\"")
    print('Expected output:', "23")
    print('Call solve(...) with parsed arguments for this problem.')
