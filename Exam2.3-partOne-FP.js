const appenderFP = (arr1, arr2) => arr1.map(
  el => Array.isArray(el)
    ? [...el, ...arr2.filter(Boolean)]
    : el
)

const arr1 = [1, undefined, [1, 2, 3], "test", [1, 2, 3], { name: "John Doe" }];
const arr2 = [null, () => { console.log("Hello,  world!") }, ["one", "five"], undefined, 6];

console.log(appenderFP(arr1, arr2));

