const bubbleSort = require('../Exam1.2')
const { test, expect, describe } = require('@jest/globals')

const arr = [7, 5, 4, 2, 10, 45, 34, 3]

describe('bubbleSort', () => {
  test('should sort the array', () => {
    const expectedResult = [2, 3, 4, 5, 7, 10, 34, 45]
    const result = bubbleSort(arr)

    expect(result).toEqual(expectedResult)
  })
  test('should return [] if the array is empty', () => {
    const arr = []
    const expectedResult = []
    const result = bubbleSort(arr)

    expect(result).toEqual(expectedResult)
  })
})
