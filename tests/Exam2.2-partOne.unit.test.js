const containsObj = require('../Exam2.2-partOne')
const { test, expect, describe } = require('@jest/globals')

describe('containsObj', () => {
  test('should return true if array contains obj', () => {
    const person = { name: 'John Doe' }
    const arr = [6, 'Test', 'value', person, 1, undefined, null, () => { console.log('Hello,  world!') }, { count: 5 }, { name: 'John Doe' }]

    const result = containsObj(arr, person)

    expect(result).toBe(true)
  })
  test('should return false if obj is not in array', () => {
    const person = { name: 'John Doe' }
    const arr = [6, 'value', 'Test', 1, undefined, null, { count: 5 }]

    const result = containsObj(arr, person)

    expect(result).toBe(false)
  })
})
