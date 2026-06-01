package main

import "fmt"

// 172. Factorial Trailing Zeroes
func Solve194(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("172. Factorial Trailing Zeroes")
	fmt.Println("Sample input:", "n=25")
	fmt.Println("Expected output:", "6")
	fmt.Println("Call Solve194(...) with parsed arguments for this problem.")
}
