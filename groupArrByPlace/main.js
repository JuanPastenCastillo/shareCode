// @ts-check
// This JavaScript program create an array of elements, grouped based on the position in the original arrays
const groupArrByPlace = (var1, ...rest) => {
 let allValues = [var1, ...rest]

 let useObj = {}
 for (const x in allValues) {
  for (const y in allValues[x]) {
   useObj[y] = []
  }
 }

 for (const x in allValues) {
  for (const y in allValues[x]) {
   useObj[y].push(allValues[x][y])
  }
 }

 let allArr = []
 for (const x in useObj) {
  allArr.push(useObj[x])
 }
 console.dir("allArr:", allArr)
 return allArr
}

groupArrByPlace(["a", "b"], [1, 2], [true, false]) // [["a", 1, true], ["b", 2, false]]
groupArrByPlace(["a"], [1, 2], [true, false]) // [["a", 1, true], [2, false]]
groupArrByPlace(["a"], [1, 2, 3], [true, false]) // [["a", 1, true], [2, false], [3]]
groupArrByPlace(["a", "b", "c"], [1, 2], [true, false]) // [["a", 1, true], ["b", 2, false], ["c"]]
groupArrByPlace(["a", "b"], [1, 2], [true, false], ["one", "two", "three"]) // [["a", 1, true, "one"], ["b", 2, false, "two"], ["three"]] 
 
