// @ts-check
// This JavaScript program sum all the digits individually until get a single digit. For example:
// A) 123 = 1+2+3 = 6 (iterate 1 time)
// B) 156 = 1+5+6 = 12 = 1+2 = 3 (iterate 2 times)
let finishNumber
let howManyTimesTransform = 0
const sumUntilGetOneDigit = (var1) => {
 let knowLength = String(var1).length

 if (knowLength === 1 && howManyTimesTransform === 0) {
  let finalAnswer = {
   finishNumber: var1,
   "How many times iterate": howManyTimesTransform,
  }
  console.log("finalAnswer:", finalAnswer)
  return finalAnswer
 }

 if (knowLength === 1) {
  let useFinishNumber = finishNumber
  let useHowManyTimesTransform = howManyTimesTransform
  finishNumber = 0
  howManyTimesTransform = 0

  let finalAnswer = {
   finishNumber: useFinishNumber,
   "How many times iterate": useHowManyTimesTransform,
  }
  console.log("finalAnswer:", finalAnswer)
  return finalAnswer
 } else {
  var1 = String(var1)
   .split("")
   .map((x) => Number(x))
   .reduce((prev, curr) => prev + curr)
  finishNumber = var1
  ++howManyTimesTransform
  sumUntilGetOneDigit(var1)
 }
}

sumUntilGetOneDigit(123) // Object { finishNumber: 6, "How many times iterate": 1 }
sumUntilGetOneDigit(156) // Object { finishNumber: 3, "How many times iterate": 2 }
sumUntilGetOneDigit(999) // Object { finishNumber: 9, "How many times iterate": 2 }
sumUntilGetOneDigit(987) // Object { finishNumber: 6, "How many times iterate": 2 }
sumUntilGetOneDigit(101) // Object { finishNumber: 2, "How many times iterate": 1 }
sumUntilGetOneDigit(1) // Object { finishNumber: 1, "How many times iterate": 0 }