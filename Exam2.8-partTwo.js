const weightCounter = (item) => {
  let counter = 0;
  if (typeof item === "object" && item) {
    counter += 10;
    for (const key in item) {
      counter += weightCounter(item[key]);
    }
  } else if (Array.isArray(item)) {
    counter += 10;
    for (let j = 0; j < item.length; j++) {
      counter += weightCounter(item[j]);
    }
  }
  if (typeof item === "string") {
    counter += 8;
  } else if (typeof item === "number") {
    counter += 4;
  } else if (!item && typeof item === "object") {
    counter += 2;
  } else if (typeof item === "function") {
    counter += 10;
  } else if (typeof item === undefined) {
    counter += 2;
  } else if (typeof item === "boolean") {
    counter += 4;
  }

  return counter;
};

const findByWeight = (arr, weight) => {
  let isWeightBigger = false;
  let result = arr.reduce((prevVal,curVal) => prevVal + weightCounter(curVal) ,0)
  if(result > weight) {
    return  !isWeightBigger;
  }
  return isWeightBigger;
};

const array = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admim" },
];
const weight = 2;
const result = findByWeight(array, weight);
console.log(result);
