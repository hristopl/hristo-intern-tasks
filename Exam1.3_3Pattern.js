//Pattern 3

const pattern3 = len => {
  let string = "";

  for(let row = 1; row <= len; row++){
    for(let col = 1; col <= row; col++){
      string += col + " ";
    }
    for(let k = row - 1; k >= 1; k--)
    string+= k + " ";
    string += "\n";
  }
console.log(string);
}
pattern3(5)
