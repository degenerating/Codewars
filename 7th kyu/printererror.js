function printerError(s) {

    errors = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] === 'n' || s[i] === 'o' || s[i] === 'p' || s[i] === 'q' || s[i] === 'r' || s[i] === 's' || s[i] === 't' || s[i] === 'u' || s[i] === 'v' || s[i] === 'w' || s[i] === 'x' || s[i] === 'y' || s[i] === 'z') {
            errors ++
        }
    }

    console.log(`${errors}/${s.length}`)

    return `${errors}/${s.length}`
}


printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')