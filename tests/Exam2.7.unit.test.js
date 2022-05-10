const randomize = require('../Exam2.7')
const { test, describe, expect } = require('@jest/globals')

const sort = jest.spyOn(Array.prototype, 'sort')
console.log(sort)

describe('randomize', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  test('should return empty array if sort it exact reverse', () => {
    sort.mockReturnValueOnce([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

    const result = randomize(array)

    expect(result).toEqual([])
  })
  test('should return empty array if empty array is given', () => {
    const result = randomize([])

    expect(result).toEqual([])
  })
  test('should return longest sequence', () => {
    sort.mockReturnValueOnce([6, 7, 8, 9, 5, 2, 1, 3, 4, 10])

    const result = randomize(array)

    expect(result).toEqual([6, 7, 8, 9])
  })
})
