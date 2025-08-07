const prompt = require('prompt-sync')()
let acertos = 0
const certas = []
const perguntas = [
  {
    numero: 1, texto: "Qual a primeira capital do Brasil?", alternativas: {
      num1: "Rio de Janeiro",
      num2: "Brasilia",
      num3: "Amazônia",
      num4: "Salvador"
    }, resposta: "Salvador"
  },
  {
    numero: 2, texto: "Quanto é (5!*2)?", alternativas: {
      num1: "240",
      num2: "200",
      num3: "230",
      num4: "245"
    }, resposta: "240"
  },
  {
    numero: 3, texto: "Em que ano começou a guerra fria?", alternativas: {
      num1: "1945",
      num2: "1946",
      num3: "1947",
      num4: "1948"
    }, resposta: "1947"
  },
  {
    numero: 4, texto: "Qual é a forma correta no pretérito perfeito do indicativo para a terceira pessoa do singular, o verbo intervir", alternativas: {
      num1: "interviu",
      num2: "interveio",
      num3: "intervou",
      num4: "intervio"
    }, resposta: "interveio"
  },
  {
    numero: 5, texto: "Qual destas alternativas NÃO tem um animal mamífero:", alternativas: {
      num1: "Bolsonaro",
      num2: "Morcego",
      num3: "Galinha",
      num4: "Baleia"
    }, resposta: "Galinha"
  }
]

for (let i = 0; i < perguntas.length; i++) {
  console.log(`${perguntas[i].numero}° pergunta: `)
  console.log(perguntas[i].texto)
  console.log(`1. ${perguntas[i].alternativas.num1}`)
  console.log(`2. ${perguntas[i].alternativas.num2}`)
  console.log(`3. ${perguntas[i].alternativas.num3}`)
  console.log(`4. ${perguntas[i].alternativas.num4}`)
  const resposta = prompt("Sua alternativa: ")
  if (i === 0 && resposta == 4) {
    acertos++
    certas.push(i)
  } else if (i === 1 && resposta == 1) {
    acertos++
    certas.push(i)
  } else if (i === 2 && resposta == 3) {
    acertos++
    certas.push(i)
  } else if (i === 3 && resposta == 2) {
    acertos++
    certas.push(i)
  } else if (i === 4 && resposta == 3) {
    acertos++
    certas.push(i)
  }
}

if (acertos === 0) {
  console.log(`TU É MUITO RUIM, VAI ESTUDAR SEU BURRO, TU NÃO ACERTOU NENHUMA`)
} else if (acertos === 1) {
  console.log(`Cara, eatuda pow, tu só acertou ${acertos} alternativas`)
} else if (acertos === 2) {
  console.log(`Ta no meio termo entre ruim e bom acertou ${acertos}`)
} else if (acertos === 3) {
  console.log(`Já está ótimo, você acertou ${acertos} alternativas`)
} else if (acertos === 4) {
  console.log(`Parabéns, você tirou ${acertos}. Mas... por que não 5?`)
} else if (acertos === 5) {
  console.log(`BOA, FINALMENTE ALGUEM MINIMAMENTE INTELIGÊNTE AQUU!!! TIRASTE ${acertos} ALTERNATIVAS!!!!`)
}

for (let i = 0; i < perguntas.length; i++) {
  if (certas.includes(i)) {
    console.log(`${perguntas[i].texto} sua resposta: ${perguntas[i].resposta} - ✓`)
  } else {
    console.log(`${perguntas[i].texto} - x`)
  }
}