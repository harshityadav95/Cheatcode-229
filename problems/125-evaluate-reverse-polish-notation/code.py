from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 150. Evaluate Reverse Polish Notation.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    stack = []
    for item in (args[0] if args else []):
        stack.append(item)
    return stack



evaluate_reverse_polish_notation = solve


if __name__ == "__main__":
    print("150. Evaluate Reverse Polish Notation")
    print('Sample input:', "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]")
    print('Expected output:', "9")
    print('Call solve(...) with parsed arguments for this problem.')
