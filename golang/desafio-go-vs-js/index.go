package main
import (
  "fmt";
  "strconv"
)

var result string

func main() {
  for i := 1; i < 20; i++ {
    result += ("%s, ", strconv.Itoa(i)
  }
  
  fmt.Println(result)
}