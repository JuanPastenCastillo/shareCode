// @ts-check
// In this javascript program two number will sum like this:
// 222 + 911 = (2+9) + (2+1) + (2+1) = (1)+(3)+(3) = 133
// 3576 + 210 = (3+0) + (5+2) + (7+1) + (6+0) = (3)+(7)+(8)+(6) = 3786
// 357 + 5471 = (0+5) + (3+4) + (5+7) + (7+1) = (5)+(7)+(2)+(8) = 5728
const sumUnits = (var1, var2,) => {
 let toArr1 = String(var1).split("").map(x => Number(x))
 let toArr2 = String(var2).split("").map(x => Number(x))

 if (toArr1.length > toArr2.length) {
  let forHowMuch = toArr1.length - toArr2.length
  for (let x = 0; x < forHowMuch; x++) {
   toArr2.unshift(0)
  }
 }

 if (toArr1.length < toArr2.length) {
  let forHowMuch = toArr2.length - toArr1.length
  for (let x = 0; x < forHowMuch; x++) {
   toArr1.unshift(0)
  }
 }

 let alreadySum = []
 for (let x = 0; x < toArr1.length; x++) {
  alreadySum.push((toArr1[x] + toArr2[x]) % 10)
 }
 // console.log('alreadySum:', alreadySum)
 
 let finalResult = alreadySum.join("")
 console.log('finalResult:', finalResult)
 return finalResult
}

sumUnits(222, 911) // 133
sumUnits(291, 210) // 401
sumUnits(3576, 210) // 3786
sumUnits(357, 5471) // 5728
