// const corredor1 = {
//   nome: 'Ayrton Senna',
//   equipe: 'Maclaren',
//   idade: 19,
//   correr: () => {
//     console.log("Vruuuum");
//   }
// };
// 
// const corredor2 = {
//   nome: "Max Verssati",
//   equipe: "Red Bull Racing",
//   idade: 26,
//   correr: () => {
//     console.log("Vruuuuuuum");
//   }
// };
// 
// const corredor3 = {
//   nome: "Charles Leclerc",
//   equipe: "Ferrari",
//   idade: 25,
//   correr: () => {
//     console.log("Vruuuuuuum");
//   }
// };

class corredor {
  constructor(nome, equipeDoPiloto, idade) {
    this.nome = nome;
    this.equipe = equipeDoPiloto;
    this.idade = idade;
  }
  correr() {
    console.log("Vruuuuuuum");
  }
}

const corredor1 = new corredor("Ayrton Senna", "Mclaren", 29);
const corredor2 = new corredor("Max Verstappen", "Red Bull Rqncing", 26);
const corredor3 = new corredor("Lewis Hamilton", "Mercedes", 32);
const corredor4 = new corredor("Charles Leclerc", "Ferrari", 25);
const corredor5 = new corredor("Lanro Norris", "McLaren", 27);

console.log(corredor1);
console.log(corredor2);
console.log(corredor3);
console.log(corredor4);
console.log(corredor5);