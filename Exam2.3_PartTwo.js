const isObject = (obj) => {
  if (typeof obj === "object" && obj !== null) {
    return true;
  } else {
    return false;
  }
};

const appender = (arr1, arr2) => {
  const array = [];
  const object = [];

  for (let i = 0; i < arr2.length; i++) {
    if (Array.isArray(arr2[i])) {
      array.push(arr2[i]);
    } else if (isObject(arr2[i])) {
      object.push(arr2[i]);
  }
}
  for(let j = 0; j< arr1.length;j++){
    if(j % 2 === 0){
   arr1[j] =  arr1[j].concat(array);
    } else {
    arr1[j] = arr1[j].concat(object);
    }
  }
  return arr1;
};

const arr1 = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];

console.log(appender(arr1, arr2))
