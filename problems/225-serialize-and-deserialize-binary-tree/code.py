from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 297. Serialize and Deserialize Binary Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



serialize_and_deserialize_binary_tree = solve


if __name__ == "__main__":
    print("297. Serialize and Deserialize Binary Tree")
    print('Sample input:', "root=[1,2,3,null,null,4,5]")
    print('Expected output:', "deserialize(serialize(root)) equals the original tree")
    print('Call solve(...) with parsed arguments for this problem.')
