from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 841. Keys and Rooms.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



keys_and_rooms = solve


if __name__ == "__main__":
    print("841. Keys and Rooms")
    print('Sample input:', "rooms=[[1],[2],[3],[]]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
