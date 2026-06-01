package main

import "fmt"

// 11. Container With Most Water
func Solve012(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("11. Container With Most Water")
	fmt.Println("Sample input:", "height=[1,7,2,5,4,7,3,6]")
	fmt.Println("Expected output:", "36")
	fmt.Println("Call Solve012(...) with parsed arguments for this problem.")
}
