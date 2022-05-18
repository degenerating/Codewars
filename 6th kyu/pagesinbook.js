// function pageDigits(pages) {
//     let numString = ''
//     for (i = 1; i <= pages; i++) {
//         numString += String(i)
//     }
//     return numString.length
//   }


// function pageDigits(pages) {
//     console.log('starting!')
//     let numPages = pages
//     let digits = Math.log10(pages) + 1
//     console.log(`pagesstart: ${numPages}`)
//     console.log(`digitsstart: ${digits}`)
//     let totalDigs = 0
//     for (i = 1; i < digits; i++) {
//         totalDigs += (9 * i * (Math.pow(10, i-1)))
//         console.log(totalDigs)
//     }
//     numPages = numPages - (Math.pow(10, digits - 1) - 1)
//     console.log(`pages: ${numPages}`)
//     console.log(`digits: ${digits}`)
//     return (numPages * Number(digits) + totalDigs)
// }

// https://www.codewars.com/kata/55905b7597175ffc1a00005a/train/javascript



function amountOfPages(summary){
    let digits = 0
    for (i = 1; i < 100000; i++) {
        if (i < 10) {
            digits ++
            if (digits == summary) {
                return i
            }
        }
        else if (i < 100) {
            digits += 2
            if (digits == summary) {
                return i
            }
        }
        else if (i < 1000) {
            digits += 3
            if (digits == summary) {
                return i
            }
        }
        else if (i < 10000) {
            digits += 4
            if (digits == summary) {
                return i
            }
        }
        else if (i < 100000) {
            digits += 5
            if (digits == summary) {
                return i
            }
        }
        else {
            return 100000
        }
    }
}

console.log(amountOfPages(660))

// 9*1 + 90*2 + 900*3 + 9000*4 + 90000*5 + 


//find length of pages
//length - 1: 