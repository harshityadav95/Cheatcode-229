package main

import "fmt"

// 1768. Merge Strings Alternately
func Solve001(args ...any) any {
	if len(args) < 2 {
		return ""
	}
	word1, ok1 := args[0].(string)
	word2, ok2 := args[1].(string)
	if !ok1 || !ok2 {
		return ""
	}
	return mergeAlternately(word1, word2)
}

func mergeAlternately(word1 string, word2 string) string {
	m, n := len(word1), len(word2)
	ans := make([]byte, 0, m+n)
	for i := 0; i < m || i < n; i++ {
		if i < m {
			ans = append(ans, word1[i])
		}
		if i < n {
			ans = append(ans, word2[i])
		}
	}
	return string(ans)
}

func main() {
	fmt.Println("1768. Merge Strings Alternately")
	fmt.Println("Sample input:", "word1=\"abc\", word2=\"pq\"")
	fmt.Println("Expected output:", "\"apbqc\"")
	fmt.Println("Call Solve001(...) with parsed arguments for this problem.")
}
