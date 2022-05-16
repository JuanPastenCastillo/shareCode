// @ts-check
// This JavaScript program create a new object from the combination of two or more objects
const combineValuesWithoutRepeatingKeys = (var1, var2, ...rest) => {
 let allKeys = [...Object.keys(var1), ...Object.keys(var2)]
 let allValues = [...Object.values(var1), ...Object.values(var2)]
 let allRest = [...rest]

 for (const x of allRest) {
  allKeys.push(...Object.keys(x))
  allValues.push(...Object.values(x))
 }

 let finalObj = {}
 for (const x in allKeys) {
  finalObj[allKeys[x]] = []
 }

 for (const x in allKeys) {
  if (toString.call(allValues[x]) === "[object Array]") {
   finalObj[allKeys[x]].push(...allValues[x])
  } else {
   finalObj[allKeys[x]].push(allValues[x])
  }
 }

 for (const x in finalObj) {
  if (finalObj[x].length === 1) {
   let toUseOnlyHere = finalObj[x].join("")
   finalObj[x] = toUseOnlyHere
  }
 }

 console.dir("finalObj:", finalObj)
 return finalObj
}

const first = {
 a: [{ x: 2 }, { y: 4 }],
 b: 1,
}

const second = {
 a: { z: 3 },
 b: [2, 3],
 c: "foo",
}

const third = {
 a: 99,
 b: 88,
 c: "something more",
 d: ["55"],
}

const four = {
 d: 55,
 a: [22],
 b: { youCan: 66 },
 c: { youCanToo: 77 },
}

const fifth = {
 z: "important quote here",
}

const sixth = {
 zz: "Wim Hof Method",
 xx: "Patrick McKeown",
}

combineValuesWithoutRepeatingKeys(first, second, third, four, fifth, sixth)
/* {
 "a": [
   {
     "x": 2
   },
   {
     "y": 4
   },
   {
     "z": 3
   },
   99,
   22
 ],
 
 "b": [
   1,
   2,
   3,
   88,
   {
     "youCan": 66
   }
 ],
 
 "c": [
   "foo",
   "something more",
   {
     "youCanToo": 77
   }
 ],
 
 "d": [
   "55",
   55
 ],
 
 "z": "important quote here",
 "zz": "Wim Hof Method",
 "xx": "Patrick McKeown"
} 
*/