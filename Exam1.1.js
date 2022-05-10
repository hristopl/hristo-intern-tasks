const array = [6, 4, 3, 1, 9, 44, 33, 2]
// const array = []

const counter = arr => arr.filter(n => n % 2 !== 0).length

console.log(counter(array))

module.exports = counter
