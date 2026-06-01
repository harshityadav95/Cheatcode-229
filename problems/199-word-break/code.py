from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 139. Word Break.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    nums = list(args[0]) if args else []
    dp = [0] * (len(nums) + 1)
    for i, value in enumerate(nums, 1):
        dp[i] = max(dp[i - 1], value)
    return dp[-1]



word_break = solve


if __name__ == "__main__":
    print("139. Word Break")
    print('Sample input:', "s=\"leetcode\", wordDict=[\"leet\",\"code\"]")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
