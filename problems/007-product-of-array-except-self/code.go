package main

import "fmt"

// 238. Product of Array Except Self
func Solve007(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("238. Product of Array Except Self")
	fmt.Println("Sample input:", "nums=[2,3,4]")
	fmt.Println("Expected output:", "[12,8,6]")
	fmt.Println("Call Solve007(...) with parsed arguments for this problem.")
}
