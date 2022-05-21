// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.


//PREP

//parameters - we're given an array of numbers as input. will they all be valid? are they all integers?

//return - we return an array of the "sum of parts". always ends in zero, length is always one longer than input array

//example - [1, 2, 3, 4] => [10, 9, 7, 4, 0]


function partsSums(ls) {

    //create a result array
    let result = []

    //use reduce to find the sum of all elements of array
    total = ls.reduce((a, b) => 
        a + b, 0
    )

    
    result.push(total)


    for (i = 0; i < ls.length; i++) {
        total -= ls[i]
        result.push(total)
    }

    return(result)

}




