// @ts-check
// This Javascript program check if a given matrix is a identity matrix
const checkIfIsIdentityMatrix = (var1) => {
 let isMatrix = true

 let storeSizes = []
 for (let x = 0; x < var1.length; x++) {
  storeSizes.push(var1[x].length)
 }

 let knowIfIsDifferent = new Set(storeSizes)
 if (knowIfIsDifferent.size > 1) {
  console.warn("❌ Matrix rejected", false)
  return false
 }

 let isAllOnes = true
 let checkTotalzeros = true
 for (const x in var1) {
  if (var1[x][x] !== 1) {
   isAllOnes = false
   break
  }
  for (const y in var1[x]) {
   if (x === y) {
    continue
   }
   if (var1[x][y] > 0) {
    checkTotalzeros = false
    break
   }
  }
 }

 if (isMatrix && isAllOnes && checkTotalzeros) {
  console.log("✅ Matrix accepted", true)
  return true
 } else {
  console.warn("❌ Matrix rejected", false)
  return false
 }
}

checkIfIsIdentityMatrix([
 [1, 0, 0, 0, 0],
 [0, 1, 0, 0, 0],
 [0, 0, 1, 0, 0],
 [0, 0, 0, 1, 0],
 [0, 0, 0, 0, 1],
]) // ✅ Matrix accepted true

checkIfIsIdentityMatrix([
 [1, 0, 0, 0],
 [0, 1, 0, 0],
 [0, 0, 1, 0],
 [0, 0, 0, 1],
]) // ✅ Matrix accepted true

checkIfIsIdentityMatrix([
 [1, 0, 0],
 [0, 1, 0],
 [0, 0, 1],
]) // ✅ Matrix accepted true

checkIfIsIdentityMatrix([
 [1, 0, 0, 0, 0],
 [0, 1, 0, 0, 0],
 [0, 0, 1, 0, 0],
 [0, 0, 0, 1, 0],
 [0, 1, 0, 0, 1],
]) // ❌ Matrix rejected false

checkIfIsIdentityMatrix([
 [1, 0, 0, 0],
 [0, 1, 0, 0],
 [0, 0, 1, 0],
 [0, 0, 0, 1, 0],
]) // ❌ Matrix rejected false

checkIfIsIdentityMatrix([
 [1, 0, 0],
 [0, 1, 0],
 [0, 99, 1],
]) // ❌ Matrix rejected false

