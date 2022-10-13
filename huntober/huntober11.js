function moveUp(input, grid) {

    //variables containing the initial coordinates of the input
    let initX = 0
    let initY = 0

    //find coordinates of input
    for (let i = 0; i < grid.length; i++) {
        for (let b = 0; b < grid.length; b++) {
            if (grid[i][b] === input) {
                initY = b
                initX = i
            } 
        }
    }

    //if input is in top row already (x coordinate 0), return unchanged grid
    if (initX === 0) {
        console.log(`already as high as possible, no movement made`)
        return grid
    }

    //otherwise, first copy the value "above" our input into our input's location. then, copy our input into the spot above
    else {
        grid[initX][initY] = grid[initX - 1][initY]
        grid[initX - 1][initY] = input
        console.log(grid)
        console.log(`swapped up. final grid: ${grid}`)
        return grid
    }


}

function moveDown(input, grid) {
    let initX = 0
    let initY = 0

    for (let i = 0; i < grid.length; i++) {
        for (let b = 0; b < grid.length; b++) {
            if (grid[i][b] === input) {
                initY = b
                initX = i
            } 
        }
    }

    if (initX === 2) {
        console.log(`already as low as possible, no movement made`)
        return grid
    }
    else {
        grid[initX][initY] = grid[initX + 1][initY]
        grid[initX + 1][initY] = input
        console.log(grid)
        console.log(`swapped down. final grid: ${grid}`)
        return grid
    }


}



myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

moveUp('h', myGrid)
moveUp('h', myGrid)
moveUp('h', myGrid)
moveDown('f', myGrid)
moveDown('f', myGrid)