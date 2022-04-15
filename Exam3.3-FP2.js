import { Color, rgb2LongHex } from './exam3.3/colorFP'

const work = () => {
  const maybeColor = Color(22, 22, 22)
  if (maybeColor === undefined) return

  const redish = { r: 255, g: maybeColor.g, b: maybeColor.b }
  return rgb2LongHex(redish)
}

const hex = work()

if (hex === undefined) {
  console.log('Invalid color')
} else {
  console.log(`Hex is ${hex}`)
}
