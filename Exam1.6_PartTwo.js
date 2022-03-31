const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

const findLongestWord = (str, char) => {
  let max = 0;
  let result

  const stringArr = str.split(" ");

  for (const word of stringArr) {
    let alphaWord = word.replace(/[^a-zA-Z]/g, '')
    if(alphaWord.length > max && alphaWord.startsWith(char)){
      max = alphaWord.length
      result = alphaWord
    }
  }
  return result
};

const str = "What we do in life echoes to eternity!";
const char = "W";
console.log(findLongestWord(str,char));
