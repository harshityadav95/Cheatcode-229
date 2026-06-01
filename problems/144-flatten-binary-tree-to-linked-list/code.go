package main

import "fmt"

// 114. Flatten Binary Tree to Linked List
func Solve144(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("114. Flatten Binary Tree to Linked List")
	fmt.Println("Sample input:", "root=[1,2,5,3,4,null,6]")
	fmt.Println("Expected output:", "[1,2,3,4,5,6]")
	fmt.Println("Call Solve144(...) with parsed arguments for this problem.")
}
