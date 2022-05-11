// @ts-check
// This Javascript program recibe one parameter that is a number. In that number this delete only one of his digit to get the highest number
const findMaximalNumberDeletingOnlyOne = (var1) => {
 let toArr = String(var1).split("")

 if (toArr.length <= 1) {
  console.warn("❌ Please, enter a number with more than 1 digit")
  return
 }

 let newAllPosibleCombinations = []
 for (const x in toArr) {
  for (const y in toArr) {
   if (x !== y) {
    newAllPosibleCombinations.push(toArr[y])
   }
  }
 }

 let howMuchEveryGroup = toArr.length - 1
 let groupAllPossibles = []
 for (let x = 0, j = 0; x < newAllPosibleCombinations.length; x++) {
  if (x >= howMuchEveryGroup && x % howMuchEveryGroup === 0) {
   j++
  }
  groupAllPossibles[j] = groupAllPossibles[j] || []
  groupAllPossibles[j].push(newAllPosibleCombinations[x])
 }
 // Thanks to "Avare Kodcu" & "Geza Kerecsenyi" for the code above
 // https://stackoverflow.com/questions/38048497/group-array-values-in-group-of-3-objects-in-each-array-using-underscore-js/44069560#44069560

 let formatedGroup = groupAllPossibles.map((x) => Number(x.join("")))

 let finalResult = Math.max(...formatedGroup)
 console.log("finalResult:", finalResult)
 return finalResult
}

findMaximalNumberDeletingOnlyOne(1) // ❌ Please, enter a number with more than 1 digit
findMaximalNumberDeletingOnlyOne(10) // finalResult: 1
findMaximalNumberDeletingOnlyOne(11) // finalResult: 1
findMaximalNumberDeletingOnlyOne(12) // finalResult: 2
findMaximalNumberDeletingOnlyOne(13) // finalResult: 3
findMaximalNumberDeletingOnlyOne(14) // finalResult: 4
findMaximalNumberDeletingOnlyOne(15) // finalResult: 5
findMaximalNumberDeletingOnlyOne(16) // finalResult: 6
findMaximalNumberDeletingOnlyOne(17) // finalResult: 7
findMaximalNumberDeletingOnlyOne(18) // finalResult: 8
findMaximalNumberDeletingOnlyOne(19) // finalResult: 9

findMaximalNumberDeletingOnlyOne(20) // finalResult: 2
findMaximalNumberDeletingOnlyOne(21) // finalResult: 2
findMaximalNumberDeletingOnlyOne(22) // finalResult: 2
findMaximalNumberDeletingOnlyOne(23) // finalResult: 3
findMaximalNumberDeletingOnlyOne(24) // finalResult: 4

findMaximalNumberDeletingOnlyOne(30) // finalResult: 3
findMaximalNumberDeletingOnlyOne(40) // finalResult: 4
findMaximalNumberDeletingOnlyOne(50) // finalResult: 5
findMaximalNumberDeletingOnlyOne(60) // finalResult: 6
findMaximalNumberDeletingOnlyOne(70) // finalResult: 7
findMaximalNumberDeletingOnlyOne(80) // finalResult: 8
findMaximalNumberDeletingOnlyOne(90) // finalResult: 9

findMaximalNumberDeletingOnlyOne(100) // finalResult: 10
findMaximalNumberDeletingOnlyOne(125) // finalResult: 25

findMaximalNumberDeletingOnlyOne(313) // finalResult: 33
findMaximalNumberDeletingOnlyOne(339) // finalResult: 39

findMaximalNumberDeletingOnlyOne(333) // finalResult: 33
findMaximalNumberDeletingOnlyOne(4444) // finalResult: 444
findMaximalNumberDeletingOnlyOne(55555) // finalResult: 5555

findMaximalNumberDeletingOnlyOne(1245) // finalResult: 245

findMaximalNumberDeletingOnlyOne(1000) // finalResult: 100
findMaximalNumberDeletingOnlyOne(1100) // finalResult: 110
findMaximalNumberDeletingOnlyOne(1110) // finalResult: 111

findMaximalNumberDeletingOnlyOne(95109) // finalResult: 9519