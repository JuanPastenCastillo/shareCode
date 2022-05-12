// @ts-check
// This Javascript program check kif a matrix is a diagonal matris or not.
const checkIfMatrixIsDiagonal = (var1) => {
 let allOK = true

 let storeSizes = []
 for (let x = 0; x < var1.length; x++) {
  storeSizes.push(var1[x].length)
 }

 let knowIfIsDifferent = new Set(storeSizes)
 if (knowIfIsDifferent.size > 1) {
  console.warn("❌ Matrix rejected (different sizes", false)
  return false
 }

 for (const x in var1) {
  for (const y in var1) {
   if (x === y) {
    continue
   }
   if (var1[x][y] !== 0) {
    allOK = false
    break
   }
  }
 }

 if (allOK) {
  console.log("✅ Matrix accepted", true)
  return true
 } else {
  console.warn("❌ Matris rejected (different sizes)", false)
  return false
 }
}

checkIfMatrixIsDiagonal([
 [1, 0, 0],
 [0, 2, 0],
 [0, 0, 3],
]) // ✅ Matrix accepted true
checkIfMatrixIsDiagonal([
 [1, 0, 0, 0],
 [0, 2, 0, 0],
 [0, 0, 3, 0],
 [0, 0, 0, 4],
]) // ✅ Matrix accepted true
checkIfMatrixIsDiagonal([
 [1, 0, 0],
 [0, 2, 9],
 [0, 0, 3],
]) // ❌ Matrix rejected (different sizes false
checkIfMatrixIsDiagonal([
 [1, 0, 0, 0],
 [0, 2, 0, 0],
 [0, 0, 3, 0],
 [0, 2],
]) // ❌ Matrix rejected (different sizes false
