function getDivisorsCnt(n){
    result = 1
    for (i = 1; i < n; i++) {
        if (n % i === 0) {
            result ++
        }
    }
    console.log(result)
    return result

}