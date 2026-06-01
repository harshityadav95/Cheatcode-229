package main

import "fmt"

// 58. Length of Last Word
func Solve093(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("58. Length of Last Word")
	fmt.Println("Sample input:", "s=\"fly me to the moon\"")
	fmt.Println("Expected output:", "4")
	fmt.Println("Call Solve093(...) with parsed arguments for this problem.")
}
