from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 443. String Compression.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



string_compression = solve


if __name__ == "__main__":
    print("443. String Compression")
    print('Sample input:', "chars=[\"a\",\"a\",\"b\"]")
    print('Expected output:', "length=3, chars starts [\"a\",\"2\",\"b\"]")
    print('Call solve(...) with parsed arguments for this problem.')
