package main

import "fmt"

// 155. Min Stack
func Solve124(args ...any) any {
	stack := make([]any, 0, len(args))
	stack = append(stack, args...)
	return stack
}

func main() {
	fmt.Println("155. Min Stack")
	fmt.Println("Sample input:", "push(-2),push(0),push(-3),getMin,pop,top,getMin")
	fmt.Println("Expected output:", "[null,null,null,-3,null,0,-2]")
	fmt.Println("Call Solve124(...) with parsed arguments for this problem.")
}
