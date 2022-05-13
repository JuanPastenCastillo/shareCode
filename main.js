// @ts-check
// This Javascript program create an array of acummulative sum
const sumAcummulativeAndToArr = (var1) => {
 let newArr = []
 let acumulate = 0
 for (const x of var1) {
  acumulate += x
  newArr.push(acumulate)
 }
 console.log("newArr:", newArr)
 return newArr
}

sumAcummulativeAndToArr([1, 2, 3, 4, 5]) // Array(5) [ 1, 3, 6, 10, 15 ]
sumAcummulativeAndToArr([1, 2, -3, 4, 5]) // Array(5) [ 1, 3, 0, 4, 9 ]
sumAcummulativeAndToArr([10, 20, 50, -100]) // Array(4) [ 10, 30, 80, -20 ]