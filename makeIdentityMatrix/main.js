// @ts-check
// This Javascript program make a identity matrix length of a given number
const makeIdentityMatrix = (num) => {
 let lengthOfMatrix = num
 let numOfValuesInsideMatrix = num * num

 let theMatrix = []
 for (let x = 0; x < numOfValuesInsideMatrix; x++) {
  theMatrix.push(0)
 }

 let separateArr = []
 for (let x = 0; x < lengthOfMatrix; x++) {
  separateArr.push(theMatrix.slice(x, x + lengthOfMatrix))
 }
 /* 
 Thanks to "Gershom Maes" for the code of separateArr
 https://stackoverflow.com/a/50748585/13316519
 */

 for (let x = 0; x < separateArr.length; x++) {
  separateArr[x][x] = 1
 }
 console.dir("separateArr:", separateArr)
 return separateArr
}

makeIdentityMatrix(3)
/* [[1, 0, 0], [0, 1, 0], [0, 0, 1]] */

makeIdentityMatrix(4)
/* [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] */

makeIdentityMatrix(5)
/* 
[
 [1, 0, 0, 0, 0],
 [0, 1, 0, 0, 0],
 [0, 0, 1, 0, 0],
 [0, 0, 0, 1, 0],
 [0, 0, 0, 0, 1]
]
*/

makeIdentityMatrix(6)
/* 
[
 [1, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0],
 [0, 0, 1, 0, 0, 0],
 [0, 0, 0, 1, 0, 0],
 [0, 0, 0, 0, 1, 0],
 [0, 0, 0, 0, 0, 1]
]
*/
