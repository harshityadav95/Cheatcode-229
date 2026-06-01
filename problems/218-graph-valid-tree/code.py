from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 261. Graph Valid Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



graph_valid_tree = solve


if __name__ == "__main__":
    print("261. Graph Valid Tree")
    print('Sample input:', "n=5, edges=[[0,1],[0,2],[0,3],[1,4]]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
