// @ts-check
// This JavaScript program convert an amount to change
const changeToReturn = (var1, var2) => {
 let moneyToReturn = []
 
 for (let x = 0; x < var2.length; x++) {
  if(var2[x] <= var1){
   moneyToReturn.push(var2[x])
   var1 -= var2[x]
   x--
  }
 }
 console.log('moneyToReturn:', moneyToReturn)
 return moneyToReturn
 
}

let typeOfChange = [25, 10, 5, 2, 1]

changeToReturn(46, typeOfChange) // Array(4) [ 25, 10, 10, 1 ]
changeToReturn(48, typeOfChange) // Array(5) [ 25, 10, 10, 2, 1 ]
changeToReturn(43, typeOfChange) // Array(5) [ 25, 10, 5, 2, 1 ]
changeToReturn(0, typeOfChange) // Array [ ]