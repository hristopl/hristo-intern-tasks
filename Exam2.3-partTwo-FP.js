const arr2 = [
  null,
  () => { console.log('Hello,  world!') },
  ['one', 'five'],
  { role: 'admin' },
  { name: 'John' },
  [1000, 1001]
]

const arr1 = [
  [1, 2, 3, 4],
  ['one', 'two'],
  [5, 6]
]
const isObject = obj => typeof obj === 'object' && obj !== null && !Array.isArray(obj)

const appenderFP = (arr1, arr2) => {
  const arrays = arr2.filter(Array.isArray).flat()
  const objects = arr2.filter(isObject)

  return arr1.map(
    (el, index) => index % 2 === 0
      ? [...el, ...arrays]
      : [...el, ...objects])
}

console.log(appenderFP(arr1, arr2))

module.exports = appenderFP
