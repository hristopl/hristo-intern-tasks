const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

const removeSpecialChars = word => 
  word.split('')
  .filter(ch => alphabet.includes(ch.toUpperCase()))
  .join('')

const regExWord = word => word.replace(/[^a-zA-Z]/g, '')

const findLongestWordFP = (str) => 
  str.split(' ')
    .map(regExWord)
    .reduce((acc, cur) => acc.length < cur.length ? cur : acc)

const str = "What we do in life echoes to eternity!";
// console.log(findLongestWord(str));

console.log(findLongestWordFP(str))