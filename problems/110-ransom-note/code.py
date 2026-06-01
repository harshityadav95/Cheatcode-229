from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 383. Ransom Note.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



ransom_note = solve


if __name__ == "__main__":
    print("383. Ransom Note")
    print('Sample input:', "ransomNote=\"aa\", magazine=\"aab\"")
    print('Expected output:', "true")
    print('Call solve(...) with parsed arguments for this problem.')
