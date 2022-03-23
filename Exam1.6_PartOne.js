const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

const findLongestWord = (str) => {
  let max = 0;
  let result

  const stringArr = str.split(" ");

  for (let word of stringArr) {
    let alphaWord = word.replace(/[^a-zA-Z]/g, '')
    if(alphaWord.length > max) {
      max = alphaWord.length
      result = alphaWord
    }
  }
  return result
};

const str = "What we do in life echoes to eternity!";
console.log(findLongestWord(str));