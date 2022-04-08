const calculate = (arr, number) => {
  return arr
    .filter((el) => el > number)
    .reduce((result, curr) => result + curr, 0);
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;
console.log(calculate(arr1, higherThan));
