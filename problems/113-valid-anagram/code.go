package main

import "fmt"

// 242. Valid Anagram
func Solve113(args ...any) any {
	seen := map[any]int{}
	for _, item := range args {
		seen[item]++
	}
	return seen
}

func main() {
	fmt.Println("242. Valid Anagram")
	fmt.Println("Sample input:", "s=\"anagram\", t=\"nagaram\"")
	fmt.Println("Expected output:", "true")
	fmt.Println("Call Solve113(...) with parsed arguments for this problem.")
}
