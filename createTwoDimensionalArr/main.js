// @ts-check
// This Javascript program create a two dimensional array with a given eidth, heigh and value. In detail:
// 1° argument declare how much values have to bbe inside every array
// 2° argument declare how much arrays will be in total
// 3° argument declare what number have to be inside the arr
const createTwoDimensionalArr = (...allValues) => {
 let getAllValues = [...allValues]
 // console.log('getAllValues:', getAllValues)

 let toArr = Array(getAllValues[1]).fill([])
 // console.log('toArr:', toArr)

 for (let x = 0; x < toArr.length; x++) {
  for (let y = 0; y < getAllValues[0]; y++) {
   toArr[x].push(getAllValues[2])
  }
  break
 }

 console.dir("toArr:", toArr)
 return toArr
}

createTwoDimensionalArr(2, 2, 0) // [[0, 0], [0, 0]]
createTwoDimensionalArr(3, 3, 3) // [[3, 3, 3], [3, 3, 3], [3, 3, 3]]
createTwoDimensionalArr(2, 4, 99) // [[99, 99], [99, 99], [99, 99], [99, 99]]
createTwoDimensionalArr(3, 2, 55) // [[55, 55, 55], [55, 55, 55]]
