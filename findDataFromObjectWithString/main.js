// @ts-check
// This Javascript program found the value inside an object with string. Values not found return undefined
const findDataFromObjectWithString = (var1, ...rest) => {
 let copyVar1 = JSON.parse(JSON.stringify(var1))

 let toSearch = [...rest]

 let foundAllCharacters = []
 for (const x of toSearch) {
  foundAllCharacters.push(x.match(/\d|\./g))
 }

 let searchWithoutFound = []
 for (let x = 0; x < toSearch.length; x++) {
  searchWithoutFound.push(
   toSearch[x]
    .replaceAll(/\[\w\]|\./g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .split(" "),
  )
 }

 let objToStock = {}
 for (const x of toSearch) {
  objToStock[x] = []
 }

 for (let x = 0; x < searchWithoutFound.length; x++) {
  for (let y = 0; y < foundAllCharacters[x].length + 1; y++) {
   if (
    foundAllCharacters[x][y] === "." ||
    (foundAllCharacters[x][y] === undefined &&
     searchWithoutFound[x][y] !== undefined)
   ) {
    objToStock[toSearch[x]].push(searchWithoutFound[x][y])
   } else if (searchWithoutFound[x][y] !== undefined) {
    objToStock[toSearch[x]].push(
     searchWithoutFound[x][y],
     foundAllCharacters[x][y],
    )
   }
  }
 }

 let finalResult = []
 for (let x = 0; x < toSearch.length; x++) {
  let toUseValues
  for (let y = 0; y < objToStock[toSearch[x]].length; y++) {
   if (toUseValues === undefined) {
    toUseValues = copyVar1[objToStock[toSearch[x]][y]]
   } else {
    toUseValues = toUseValues[objToStock[toSearch[x]][y]]
   }
  }
  finalResult.push(toUseValues)
 }
 console.log("finalResult:", finalResult)
 return finalResult
}
const obj = {
 selector: { to: { val: "val to select" } },
 target: [1, 2, { a: "test" }],
 newCategory: [0, 1, { country: "Chile", profession: "programmer" }],
}

findDataFromObjectWithString(
 obj,
 "selector.to.val",
 "target[0]",
 "target[2].a",
 "nonExistingInObj[2].country",
 "nonExistEither[0]",
 "newCategory[2].country",
 "newCategory[2].profession",
)
/* 
finalResult: 
Array(7) [ "val to select", 1, "test", undefined, undefined, "Chile", "programmer" ]
*/
