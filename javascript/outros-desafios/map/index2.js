const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersSum = numbers.reduce((acc, n) => n + acc, 0);

console.log(`A soma de numeros é ${numbersSum}`);

const numbersEven = numbers.filter(n => n % 2 === 0)

console.log(`os pares em numeros são: ${numbersEven.join(", ")}`);

const pessoas = [
  { "id": 1, "name": "Denylson", "idade": 14 },
  { "id": 2, "name": "Keirrison", "idade": 15 }
]

const denylson = pessoas.find(p => p.name === "Denylson")

console.log(denylson)

const usuarios = [
  { "id": 1, "name": "Denylson", "idade": 14 },

  { "id": 2, "name": "Keirrison", "idade": 15 },

  { "id": 3, "name": "Guilherme", "idade": 14 },

  { "id": 4, "name": "Hiarley", "idade": 14 },

  { "id": 5, "name": "Albert", "idade": 8 }
]

const usuariosObj = usuarios.reduce((acc, user) => {
  acc[user.name] = user;
  return acc;
}, {});

console.log(`A idade de Albert é: ${usuariosObj["Albert"].idade}`);