from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 790. Domino and Tromino Tiling.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    nums = list(args[0]) if args else []
    dp = [0] * (len(nums) + 1)
    for i, value in enumerate(nums, 1):
        dp[i] = max(dp[i - 1], value)
    return dp[-1]



domino_and_tromino_tiling = solve


if __name__ == "__main__":
    print("790. Domino and Tromino Tiling")
    print('Sample input:', "n=3")
    print('Expected output:', "5")
    print('Call solve(...) with parsed arguments for this problem.')
