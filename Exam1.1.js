const array = [6, 4, 3, 1, 9, 44, 33, 2];
console.log( "Array: " + "[" + array + "]");

const counter = array.filter(n => n % 2 !== 0).length

console.log("Count of odd numbers in the array: " + counter);
