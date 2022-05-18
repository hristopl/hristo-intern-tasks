// const randomize = (arr) => {
//   const array = arr
//   array = array.sort(() => Math.random() - 0.5)
//   console.log(array)

//   let sequence = []
//   const tmpArr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       tmpArr.push(arr[i])
//     } else if (tmpArr.length > 0) {
//       tmpArr.push(arr[i])
//       if (sequence.length < tmpArr.length) {
//         sequence = tmpArr.splice(0, tmpArr.length)
//       } else {
//         tmpArr.splice(0, tmpArr.length)
//       }
//     }
//   }
//   return sequence
// }
// // const array = []
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(randomize(array))

const shuffle = array => [...array].sort(() => 0.5 - Math.random())

const randomizeFP = array => {
  const { longest } = shuffle(array).reduce((acc, cur) => {
    const { tempArray = [], longest = [] } = acc

    const [largest] = tempArray

    if (largest === undefined || cur >= largest) {
      return { tempArray: [cur, ...tempArray], longest }
    }

    const newLongest = longest.length < tempArray.length
      ? tempArray
      : longest

    return { tempArray: [], longest: newLongest }
  }, {})

  return longest.reverse()
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(randomizeFP(array))

export default randomizeFP
