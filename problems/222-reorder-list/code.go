package main

import "fmt"

// 143. Reorder List
func Solve222(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("143. Reorder List")
	fmt.Println("Sample input:", "head=[1,2,3,4,5]")
	fmt.Println("Expected output:", "[1,5,2,4,3]")
	fmt.Println("Call Solve222(...) with parsed arguments for this problem.")
}
