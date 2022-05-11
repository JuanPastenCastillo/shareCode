// @ts-check
// This JavaScript program find the maximal difference between any two adjacent elements of a given array of integers.
const differenceBetweenAllPairs = (var1) => {
 let allCombinations = []
 for (const x of var1) {
  for (const y of var1) {
   allCombinations.push([x, y])
  }
 }
 let maped = allCombinations.map((x, i, arr) => arr[i][0] - arr[i][1])

 let foundMax = Math.max(...maped)
 let findIndexMaxDifference = maped.indexOf(foundMax)

 let finalAnswer = `Number substracted: "${allCombinations[findIndexMaxDifference][0]}" - "${allCombinations[findIndexMaxDifference][1]}" | Highest difference: "${foundMax}"`
 console.log("finalAnswer:", finalAnswer)
 return finalAnswer
}

differenceBetweenAllPairs([2, 30, 44, 7, 99, 1, 150, 301]) // finalAnswer: Number substracted: "301" - "1" | Highest difference: "300"
differenceBetweenAllPairs([1, 10, 999, 12]) // finalAnswer: Number substracted: "999" - "1" | Highest difference: "998"