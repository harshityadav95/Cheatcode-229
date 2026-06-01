package main

import "fmt"

// 128. Longest Consecutive Sequence
func Solve118(args ...any) any {
	seen := map[any]int{}
	for _, item := range args {
		seen[item]++
	}
	return seen
}

func main() {
	fmt.Println("128. Longest Consecutive Sequence")
	fmt.Println("Sample input:", "nums=[100,4,200,1,3,2]")
	fmt.Println("Expected output:", "4")
	fmt.Println("Call Solve118(...) with parsed arguments for this problem.")
}
