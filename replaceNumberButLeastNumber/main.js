// @ts-check
// This Javascript program replace all but the last number of characters with the specified mask character
const replaceNumberButLeastNumber = (var1, var2, var3) => {
 let allValues = [var1, var2, var3]
 let howMuchReveal = allValues[1] ?? 4
 let maskHidden = allValues[2] || "*"

 let toArr = String(var1).split("")

 let finalResult = []
 for (let x = 0; x < toArr.length; x++) {
  if (x < toArr.length - howMuchReveal) {
   finalResult.push(maskHidden)
  } else {
   finalResult.push(toArr[x])
  }
 }

 console.log(finalResult.join(""))
 return finalResult.join("")
}

replaceNumberButLeastNumber(1234567890) // ******7890
replaceNumberButLeastNumber(1234567890, 3) // *******890
replaceNumberButLeastNumber(1234567890, 0) // **********
replaceNumberButLeastNumber(1234567890, -4, "#") // ##########
