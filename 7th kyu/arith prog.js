function arithmeticSequenceElements(a, d, n) {
	let final = `${String(a)}`
    for (i = 1; i < n; i++) {
        final = `${final}, ${String(a + d * i)}`
    }

    console.log(final)
    return final
    
}

arithmeticSequenceElements(1, 2, 5)