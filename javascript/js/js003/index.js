

for (let name = null; name = "gay";) {
  name = prompt("Qual o seu nome? ")
  let age = parseInt(prompt("Qual a sua idade? "))
  if (age < 18 && age > 0) {
    console.log("Você é menor de idade.")
  } else if (age >= 18 && age <= 100) {
    console.log("Você é maior de idade.")
  } else {
    console.log("Insira um valor válido")
  }

  if (name != "gay") {
    break
  }
}