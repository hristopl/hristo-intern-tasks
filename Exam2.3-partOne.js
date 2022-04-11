const appender = (arr1, arr2) => {
    
    const firstFoundArrEl = arr1.find(element => {
        return Array.isArray(element);
    });

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i]) {
        firstFoundArrEl.push(arr2[i]);
        }
    }
    return arr1;
};

const arr1 = [1, undefined, [1, 2, 3], "test", {name: "John Doe"}];
const arr2 = [null, () => {console.log("Hello,  world!")}, ["one", "five"], undefined, 6];
console.log(appender(arr1, arr2));



