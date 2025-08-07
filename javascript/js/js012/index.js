// Conseguir a nota da prova do usuario
const notaProva = parseFloat(prompt("Insira a nota da prova: "));

// Conseguir a nota de comportamento do usuario
const notaComportamento = parseFloat(prompt("Insira a nota de comportamento: "));

// Conseguir a nota de vistos do usuario
const notaVisto = parseFloat(prompt("Insira a nota dos vistos: "));

// Somar todos os numeros
const sumOfNotes = notaProva + notaComportamento + notaVisto;

// Dividir o resultado por 3
const media = sumOfNotes / 3;

// Retornar a média para o usuario
console.log(media);