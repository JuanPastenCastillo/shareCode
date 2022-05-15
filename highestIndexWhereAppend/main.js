// @ts-check
// This JavaScript program get the highest index at which value should be inserted into array in order to maintain its sort order.
const highestIndexWhereAppend = (var1, var2) => {
 let indexWhereAppend = []
 for (const x in var1) {
  if (var1[x] > var2){
   indexWhereAppend.push(Number(x))
   break
  }
 }
 
 console.log(indexWhereAppend);
 return indexWhereAppend
 
 /* 
 ? Whit this you can actually append the value into a new array
 let apendNewValue = [...var1.slice(0, indexWhereAppend), var2, ...var1.slice(indexWhereAppend)]
 
 */
 
 
}

highestIndexWhereAppend([10, 20, 30, 30, 40, 50, 60], 30) // 4