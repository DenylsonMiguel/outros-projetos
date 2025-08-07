const guerreiros = [
  { id: 1, nome: "Denylson", classe: "Mago", nivel: 5 },
  { id: 2, nome: "Keirrison", classe: "Arqueiro", nivel: 3 },
  { id: 3, nome: "Hiarley", classe: "Guerreiro", nivel: 4 },
  { id: 4, nome: "Albert", classe: "Cavaleiro", nivel: 2 }
];
const guerreirosObj = guerreiros.reduce((acc, item) => {
  acc[item.nome] = item;
  return acc;
}, {});

console.log(guerreirosObj["Denylson"].nome, guerreirosObj["Keirrison"].nome, guerreirosObj["Hiarley"].nome, guerreirosObj["Albert"].nome);

const guerreiroAcimaLv3 = guerreiros.filter(p => p.nivel >= 3)

console.log(guerreiroAcimaLv3);