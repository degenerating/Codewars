decodeMorse = function(morseCode){
    console.log(morseCode)
    currentChar = ''
    result = ''
    for (i = 0; i < morseCode.length; i++) {
        if (morseCode[i] == '.' || morseCode[i] == '-') {
            currentChar = `${currentChar}${morseCode[i]}`
        }


        //
        if (morseCode[i] == ' ' && morseCode[i-1] != ' ' && currentChar.length > 0) {
            result = `${result}${MORSE_CODE[currentChar]}`
            console.log(result)
            currentChar = ''
        }

        if (i == morseCode.length - 1 && morseCode[i] != ' ') {
            result = `${result}${MORSE_CODE[currentChar]}`
            console.log(result)
            currentChar = ''
        }

        if (morseCode[i] == ' ' && morseCode[i+1] == ' ' && morseCode[i+2] == ' '&& result.length != 0) {
            result = `${result} `
        }
    }
    console.log(result)
    return result
  }


decodeBits = function(bits) {
    console.log(`pretrim: ${bits}`)

    //remove trailing zeros
    trim = 0
    for (i = bits.length; i--; i > 0) {
        if (bits[i] == '0') {
            trim++
        }
        else {
            break
        }
    }

    bits = bits.slice(0, bits.length - trim)

    //remove leading zeros
    trim2 = 0
    for (i = 0; i < bits.length; i++) {
        if (bits[i] == '0') {
            trim2++
        }
        else {
            break
        }
    }

    bits = bits.slice(trim2, bits.length)

    console.log(`posttrim: ${bits}`)




    //if it's a single character (can't tell dot vs dash), assume it's a dot. so maxlength = 1 time unit

    transRate = 0
    let lengths = []
    currentLength = 0

    updateLength = function() {
        if (!(lengths.includes(currentLength))) {
            lengths.push(currentLength)
        }
        
        currentLength = 0
    }

    clearedZero = false

    for (i = 0; i < bits.length; i++) {
        if (bits[i] == '1') {
            currentLength ++
        }

        if (bits[i] == '0' && currentLength != 0) {
            updateLength()
        }

        if (i == bits.length - 1 && bits[i] != '0' && currentLength != 0) {
            updateLength()
        }
    }

    for (i = 0; i < bits.length; i++) {
        if (bits[i] == '1') {
            clearedZero = true
        }

        if (clearedZero = true) {
            if (bits[i] == '0') {
                currentLength ++
            }

            if (bits[i] == '1' && currentLength != 0) {
                updateLength()
            }
        }
        
    }
    lengths = lengths.sort((a, b) => {
        return a - b
    })

    console.log(`lenghts: ${lengths}`)
    //use logic to find transmission rate
    if (lengths.length == 1) {
        transRate = lengths[0]
        lengths = []
    }

    if (lengths.length == 2) {
        if (lengths[1] / lengths[0] == 3) {
            transRate = lengths[0]
            lengths = []
        }
        else {
            transRate = lengths[0]/2
            lengths = []
        }
    }

    if (lengths.length == 3) {
        transRate = lengths[0]
        lengths = []
    }


    console.log(`transrate: ${transRate}`)

    let bitResult = ''
    let binUn = 0
    for (i = 0; i < bits.length; i++) {
        // console.log(`ye${bitResult}`)
        console.log(`i:${i}`)
        // console.log(`binun${binUn}`)
        if (bits[i] == '1') {
            
            if (i == 0 && bits.length > 1) {
                binUn ++
                console.log(`bup1 ${binUn}`)
                continue
            }
            if (bits[i - 1] == '0') {
                if (binUn/transRate == 1) {
                    //do nothing maybe lmao
                    // console.log(`eh`)
                    binUn = 0
                }
                else if (binUn/transRate == 3) {
                    bitResult = `${bitResult} `
                    console.log('space added')
                    binUn = 0
                }
                else if (binUn/transRate == 7) {
                    bitResult = `${bitResult}   `
                    console.log('tripsp added')
                    binUn = 0
                }
                binUn ++
                console.log(`bup2 ${binUn}`)
            }

            if (i == bits.length - 1) {
                if (bits[i - 1] != '0') {
                    binUn ++
                    console.log(`bup3 ${binUn}`)
                }
                
                if (binUn/transRate == 1) {
                    bitResult = `${bitResult}.`
                    console.log('. added')
                    binUn = 0
                }
                else if (binUn/transRate == 3) {
                    bitResult = `${bitResult}-`
                    console.log('- added')
                    binUn = 0
                }
            }

            if (bits[i - 1] == '1') {
                binUn ++
                console.log(`bup4 ${binUn}`)
            }
        }

        if (bits[i] == '0') {
            if (bits[i - 1] == '1') {
                if (binUn/transRate == 1) {
                    bitResult = `${bitResult}.`
                    console.log('. added')
                    binUn = 0
                }
                else if (binUn/transRate == 3) {
                    bitResult = `${bitResult}-`
                    console.log('- added')
                    binUn = 0
                }
                binUn ++
                console.log(`bup5 ${binUn}`)
            }
            if (bits[i - 1] == '0') {
                binUn ++
                console.log(`bup6 ${binUn}`)
            }
        }
        console.log(`fbinun: ${binUn}`)
        
    }

    console.log(`${bitResult}`)
    // decodeMorse(bitResult)
    return bitResult
}


// decodeBits(`1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011`)