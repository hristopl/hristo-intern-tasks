import calculate from '../Exam2.4-partOne'
import { test, describe, expect } from '@jest/globals'

describe('calculate', () => {
  test('should return sum of elements in array which are higher than given num', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7]
    const higherThan = 4

    const result = (calculate(arr1, higherThan))

    expect(result).toBe(18)
  })
})
