package main
import "fmt"

func main() {
  var numConvidados int
  convidados := []string{}
  
  fmt.Print("Quantos convidados virão? ")
  fmt.Scanf("%d", &numConvidados)
  
  for i := 0; i < numConvidados; i++ {
    fmt.Printf("Quem será o %d° convidado? ", i + 1)
    var convidado string
    fmt.Scanf("%s", &convidado)
    convidados = append(convidados, convidado)
  }
  
  fmt.Println("Convidados:")
  for _, convidado := range convidados {
    fmt.Println("-", convidado)
  }
}