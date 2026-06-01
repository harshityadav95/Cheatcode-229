package main

import "fmt"

// 120. Triangle
func Solve202(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("120. Triangle")
	fmt.Println("Sample input:", "triangle=[[2],[3,4],[6,5,7],[4,1,8,3]]")
	fmt.Println("Expected output:", "11")
	fmt.Println("Call Solve202(...) with parsed arguments for this problem.")
}
