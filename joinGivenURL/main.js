// @ts-check
// This Javascript program Join all given URL segments together, then normalizes the resulting URL
const joinGivenURL = (...allValues) => {
 let joining = ""
 for (const x of allValues) {
  if (!x.endsWith("/")) {
   joining += `${x}/`
  }
 }

 let formatingOne = joining
  .replace(/(?<!\:)\/\//, "/")
  .replace(/\/(?=\?)/g, "")
  .replace(/(\/$)/, "")

 let lastFormat = formatingOne.split("?")

 let finalResult = lastFormat[0]
 for (let x = 1; x < lastFormat.length; x++) {
  if (x === 1) {
   finalResult += `?${lastFormat[x]}`
  } else {
   finalResult += `&${lastFormat[x]}`
  }
 }

 console.log('finalResult:', finalResult)
 return finalResult
}


joinGivenURL("https://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo")
// finalResult: https://www.google.com/a/b/cd?foo=123&bar=foo 
