package main

import "fmt"

// 933. Number of Recent Calls
func Solve027(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("933. Number of Recent Calls")
	fmt.Println("Sample input:", "pings=[1,100,3001,3002]")
	fmt.Println("Expected output:", "[1,2,3,3]")
	fmt.Println("Call Solve027(...) with parsed arguments for this problem.")
}
