// @ts-check
// This Javascript program transform number to a diagnola matrix
const numbersDiagonalMatrix = (...valuesGiven) => {
 let lengthOfMatrix = valuesGiven.length

 let newArr = []
 for (let x = 0; x < lengthOfMatrix * lengthOfMatrix; x++) {
  newArr.push(0)
 }

 let storeAsMatrix = []
 for (let x = 0, j = 0; x < newArr.length; x++) {
  if (x >= lengthOfMatrix && x % lengthOfMatrix === 0) {
   j++
  }
  storeAsMatrix[j] = storeAsMatrix[j] || []
  storeAsMatrix[j].push(newArr[x])
 }
 /* 
 Thanks to "Avare Kodcu" and "stef" for the code above
 https://stackoverflow.com/a/44069560/13316519
 */

 for (let x = 0; x < storeAsMatrix.length; x++) {
  storeAsMatrix[x][x] = valuesGiven[x]
 }
 console.dir("storeAsMatrix:", storeAsMatrix)
 return storeAsMatrix
}

numbersDiagonalMatrix(2)  // ✅
/* 
Array [ (1) […] ]
0: Array [ 2 ]
*/

numbersDiagonalMatrix(2, 5) // ✅
/* 
Array [ (2) […], (2) […] ]
0: Array [ 2, 0 ]
*/

numbersDiagonalMatrix(2, 5, 1) // ✅
/* 
Array(3) [ (3) […], (3) […], (3) […] ]
0: Array(3) [ 2, 0, 0 ]
1: Array(3) [ 0, 5, 0 ]
2: Array(3) [ 0, 0, 1 ]
*/

numbersDiagonalMatrix(2, 5, 1, 9) // ✅
/* 
Array(4) [ (4) […], (4) […], (4) […], (4) […] ]
0: Array(4) [ 2, 0, 0, … ]
1: Array(4) [ 0, 5, 0, … ]
2: Array(4) [ 0, 0, 1, … ]
3: Array(4) [ 0, 0, 0, … ]
*/

numbersDiagonalMatrix(2, 5, 1, 10, 7) // ✅
/* 
Array(5) [ (5) […], (5) […], (5) […], (5) […], (5) […] ]
0: Array(5) [ 2, 0, 0, … ]
1: Array(5) [ 0, 5, 0, … ]
2: Array(5) [ 0, 0, 1, … ]
3: Array(5) [ 0, 0, 0, … ]
4: Array(5) [ 0, 0, 0, … ]
*/

numbersDiagonalMatrix(2, 5, 1, 99, 23, 4) // ✅
/* 
Array(6) [ (6) […], (6) […], (6) […], (6) […], (6) […], (6) […] ]
0: Array(6) [ 2, 0, 0, … ]
1: Array(6) [ 0, 5, 0, … ]
2: Array(6) [ 0, 0, 1, … ]
3: Array(6) [ 0, 0, 0, … ]
4: Array(6) [ 0, 0, 0, … ]
5: Array(6) [ 0, 0, 0, … ]
*/

numbersDiagonalMatrix(2, 5, 1, 99, 23, 4, 0) // ✅
/* 
Array(7) [ (7) […], (7) […], (7) […], (7) […], (7) […], (7) […], (7) […] ]
0: Array(7) [ 2, 0, 0, … ]
1: Array(7) [ 0, 5, 0, … ]
2: Array(7) [ 0, 0, 1, … ]
3: Array(7) [ 0, 0, 0, … ]
4: Array(7) [ 0, 0, 0, … ]
5: Array(7) [ 0, 0, 0, … ]
6: Array(7) [ 0, 0, 0, … ]
*/
