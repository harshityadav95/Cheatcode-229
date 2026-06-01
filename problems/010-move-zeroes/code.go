package main

import "fmt"

// 283. Move Zeroes
func Solve010(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("283. Move Zeroes")
	fmt.Println("Sample input:", "nums=[0,1,0,3]")
	fmt.Println("Expected output:", "[1,3,0,0]")
	fmt.Println("Call Solve010(...) with parsed arguments for this problem.")
}
