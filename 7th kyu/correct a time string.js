//PREP

//



function timeCorrect(timestring) {
  console.log(`timestring: ${timestring}`)
  //2 basic parts:

  //1: input validation + parsing
  if (timestring === null || timestring === '') {
    return timestring
  }

  console.log(`test1:${isNaN(timestring[1])}`)

  if ((isNaN(timestring[0]) === true) || (isNaN(timestring[1]) === true) || (isNaN(timestring[3]) === true) || (isNaN(timestring[4]) === true) || (isNaN(timestring[6]) === true) || (isNaN(timestring[7]) === true)) {
    console.log(`result null due to non number in number space`)
    return null
  }
  if (timestring[2] != ':' || timestring[5] != ':') {
    console.log(`result null due to incorrect char in : space`)
    return null
  }

  let hours = parseInt(timestring.substring(0, 2))
  console.log(`hours: ${hours}`)
  let minutes = parseInt(timestring.substring(3, 5))
  console.log(`minutes: ${minutes}`)
  let seconds = parseInt(timestring.substring(6))
  console.log(`seconds: ${seconds}`)


 
  //2: crunching numbers

  while (seconds > 59) {
    minutes += 1
    seconds -= 60
  }
  while (minutes > 59) {
    hours += 1
    minutes -= 60
  }
  while (hours > 23) {
    hours -= 24
  }

  seconds = seconds.toString()
  minutes = minutes.toString()
  hours = hours.toString()

  if (seconds.length === 1) {
    seconds = `0${seconds}`
  }
  if (minutes.length === 1) {
    minutes = `0${minutes}`
  }
  if (hours.length === 1) {
    hours = `0${hours}`
  }
  
  let result = `${hours}:${minutes}:${seconds}`
  return result

}

// timeCorrect('52:01:01')

timeCorrect('0a:1c:22')