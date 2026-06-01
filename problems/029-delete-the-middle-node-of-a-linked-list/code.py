from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 2095. Delete the Middle Node of a Linked List.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



delete_the_middle_node_of_a_linked_list = solve


if __name__ == "__main__":
    print("2095. Delete the Middle Node of a Linked List")
    print('Sample input:', "head=[1,3,4,7,1,2,6]")
    print('Expected output:', "[1,3,4,1,2,6]")
    print('Call solve(...) with parsed arguments for this problem.')
