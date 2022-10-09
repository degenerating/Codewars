function checkEquality(arr1, arr2) {
    let length = arr1.length

    for (i = 0; i < length; i++) {
        for (x = 0; x < length; x++) {
            if (arr1[i][x] === arr2[i][x]) {
                continue
            }
            else {
                console.log(`result: false`)
                return false
            }
        }
    }

    console.log(`result: true`)
    return true
}


const ar1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const ar2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const ar3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const ar4 = [['a','b','c'],['g','h','i'],['d','e','f']]



checkEquality(ar1, ar2)

checkEquality(ar1, ar3)

checkEquality(ar1, ar4)