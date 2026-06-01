from __future__ import annotations

import json
import unittest
from pathlib import Path

from solutions import REGISTRY


ROOT = Path(__file__).resolve().parents[2]


class GeneratedPythonSolutionsTest(unittest.TestCase):
    def test_registry_has_every_problem(self) -> None:
        self.assertEqual(len(REGISTRY), 229)

    def test_manifest_functions_are_callable(self) -> None:
        manifest = json.loads((ROOT / "solutions/problem_manifest.json").read_text())
        for problem in manifest:
            with self.subTest(problem=problem["id"]):
                func = REGISTRY[problem["id"]]
                self.assertTrue(callable(func))
                func()


if __name__ == "__main__":
    unittest.main()
