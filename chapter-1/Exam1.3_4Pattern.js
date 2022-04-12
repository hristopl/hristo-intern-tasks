//Pattern 4

const pattern4 = (n) => {
  let string = "";

  for (let row = 1; row <= n; row++) {
    for (let space = 0; space < n - row; space++) {
      string += " ";
    }
    for (let col = 1; col <= row; col++) {
      string += " " + col;
    }
    string += "\n";
  }

  for (let row = 1; row <= n - 1; row++) {
    for (let space = n; space < n + row; space++) {
      string += " ";
    }
    for (let col = 1; col <= n - row; col++) {
      string += " " + col;
    }
    string += "\n";
  }
  console.log(string);
};

pattern4(5);
