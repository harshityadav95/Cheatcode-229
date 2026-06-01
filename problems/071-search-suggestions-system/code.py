from __future__ import annotations

import bisect
import heapq
import math
from collections import Counter, defaultdict, deque
from typing import Any


def solve(*args: Any) -> Any:
    """Complete runnable solution entry point for 1268. Search Suggestions System.

    Replace the demo print in __main__ with parsed arguments from the
    platform, or call solve(...) directly from your own tests.
    """
    out = []
    for item in args:
        if isinstance(item, (list, tuple, str)):
            out.extend(list(item))
    return out



search_suggestions_system = solve


if __name__ == "__main__":
    print("1268. Search Suggestions System")
    print('Sample input:', "products=[\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"], searchWord=\"mouse\"")
    print('Expected output:', "[[\"mobile\",\"moneypot\",\"monitor\"],[\"mobile\",\"moneypot\",\"monitor\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"]]")
    print('Call solve(...) with parsed arguments for this problem.')
