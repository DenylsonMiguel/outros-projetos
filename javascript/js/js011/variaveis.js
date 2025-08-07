const $int = 5;
const $float = 0.5;
const $string = "5";
const $boolean = true;
const $undefined = undefined;
const $null = null;

let msg; // undefined

msg = "Olá, mundo"; // "Olá, mundo"

const sum = (number1, number2) => {
  let number1type = typeof (number1);
  let number2type = typeof (number2);
  let numberType = typeof (0);

  if (number1type != number2type || number1type != numberType || !number1type || !number1 || !number2type || !number2) {
    return console.error("Insira valores numéricos");
  }

  let result = number1 + number2;

  return result;
};

/*
const number1 = Number(prompt("Escolha um número"));
const number2 = Number(prompt("Escolha outro número"));

console.log(`A soma entre ${number1} e ${number2} é ${sum(number1, number2)}`);
*/

console.log("Soma:");
console.log(5 + 2);

console.log("Subtração:");
console.log(5 - 2);

console.log("Multiplicação:");
console.log(5 * 2);

console.log("Divisão:");
console.log(5 / 2);

console.log("Potenciação:");
console.log(5 ** 2);

console.log("Módulo:");
console.log(5 % 2);

console.log("---");

console.log("Complexos:");

console.log("---");

console.log("Divisão Inteira:");
console.log(Math.floor(5 / 2));

console.log("Raiz:");
console.log(Math.sqrt(25));

// ordem de precedência

const primeiro = "parenteses";
