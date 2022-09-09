
function mazeRunner(maze, directions) {
    let length = maze[0].length
    let xCoord = 0
    let yCoord = 0

    for (i = 0; i < length; i++) {
        for (x = 0; x < length; x++) {
            if (maze[i][x] === 2) {
                xCoord = x
                yCoord = i
                break
            }
        }
    }

    for (i = 0; i < directions.length; i++) {

        console.log(`length: ${length}`)
        console.log(`xcoord: ${xCoord}`)
        console.log(`ycoord: ${yCoord}`)

        //move coordinates based on directions
        if (directions[i] === 'N') {
            yCoord --
        }
        else if (directions[i] === 'E') {
            xCoord ++
        }
        else if (directions[i] === 'S') {
            yCoord ++
        }
        else if (directions[i] === 'W') {
            xCoord --
        }

        //check if new location is out of bounds
        if (yCoord >= length || xCoord >= length || yCoord < 0 || xCoord < 0) {
            console.log(`out of bounds dead`)
            return 'Dead'
        }

        //check if new location has hit a wall
        if (maze[yCoord][xCoord] === 1) {
            console.log(`wall dead`)
            return 'Dead'
        }

        //check if new location is the finish
        if (maze[yCoord][xCoord] === 3) {
            console.log(`finish`)
            return 'Finish'
        }

    }

    //if still in the maze, return lost
    return 'Lost'

    
  }
