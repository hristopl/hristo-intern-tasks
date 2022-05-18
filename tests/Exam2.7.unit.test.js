import randomizeFP from '../Exam2.7'
import { test, describe, expect, beforeEach, jest } from '@jest/globals'

const sort = jest.spyOn(Array.prototype, 'sort')
console.log(sort)

describe('randomizeFP', () => {
  beforeEach(() => {
    sort.mockReset()
  })
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  test('should return empty array if sort is exact reverse', () => {
    sort.mockReturnValueOnce([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

    const result = randomizeFP(array)

    expect(result).toEqual([])
  })
  test('should return empty array if empty array is given', () => {
    const result = randomizeFP([])

    expect(result).toEqual([])
  })
  test('should return longest sequence', () => {
    sort.mockReturnValueOnce([6, 2, 1, 4, 3,
      5, 8, 7, 9, 10])

    const result = randomizeFP(array)

    expect(result).toEqual([3, 5, 8])
  })
})
