const isValid = shade =>
  [
    x => x !== undefined,
    x => x !== null,
    x => typeof x === 'number',
    x => x >= 0 && x <= 255
  ]
    .every(fn => fn(shade))

const fromHex = hex => hex

const isHex = hex =>
  [
    x => x[0] === '#',
    x => typeof x === 'string',
    x => x.length === 7
  ]
    .every(fn => fn(hex))

const Color = (r, g, b) => {
  if (isHex(r)) return fromHex(r)

  if (r === undefined && g === undefined && b === undefined) return { r: 0, g: 0, b: 0 }

  return isValid(r) && isValid(g) && isValid(b) ? { r, g, b } : undefined
}

// const rgb2ShortHex =
const rgb2LongHex = ({ r, g, b }) => `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`

const toString = ({ r, g, b }) => `(${r}, ${g}, ${b})`

export {
  rgb2LongHex,
  toString,
  Color
}
