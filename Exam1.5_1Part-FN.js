
const typeFn = {
  nullType: val => val === null,
  objectsType: val => typeof val === 'object' && val !== null,
  stringsType: val => typeof val === 'string',
  numericsType: val => typeof val === 'number',
  arraysType: val => Array.isArray(val),
  undefinedType: val => val === undefined,
  datesType: val => val instanceof Date && !isNaN(val.valueOf()),
  booleansType: val => typeof val === "boolean",
  functions: val => typeof val === "function"
}

const getTypeKey = val => {
  const [onlyOne] = Object.entries(typeFn)
    .filter(e => {
      const [, fn] = e
      return fn(val)
  })
  const [key] = onlyOne || []

  return key
}

const weights = {
  nullType: 2,
  objectsType: 10, 
  stringsType: 8,
  numericsType: 4,
  arraysType: 10,
  undefinedType: 2,
  datesType: 5,
  booleansType: 4,
  functions: 10
}

const debug = v => {
  console.log('Debug', v)
  return v
}

const weightCounter = obj => 
  Object.values(obj)
    .map(v => {
      const type = getTypeKey(v)
      const weight = weights[type]

      return type === 'objectsType' ? weight + weightCounter(v) : weight
    })
    .reduce((sum, val) => sum + val)

const obj = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
}

const counter2 = weightCounter(obj);

console.log(counter2);
