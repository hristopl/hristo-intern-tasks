const date = new Date()

function dateToIsoString(date) {
let dateYear = date.getUTCFullYear();
let dateDay = date.getUTCDate();
let dateMonth = date.getUTCMonth();
let dateHours = date.getUTCHours();
let dateMin = date.getUTCMinutes();
let dateSeconds = date.getUTCSeconds();
let dateMillisec = date.getUTCMilliseconds();

if(dateMonth < 10) {
    dateMonth = "0" + dateMonth;
} 
if( dateMin < 10){
    dateMin = "0" + dateMin;
}

console.log(`${dateYear}-${dateDay}-${dateMonth}T${dateHours}:${dateMin}:${dateSeconds}.${dateMillisec}Z`);
}
dateToIsoString(date);
