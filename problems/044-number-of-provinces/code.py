from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 547. Number of Provinces.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



number_of_provinces = solve


if __name__ == "__main__":
    print("547. Number of Provinces")
    print('Sample input:', "isConnected=[[1,1,0],[1,1,0],[0,0,1]]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
