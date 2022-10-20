//rewrite code

//original:
function comp1(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
    const as = a.toDateString()
    const bs = b.toDateString()
    console.log(`as: ${as}`)
    console.log(`bs: ${bs}`)
    if (da * 2 <= db) {
        return `If you thought ${a} was a long wait, wait until you see how long it is until ${b}.`
    } else if (da < db) {
        return `Don't worry, ${b} isn't too much farther away than ${a} in the scheme of things.`
    } else if (da === db) {
        return `They're the same number of days away!`
    } else {
        return `You know ${a} is closer, right?`
    }
}

function comp2(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da < db) {
        const x = Math.floor(db/da)
        return `Looks like ${b} is ${x} times farther away than ${a}.`
    } else if (da === db) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(da/db)
        return `Looks like ${a} is ${x} times farther away than ${b}.`
    }
}

function tot(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
    const as = a.toDateString()
    const bs = b.toDateString()
    const x = db-da
    return `You have ${da} days left until ${a}, and ${db} days left until ${b}.`
}

// feel free to plug these example dates into your functions
const date1 = new Date(2022,09,26)
const date2 = new Date(2022,11,25)

console.log(comp1(date1, date2))



//rewritten:
function findTimeDifference(dateA, dateB) {
    currentDate = new Date()
    dateADiff = Math.ceil(Math.abs(currentDate.getTime() - dateA.getTime()) / (1000*60*60*24))
    dateBDiff = Math.ceil(Math.abs(currentDate.getTime() - dateB.getTime()) / (1000*60*60*24))
    dateAString = dateA.toDateString()
    dateBString = dateB.toDateString()
}

function dateCompare1(dateA, dateB) {
    findTimeDifference(dateA, dateB)
    if (dateADiff * 2 <= dateBDiff) return `If you thought ${dateAString} was a long wait, wait until you see how long it is until ${b}.`
    if (dateADiff < dateBDiff)  return `Don't worry, ${dateBString} isn't too much farther away than ${dateAString} in the scheme of things.`
    if (dateADiff === dateBDiff)  return `They're the same number of days away!`

    return `You know ${dateAString} is closer, right?`
    
}

function dateCompare2 (dateA, dateB) {
    findTimeDifference(dateA, dateB)
    if (dateADiff < dateBDiff) {
        const x = Math.floor(dateBDiff/dateADiff)
        return `Looks like ${dateBString} is ${x} times farther away than ${dateAString}.`
    } else if (dateADiff === dateBDiff) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(dateADiff/dateBDiff)
        return `Looks like ${dateAString} is ${x} times farther away than ${dateBString}.`
    }
}

function dateCompare3 (dateA, dateB) {
    findTimeDifference(dateA, dateB)
    const x = dateBDiff-dateADiff
    return `You have ${dateADiff} days left until ${dateAString}, and ${dateBDiff} days left until ${dateBString}.`
}