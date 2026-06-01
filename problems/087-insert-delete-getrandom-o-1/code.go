package main

import "fmt"

// 380. Insert Delete GetRandom O(1)
func Solve087(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("380. Insert Delete GetRandom O(1)")
	fmt.Println("Sample input:", "insert(1), remove(2), insert(2), getRandom(), remove(1), insert(2), getRandom()")
	fmt.Println("Expected output:", "[true,false,true,1 or 2,true,false,2]")
	fmt.Println("Call Solve087(...) with parsed arguments for this problem.")
}
