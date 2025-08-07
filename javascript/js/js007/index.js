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

const toDosJSON = JSON.stringify(toDos)
const toDosList = JSON.parse(toDosJSON)

console.log(toDosJSON)

console.log(toDosList)
