const $num1 = parseFloat(prompt("Escolha um número:\n"));
let $operacao = (prompt("Escolha entre (+, -, *, /)"));
while (!["+", "-", "*", "/"].includes($operacao)) {
  $operacao = (prompt("Escolha entre (+, -, *, /)"));
}
const $num2 = parseFloat(prompt("Escolha outro número:\n"));
let $resultado = (0);
if (["+"].includes($operacao)) {
  $resultado = ($num1 + $num2)
} else if (["-"].includes($operacao)) {
  $resultado = ($num1 - $num2)
} else if (["*"].includes($operacao)) {
  $resultado = ($num1 * $num2)
} else {
  $resultado = ($num1 / $num2)
}
console.log(`O resultado de ${$num1} ${$operacao} ${$num2} é ${$resultado}`)