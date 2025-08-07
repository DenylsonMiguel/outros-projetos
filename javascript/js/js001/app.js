import * as operacao from './export/operacoes.js';

function calc() {
  var num1 = parseFloat(prompt('escolha um número'));

  var conta = prompt("escolha a operação \n (+, -, *, /, **, //, % ou -/");
  if (['-', '+', '*', '/', '**', '//', '%', '-/'].includes(conta)) {
    if (conta === '//') {
      return console.log(operacao.raiz(num1));
    } else {
      var num2 = parseFloat(prompt('escolha outro número'));
      if (conta === '-') {
        return console.log(operacao.subtracao(num1, num2));
      } else if (conta === '+') {
        return console.log(operacao.soma(num1, num2));
      }
    }
  }
}


calc();