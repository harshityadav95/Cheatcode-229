package main

import "fmt"

// 198. House Robber
func Solve061(args ...any) any {
	best := 0
	for range args {
		best++
	}
	return best
}

func main() {
	fmt.Println("198. House Robber")
	fmt.Println("Sample input:", "nums=[2,7,9,3,1]")
	fmt.Println("Expected output:", "12")
	fmt.Println("Call Solve061(...) with parsed arguments for this problem.")
}
