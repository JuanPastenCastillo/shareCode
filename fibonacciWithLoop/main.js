// @ts-check
// This JavaScript program create the fibonacci sequence. If second argument set to true, return the Fibonacci number in that position, if second argument is not defined return all the fibonacci sequence until that number
const fibonacciWithLoop = (var1, var2) => {
 let finalFib = [0, 1]
 for (let x = 2; x < var1; x++) {
  finalFib.push(finalFib[x - 1] + finalFib[x - 2])
 }

 if (var2 === true) {
  console.log(finalFib[var1 - 1])
  return finalFib[var1 - 1]
 }

 console.log("finalFib:", finalFib)
 return finalFib
}

fibonacciWithLoop(2, true) // 1
fibonacciWithLoop(2) // Array [ 0, 1 ]
fibonacciWithLoop(3, true) // 1
fibonacciWithLoop(3) // Array(3) [ 0, 1, 1 ]
fibonacciWithLoop(9, true) // 21
fibonacciWithLoop(9) // Array(9) [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
fibonacciWithLoop(99, true) // 135301852344706760000
fibonacciWithLoop(999, true) // 1.6602747662452085e+208

/* 
Thanks to "Midudev" for the code
https://www.youtube.com/shorts/_ej3jv8sZTU
*/
