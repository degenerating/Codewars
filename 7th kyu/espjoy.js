function numberJoy(n) {
    splitN = Array.from(String(n), Number)
    console.log(splitN)
    let digitSum = 0
    for (let i = 0; i < splitN.length; i++) {
        digitSum += splitN[i]
        console.log(`digsum: ${digitSum}`)
    }
    splitDig = Array.from(String(digitSum))
    splitDig.reverse()
    console.log(`split0: ${splitDig}`)
    splitdig = splitDig.join('')
    console.log(`split1: ${splitDig}`)
    parseFloat(splitDig)
    console.log(`splitfinal: ${splitDig}`)

}


numberJoy(1729)