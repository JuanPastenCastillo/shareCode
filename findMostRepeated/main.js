// @ts-check
// This JavaScript program find the number which appears most in a given array of integers
const findMostRepeated = (var1) => {
 let orderInObject = {}
 for (const x of var1) {
  if (orderInObject[x]) {
   orderInObject[x] += 1
  } else {
   orderInObject[x] = 1
  }
 }

 let mostRepeated = {}
 let getHighestValue = Math.max(...Object.values(orderInObject))
 for (const x in orderInObject) {
  if (orderInObject[x] === getHighestValue) {
   mostRepeated[x] = orderInObject[x]
  }
 }
 console.log("mostRepeated:", mostRepeated)
 return mostRepeated
}

findMostRepeated([2, 2, 2, 4, 4, 8, 5, 6, 1, 0, 10, 10, 10, 12]) // Object { 2: 3, 10: 3 }