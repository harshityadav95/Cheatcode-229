package main

import "fmt"

// 189. Rotate Array
func Solve081(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("189. Rotate Array")
	fmt.Println("Sample input:", "nums=[1,2,3,4,5], k=2")
	fmt.Println("Expected output:", "[4,5,1,2,3]")
	fmt.Println("Call Solve081(...) with parsed arguments for this problem.")
}
