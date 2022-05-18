import format from '../Exam1.9'
import { test, expect, describe } from '@jest/globals'

describe.skip('format', () => {
  test('should format date to string', () => {
    const date = new Date('2022-02-01 10:00:00')
    const string = 'YYYY-MMM-DD HH:mm:ss Is my proof of concept!'

    const result = format(date, string)

    expect(result).toEqual('2022-Feb-01 10:00:00 Is my proof of concept!')
  })
  test('should return quarter of Month < 5', () => {
    const date = new Date('2022-03-01 10:00:00')
    const string = 'YYYY-Q-DD HH:mm:ss Is my proof of concept!'

    const result = format(date, string)

    expect(result).toEqual('2022-2-01 10:00:00 Is my proof of concept!')
  })
  // test('should return quarter of Month < 8', () => {
  //   const date = new Date('2022-05-01 10:00:00')
  //   const string = 'YYYY-Q-DD HH:mm:ss Is my proof of concept!'

  //   const result = format(date, string)

  //   expect(result).toEqual('2022-3-01 10:00:0s Is 0y proof of concept!')
  // })
})
