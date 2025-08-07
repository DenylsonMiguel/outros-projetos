/*
O número 6 é um número realmente ótimo. Dados dois valores int, a e b, retorne True se um deles for 6. Ou se a soma ou diferença deles for 6. Observação: a função abs(num) calcula o valor absoluto de um número.
*/

const love6 = (num1: number, num2: number): boolean => {
	return num1 === 6 || num2 === 6 || num1 + num2 === 6 || Math.abs(num1 - num2) === 6;
};
