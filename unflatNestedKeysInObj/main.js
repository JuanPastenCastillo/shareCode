// @ts-check
// This Javascript program unflat nested keys; keep flat singles keys
const unflatNestedKeysInObj = (var1) => {
 let getKeys = Object.keys(var1)
 let getValues = Object.values(var1)

 let singleAndMultiple = { "1 multiple": [], "2 single": [] }
 for (const x in getKeys) {
  if (getKeys[x].split(".").length === 1) {
   singleAndMultiple["2 single"].push(getKeys[x], getValues[x])
  } else {
   singleAndMultiple["1 multiple"].push(getKeys[x], getValues[x])
  }
 }

 let getMultiple = singleMultiple(singleAndMultiple["1 multiple"], true)
 let getSingle = singleMultiple(singleAndMultiple["2 single"], false)

 let finalResult = [...getMultiple, ...getSingle]
 console.dir('finalResult:', finalResult)
 return finalResult
}

const singleMultiple = (whatArr, isMultiple) => {
 if (isMultiple === true) {
  let onlyMultiples = []
  for (let x = 0; x < whatArr.length; x += 2) {
   onlyMultiples.push(whatArr.slice(x, x + 2))
  }
  let multiplesKeys = onlyMultiples.map(x => x[0].split("."))
  let multipleValues = onlyMultiples.map(x => x[1])

  let objFinalMultiple = {}
  for (let x = 0; x < multiplesKeys.length; x++) {
   multiplesKeys[x].reduceRight((prev, curr) => {
    let obj = {}
    obj[curr] = prev
    objFinalMultiple[x] = { ...obj }
    return obj
   }, multipleValues[x])
  }

  let objMultipleToArr = Object.values(objFinalMultiple)
  return objMultipleToArr
 }

 let onlySingles = []
 for (let x = 0; x < whatArr.length; x += 2) {
  onlySingles.push(whatArr.slice(x, x + 2))
 }

 let objFinalSingle = {}
 for (let x = 0; x < Object.keys(onlySingles).length; x++) {
  onlySingles[x].reduce((prev, curr) => {
   let obj = {}
   obj[prev] = curr
   objFinalSingle[x] = { ...obj }
   return obj
  })
 }

 let finalSingleToArr = Object.values(objFinalSingle)
 return finalSingleToArr
}

unflatNestedKeysInObj({ "a.b.c": 1, d: 99 })
/* 
[
 {
  "a": {
   "b": {
    "c": 1
   }
  }
 },
 {
  "d": 99
 }
] 
*/

unflatNestedKeysInObj({ "a.b.c": 1, z: 99, "d.e.f.g.h": 22, "singleKey": 88, "otherSingleKey": 55 })
/* 
[
 {
  "a": {
   "b": {
    "c": 1
   }
  }
 },
 {
  "d": {
   "e": {
    "f": {
     "g": {
      "h": 22
     }
    }
   }
  }
 },
 {
  "z": 99
 },
 {
  "singleKey": 88
 },
 {
  "otherSingleKey": 55
 }
]
*/
