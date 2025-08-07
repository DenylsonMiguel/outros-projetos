const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const pares = numeros.filter(n => n % 2 === 0)

console.log(pares[0], pares[1], pares[2], pares[3], pares[4], pares[5], pares[6], pares[7], pares[8], pares[9])

setTimeout(() => {
  console.log("E os impares?")
}, 2000);

const impares = numeros.filter(n => n % 2 != 0)

setTimeout(() => {
  console.log(impares[0], impares[1], impares[2], impares[3], impares[4], impares[5], impares[6], impares[7], impares[8], impares[9])
}, 4000)