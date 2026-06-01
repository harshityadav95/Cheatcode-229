from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 121. Best Time to Buy and Sell Stock.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



best_time_to_buy_and_sell_stock = solve


if __name__ == "__main__":
    print("121. Best Time to Buy and Sell Stock")
    print('Sample input:', "prices=[7,1,5,3,6,4]")
    print('Expected output:', "5")
    print('Call solve(...) with parsed arguments for this problem.')
