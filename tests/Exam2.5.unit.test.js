const flatten = require('../Exam2.5')
const { test, describe, expect } = require('@jest/globals')

const array = [
  {
    person: {
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin'
    },
    permissions: ['read', 'write', 'special'],
    age: 42,
    competencies: [
      { skill: 'JavaScript', level: 'junior' },
      { skill: 'css', level: 'junior' }
    ]
  },
  'sunny day',
  5,
  {
    person: {
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin',
      address: {
        city: 'Plovdiv',
        street: {
          name: 'Main',
          number: 3
        }
      }
    }
  }
]

describe('flatten', () => {
  test('should flatten the array', () => {
    const result = flatten(array)
    const expectedResult = [
      {
        person_firstName: 'John',
        person_lastName: 'Doe',
        person_role: 'Admin',
        permissions_0: 'read',
        permissions_1: 'write',
        permissions_2: 'special',
        age: 42,
        competencies_0_skill: 'JavaScript',
        competencies_0_level: 'junior',
        competencies_1_skill: 'css',
        competencies_1_level: 'junior'
      },
      'sunny day',
      5,
      {
        person_firstName: 'John',
        person_lastName: 'Doe',
        person_role: 'Admin',
        person_address_city: 'Plovdiv',
        person_address_street_name: 'Main',
        person_address_street_number: 3
      }
    ]

    expect(result).toEqual(expectedResult)
  })
})
