package main

import "fmt"

// 27. Remove Element
func Solve077(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("27. Remove Element")
	fmt.Println("Sample input:", "nums=[3,2,2,3], val=3")
	fmt.Println("Expected output:", "k=2, first values [2,2]")
	fmt.Println("Call Solve077(...) with parsed arguments for this problem.")
}
