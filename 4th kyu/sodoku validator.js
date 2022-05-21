// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){


    //function to validate any line (or 3x3 box) when passed an array of 9 values
    function validLine(line) {
        for (i = 0; i < line.length; i++) {
            if (line[i] == 0) {
                return false
            }

            for (x = i + 1; x < line.length; x++) {
                console.log(x)
                if (line[i] == line[x]) {
                    return false
                }
            }
        }
        return true
    }


    //validate all rows
    for (a = 0; a < 10; a++) {
        if (a == 9) {
            break
        }
        if (validLine(board[a]) == false) {
            return false
        }
        
    }

    //validate all columns
    for (a = 0; a < 10; a++) {
        if (a == 9) {
            break
        }
        if (validLine([board[0][a], board[1][a], board[2][a], board[3][a], board[4][a], board[5][a], board[6][a], board[7][a], board[8][a]]) == false) {
            return false
        }
    }


    //validate all 3x3 squares
    if (validLine([board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]) == false) {
        return false
    }
    if (validLine([board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]]) == false) {
        return false
    }
    if (validLine([board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]]) == false) {
        return false
    }
    if (validLine([board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]]) == false) {
        return false
    }
    if (validLine([board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]]) == false) {
        return false
    }
    if (validLine([board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]]) == false) {
        return false
    }
    if (validLine([board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]]) == false) {
        return false
    }
    if (validLine([board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]]) == false) {
        return false
    }
    if (validLine([board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]) == false) {
        return false
    }
    else {
        return true
    }

}

    //00, 01, 02, 10, 11, 12, 20, 21, 22
    //03, 04, 05, 13, 14, 15, 23, 24, 25


    //0, 1, 2, 9, 10, 11, 18, 19, 20
    //3, 4, 5, 12, 13, 14, 21, 22, 23
    //6, 7, 8, 15, 16, 17, 24, 25, 26
    //27, 28, 29, 



    // console.log('stillrunnin')

    // console.log(validLine([2, 3, 4, 6, 7, 8, 9, 1, 2]))
    





  console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]))
