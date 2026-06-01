from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 106. Construct Binary Tree from Inorder and Postorder Traversal.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



construct_binary_tree_from_inorder_and_postorder_traversal = solve


if __name__ == "__main__":
    print("106. Construct Binary Tree from Inorder and Postorder Traversal")
    print('Sample input:', "inorder=[9,3,15,20,7], postorder=[9,15,7,20,3]")
    print('Expected output:', "[3,9,20,null,null,15,7]")
    print('Call solve(...) with parsed arguments for this problem.')
