const calculate = (arr, number) => {
  return arr.reduce(
    (result, curr) => (curr % number === 0 ? [...result, curr] : result),
    []
  );
};
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;
console.log(calculate(arr1, divisible));
