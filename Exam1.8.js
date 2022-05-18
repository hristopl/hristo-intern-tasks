const roundFn = (num) => Math.round(num)

const round = (convertFn) => (num) => roundFn(convertFn(num))

const convToYear = (sec) => sec / 60 / 60 / 24 / 7 / 52
const convToMonth = (sec) => sec / 60 / 60 / 24 / 7 / 4
const convToWeek = (sec) => sec / 60 / 60 / 24 / 7
const convToDay = (sec) => sec / 60 / 60 / 24
const convToHour = (sec) => sec / 60 / 60
const convToMinutes = (sec) => sec / 60

const unitRound = {
  years: round(convToYear),
  months: round(convToMonth),
  weeks: round(convToWeek),
  days: round(convToDay),
  hours: round(convToHour),
  minutes: round(convToMinutes)
}

const timeDiff = (date1, date2) => {
  const secDiff = (date1 - date2) / 1000
  for (const [unit, fun] of Object.entries(unitRound)) {
    const val = fun(secDiff)
    if (val !== 0) return `${val} ${unit} ago`
  }
}

const date1 = new Date()
const date2 = new Date('2022-01-20 10:00:00')

console.log(timeDiff(date1, date2))

export default timeDiff
