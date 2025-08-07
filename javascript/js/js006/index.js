const denylson = {
  firstName: "Denylson",
  lastName: "Miguel",
  age: 14,
  hobbies: ["Jogar coc", "estudar", "desenhar", "ver tiktok"],
  id: 1972,

  dog: {
    name: "Boby",
    age: 5
  }
}

// const firstName = denylson.firstName;
// const lastName = denylson.lastName;

const {
  firstName: nomePrincipal,
  lastName,
  hobbies,
  dog: { name: dogName }
} = denylson

console.log(nomePrincipal);
console.log(lastName)

console.log(denylson.hobbies[1])

denylson.bandas = ["Filarmonica", "Avani"]

console.log(denylson.bandas[1])
console.log(denylson)
console.log(denylson.dog.age);
console.log(dogName)

const toDos = [
  {
    id: 1,
    description: `Estudar`,
    isCompleted: false
  },

  {
    id: 2,
    description: `Jogar a guerra`,
    isCompleted: true
  },

  {
    id: 3,
    description: `Terminar html-css`,
    isCompleted: false
  },
]

const {
  id: idFirstToDo,
  isCompleted: completedFirstToDo,
  description: descriptionFirstToDo
} = toDos[0]

console.log(toDos[2]);
console.log(idFirstToDo);