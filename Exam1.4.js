const array = [6, "Test", "value", 1, undefined, null, () => { console.log("Hello,  world!") }, { count: 5 }];

function countArray(array) {
  if (array === undefined) return undefined

  const counter = {
    nullCount: 0,
    objectsCount: 0,
    stringsCount: 0,
    numericsCount: 0,
    arraysCount: 0,
    undefinedCount: 0,
    datesCount: 0,
    booleansCount: 0,
    functions: 0
  }

  for (const val of array) {
    if (val === null) {
      counter.nullCount++;
      continue;
    }
    if (typeof val === 'object' && !Array.isArray(val) || val == undefined) {
      counter.objectsCount++;
      continue;
    }
    if (typeof val === 'string') {
      counter.stringsCount++;
      continue;
    }
    if (typeof val === 'number') {
      counter.numericsCount++;
      continue;
    }
    if (Array.isArray(val)) {
      counter.arraysCount++;
      continue;
    }
    if (val === undefined) {
      counter.undefinedCount++;
      continue;
    }
    if (val instanceof Date && !isNaN(val.valueOf())) {
      counter.datesCount++;
      continue;
    }
    if (typeof val === 'boolean') {
      counter.booleansCount++;
      continue;
    }
    if (typeof val === 'function') {
      counter.functions++;
      continue;
    }
  }
  return counter
}
const result = countArray(array);
console.log(result);

module.exports = countArray












