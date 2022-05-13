const randomize = (arr) => {
  let array = arr
  array = array.sort(() => Math.random() - 0.5)
  console.log(array)

  let sequence = []
  const tmpArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      tmpArr.push(arr[i])
    } else if (tmpArr.length > 0) {
      tmpArr.push(arr[i])
      if (sequence.length < tmpArr.length) {
        sequence = tmpArr.splice(0, tmpArr.length)
      } else {
        tmpArr.splice(0, tmpArr.length)
      }
    }
  }
  return sequence
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const array = []
console.log(randomize(array))

module.exports = randomize
