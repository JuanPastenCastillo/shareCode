// @ts-check
// This JavaScript program find the first not repeated character
const firstLetterNotRepeated = (var1) => {
 let toArr = var1.split("").sort()

 let duplicates = {}
 for (const x of toArr) {
  duplicates[x] = []
 }

 for (const x of toArr) {
  duplicates[x].push(1)
 }

 let finalObj = {}
 for (const x in duplicates) {
  if (duplicates[x].length === 1) {
   finalObj[x] = "not repeated"
   console.log('finalObj:', finalObj)
   return finalObj
  }
 }

 finalObj["not found"] = "every string repeated at least one time"
 console.log('finalObj:', finalObj)
 return finalObj
}

firstLetterNotRepeated("zzzabacdeccbyyet") // Object { d: "not repeated" }
firstLetterNotRepeated("a") // Object { a: "not repeated" }
firstLetterNotRepeated("aa") // Object { "not found": "every string repeated at least one time" }
