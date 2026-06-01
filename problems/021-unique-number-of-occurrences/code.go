package main

import "fmt"

// 1207. Unique Number of Occurrences
func Solve021(args ...any) any {
	seen := map[any]int{}
	for _, item := range args {
		seen[item]++
	}
	return seen
}

func main() {
	fmt.Println("1207. Unique Number of Occurrences")
	fmt.Println("Sample input:", "nums=[1,2,2,3,3,3]")
	fmt.Println("Expected output:", "true")
	fmt.Println("Call Solve021(...) with parsed arguments for this problem.")
}
