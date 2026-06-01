from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1466. Reorder Routes to Make All Paths Lead to the City Zero.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



reorder_routes_to_make_all_paths_lead_to_the_city_zero = solve


if __name__ == "__main__":
    print("1466. Reorder Routes to Make All Paths Lead to the City Zero")
    print('Sample input:', "n=3, connections=[[1,0],[1,2]]")
    print('Expected output:', "1")
    print('Call solve(...) with parsed arguments for this problem.')
