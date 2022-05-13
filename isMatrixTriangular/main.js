// @ts-check
// This Javascript program check if a given matrix is lower, upper, both or none triangular. Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero 
const isMatrixTriangular = (var1) => {
 let checkAbove = []
 for (let x = 0; x < var1.length; x++) {
  checkAbove.push(var1[x].slice(1 + x, var1[x].length))
 }

 let flatenAbove = checkAbove.flat(Infinity)

 let allZeroAbove = true
 for (const x of flatenAbove) {
  if (x !== 0) {
   allZeroAbove = false
   break
  }
 }

 let checkBelow = []
 for (let x = var1.length - 1; x > 0; x--) {
  checkBelow.push(var1[x].slice(0, x))
 }

 let flatenBelow = checkBelow.flat(Infinity)

 let allZeroBelow = true
 for (const x of flatenBelow) {
  if (x !== 0) {
   allZeroBelow = false
   break
  }
 }

 if (allZeroAbove && allZeroBelow) {
  console.log(true, ": Above & Below");
  return [true, "Above & Below"]
 }

 if (allZeroAbove) {
  console.log(true, ": Above");
  return [true, "Above"]
 }

 if (allZeroBelow) {
  console.log(true, ": Below");
  return [true, "Below"]
 }

 if (allZeroAbove === false && allZeroBelow === false) {
  console.warn(false, ": Not above, neither below");
  return [false, "Not above, neither below"]
 }
}

isMatrixTriangular([[1, 0, 0], [3, 1, 0], [4, 5, 1]]) // true : Above 
isMatrixTriangular([[1, 2, 3], [0, 1, 4], [0, 0, 1]]) // true : Below
isMatrixTriangular([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) // true : Above & Below
isMatrixTriangular([[1, 0, 3], [0, 1, 0], [3, 0, 1]]) // false : Not above, neither below
isMatrixTriangular([[1, 0, 0, 0], [2, 1, 0, 0], [3, 4, 1, 0], [5, 6, 7, 1]]) // true : Above 
isMatrixTriangular([[1, 2, 3, 4], [0, 1, 5, 6], [0, 0, 1, 7], [0, 0, 0, 1]]) // true : Below
isMatrixTriangular([[1, 0, 0, 0], [2, 1, 0, 0], [3, 4, 1, 0], [5, 6, 7, 1]]) // true : Above 


