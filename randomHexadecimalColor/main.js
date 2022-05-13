// @ts-check
// This Javascript program create a random hexadecimal color code
const generateRandomNumber = () => {
 let thNumber = Math.floor(Math.random() * 10)

 let alphabet = "abcdef"
 let theLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

 let aleatory = Math.floor(Math.random() * 2)
 if (aleatory === 1) {
  return [theLetter, thNumber]
 }
 return [thNumber, theLetter]
}

// generateRandomNumber()

const generateHexadecimalColor = () => {
 let template = []

 for (let x = 0; x < 3; x++) {
  template.push(generateRandomNumber())
 }

 let finalResult = "#" + template.flat(Infinity).join("")
 console.log('finalResult:', finalResult)
 return finalResult
}

generateHexadecimalColor()
/* 
finalResult: #e4c90a 
finalResult: #4b6a7d
finalResult: #d56fc6

and so on...
*/

