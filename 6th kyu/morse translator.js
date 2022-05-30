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

    return result
  }