const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = numbers.map(itemNumber => itemNumber * 2)
const numbersLength = numbers.length
console.log(doubleNumbers)

for (i = 0; i != numbersLength; i++) {
  let number = numbers[i] * 2
  console.log(`number = ${number}`)
}

const ages = [8, 13, 27, 30, 22, 40, 5]
const evenAges = ages.filter(itemAge => itemAge % 2 === 0)
console.log(`As idades são: ${ages}, mas só as pares são: ${evenAges}`)

const oddsAges = ages.filter(itemAge => itemAge % 2 != 0)
console.log(`e só as impares são: ${oddsAges}`)

const sumOfAges = ages.reduce((age, acc) => {
  return acc + age
}, 0)
console.log(sumOfAges);

const multiplyOfAges = ages.reduce((age, acc) => {
  return age * acc;
}, 1);

console.log(`E a multiplicação das idades é: ${multiplyOfAges}`)