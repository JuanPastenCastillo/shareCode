// @ts-check
// This JavaScript program find the maximal difference between any two adjacent elements of a given array of integers.
const findMaximalDifference = (var1) => {
 let maxDifference = []
 var1.forEach((val, i, arr) => {
  maxDifference.push(Math.abs(val - arr[i + 1]))
 })

 let filterContainer = maxDifference.filter((x) => !Number.isNaN(x))

 let highestDifference = Math.max(...filterContainer)
 let numberRested = filterContainer.findIndex((x) => x === highestDifference)

 let finalAnswer = `The highest difference is "${highestDifference}", between "${var1[numberRested]}" and "${var1[numberRested + 1]}"`
 console.log("finalAnswer:", finalAnswer)
 return finalAnswer
}

findMaximalDifference([2, 30, 44, 7, 10]) // finalAnswer: The highest difference is "37", between "44" and "7" 
findMaximalDifference([9, 10, 999, 12, 20, 99]) // finalAnswer: The highest difference is "989", between "10" and "999" 