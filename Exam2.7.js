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
