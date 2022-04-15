import { fromString, MaybeColor, rgb2LongHex, toString } from './exam3.3/color'

const maybeColor = fromString('22,22')

const hex = maybeColor
  .map(({ r, ...rest }) => ({ r: 255, ...rest }))
  .map(rgb2LongHex)

console.log(hex.length)
hex.forEach(h => console.log(h))
