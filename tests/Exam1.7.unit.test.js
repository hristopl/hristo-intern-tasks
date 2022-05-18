import toIsoString from '../Exam1.7'
import { test, expect, describe } from '@jest/globals'

describe('toIsoString', () => {
  test('should return date in ISO format', () => {
    const date = new Date('2022-12-02')

    const result = toIsoString(date)
    const expectedResult = '2022-02-11T00:00:00.00Z'

    expect(result).toBe(expectedResult)
  })
  test('should return now as a date', () => {
    const result = toIsoString()

    expect(result).toBeDefined()
  })
})
