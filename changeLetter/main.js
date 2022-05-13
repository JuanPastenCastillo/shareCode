// @ts-check
// This Javascript program change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
const changeLetter = (var1) => {
 let baseToChange = "abcdefghijklmnopqrtuvwxyz".split("")

 let firstHalf = baseToChange.slice(0, baseToChange.length / 2)
 let secondHalf = baseToChange.slice(
  baseToChange.length / 2,
  baseToChange.length,
 )
 let secondHalfOrder = secondHalf.sort((a, b) => a - b)

 let var1ToArr = var1.split("")

 let finalResult = []
 for (let x = 0; x < var1ToArr.length; x++) {
  if (var1ToArr[x] === var1ToArr[x].toUpperCase()) {
   finalResult.push(var1ToArr[x])
   continue
  }
  for (let y = 0; y < secondHalfOrder.length; y++) {
   if (var1ToArr[x] === secondHalfOrder[y]) {
    finalResult.push(firstHalf[y])
    continue
   }

   if (var1ToArr[x] === firstHalf[y]) {
    finalResult.push(secondHalfOrder[y])
    continue
   }
  }
 }

 console.log("finalResult:", finalResult.join(""))
 return finalResult
}

changeLetter("corporation") // finalResult: xkhjkhzgqkl
changeLetter("abcdefghijklmnopqrtuvwxyz") // finalResult: zyxwvutrqponlkjihgfedcba 
changeLetter("CorporatioN") // finalResult: CkhjkhzgqkN 
changeLetter("CORPORATION") // finalResult: CORPORATION 

