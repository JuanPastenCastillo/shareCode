// @ts-check
// This JavaScript program remove the key-value pairs corresponding to the given keys from an object
const removeKeyValueInObject = (var1, var2) => {
 let copyObj = { ...var1 }

 for (let x = 0; x < var2.length; x++) {
  delete copyObj[var2[x]]
 }
 console.log('copyObj:', copyObj)
 return copyObj
}

removeKeyValueInObject({ a: 1, b: 2, c: 3 }, ["b"]) // copyObj: Object { a: 1, c: 3 }
removeKeyValueInObject({ a: 1, b: 2, c: 3 }, ["c"]) // copyObj: Object { a: 1, b: 2 }
