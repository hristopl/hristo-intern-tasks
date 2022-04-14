const weightCounter = (item) => {
  let counter = 0;
  if ((typeof item === "object" && item !== null) || Array.isArray(item)) {
    counter += 10;
    for (const val in item) {
      counter += weightCounter(item[val]);
    }
  }
  if (typeof item === "string") {
    counter += 8;
  } else if (typeof item === "number") {
    counter += 4;
  } else if (item === null) {
    counter += 2;
  } else if (typeof item === "function") {
    counter += 10;
  } else if (item === undefined) {
    counter += 2;
  } else if (typeof item === "boolean") {
    counter += 4;
  }

  return counter;
};

const findByWeight = (arr, weight) => {
return arr.every((el) => weightCounter(el > weight));
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
