package main

import (
	"fmt"
	"errors"
)

func main() {
	var number1 int
	var number2 int
	var operation int
	
	fmt.Println("Oi, digite o primeiro número aí:")
	fmt.Scan(&number1)
	fmt.Println("Agora o segundo:")
	fmt.Scan(&number2)
	fmt.Println("Escolha uma opção, 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão")
	fmt.Scan(&operation)

	result, err := calc(number1, number2, operation)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("O resultado é: %v\n", result)
	}
}

func calc(num1, num2, operation int) (float64, error) {
	switch operation {
	case 1:
		return float64(num1 + num2), nil
	case 2:
		return float64(num1 - num2), nil
	case 3:
		return float64(num1 * num2), nil
	case 4:
		if num2 == 0 {
			return 0, errors.New("erro: divisão por zero")
		}
		return float64(num1 / num2), nil
	default:
		return 0, errors.New("insira valores válidos (1-4)")
	}
}