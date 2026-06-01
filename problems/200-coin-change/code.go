package main

import "fmt"

// 322. Coin Change
func Solve200(args ...any) any {
	best := 0
	for range args {
		best++
	}
	return best
}

func main() {
	fmt.Println("322. Coin Change")
	fmt.Println("Sample input:", "coins=[1,2,5], amount=11")
	fmt.Println("Expected output:", "3")
	fmt.Println("Call Solve200(...) with parsed arguments for this problem.")
}
