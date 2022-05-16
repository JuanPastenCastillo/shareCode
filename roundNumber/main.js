// @ts-check
// This JavaScript program round a number to a specified amount of digits
const roundNumber = (var1, var2) => {
 let afterDot = String(var1).split(".")[1].split("")

 if (var2 > afterDot.length) {
  console.log(
   `❌ Second variable "${var2}" has to be bigger than ammount of decimals "${var1}"`,
  )
  return false
 }

 let thisStay = []
 let thisEvaluate

 for (let x = 0; x < var2; x++) {
  thisStay.push(+afterDot[x])
  thisEvaluate = +afterDot[x + 1]
 }

 if (thisEvaluate !== undefined && thisEvaluate >= 5) {
  thisStay[thisStay.length - 1] = thisStay[thisStay.length - 1] + 1
 }

 let isAllZero = thisStay.every((x) => x === 0)
 let beforeDot = String(var1).split("")[0]

 if (isAllZero) {
  console.log(`Final result: ${beforeDot}`)
  return beforeDot
 }

 let finalResult = `${beforeDot}.${thisStay.join("")}`
 console.log("finalResult:", finalResult)
 return finalResult
}

roundNumber(1.005, 2) // 1.01
roundNumber(1.005, 3) // 1.005
roundNumber(1.005, 4) // ❌ Second variable "4" has to be bigger than ammount of decimals "1.005"
roundNumber(1.095, 2) // 1.010
roundNumber(1.05, 2) // 1.05
roundNumber(1.0005, 2) // 1
roundNumber(1.00005, 3) // 1
