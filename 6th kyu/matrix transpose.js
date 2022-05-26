// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

function transpose(matrix) {

    console.log(matrix)
    let result = []


    //populate result array with initial values from matrix row one
    for (i = 0; i < matrix[0].length; i++) {
        result.push([matrix[0][i]])
    }


    //iterate through remaining matrix rows, adding them to their respective column in the result
    for (i = 1; i < matrix.length; i++) {
        for (x = 0; x < matrix[0].length; x++) {
            result[x].push(matrix[i][x])
        }
    }

    console.log(result)
    return(result)
}


transpose([[1,2,3],[4,5,6]])

