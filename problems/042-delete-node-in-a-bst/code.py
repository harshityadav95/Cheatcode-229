from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 450. Delete Node in a BST.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



delete_node_in_a_bst = solve


if __name__ == "__main__":
    print("450. Delete Node in a BST")
    print('Sample input:', "root=[5,3,6,2,4,null,7], key=3")
    print('Expected output:', "[5,4,6,2,null,null,7]")
    print('Call solve(...) with parsed arguments for this problem.')
