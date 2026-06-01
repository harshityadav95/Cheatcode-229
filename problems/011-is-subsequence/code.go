package main

import "fmt"

// 392. Is Subsequence
func Solve011(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("392. Is Subsequence")
	fmt.Println("Sample input:", "s=\"ace\", t=\"abcde\"")
	fmt.Println("Expected output:", "true")
	fmt.Println("Call Solve011(...) with parsed arguments for this problem.")
}
