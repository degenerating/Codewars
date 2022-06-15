function nbYear(p0, percent, aug, p) {
    console.log(p0)
    console.log(percent)
    console.log(aug)
    console.log(p)
    let years = 0
    let pop = p0
    while (pop < p) {
        years ++
        pop = pop * (1+(percent / 100))
        pop = pop + aug
        pop = Math.floor(pop)
        console.log(pop)
    }
    console.log(years)
    return years
}