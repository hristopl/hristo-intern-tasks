const weightCounter = (item) => {
  let counter = 0
  if (typeof item === 'object' && item !== null || Array.isArray(item)) {
    counter += 10
    for (const val in item) {
      counter += weightCounter(item[val])
    }
  }
  if (typeof item === 'string') {
    counter += 8
  } else if (typeof item === 'number') {
    counter += 4
  } else if (item === null) {
    counter += 2
  } else if (typeof item === 'function') {
    counter += 10
  } else if (item === undefined) {
    counter += 2
  } else if (typeof item === 'boolean') {
    counter += 4
  }

  return counter
}

const findByWeight = (arr, weight) =>
  !!arr.find((el) => weightCounter(el) === weight)

const arr = [
  6,
  'Test',
  'value',
  1,
  undefined,
  null,
  { name: 'john.doe', role: 'admim' }
]
const weight = 26

const result = findByWeight(arr, weight)

console.log(result)
