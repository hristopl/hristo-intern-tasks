import { readingDirectory, getFilesLenth } from '../lib/helpers'
import { readdir } from 'fs/promises'
import { describe, expect, test } from '@jest/globals'

jest.mock('fs/promises', () => ({
  readdir: jest.fn()
}))

describe('readingDirectory', () => {
  test('should return string[]', async () => {
    readdir.mockResolvedValue(['123.js', '222.js', '333.txt', '444.ts'])

    const args = { exclude: ['node_modules'], fileTypes: ['.js'] }
    const result = await readingDirectory(args)

    expect(result).toEqual(['123.js', '222.js'])
  })

  describe('getFilesLenth', () => {
    test('should ...', () => {
      const files = ['111.js']
    })
  })
})
