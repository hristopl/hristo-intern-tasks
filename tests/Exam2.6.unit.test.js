const removeInner = require('../Exam2.6')
const { test, describe, expect } = require('@jest/globals')

describe('removeInner', () => {
  test('should remove inner pencentage', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const percent = 50

    const result = removeInner(arr, percent)

    expect(result).toEqual([1, 2, 9, 10])
  })
})
