
const sumOfOdds = (array) => {
  try {
    const arrayOdds = array.filter(n => n % 2 != 0)
    const result = arrayOdds.reduce((total, currentElement) => total + currentElement, 0)
    if (typeof (result) != "number") { console.error("Needs a number type"); return null }
    return result
  } catch (err) {
    console.error(`Error: ${err}`)
    return null
  }
}

console.log(sumOfOdds([1, 2, 3, 4, 5]))