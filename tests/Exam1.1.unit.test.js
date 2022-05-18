import counter from '../Exam1.1.js'
import { test, expect, describe } from '@jest/globals'

const arr = [6, 23, 51, 63, 22, 7, 3, 2, 14]
console.log(counter(arr))

describe('counter', () => {
  test('should count odd numbers', () => {
    const result = counter(arr)

    expect(result).toBe(5)
  })
  test('should return zero if array is empty', () => {
    const arr = []
    const result = counter(arr)

    expect(result).toBe(0)
  })
})
