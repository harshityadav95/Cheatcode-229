package main

import "fmt"

// 173. Binary Search Tree Iterator
func Solve148(args ...any) any {
	answer := make([]any, 0, len(args))
	answer = append(answer, args...)
	return answer
}

func main() {
	fmt.Println("173. Binary Search Tree Iterator")
	fmt.Println("Sample input:", "BST=[7,3,15,null,null,9,20], calls=next,next,hasNext")
	fmt.Println("Expected output:", "[3,7,true]")
	fmt.Println("Call Solve148(...) with parsed arguments for this problem.")
}
