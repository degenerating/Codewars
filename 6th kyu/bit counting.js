var countBits = function(n) {
    n1 = n
    safety = 0
    result = 0
    binaryResult = ''

    while (n1 > 0 && safety < 10000) {
        safety++
        if (n1 % 2 != 0) {
            result ++
            binaryResult = `1${binaryResult}`
            console.log(binaryResult)
            n1 = Math.floor(n1 / 2)
        }
        else if (n1 % 2 === 0) {
            binaryResult = `0${binaryResult}`
            console.log(binaryResult)
            n1 = Math.floor(n1 / 2)
        }
    }

    console.log(`final: ${binaryResult}`)
    console.log(`result: ${result}`)
    return result

  };


countBits(1234)

