const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.map(n => n * n)

console.log(resultado[0], resultado[1], resultado[2], resultado[3], resultado[4])

setTimeout(() => console.log("e esses ai ao quadrado?"), 2000);

const segundosNumeros = [resultado[0], resultado[1], resultado[2], resultado[3], resultado[4]]

const segundoResultado = segundosNumeros.map(n => n * n)

setTimeout(() => console.log(segundoResultado[0], segundoResultado[1],
  segundoResultado[2], segundoResultado[3], segundoResultado[4]), 4000);