const randomize = (array) => {
  const randomizedArr = array.sort(() => 0.5 - Math.random())
  console.log(randomizedArr)

  const result = []
  let tempArray = []
  let getTheLongestNumberLine = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      tempArray.push(array[i])
    } else {
      tempArray.push(array[i])
      result.push(tempArray)

      if (getTheLongestNumberLine < tempArray.length) {
        getTheLongestNumberLine = tempArray
      }
      tempArray = []
    }
  }

  for (let j = 0; j < result.length; j++) {
    if (getTheLongestNumberLine.length < result[j].length) {
      getTheLongestNumberLine = result[j]
    }
  }

  return getTheLongestNumberLine
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(randomize(array))
