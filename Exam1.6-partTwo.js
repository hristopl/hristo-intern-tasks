const findLongestWord = (str, char) => {
  let max = 0
  let result

  const stringArr = str.split(' ')

  for (const word of stringArr) {
    const alphaWord = word.replace(/[^a-zA-Z]/g, '')
    if (alphaWord.length > max && alphaWord.startsWith(char)) {
      max = alphaWord.length
      result = alphaWord
    }
  }
  return result
}

const str = 'What we do in life echoes to eternity!'
const char = 'W'
console.log(findLongestWord(str, char))

module.exports = findLongestWord
