function sumMultiply(number1, number2, callback) {
  let sum = number1 + number2;
  let multiply = sum * 2;
  let i = 0;
  console.log("Somando...")
  function iterate() {
    if (i < 3) {
      console.log("...");
      i++;
      setTimeout(iterate, 1000);
    } else {
      console.log("Multiplicando...")
      let u = 0
      function iterate2() {
        if (u < 3) {
          console.log("...");
          u++;
          setTimeout(iterate2, 1000);
        } else {
          callback(multiply)
        }
      }
      iterate2()
    }
  }
  iterate()
}
let num1 = 10
let num2 = 10
sumMultiply(num1, num2, (result) => {
  console.log(`o resultado é ${result}`)
})