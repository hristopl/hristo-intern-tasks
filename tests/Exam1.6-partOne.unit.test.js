import findLongestWord from '../Exam1.6-partOne'
import { test, expect, describe } from '@jest/globals'

describe('findLongestWord', () => {
  test('should find longest word', () => {
    const str = 'What we do in life echoes to eternity!'

    const result = findLongestWord(str)

    expect(result).toBe('eternity')
  })
  test('should return undefined if string is empty', () => {
    const result = findLongestWord('')

    expect(result).toBeUndefined()
  })
  test('should return undefined if string is undefined', () => {
    const result = findLongestWord()

    expect(result).toBeUndefined()
  })
  test('should return undefined if string is space', () => {
    const result = findLongestWord(' ')

    expect(result).toBeUndefined()
  })
})
