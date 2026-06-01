package main

import "fmt"

// 30. Substring with Concatenation of All Words
func Solve103(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("30. Substring with Concatenation of All Words")
	fmt.Println("Sample input:", "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]")
	fmt.Println("Expected output:", "[0,9]")
	fmt.Println("Call Solve103(...) with parsed arguments for this problem.")
}
