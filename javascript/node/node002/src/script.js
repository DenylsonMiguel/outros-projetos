const agora = new Date()
const hora = agora.getHours()

if (hora >= 5 && hora < 12) {
  fetch("http://localhost:3000/dia")
    .then(res => res.text())
    .then(insert => document.getElementById('greet').textContent = insert)
} else if (hora >= 12 && hora <= 18) {
  fetch("http://localhost:3000/tarde")
    .then(res => res.text())
    .then(insert => document.getElementById('greet').textContent = insert)
} else {
  fetch("http://localhost:3000/noite")
    .then(res => res.text())
    .then(insert => document.getElementById('greet').textContent = insert)
}