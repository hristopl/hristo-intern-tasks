const timeDiff = require('../Exam1.8')
const { test, expect, describe } = require('@jest/globals')

describe('timeDiff', () => {
  test('should return time difference between two dates', () => {
    const date1 = new Date('2022-02-01 10:00:00')
    const date2 = new Date('2022-01-20 10:00:00')

    const result = timeDiff(date1, date2)
    const expectedResult = '2 weeks ago'

    expect(result).toBe(expectedResult)
  })
})
