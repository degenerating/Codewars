//DIY

function DIYrandom(grid) {
    //deconstruct the array of arrays into one long array, to make things easier
    let deconArr = []
    for (let i = 0; i < grid.length; i++) {
        for (let x = 0; x < grid.length; x++) {
            deconArr.push(grid[i][x])
        }
    }
    console.log(`deconarr: ${deconArr}`)

    let constructedArr = []
    constructedArr.length = deconArr.length






    
    let randIndex
    for (let i = 0; i < deconArr.length; i++) {

        randIndex = Math.floor(Math.random() * (deconArr.length))

        //check here first for debug
        //if the randomly selected number is already input in the array, roll for another random number

        console.log(`randindex unmod ${randIndex}`)
        while (!(constructedArr[randIndex] === undefined)) {
            randIndex = Math.floor(Math.random() * (deconArr.length))
        }

        constructedArr[randIndex] = deconArr[i]




        }

    console.log('final constructed flat arr')
    console.log(constructedArr)



    //take new, flat arr and use it to overwrite original "grid"
    let tracker = 0
    for (let i = 0; i < grid.length; i++) {
        for (let x = 0; x < grid.length; x++) {
            grid[i][x] = constructedArr[tracker]
            tracker ++
        }
    }

    console.log(`final randomized grid`)
    console.log(grid)

    }



myGrid = [['a', 'b', 'c', 'x'], ['d', 'e', 'f', 'y'], ['g', 'h', 'i', 'z'], ['j', 'k', 'l', 'm']]

DIYrandom(myGrid)