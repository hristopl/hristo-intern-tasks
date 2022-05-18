const findLongestWord = (str = '') => {
  let max = 0
  let result

  const stringArr = str.split(' ')

  for (const word of stringArr) {
    const alphaWord = word.replace(/[^a-zA-Z]/g, '')
    if (alphaWord.length > max) {
      max = alphaWord.length
      result = alphaWord
    }
  }
  return result
}

const str = 'What we do in life echoes to eternity!'
console.log(findLongestWord(str))

export default findLongestWord
