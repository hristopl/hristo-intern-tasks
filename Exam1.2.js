const array = [6, 4, 3, 1, 9, 44, 33, 2]
console.log('Array before sort: ' + '[' + array + '] ')

const bubbleSort = array => {
  const len = array.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
bubbleSort(array)
console.log('Array after sort: ' + '[' + array + ']')
