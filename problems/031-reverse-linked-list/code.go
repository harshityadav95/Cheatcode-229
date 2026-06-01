package main

import "fmt"

// 206. Reverse Linked List
func Solve031(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("206. Reverse Linked List")
	fmt.Println("Sample input:", "head=[1,2,3]")
	fmt.Println("Expected output:", "[3,2,1]")
	fmt.Println("Call Solve031(...) with parsed arguments for this problem.")
}
