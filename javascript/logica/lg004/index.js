/*
Moedas:
25centavos
10centavos
5centavos
1centavo
*/
const transform = (n) => Number(n.toString().replace(".", ""))
const isInt = (n) => n % 2 === 0

let valorTroco
do {
  valorTroco = parseFloat(prompt("Troca devida: "))
} while (valorTroco >= 1 || (valorTroco).toString().length < 4);

let cents = Number(transform(valorTroco))
let moeda25 = cents / 25
cents = cents % 25
let moeda10 = cents / 10
cents = cents % 10
let moeda5 = cents / 5
cents = cents % 5
let moeda1 = cents


const totalMoedas = moeda25 + moeda10 + moeda5 + moeda1
console.log(`O total de moedas é: ${totalMoedas}`)