// @ts-check
// This JavaScript program get all the ammount of prime number until given number.
const allPrimesUntilSomeNumber = (var1) => {
 let sieve = []
 let primes = []
 for (let x = 2; x < var1; x++) {
  if (!sieve[x]) {
   primes.push(x)
   for (let y = x << 1; y <= var1; y += x) {
    sieve[y] = true
   }
  }
 }
 console.log(primes)
 return primes
}

allPrimesUntilSomeNumber(10) // Array(4) [ 2, 3, 5, 7 ]
allPrimesUntilSomeNumber(100) // Array(25) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
allPrimesUntilSomeNumber(200) // Array(46) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
allPrimesUntilSomeNumber(500) // Array(95) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
allPrimesUntilSomeNumber(1000) // Array(168) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
allPrimesUntilSomeNumber(10000) // Array(1229) [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, … ]
allPrimesUntilSomeNumber(0) // Array []

/* 
Thanks to "Ted Hopp" for the code
https://stackoverflow.com/a/12287599/13316519
*/
