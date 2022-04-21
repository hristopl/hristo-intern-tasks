const isValid = shade =>
  [
    x => x !== undefined,
    x => x !== null,
    x => typeof x === 'number',
    x => x >= 0 && x <= 255
  ]
    .every(fn => fn(shade))

const isHex = hex =>
  [
    x => x[0] === '#',
    x => typeof x === 'string',
    x => x.length === 7
  ]
    .every(fn => fn(hex))

const hexToRgb = hex => {
  const shortHandRegEx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const longHandRegEx = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

  const regex = hex.length === 4 ? shortHandRegEx : longHandRegEx

  const result = regex.exec(hex)

  const [, rHex, gHex, bHex] = result

  const r = parseInt(rHex, 16)
  const g = parseInt(gHex, 16)
  const b = parseInt(bHex, 16)

  return result
    ? { r, g, b }
    : { r: 0, g: 0, b: 0 }
}

const Color = (r, g, b) => {
  if (isHex(r)) return hexToRgb(r)

  const black = { r: 0, g: 0, b: 0 }

  if (r === undefined && g === undefined && b === undefined) return black

  return isValid(r) && isValid(g) && isValid(b) ? { r, g, b } : black
}

const toShort = byte => {
  const lastDec = byte % 16
  const firstDec = Math.floor(byte / 16)

  const first = lastDec > 8 && lastDec !== 15
    ? firstDec + 1
    : firstDec

  return first.toString(16)
}

const rgb2ShortHex = ({ r, g, b }) => `#${toShort(r)}${toShort(g)}${toShort(b)}`

const toLong = digit => digit.toString(16).padStart(2, '0')

const rgb2LongHex = ({ r, g, b }) => `#${toLong(r)}${toLong(g)}${toLong(b)}`

const toString = ({ r, g, b }) => `(${r}, ${g}, ${b})`

export {
  hexToRgb,
  rgb2ShortHex,
  rgb2LongHex,
  toString,
  Color
}
