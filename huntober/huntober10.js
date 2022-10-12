function rearrange(arr) {
    let leftShifted = []
    let rightShifted = []

    let result = []

    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes('a')) {
            leftShifted.push(arr.splice(i, 1))
            i--
            // console.log(`leftshifted: ${leftShifted}`)
            // console.log(`arr: ${arr}`)
        }
    }

    


    //maybe switch away from using unshift for memory reasons. instead iterate backwards using push
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            rightShifted.push(arr.splice(i, 1))
            i--
            // console.log(`rightshifted: ${rightShifted}`)
            // console.log(`arr: ${arr}`)
        }
    }



    result = leftShifted


    //check if concatting a zero length array throws error
    //done, seems to be fine


    result = result.concat(arr)

    result = result.concat(rightShifted)

    console.log(`result final: ${result}`)
    return result

}


let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']




rearrange(myArr)