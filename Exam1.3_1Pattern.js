// Pattern 1

const pattern1 = (n) => {
  let string = ''

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      string += col + ' '
    }
    string += '\n'
  }
  console.log(string)
}
pattern1(5)

// Pattern 1 - by mentor

// const pattern1 = len => {
//   let arr = []
//     for (let i = 1; i <= len; i++){
//       arr.push(i)
//       console.log(arr.join(' '))
//    }
//   }

//  pattern1(5);
