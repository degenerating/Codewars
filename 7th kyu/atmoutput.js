// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

function solve(n) {
    //10, 20, 50, 100, 200 and 500 dollars
    if (n % 10 != 0) {
        return -1
    }

    fiveH = 0
    twoH = 0
    oneH = 0
    fifty = 0
    twenty = 0
    ten = 0
    totalDisp = 0


    while (n - totalDisp >= 500) {
        fiveH ++
        totalDisp += 500
    }

    while (n - totalDisp >= 200) {
        twoH ++
        totalDisp += 200
    }

    while (n - totalDisp >= 100) {
        oneH ++
        totalDisp += 100
    }

    while (n - totalDisp >= 50) {
        fifty ++
        totalDisp += 50
    }

    while (n - totalDisp >= 20) {
        twenty ++
        totalDisp += 20
    }

    while (n - totalDisp >= 10) {
        ten ++
        totalDisp += 10
    }
  
    return fiveH + twoH + oneH + fifty + twenty + ten

  }