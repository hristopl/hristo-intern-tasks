import findLongestWord from '../Exam1.6-partTwo'
import { test, expect, describe } from '@jest/globals'

describe('findLongestWord', () => {
  test('should find longest word with given char', () => {
    const str = 'What we do in life echoes to eternity!'
    const char = 'W'

    const result = findLongestWord(str, char)
    const expectedResult = 'What'

    expect(result).toBe(expectedResult)
  })
  test('should return undefined if string is empty', () => {
    const str = ''
    const char = 'W'

    const result = findLongestWord(str, char)

    expect(result).toBeUndefined()
  })
})
