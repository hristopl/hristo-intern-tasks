import { getFiles, getFilesLength } from '../lib/helpers'
import { readdir, readFile } from 'fs/promises'
import { describe, expect, test } from '@jest/globals'

jest.mock('fs/promises', () => ({
  readdir: jest.fn(),
  readFile: jest.fn()
}))

describe('getFiles', () => {
  test('should return string[]', async () => {
    readdir.mockResolvedValue(['123.js', '222.js', '333.txt', '444.ts'])

    const args = { exclude: ['node_modules'], fileTypes: ['.js'] }
    const result = await getFiles(args)

    expect(result).toEqual(['123.js', '222.js'])
  })
  test('should throw error if path is not correct', async () => {
    const message = 'Path is not correct.'
    readdir.mockRejectedValue(new Error(message))
    const args = { exclude: ['node_modules'], fileTypes: ['.js'] }

    //  return getFiles()
    //   .then(() => { throw new Error('Should not get here!') })
    //   .catch(err => expect(err.message).toBe(message))

    try {
      await getFiles(args)
      throw new Error('Should not get here!')
    } catch (err) {
      expect(err.message).toBe(message)
    }
  })
  test('should return empty array if fileTypes is different ', async () => {
    readdir.mockResolvedValue(['123.txt', '222.txt', '333.txt'])

    const args = { exclude: ['node_modules'], fileTypes: ['.js'] }
    const result = await getFiles(args)

    expect(result).toEqual([])
  })
})

describe('getFilesLength', () => {
  test('should return file length', () => {
    const files = readFile.mockResolvedValue(['123.js', '222.ts', '333.js'])

    const result = getFilesLength(files)

    expect(result).toEqual()
  })
})
