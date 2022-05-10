const findByWeight = require('../Exam2.8-partOne-FP')
const { test, describe, expect } = require('@jest/globals')

const arr = [
  6,
  'Test',
  'value',
  1,
  undefined,
  null,
  { name: 'john.doe', role: 'admim' },
  true
]

describe('findByWeight', () => {
  test('should return true if element in the array has same weight', () => {
    const weight = 26

    const result = findByWeight(arr, weight)

    expect(result).toBe(true)
  })
  test('should return false if array is empty', () => {
    const arr = []
    const weight = 26

    const result = findByWeight(arr, weight)

    expect(result).toBe(false)
  })
})
