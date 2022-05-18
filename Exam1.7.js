const padZero = num => num.toString().padStart(2, '0')

const toIsoString = (date = new Date()) => {
  const dateYear = date.getUTCFullYear()
  const dateDay = padZero(date.getUTCDate())
  const dateMonth = padZero(date.getUTCMonth())
  const dateHours = padZero(date.getUTCHours())
  const dateMin = padZero(date.getUTCMinutes())
  const dateSeconds = padZero(date.getUTCSeconds())
  const dateMillisec = padZero(date.getUTCMilliseconds())

  return `${dateYear}-${dateDay}-${dateMonth}T${dateHours}:${dateMin}:${dateSeconds}.${dateMillisec}Z`
}

const date = new Date('2022-12-02')
const strDate = toIsoString(date)
console.log(strDate)

export default toIsoString
