// @ts-check
// This JavaScript program flatten an object with the paths for keys
const flattenObject = (var1) => {
 let toReturn = {}

 for (const x in var1) {
  if (!var1.hasOwnProperty(x)) continue

  if (typeof var1[x] === "object" && var1[x] !== null) {
   let flatObject = flattenObject(var1[x])
   for (const y in flatObject) {
    if (!flatObject.hasOwnProperty(y)) continue

    toReturn[x + "." + y] = flatObject[y]
   }
  } else {
   toReturn[x] = var1[x]
  }
 }

 return toReturn
}

const obj = {
 a: {
  b: {
   c: 1,
  },
 },
 d: 1,
}

console.log(flattenObject(obj)) // Object {"a.b.c": 1, d:1}
/* 
Thanks to "Muthukrishnan" for all the code
https://stackoverflow.com/a/53739792/13316519

*/