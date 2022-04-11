const removeInner = (arr, percent) => {
  const arrLength = arr.length;

  let calculatePercentage = (percent / 100) * arrLength;
  const calculateMiddle = Math.floor(calculatePercentage / 2);

  return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const percentage = 50;

console.log(removeInner(arr, percentage));
