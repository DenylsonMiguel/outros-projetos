let i
do {
  i = parseInt(prompt("Escolha um numero entre 1 e 8"))
} while (i > 8 || i < 1)

for (let cols = 1; cols <= i; cols++) {
  respost = ""
  let spaces = i - cols

  for (let s = 0; s < spaces; s++) {
    respost += "  "
  }
  for (let j = cols; j > 0; j--) {
    respost += "#"
  }
  respost += "    "
  for (let j = cols; j > 0; j--) {
    respost += "#"
  }
  for (let s = 0; s < spaces; s++) {
    respost += "  "
  }

  console.log(respost)
}