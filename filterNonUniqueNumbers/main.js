// @ts-check
// This Javascript program filter non-unique values in array
const filterNoUniqueValueArr = (var1) => {
 let whichEliminate = []
 for (let x = 0, y = 1; x < var1.length; x++, y++) {
  if (var1[x] === var1[y]) {
   whichEliminate.push(var1[x])
  }
 }

 let finalResult = []
 for (const x of var1) {
  if (!whichEliminate.includes(x)) {
   finalResult.push(x)
  }
 }
 console.log("finalResult:", finalResult)
 return finalResult
}

filterNoUniqueValueArr([1, 2, 2, 4, 5, 6, 7]) // finalResult: Array(5) [ 1, 4, 5, 6, 7 ]
filterNoUniqueValueArr([1, 2, 3, 4]) //  finalResult: Array(4) [ 1, 2, 3, 4 ]
filterNoUniqueValueArr([2, 2, 3, 3, 4, 4, 5, 5, 0])// finalResult: Array [ 0 ]


