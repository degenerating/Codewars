//https://www.codewars.com/kata/56cac350145912e68b0006f0/javascript

//PREP

//Parameters - One input: a string


//return - a transformed string, the first word is shorter than the second, which is longer than the third, which is shorter than the fourth


//examples




//pseudocode
//split input string into an array of words, seperated by spaces
//if array[0].length > array[1].length, switch them



function arrange(strng) {
    let arr = strng.split(' ')

    for (i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            if (arr[i].length > arr[i + 1].length) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        else {
            if (arr[i].length < arr[i + 1].length) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }

    for (i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            arr[i] = arr[i].toLowerCase()
        }
        else {
            arr[i] = arr[i].toUpperCase()
        }
    }

    result = arr.join(' ')    

    return result
}

arrange('who hit retaining The That a we taken')