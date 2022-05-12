// @ts-check
// This Javascript program find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3
const practice = (var1) => {
 let toArr = var1.split("").map((x) => (isNaN(x) ? "#" : Number(x)))

 let allCombinations = []
 for (let x = 0; x < 10; x++) {
  allCombinations.push(toArr)
 }

 let indexOfValueToChange = allCombinations[0].indexOf("#")

 let changeHashToNumber = []
 for (let x = 0; x < allCombinations.length; x++) {
  let copyArr = allCombinations[x].slice(0, allCombinations[x].length)
  copyArr.splice(indexOfValueToChange, 1, x)
  changeHashToNumber.push(copyArr)
 }

 let formated = changeHashToNumber.map((x) =>
  Number(String(x).replace(/,/g, "")),
 )

 let finalResult = []
 for (const x of formated) {
  if (x % 3 === 0) {
   finalResult.push(x)
  }
 }
 console.log("finalResult:", finalResult)
 return finalResult
}

practice("2*0") // Array(4) [ 402, 432, 462, 492 ] ✅
practice("25*0") // Array(4) [ 402, 432, 462, 492 ] ✅
practice("4*2") // Array(4) [ 402, 432, 462, 492 ] ✅
