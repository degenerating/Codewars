//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {

  if (customers.length === 0) {
    return 0
  }

  let safety = 0
  let totalTime = 0


  registers = customers.slice(0, n)
  remainingCustomers = customers.slice(n, customers.length)

  while (remainingCustomers.length > 0 && safety < 10000) {
    safety ++
    rmin = Math.min(...registers)
    totalTime += rmin
    for (x = 0; x < n; x++) {
      registers[x] -= rmin
      if (registers[x] === 0 && remainingCustomers.length > 0) {

        //sets empty register to the value of initial customer, then removes init customer from remaining customers
        registers[x] = remainingCustomers.shift()
      }

    }

    
  }
  //once this while loop is complete, nobody remains in line. we simply add the longest wait time to the total time to find the final wait time
  totalTime += Math.max(...registers)

  console.log(`final: ${totalTime}`)

  return totalTime
    

  }


// queueTime([1,2,3,4], 2)

queueTime([20,1,2,6,19,10,4,2,18,19,17,10,19,6,4,8,3,6,15,2,14,8,4,15,6,3,18,10,4,14,8,6,14,17,4,11,20,18,13,20,19,8,5,12,11,9,5,4,14,9,10,4,12,11,13,5,15,11,16,17,16,1,4,7,10,7,11,10,11,17,1,2,3,17,14,19,6,16,4,1,5,7] , 11)

//expected 83