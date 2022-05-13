// @ts-check
// This JavaScript program find the maximum integer n such that 1 + 2 + ... + n <= a given integer
const findMaxInteger = (var1) => {
 let howManySum = 0
 let finalResult = 0
 for (let x = 0; x < var1; x++) {
  finalResult += x
  howManySum++

  if (finalResult > var1) {
   finalResult -= x
   howManySum -= 2
   break
  }

  if (finalResult === var1) {
   howManySum--
   break
  }
 }

 console.log("finalResult:", finalResult, "howManySum:", howManySum)
 return { finalResult: finalResult, howManySum: howManySum }
}

findMaxInteger(9) //finalResult: 6 howManySum: 3
findMaxInteger(11) // finalResult: 10 howManySum: 4
findMaxInteger(15) // finalResult: 15 howManySum: 5
findMaxInteger(3) // finalResult: 3 howManySum: 2
findMaxInteger(99) // finalResult: 91 howManySum: 13
