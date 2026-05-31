package solutions

import "testing"

func TestRegistryHasEveryProblem(t *testing.T) {
	if len(Registry) != 229 {
		t.Fatalf("expected 229 registered solutions, got %d", len(Registry))
	}
}

func TestRegistryFunctionsAreCallable(t *testing.T) {
	for id, solve := range Registry {
		if solve == nil {
			t.Fatalf("problem %d has nil solver", id)
		}
		_ = solve()
	}
}
