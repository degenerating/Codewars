// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


function persistence(num) {

  for (i = 0; i < 100000; i++) {

    //if the working number is one digit, return i (the number of times we've multiplied the digits together)
    if (String(num).length == 1) {
      return i
    }

    //convert working number to a string, split that string into an array, then multiply the elements of that array together
    else {
      arr = String(num).split('')
      num = 1
      for (x = 0; x < arr.length; x++) {
        num = num * Number(arr[x])
      }
    }
  }
}
