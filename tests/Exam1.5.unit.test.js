import weightCounter from '../Exam1.5-partOne'
import { test, expect, describe } from '@jest/globals'

const obj = {
  cards: 6,
  label: 'Test',
  description: 'value',
  type: 1,
  role: undefined,
  person: { name: 'John Doe' },
  skills: null,
  report: () => {
    console.log('Hello,  world!')
  },
  experience: { count: 5 }
}

describe('weightCounter', () => {
  test('should return correct result', () => {
    const expectedResult = 58
    const result = weightCounter(obj)

    expect(result).toEqual(expectedResult)
  })
  test('should return zero if object is empty', () => {
    const obj = {}
    const expectedResult = 0
    const result = weightCounter(obj)

    expect(result).toEqual(expectedResult)
  })
  test('should calculate string', () => {
    const obj = {
      name: 'Hristo'
    }
    const result = weightCounter(obj)

    expect(result).toEqual(8)
  })
  test('should calculate number', () => {
    const obj = {
      age: 13
    }
    const result = weightCounter(obj)

    expect(result).toEqual(4)
  })
  test('should calculate null', () => {
    const obj = {
      skills: null
    }
    const result = weightCounter(obj)

    expect(result).toEqual(2)
  })
  test('should calculate object,arrays and functions', () => {
    const obj = {
      skills: { count: 4 },
      languages: ['Spanish', 'Deutch'],
      report: () => {
        console.log('Hello, World!')
      }
    }
    const result = weightCounter(obj)

    expect(result).toEqual(30)
  })
  test('should calculate undefined', () => {
    const obj = {
      role: undefined
    }

    const result = weightCounter(obj)

    expect(result).toEqual(2)
  })
  test('should calculate boolean', () => {
    const obj = {
      male: true
    }

    const result = weightCounter(obj)

    expect(result).toEqual(4)
  })
})
