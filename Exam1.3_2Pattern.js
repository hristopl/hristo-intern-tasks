// Pattern 2

const pattern2 = (len) => {
  let string = ''

  for (let row = 1; row <= len; row++) {
    for (let col = 1; col <= row; col++) {
      string += ' ' + col
    }
    string += '\n'
  }

  for (let row = 1; row <= len - 1; row++) {
    for (let col = 1; col <= len - row; col++) {
      string += ' ' + col
    }
    string += '\n'
  }
  console.log(string)
}
pattern2(5)
