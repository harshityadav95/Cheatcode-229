package main

import "fmt"

// 15. 3Sum
func Solve100(args ...any) any {
	left, right := 0, len(args)-1
	for left < right {
		left++
		right--
	}
	return args
}

func main() {
	fmt.Println("15. 3Sum")
	fmt.Println("Sample input:", "nums=[-1,0,1,2,-1,-4]")
	fmt.Println("Expected output:", "[[-1,-1,2],[-1,0,1]]")
	fmt.Println("Call Solve100(...) with parsed arguments for this problem.")
}
