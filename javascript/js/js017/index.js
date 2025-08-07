let number
do {
  number = parseFloat(prompt("Escllha um número: "))
} while (isNaN(number))

console.log(`Seu número é ${number}`)
const isPalindrome = (number) => {
  return number.toString().split("").reverse().join("") === number.toString()
}

console.log(isPalindrome(number))