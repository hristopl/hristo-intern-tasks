const appenderFP = require('../Exam2.3-partOne')
const { test, describe, expect } = require('@jest/globals')

describe.skip('appenderFP', () => {
  test('should append truthy elements from arr1 to arr2', () => {
    const arr1 = [1, undefined, [1, 2, 3], 'test', [1, 2, 3], { name: 'John Doe' }]
    const arr2 = [null, () => { console.log('Hello,  world!') }, ['one', 'five'], undefined, 6]

    const result = appenderFP(arr1, arr2)

    expect(result).toEqual()
  })
})
