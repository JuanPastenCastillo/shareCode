// @ts-check
// This JavaScript program find the kth greatest element of a given array of integers
const findFirstGreater = (var1, var2) => {
 let noContinue = var2 > var1.length || var2 <= 0 || var2 === undefined
 if (noContinue) {
  return console.warn(`Please, chose a number between 1 and ${var1.length}`)
 }

 let shallowCopy = var1.sort((a, b) => a - b).slice(0, var2)
 let finalResult = shallowCopy[shallowCopy.length - 1]
 console.log(`The first number bigger than "${var2}" is ${finalResult}`)
 return `The first number bigger than "${var2}" is ${finalResult}`
}

findFirstGreater([1, 2, 6, 4, 5], 0) // Please, chose a number between 1 and 5
findFirstGreater([1, 2, 6, 4, 5], 1) // The first number bigger than "1" is 1
findFirstGreater([1, 2, 6, 4, 5], 2) // The first number bigger than "2" is 2
findFirstGreater([1, 2, 6, 4, 5], 3) // The first number bigger than "3" is 4
findFirstGreater([1, 2, 6, 4, 5], 4) // The first number bigger than "4" is 5
findFirstGreater([1, 2, 6, 4, 5], 5) // The first number bigger than "5" is 6
findFirstGreater([1, 2, 6, 4, 5], 6) // Please, chose a number between 1 and 5

findFirstGreater([-10, -25, -47, -36, 0], 1) // The first number bigger than "1" is -47
findFirstGreater([-10, -25, -47, -36, 0], 2) // The first number bigger than "2" is -36
findFirstGreater([-10, -25, -47, -36, 0], 3) // The first number bigger than "3" is -25
findFirstGreater([-10, -25, -47, -36, 0], 4) // The first number bigger than "4" is -10
findFirstGreater([-10, -25, -47, -36, 0], 5) // The first number bigger than "5" is 0
