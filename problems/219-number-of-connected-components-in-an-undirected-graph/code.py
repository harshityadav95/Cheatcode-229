from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 323. Number of Connected Components in an Undirected Graph.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



number_of_connected_components_in_an_undirected_graph = solve


if __name__ == "__main__":
    print("323. Number of Connected Components in an Undirected Graph")
    print('Sample input:', "n=5, edges=[[0,1],[1,2],[3,4]]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
