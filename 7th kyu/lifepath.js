function lifePathNumber(dateOfBirth) {
    dateOfBirth = dateOfBirth.split('-')
    let year = dateOfBirth[0]
    let month = dateOfBirth[1]
    let day = dateOfBirth[2]


//perform life path calc on the year, month, and day
    year = magicNum(year)
    month = magicNum(month)
    day = magicNum(day)


//perform life path calc on the results of y/m/d, and return the result
    return Number(magicNum(year + month + day))


    // console.log(year)
    // console.log(month)

    // console.log(day)


    //function which takes strings of numbers, and iterates until it has a single digit
    function magicNum (crunch) {
        if (crunch.length > 1) {
            let total = 0
            for (i = 0; i < crunch.length; i++) {
                total += Number(crunch[i])
            }
            crunch = total.toString()
            return magicNum(crunch)
        }
        else {
            return crunch
        }
        
    }
  }