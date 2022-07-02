//PREP

//parameters - an array of integers

//return - NEW array with smallest value removed. if t

function removeSmallest(numbers) {

    let min = Math.min(...numbers)


    let index
    for (i = 0; i < numbers.length; i++) {
        if (min === numbers[i]) {
            index = i
            break
        }
    }


    numCopy = [...numbers]

    numCopy.splice(index, 1)

    console.log(numCopy)

    return numCopy


  }



removeSmallest([2, 2, 1, 2, 1])