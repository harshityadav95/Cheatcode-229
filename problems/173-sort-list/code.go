package main

import "fmt"

// 148. Sort List
func Solve173(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("148. Sort List")
	fmt.Println("Sample input:", "head=[4,2,1,3]")
	fmt.Println("Expected output:", "[1,2,3,4]")
	fmt.Println("Call Solve173(...) with parsed arguments for this problem.")
}
