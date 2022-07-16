const divisions = (n, divisor) => {

    current = n

    for (i = 0; i < 10000; i++) {
        if (current < divisor) {
            console.log(`result: ${i}`)
            return i
        }
        else {
            current = Math.floor(current / divisor)
            console.log(`i: ${i} current: ${current}`)
        }
    }
  };

  divisions(2450, 5)