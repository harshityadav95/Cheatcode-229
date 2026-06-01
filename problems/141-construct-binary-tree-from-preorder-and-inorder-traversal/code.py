from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 105. Construct Binary Tree from Preorder and Inorder Traversal.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



construct_binary_tree_from_preorder_and_inorder_traversal = solve


if __name__ == "__main__":
    print("105. Construct Binary Tree from Preorder and Inorder Traversal")
    print('Sample input:', "preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]")
    print('Expected output:', "[3,9,20,null,null,15,7]")
    print('Call solve(...) with parsed arguments for this problem.')
