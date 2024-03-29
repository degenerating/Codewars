function isValidWalk(walk) {

    let ffr

    //check if walk fulfills 10 minute requirement
    if (walk.length != 10) {
        return false
    }

    //count the number of each direction, and add them to an object
    let dirTally = walk.reduce((prev, curr) => {
        if (typeof prev[curr] == 'undefined') {
            prev[curr] = 1
            return prev
        }
        else {
            prev[curr] ++
            return prev
        }
    }, {})
    console.log(dirTally)

    //if each direction appears the same amount of times as its opposite, we have arrived back at our starting location
    if (dirTally.n != dirTally.s || dirTally.w != dirTally.e) {
        return false
    }

    else {
        return true
    }
}


isValidWalk(['n','s','n','s','n','s','n','s','n','s'])


