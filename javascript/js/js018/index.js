const twoSums = (nums, target) => {
  let result = ""

  for (let index1 = 0; index1 < nums.length; index1++) {
    let sum
    let index2 = 0
    for (; index2 < nums.length; index2++) {
      sum = nums[index1] + nums[index2]
      if (sum === target) {
        result = `[${index1}, ${index2}]`
        break
      }
    }
    if (sum === target) {
      break
    }
  }
  return result
}

console.log(twoSums([2, 5, 8, 10], 12))