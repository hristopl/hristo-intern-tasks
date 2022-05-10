const { test, expect, describe } = require('@jest/globals')
const countArray = require('../Exam1.4')

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
  test('should count array', () => {
    const array = [[1, 2, 3]]

    const result = countArray(array)

    const { arraysCount, ...rest } = result

    expect(arraysCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)
  })
  test('should count undefined', () => {
    const array = [undefined]

    const result = countArray(array)

    const { undefinedCount, ...rest } = result

    expect(undefinedCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)
  })
  test('should count date', () => {
    const arr = [new Date('2022-03-11')]

    const result = countArray(arr)

    const { datesCount, ...rest } = result

    expect(datesCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)
  })
  test('should count boolean', () => {
    const arr = [false]

    const result = countArray(arr)

    const { booleansCount, ...rest } = result

    expect(booleansCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)
  })
  test('should count object', () => {
    const arr = [{ count: 5 }]

    const result = countArray(arr)

    const { objectsCount, ...rest } = result

    expect(objectsCount).toBe(1)
    expect(areAllZeroes(rest)).toBe(true)
  })
})
