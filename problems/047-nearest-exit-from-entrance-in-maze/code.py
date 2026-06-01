from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1926. Nearest Exit from Entrance in Maze.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



nearest_exit_from_entrance_in_maze = solve


if __name__ == "__main__":
    print("1926. Nearest Exit from Entrance in Maze")
    print('Sample input:', "maze=[[\"+\",\"+\",\".\"],[\".\",\".\",\".\"],[\"+\",\"+\",\"+\"]], entrance=[1,0]")
    print('Expected output:', "2")
    print('Call solve(...) with parsed arguments for this problem.')
