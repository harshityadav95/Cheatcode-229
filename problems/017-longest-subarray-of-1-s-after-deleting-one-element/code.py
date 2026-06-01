from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1493. Longest Subarray of 1's After Deleting One Element.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    seq = args[0] if args else []
    return len(seq)



longest_subarray_of_1_s_after_deleting_one_element = solve


if __name__ == "__main__":
    print("1493. Longest Subarray of 1's After Deleting One Element")
    print('Sample input:', "nums=[1,1,0,1]")
    print('Expected output:', "3")
    print('Call solve(...) with parsed arguments for this problem.')
