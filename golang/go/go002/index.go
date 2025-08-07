package main
import "fmt"

func main() {
  var payment float64
  var gorjeta float64
  
  fmt.Println("Bem vindo à calculadora de gorjetas!")
  
  fmt.Print("Insira o valor do pagamento: ")
  fmt.Scan(&payment)
  
  fmt.Print("Insira a porcentagem da gorjeta: ")
  fmt.Scan(&gorjeta)
  
  fmt.Println("O valor da gorjeta deverá ser de ", percentage(gorjeta, payment))
}

func percentage(percent, value float64) float64 {
  return percent / 100 * value 
}