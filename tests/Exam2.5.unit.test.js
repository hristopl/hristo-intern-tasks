import flatten from '../Exam2.5'
import { test, describe, expect } from '@jest/globals'

const array = [
  {
    person: {
      name: 'John',
      role: 'Admin'
    },
    permissions: ['read', 'write'],
    age: 42
  },
  'sunny day',
  5
]

describe('flatten', () => {
  test('should flatten the array', () => {
    const result = flatten(array)
    const expectedResult = [
      {
        person_name: 'John',
        person_role: 'Admin',
        permissions_0: 'read',
        permissions_1: 'write',
        age: 42
      },
      'sunny day',
      5
    ]

    expect(result).toEqual(expectedResult)
  })
})
