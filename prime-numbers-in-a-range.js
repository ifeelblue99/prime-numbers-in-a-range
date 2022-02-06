range = [5, 50]

function primeNumbersInRange(r){

  let primes = []
  let isPrime = true

  for (var i = r[0]; i < r[1]+1; i++) {
    if(i==2||i==3) primes.push(i)

    for (let j = 2; j < i; j++) {
      if(i%j==0){
        isPrime = false
        break
      }
    }
    if(isPrime){
      primes.push(i)
    }
    isPrime = true
  }
  
  return new Set(primes)
}


console.log("prime numbers in the range of", range, "---->", primeNumbersInRange(range))