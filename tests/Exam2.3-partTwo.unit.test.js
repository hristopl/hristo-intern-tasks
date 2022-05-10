const appenderFP = require('../Exam2.3-partTwo-FP')
const { test, expect, describe } = require('@jest/globals')

const arr1 = [
  [1, 2, 3, 4],
  ['one', 'two'],
  [5, 6]
]

const arr2 = [
  null,
  () => {
    console.log('Hello,  world!')
  },
  ['one', 'five'],
  { role: 'admin' },
  { name: 'John' },
  [1000, 1001]
]

describe('appenderFP', () => {
  test('should append elements that are even or uneven from arr2 to arr1', () => {
    const result = appenderFP(arr1, arr2)
    const expectedResult = [
      [
        1, 2,
        3, 4,
        'one', 'five',
        1000, 1001
      ],
      ['one', 'two', { role: 'admin' }, { name: 'John' }],
      [5, 6, 'one', 'five', 1000, 1001]
    ]

    expect(result).toEqual(expectedResult)
  })
  test('should return [] if one of the array is empty', () => {
    const arr1 = []
    const arr2 = [
      null,
      () => {
        console.log('Hello,  world!')
      },
      ['one', 'five'],
      { role: 'admin' },
      { name: 'John' },
      [1000, 1001]
    ]

    const result = appenderFP(arr1, arr2)

    expect(result).toEqual([])
  })
})
