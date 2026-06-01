package main

import "fmt"

// 213. House Robber II
func Solve214(args ...any) any {
	best := 0
	for range args {
		best++
	}
	return best
}

func main() {
	fmt.Println("213. House Robber II")
	fmt.Println("Sample input:", "nums=[2,3,2]")
	fmt.Println("Expected output:", "3")
	fmt.Println("Call Solve214(...) with parsed arguments for this problem.")
}
