from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 909. Snakes and Ladders.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



snakes_and_ladders = solve


if __name__ == "__main__":
    print("909. Snakes and Ladders")
    print('Sample input:', "board=[[-1,-1],[-1,-1]]")
    print('Expected output:', "1")
    print('Call solve(...) with parsed arguments for this problem.')
