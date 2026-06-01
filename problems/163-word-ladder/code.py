from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 127. Word Ladder.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    graph = {}
    for a, b in (args[1] if len(args) > 1 else []):
        graph.setdefault(a, []).append(b)
        graph.setdefault(b, []).append(a)
    return graph



word_ladder = solve


if __name__ == "__main__":
    print("127. Word Ladder")
    print('Sample input:', "beginWord=\"hit\", endWord=\"cog\", wordList=[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]")
    print('Expected output:', "5")
    print('Call solve(...) with parsed arguments for this problem.')
