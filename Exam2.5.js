const isObjectOrArray = x => typeof x === 'object' && x !== null

const recursion = (objOrArr, fields = []) =>
  Object.entries(objOrArr).map(([key, val]) =>
    isObjectOrArray(val)
      ? recursion(val, [...fields, key])
      : { [[...fields, key].join('_')]: val }
  )
    .reduce((obj, fieldObj) => ({ ...obj, ...fieldObj }), {})

const flatten = arr => arr.map(x => isObjectOrArray(x) ? recursion(x) : x)

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

console.log(flatten(array))
