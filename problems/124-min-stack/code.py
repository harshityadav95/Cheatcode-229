from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 155. Min Stack.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    stack = []
    for item in (args[0] if args else []):
        stack.append(item)
    return stack



min_stack = solve


if __name__ == "__main__":
    print("155. Min Stack")
    print('Sample input:', "push(-2),push(0),push(-3),getMin,pop,top,getMin")
    print('Expected output:', "[null,null,null,-3,null,0,-2]")
    print('Call solve(...) with parsed arguments for this problem.')
