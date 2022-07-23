function whatCentury(year)
{

    year = Number(year)
    year = year -1
    year = year.toString()

    snip = year.slice(0, 2)

    snip = Number(snip)
    snip ++
    snip = snip.toString()
    lastDig = snip[1]
    console.log(lastDig)

    suff = ''

    
    
    if (snip === '11' || snip === '12' || snip === '13') {
        suff = 'th'
    }
    else if (lastDig === '1') {
        suff = 'st'
    }
    else if (lastDig === '2') {
        suff = 'nd'
    }
    else if (lastDig === '3') {
        suff = 'rd'
    }
    else {
        suff = 'th'
    }
    

    console.log(`${snip}${suff}`)

    return `${snip}${suff}`
}


whatCentury('1925')