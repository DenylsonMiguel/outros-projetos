const magicNumbers = (array) => {
  let magicNumbs = []
  try {
    for (let i = 1; i < array.length - 1; i++) {
      let prevNumber = array[i - 1]
      let laterNumber = array[i + 1]

      if (prevNumber + lateNumber === array[i]) {
        magicNumbs.push(array[i])
      }
    }
    if (magicNumbs.length === 0) {
      return "Não existem magic numbers no seu array"
    }
    return `Os numeros magicos são: ${magicNumbs.join(", ")}`
  } catch (err) {
    return `Error: ${err}`
  }
}

const jumpes = (array) => {
  let position = array[0]
  let i = 1
  for (i = 1; position <= array[i]; i++) {
    console.log(`pulamos do ${position} para o ${array[i]}`)
    position = array[i]
  }
  if (i >= array.length) {
    return "atravessamos o array inteiro"
  }
  return `paramos no ${position}`
}

const seq = (array) => {
  for (let i = 0; i <= array.length; i++) {
    for (value = 0; value < array[i+1];value++) {
      
    }
  }
  return value
}