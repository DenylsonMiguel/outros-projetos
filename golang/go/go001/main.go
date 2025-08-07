package main
import "fmt"

var nome string = "Denylson"
var idade int = 14
var altura float32  = 1.68

func main() {
  fmt.Printf("Relatorio do cidadão:\nNome: %s\nIdade: %d\nAltura: %.2f\n", nome, idade, altura)
}