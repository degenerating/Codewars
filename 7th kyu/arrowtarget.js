const solution = mtrx => {
    arrowX = 0
    arrowY = 0
    targetX = 0
    targetY = 0


    for (i = 0; i < mtrx.length; i++) {
        for (x = 0; x < mtrx[i].length; x++) {
            if (mtrx[i][x] === '>') {
                arrowX = i
                arrowY = x
            }

            if (mtrx[i][x] === 'x') {
                targetX = i
                targetY = x
            }
        }

        
    }

        if (targetX != arrowX) {
            console.log(`false`)
            return false
        }

        if (arrowY < targetY) {
            console.log(`true`)
            return true
        }

        else {
            console.log(`false`)
            return false
        }


   }


solution([
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '>', ' ', 'x'],
    [' ', ' ', '', ' ', ' ']
  ])