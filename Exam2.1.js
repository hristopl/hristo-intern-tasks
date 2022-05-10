const sortingArray = (arr, fn) => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (!fn(arr[j], arr[j + 1])) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const array = [6, 4, 3, 1, 9, 44, 33, 2]
// const array = []
const func = (left, right) => {
  return right < left
}
console.log(sortingArray(array, func))

module.exports = sortingArray
