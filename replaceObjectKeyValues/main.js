// @ts-check
// This JavaScript program replace the names of multiple object keys with the values provided
const replaceObjectKeyValues = (var1, var2) => {
 let entriesOne = Object.entries(var1)
 let entriesTwo = Object.entries(var2)

 let getAllData = []
 for (const x of entriesOne) {
  for (const y of entriesTwo) {
   if (x[0] === y[0]) {
    getAllData.push(x[1], y[1])
    entriesTwo.shift()
   }
   entriesOne.shift()
  }
 }

 if (entriesTwo.length > 0) {
  for (const x of entriesTwo) {
   getAllData.push(...x)
  }
 }

 if (entriesOne.length > 0) {
  for (const x of entriesOne) {
   getAllData.push(...x)
  }
 }

 let dataFormatted = []
 for (let x = 0; x < getAllData.length; x += 2) {
  dataFormatted.push(getAllData.slice(x, x + 2))
 }

 let finalResult = Object.fromEntries(dataFormatted)
 console.log("finalResult:", finalResult)
 return finalResult
}

replaceObjectKeyValues(
 {
  name: "firstName",
  job: " Actor",
 },
 {
  name: "Bobo",
  job: "Programmer",
  shoeSize: 100,
 },
)
/* 
Object { firstName: "Bobo", job: "Programmer", shoeSize: 100 }
*/

replaceObjectKeyValues(
 {
  name: "firstName",
  job: " Actor",
  prety: true,
 },
 {
  name: "Genius",
  job: "Astronaut",
 },
)
/* 
Object { firstName: "Genius", job: "Astronaut", prety: true }
*/