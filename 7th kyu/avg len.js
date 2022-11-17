//example:
//['aa', 'bbbb', 'ccc']
//total length = 9, avg length = 3
//return: ['aaa', 'bbb', 'ccc']




function averageLength(arr) { 
    console.log(`arr: ${arr}`)

    let total = 0
    for (i = 0; i < arr.length; i++) {
        total = total + arr[i].length
    }
    console.log(`total: ${total}`)
    let average = Math.round(total / arr.length)

    console.log(`average: ${average}`)
    return arr.map(str => str[0].repeat(average))
  }


console.log(averageLength(['aa', 'bbbb', 'ccc']))