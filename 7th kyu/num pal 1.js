function palindrome(num) { 
    if (num < 0 || Number.isInteger(num) == false) {
        return 'Not valid'
    }
    else {
        arr = (num.toString()).split('')
        for (i = 0; i < arr.length; i++) {
            if (arr[i] != arr[arr.length - (i + 1)]) {
                return false
            }
        }
        return true
    }
  } 