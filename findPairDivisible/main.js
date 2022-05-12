// @ts-check
// This Javascript program check all pair divisible in an array
const findPairDivisible = (var1, var2, ...rest) => {
 let toArr = [var1, var2, ...rest].sort((a, b) => a - b)

 let allCombinationsParis = []
 for (let x = 0; x < toArr.length; x++) {
  for (let y = x + 1; y < toArr.length; y++) {
   allCombinationsParis.push([toArr[x], toArr[y]])
  }
 }

 let areDivisible = []
 for (const x of allCombinationsParis) {
  if (x[1] % x[0] === 0) {
   areDivisible.push(x[0], x[1])
  }
 }

 let formattedByTwo = []
 for (let x = 0; x < areDivisible.length; x += 2) {
  formattedByTwo.push(areDivisible.slice(x, x + 2))
 }

 let finalResult = {
  "Number of combinations": areDivisible.length,
  "Arr combined": formattedByTwo,
 }
 console.dir("finalResult:", finalResult)
 return finalResult
}

findPairDivisible(1, 3, 2)
/* 
"Number of combinations": 4
"The combinations": Array [ (2) […], (2) […] ] */
findPairDivisible(6, 4, 2)
/* 
"Number of combinations": 4
"The combinations": Array [ (2) […], (2) […] ] */
findPairDivisible(6, 4, 2, 3)
/* 
"Number of combinations": 6
"The combinations": Array(3) [ (2) […], (2) […], (2) […] ] */
findPairDivisible(2, 16, 4)
/* 
"Number of combinations": 6
"The combinations": Array(3) [ (2) […], (2) […], (2) […] ] */
findPairDivisible(100, 20, 1000, 10, 5)
/* 
"Number of combinations": 20
"The combinations": Array(10) [ (2) […], (2) […], (2) […], … ] */