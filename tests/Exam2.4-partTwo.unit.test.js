import calculate from '../Exam2.4-partTwo'
import { test, describe, expect } from '@jest/globals'

describe('calculate', () => {
  test('should return new array with numbers divisible by given numbers', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7]
    const divisible = 2

    const result = calculate(arr1, divisible)

    expect(result).toEqual([2, 4, 6])
  })
})
