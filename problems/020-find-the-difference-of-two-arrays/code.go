package main

import "fmt"

// 2215. Find the Difference of Two Arrays
func Solve020(args ...any) any {
	seen := map[any]int{}
	for _, item := range args {
		seen[item]++
	}
	return seen
}

func main() {
	fmt.Println("2215. Find the Difference of Two Arrays")
	fmt.Println("Sample input:", "nums1=[1,2,3], nums2=[2,4]")
	fmt.Println("Expected output:", "[[1,3],[4]]")
	fmt.Println("Call Solve020(...) with parsed arguments for this problem.")
}
