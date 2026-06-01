package main

import "fmt"

// 26. Remove Duplicates from Sorted Array
func Solve078(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("26. Remove Duplicates from Sorted Array")
	fmt.Println("Sample input:", "nums=[1,1,2]")
	fmt.Println("Expected output:", "k=2, first values [1,2]")
	fmt.Println("Call Solve078(...) with parsed arguments for this problem.")
}
