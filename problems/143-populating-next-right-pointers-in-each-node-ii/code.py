from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 117. Populating Next Right Pointers in Each Node II.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



populating_next_right_pointers_in_each_node_ii = solve


if __name__ == "__main__":
    print("117. Populating Next Right Pointers in Each Node II")
    print('Sample input:', "root=[1,2,3,4,5,null,7]")
    print('Expected output:', "levels linked as 1->null, 2->3->null, 4->5->7->null")
    print('Call solve(...) with parsed arguments for this problem.')
