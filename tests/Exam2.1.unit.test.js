import sortingArray from '../Exam2.1'
import { test, expect, describe } from '@jest/globals'

describe('sortingArray', () => {
  const func = (left, right) => {
    return left < right
  }

  const funcDescending = (left, right) => {
    return right < left
  }
  test('should sort array', () => {
    const arr = [6, 4, 3, 1, 9, 44, 33, 2]

    const result = sortingArray(arr, func)

    expect(result).toEqual([1, 2, 3, 4, 6, 9, 33, 44])
  })

  test('should return [] if array is empty', () => {
    const arr = []

    const result = sortingArray(arr, func)

    expect(result).toEqual([])
  })
  test('should return array in descending order', () => {
    const arr = [6, 4, 3, 1, 9, 44, 33, 2]

    const result = sortingArray(arr, funcDescending)

    expect(result).toEqual([44, 33, 9, 6, 4, 3, 2, 1])
  })
})
