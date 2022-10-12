console.log(`1`)

function moveLeft(inp, arr) {
    let origArr = arr
    let origIndex = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === inp) {
            origIndex = i
        }
    }

    if (origIndex === 0) {
        console.log(`already furthest left, array unchanged`)
        return arr
    }

    arr.splice(origIndex - 1, 2, origArr[origIndex], origArr[origIndex - 1])
    console.log(`result: ${arr}`)
    return arr

}

function moveRight(inp, arr) {
    let origArr = arr
    let origIndex = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === inp) {
            origIndex = i
        }
    }

    if (origIndex === arr.length - 1) {
        console.log(`already furthest right, array unchanged`)
        return arr
    }

    arr.splice(origIndex, 2, origArr[origIndex + 1], origArr[origIndex])
    console.log(`result: ${arr}`)
    return arr
}


myArray = ['abc', 'xyz', 1, 2, 'Hey!']


moveLeft('xyz', myArray)

console.log(myArray)