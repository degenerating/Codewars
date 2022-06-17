function getTheVowels(word) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    index = 0
    total = 0

    for (i = 0; i < word.length; i++) {
        if (vowels[index] === word[i]) {
            total ++
            index ++
            console.log(`i ${i}`)
            console.log(`index ${index}`)
            if (index === 5) {
                index = 0
            }
        }
    }

    console.log(total)
    return total
  }



getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie')