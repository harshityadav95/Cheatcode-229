package main

import "fmt"

// 125. Valid Palindrome
func Solve098(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("125. Valid Palindrome")
	fmt.Println("Sample input:", "s=\"A man, a plan, a canal: Panama\"")
	fmt.Println("Expected output:", "true")
	fmt.Println("Call Solve098(...) with parsed arguments for this problem.")
}
