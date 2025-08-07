package main
import (
  "fmt";
  "time"
)

func main() {
  falar("oi", "bom dia", "eai brother")
}

func falar(text ...string) (int, error) {
  fmt.Println("Vou falar...")
  time.Sleep(800 * time.Millisecond)
  for _, i := range text {
    
  }
  
  
  return 6, nil
}