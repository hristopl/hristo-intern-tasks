const weightCounter = (element) => {
  if (typeof element === 'string') return 8
  if (typeof element === 'number') return 4
  if (typeof element === 'boolean') return 4
  if (element === null) return 2
  if (typeof element === 'function' || Array.isArray(element)) return 10
  if (element === undefined) return 2
  if (typeof element === 'object' && element !== null) {
    return (
      10 +
      Object.values(element).reduce((acc, cur) => weightCounter(cur) + acc, 0)
    )
  }
}

const findByWeight = (arr, weight) =>
  !!arr.find((el) => weightCounter(el) === weight)

const array = [
  6,
  'Test',
  'value',
  1,
  undefined,
  null,
  { name: 'john.doe', role: 'admim' }
]

const weight = 26

const result = findByWeight(array, weight)
console.log(result)

module.exports = findByWeight
