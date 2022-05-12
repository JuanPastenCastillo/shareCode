// @ts-check
// This Javascript program calculate the sum like this. For var1 = 8; var1 + var1/2 + var1/4 + var1/8 === 15
const sumAllDivisors = (var1) => {
 let allNumToSum = 0
 for (let x = var1; x >= 1; x /= 2) {
  allNumToSum += Math.floor(x)
 }
 /* 
 Thanks to "Alexander919" for the code of above
 https://gist.github.com/Alexander919/432b434c56dfa74f6b69b621544e5e0a
 */

 console.log('allNumToSum:', allNumToSum)
 return allNumToSum
}

sumAllDivisors(6) // 10 
sumAllDivisors(8) // 15
sumAllDivisors(9) // 16
sumAllDivisors(20) // 38
sumAllDivisors(26) // 49
sumAllDivisors(40) // 78
sumAllDivisors(80) // 158
sumAllDivisors(160) // 318
sumAllDivisors(320) // 638