function Xbonacci(signature,n){
    console.log(signature)
    console.log(n)
    x = signature.length
    let result = signature
    for (i = 0; i < n - x; i++) {
        sum = 0
        for (j = i; j < result.length; j++) {
            sum += result[j]
        }
        result.push(sum)
    }
    result = result.splice(0, n)
    console.log(result)
    return(result)
}


Xbonacci([0, 1], 10)