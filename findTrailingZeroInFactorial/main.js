// @ts-check
// This Javascript program make the factorial of a number and find all his trailing zero (zero at the right alone)
const findTrailingZeroInFactorial = (var1) => {
 let toArr = []
 for (let x = 2; x <= var1; x++) {
  toArr.push(x)
 }
 let order = toArr.sort((a, b) => b - a)

 let factorial = order.reduce((prev, curr) => prev * curr)

 let factorialToArr = String(factorial).split("")
 let indexFound
 for (let x = factorialToArr.length; x > -1; x--) {
  if (Number(factorialToArr[x]) > 0) {
   indexFound = x
   break
  }
 }

 let factorialNoTrailingZero = factorialToArr.slice(0, indexFound + 1)

 let finalResult = {
  "Factorial number": factorial,
  "How much trailing zeros":
   factorialToArr.length - factorialNoTrailingZero.length,
 }
 console.log("finalResult:", finalResult)
 return finalResult
}

findTrailingZeroInFactorial(8) // Object { "Factorial number": 40320, "How much trailing zeros": 1 }
findTrailingZeroInFactorial(9) // Object { "Factorial number": 362880, "How much trailing zeros": 1 }
findTrailingZeroInFactorial(10) // Object { "Factorial number": 3628800, "How much trailing zeros": 2 }
findTrailingZeroInFactorial(11) // Object { "Factorial number": 39916800, "How much trailing zeros": 2 }
findTrailingZeroInFactorial(12) // Object { "Factorial number": 479001600, "How much trailing zeros": 2 }
findTrailingZeroInFactorial(13) // Object { "Factorial number": 6227020800, "How much trailing zeros": 2 }
findTrailingZeroInFactorial(14) // Object { "Factorial number": 87178291200, "How much trailing zeros": 2 }
findTrailingZeroInFactorial(15) // Object { "Factorial number": 1307674368000, "How much trailing zeros": 3 }
findTrailingZeroInFactorial(20) // Object { "Factorial number": 2432902008176640000, "How much trailing zeros": 4 }