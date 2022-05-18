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
  test('should return empty array if files are not included in fileTypes', async () => {
    readdir.mockResolvedValue(['123.txt', '222.txt', '333.txt'])

    const args = { exclude: ['node_modules'], fileTypes: ['.js'] }
    const result = await getFiles(args)

    expect(result).toEqual([])
  })
  test('should return empty array if files are in exclude list', async () => {
    readdir.mockResolvedValue(['package.json', 'node_modules'])

    const args = { exclude: ['package.json', 'node_modules'], fileTypes: ['js'] }
    const result = await getFiles(args)

    expect(result).toEqual([])
  })
})

describe('getFilesLength', () => {
  test('should return file length', async () => {
    const files = ['111.js', '222.js']
    const texts = {
      '111.js': 'heahsdhfaodfad\n, jeofafoadjfo\n aasdfjdsofjsog\n',
      '222.js': 'fdijfosdjfs \n fsdpfspfsdp \n fhsiasunf\n fdsfhsdi\n'
    }

    readFile.mockImplementation(name => Promise.resolve(
      Buffer.from(texts[name], 'utf-8'))
    )

    const result = await getFilesLength(files)

    expect(result).toEqual({ '111.js': 4, '222.js': 5 })
  })
  test('should return empty object if no files are given', async () => {
    const files = []

    const result = await getFilesLength(files)

    expect(result).toEqual({})
  })
  test('should return 1 if file is empty', async () => {
    const file = ['empty.js']
    const text = {
      'empty.js': ' '
    }

    readFile.mockImplementation(name => Promise.resolve(
      Buffer.from(text[name], 'utf-8'))
    )

    const result = await getFilesLength(file)

    expect(result).toEqual({ 'empty.js': 1 })
  })
})
