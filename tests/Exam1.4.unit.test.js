const { test, expect } = require('@jest/globals')
const countArray = require('../Exam1.4')

const arr = [
  6,
  'Test',
  'value',
  1,
  undefined,
  null,
  () => {
    console.log('Hello,  world!')
  },
  { count: 5 }
]

const areAllZeroes = arr => Object.values(arr).every(x => x === 0)

describe('countArray', () => {
  test('should all be zero of empty array', () => {
    const result = countArray([])

    expect(areAllZeroes(result)).toBe(true)
  })
  test('should return undefined if no array given', () => {
    const result = countArray()

    expect(result).toBeUndefined()
  })
  // test('should count array',()=>{
  // })
  test('should count null', () => {
    const array1 = [null]
    const array2 = [null, null]

    const result1 = countArray(array1)
    const result2 = countArray(array2)

    const { nullCount, ...rest } = result1
    const { nullCount: nullCount2, ...rest2 } = result2

    expect(nullCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)

    expect(nullCount2).toBe(2)
    expect(areAllZeroes(rest2)).toBe(true)
  })
  test('should return proper obj', () => {
    const expectedResult = {
      nullCount: 1,
      objectsCount: 2,
      stringsCount: 2,
      numericsCount: 2,
      arraysCount: 0,
      undefinedCount: 0,
      datesCount: 0,
      booleansCount: 0,
      functions: 1
    }

    const result = countArray(arr)

    expect(result).toEqual(expectedResult)
  })
})
