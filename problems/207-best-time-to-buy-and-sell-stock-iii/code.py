from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 123. Best Time to Buy and Sell Stock III.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



best_time_to_buy_and_sell_stock_iii = solve


if __name__ == "__main__":
    print("123. Best Time to Buy and Sell Stock III")
    print('Sample input:', "prices=[3,3,5,0,0,3,1,4]")
    print('Expected output:', "6")
    print('Call solve(...) with parsed arguments for this problem.')
