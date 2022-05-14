// @ts-check
// This Javascript program initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step
// 1° argument is the start of the array (include this number)
// 2° argument is the end of the array (include this number)
// 3° argument is the step of each number (use 1 step by default)

const arrInSpecificRange = (...allValues) => {
 let finalArr = []
 if (allValues.length === 1) {
  for (let x = 0; x < allValues[0]; x++) {
   finalArr.push(x)
  }
  console.log("finalArr:", finalArr)
  return finalArr
 }

 if (allValues[2] === undefined) {
  let orderLessToHigh = allValues.sort()
  for (let x = orderLessToHigh[0]; x < orderLessToHigh[1]; x++) {
   finalArr.push(x)
  }
  console.log("finalArr:", finalArr)
  return finalArr
 }

 let orderLessToHigh = allValues.slice(0, 2).sort()
 for (let x = orderLessToHigh[0]; x <= orderLessToHigh[1]; x += allValues[2]) {
  finalArr.push(x)
 }
 console.log("finalArr:", finalArr)
 return finalArr
}


arrInSpecificRange(5) // Array(5) [ 0, 1, 2, 3, 4 ]
arrInSpecificRange(8, 3) // Array(5) [ 3, 4, 5, 6, 7 ]
arrInSpecificRange(6, 0, 2) // Array(4) [ 0, 2, 4, 6 ]


