// @ts-check
// This JavaScript program get the human readable format of the given number of milliseconds
const milliseconsToHumanReadable = (var1) => {
 let millisecons = (var1 % 1000)
 let secons = Math.floor((var1 / 1000) % 60)
 let minutes = Math.floor((var1 / (1000 * 60)) % 60)
 let hours = Math.floor((var1 / (1000 * 60 * 60)) % 24)
 let days = Math.floor((var1 / (1000 * 60 * 60 * 24)))

 let displayFinal = whichDisplay(days, hours, minutes, secons, millisecons)
 console.log('displayFinal:', displayFinal)
 return displayFinal
}

const whichDisplay = (...allValues) => {
 if (allValues[0] > 0) {
  return `${allValues[0]} days, ${allValues[1]} hours, ${allValues[2]} minutes, ${allValues[3]} secons, ${allValues[4]} millisecons`
 }

 if (allValues[1] > 0) {
  return `${allValues[1]} hours, ${allValues[2]} minutes, ${allValues[3]} secons, ${allValues[4]} millisecons`
 }

 if (allValues[2] > 0) {
  return `${allValues[2]} minutes, ${allValues[3]} secons, ${allValues[4]} millisecons`
 }

 if (allValues[3] > 0) {
  return `${allValues[3]} secons, ${allValues[4]} millisecons`
 }

 if (allValues[4] > 0) {
  return `${allValues[4]} millisecons`
 }
}

milliseconsToHumanReadable(999) // displayFinal: 999 millisecons
milliseconsToHumanReadable(1000) // displayFinal: 1 secons, 0 millisecons
milliseconsToHumanReadable(1001) // displayFinal: 1 secons, 1 millisecons
milliseconsToHumanReadable(1901) // displayFinal: 1 secons, 901 millisecons
milliseconsToHumanReadable(1999) // displayFinal: 1 secons, 999 millisecons
milliseconsToHumanReadable(6099) // displayFinal: 6 secons, 99 millisecons
milliseconsToHumanReadable(34325055574) // displayFinal: 397 days, 6 hours, 44 minutes, 15 secons, 574 millisecons
milliseconsToHumanReadable(31536000000) // displayFinal: 365 days, 0 hours, 0 minutes, 0 secons, 0 millisecons



