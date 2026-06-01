from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1372. Longest ZigZag Path in a Binary Tree.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



longest_zigzag_path_in_a_binary_tree = solve


if __name__ == "__main__":
    print("1372. Longest ZigZag Path in a Binary Tree")
    print('Sample input:', "path 1->right 2->left 3->right 4")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
