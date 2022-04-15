const isValid = shade =>
  [
    x => x !== undefined,
    x => x !== null,
    x => typeof x === 'number',
    x => x >= 0 && x <= 255
  ]
    .every(fn => fn(shade))

const MaybeColor = (r, g, b) => {
  if (r === undefined && g === undefined && b === undefined) return [{ r: 0, g: 0, b: 0 }]

  return isValid(r) && isValid(g) && isValid(b) ? [{ r, g, b }] : []
}

// We save it in the database in the format "r,g,b" (255,255,255)
const fromString = strColor => {
  const [rStr, gStr, bStr] = strColor.split(',')

  const r = Number(rStr)
  const g = Number(gStr)
  const b = Number(bStr)
  
  return MaybeColor(r, g, b)
}

// {error, value}
// return error === null ? { error, value: color } : { error, value: null }
// }

// const rgb2ShortHex =
const rgb2LongHex = ({ r, g, b }) => `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

const toString = ({ r, g, b }) => `(${r}, ${g}, ${b})`

export {
  rgb2LongHex,
  toString,
  fromString,
  MaybeColor
}
