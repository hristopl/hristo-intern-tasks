const array = [6, 4, 3, 1, 9, 44, 33, 2];
console.log( "Array: " + "[" + array + "]");

let counter = 0;

array.forEach(num => {
    if(num % 2 !== 0){
        counter++;
    }
})

console.log("Count of odd numbers in the array: " + counter);