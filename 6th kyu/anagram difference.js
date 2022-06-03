//=^)

// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.



anagramDifference("qmmlfomgtcf", "pylkdjlottc")


function anagramDifference(w1,w2){
    console.log(w1)
    console.log(w2)
    let arr1 = w1.split('')
    let arr2 = w2.split('')
    let iter
    let iter2
    let count = 0
    if (arr1.length >= arr2.length) {
        count = arr1.length + arr2.length
        iter = arr1.length
        iter2 = arr2.length
        for (i = 0; i < iter; i++) {
            for (x = 0; x < iter2; x++) {
                if (arr1[i] == arr2[x]) {
                    count -=2
                    arr2[x] = 5
                    break
                }
            }
        }
    }
    else {
        count = arr2.length + arr1.length
        iter = arr2.length
        iter2 = arr1.length
        for (i = 0; i < iter; i++) {
            for (x = 0; x < iter2; x++) {
                if (arr2[i] == arr1[x]) {
                    count -=2
                    arr1[x] = 5
                    break
                }
            }
        }
    }
    console.log(count)
    return(count)
    
 }