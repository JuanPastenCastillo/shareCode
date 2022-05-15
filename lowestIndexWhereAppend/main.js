// @ts-check
// This JavaScript program get the lowest index at which value should be inserted into array in order to maintain its sort order
const lowestIndexWhereAppend = (var1, var2) => {
 let foundIndex
 for (const x in var1) {
  if (var1[x] > var2) {
   foundIndex = Number(x)
   break
  }
 }

 let isDescent = false
 for (let x = 0, y = 1; x < var1.length; x++, y++) {
  if (var1[x] > var1[y]) {
   isDescent = true
  }
 }

 if (isDescent) {
  console.log(foundIndex + 1);
  return foundIndex + 1
 } else {
  console.log(foundIndex);
  return foundIndex
 }


}

lowestIndexWhereAppend([5, 3, 2, 1], 4) // 1
lowestIndexWhereAppend([30, 50], 40) // 1