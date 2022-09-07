function stantonMeasure(arr) {
    let oneCount = 0
    let result = 0

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            oneCount ++
        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === oneCount) {
            result ++
        }
    }

    return result
}