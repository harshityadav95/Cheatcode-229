package main

import "fmt"

// 100. Same Tree
func Solve138(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("100. Same Tree")
	fmt.Println("Sample input:", "p=[1,2,3], q=[1,2,3]")
	fmt.Println("Expected output:", "true")
	fmt.Println("Call Solve138(...) with parsed arguments for this problem.")
}
