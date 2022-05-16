// @ts-check
// This JavaScript program convert a number in bytes to a human-readable string
const bytesNumberToHumanReadable = (var1, var2, var3) => {
 if (var1 >= 9007199254740991) {
  console.log(`❌ This is beyond the capability of javascript. Value was "${var1}"`)
  return
 }

 let howMuchBytes
 if (var1 > 0) {
  howMuchBytes = var1 / 1024
 } else {
  howMuchBytes = Math.abs(var1 / 1024)
 }

 let finalResult
 let acronym
 if (howMuchBytes < 1024) {
  // KB
  finalResult = var1 / 1024
  acronym = "kilobyte"
 } else if (howMuchBytes < 1048576) {
  // MB
  finalResult = var1 / 1048576
  acronym = "megabyte"
 } else if (howMuchBytes < 1073741824) {
  // GB
  finalResult = var1 / 1073741824
  acronym = "gigabyte"
 } else if (howMuchBytes < 1099511627776) {
  // TB
  finalResult = var1 / 1099511627776
  acronym = "terabyte"
 } else if (howMuchBytes < 1125899906842624) {
  // PB
  finalResult = var1 / 1125899906842624
  acronym = "petabyte"
 }

 let formatting = String(finalResult).split(".")
 let firstPart = formatting[0].split("")

 let secondPart =
  formatting[1] !== undefined ? formatting[1].split("") : undefined

 let formattedFirstPart = []
 for (let x = 0; x < firstPart.length; x++) {
  if (firstPart[x] === "-") {
   formattedFirstPart.push("-")
  } else {
   formattedFirstPart.push(firstPart[x])
   var2--
  }
 }

 if (var2 > 0 && secondPart !== undefined) {
  let checkAllZeros = []
  for (let x = 0; x < var2; x++) {
   checkAllZeros.push(secondPart[x])
  }
  checkAllZeros.every((x) => x === "0")
   ? false
   : formattedFirstPart.push(...[".", ...checkAllZeros])
 }

 let resultFormatted = formattedFirstPart.join("")

 if (var3 === false) {
  console.log(`"${var1}" byte = "${resultFormatted}${acronym}"`)
  return `${resultFormatted}${acronym}`
 } else {
  console.log(`"${var1}" byte = "${resultFormatted} ${acronym}"`)
  return `${resultFormatted}${acronym}`
 }
}

bytesNumberToHumanReadable(1000, 4) // "1000" byte = "0.976 kilobyte"
bytesNumberToHumanReadable(1023, 4) // "1023" byte = "0.999 kilobyte"
bytesNumberToHumanReadable(1023, 2) // "1023" byte = "0.9 kilobyte"
bytesNumberToHumanReadable(1024) // "1024" byte = "1 kilobyte"
bytesNumberToHumanReadable(1025) // "1025" byte = "1 kilobyte"
bytesNumberToHumanReadable(1025, 5) // "1025" byte = "1.0009 kilobyte"
bytesNumberToHumanReadable(1026) // "1026" byte = "1 kilobyte"
bytesNumberToHumanReadable(1026, 4, false) // "1026" byte = "1.001kilobyte"
bytesNumberToHumanReadable(1026, 4) // "1026" byte = "1.001 kilobyte"

bytesNumberToHumanReadable(1048575) // "1048575" byte = "1023 kilobyte"
bytesNumberToHumanReadable(1048576) // "1048576" byte = "1 megabyte"
bytesNumberToHumanReadable(1048577) // "1048577" byte = "1 megabyte"

bytesNumberToHumanReadable(84559721) // "84559721" byte = "80 megabyte"

bytesNumberToHumanReadable(1073741111) // "1073741111" byte = "1023 megabyte"
bytesNumberToHumanReadable(1073741824) // "1073741824" byte = "1 gigabyte"

bytesNumberToHumanReadable(1999999999) // "1999999999" byte = "1 gigabyte"

bytesNumberToHumanReadable(1099511627775) // "1099511627775" byte = "1023 gigabyte" 


bytesNumberToHumanReadable(1099511627776) // "1099511627776" byte = "1 terabyte" 
bytesNumberToHumanReadable(1999999999999) // "1999999999999" byte = "1 terabyte"

bytesNumberToHumanReadable(1125899906842623) // "1125899906842623" byte = "1023 terabyte" 
bytesNumberToHumanReadable(1125899906842624) // "1125899906842624" byte = "1 petabyte" 
bytesNumberToHumanReadable(1999999999999999) // "1999999999999999" byte = "1 petabyte"

bytesNumberToHumanReadable(9007199254740990) // "9007199254740990" byte = "7 petabyte" 

bytesNumberToHumanReadable(9007199254740991) // ❌ This is beyond the capability of javascript. Value was "9007199254740991"

bytesNumberToHumanReadable(-27145424323.5821, 5) // "-27145424323.5821" byte = "-25.281 gigabyte" 
bytesNumberToHumanReadable(-27145424323.5821, 3) // "-27145424323.5821" byte = "-25.2 gigabyte"

bytesNumberToHumanReadable(-27145424323) // "-27145424323" byte = "-25 gigabyte"
bytesNumberToHumanReadable(-27145424323, 5) // "-27145424323" byte = "-25.281 gigabyte" 
bytesNumberToHumanReadable(-27145424323, 2) // "-27145424323" byte = "-25 gigabyte"
bytesNumberToHumanReadable(-27145424323, 1) // "-27145424323" byte = "-25 gigabyte"

bytesNumberToHumanReadable(123456789, 3, false) // "123456789" byte = "117megabyte"

bytesNumberToHumanReadable(123456789, 5) // "123456789" byte = "117.73 megabyte"

/* 
Mar 31
*/
