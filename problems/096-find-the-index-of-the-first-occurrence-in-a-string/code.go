package main

import "fmt"

// 28. Find the Index of the First Occurrence in a String
func Solve096(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("28. Find the Index of the First Occurrence in a String")
	fmt.Println("Sample input:", "haystack=\"sadbutsad\", needle=\"sad\"")
	fmt.Println("Expected output:", "0")
	fmt.Println("Call Solve096(...) with parsed arguments for this problem.")
}
