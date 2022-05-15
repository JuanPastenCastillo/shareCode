// @ts-check
// This JavaScript program generate all permutations of a string with no duplicates
let finalResult = []
const allPermutationsStringNoDuplicate = (var1, var2 = "") => {
 if (var1.length === 0) {
  finalResult.push(var2)
 }

 for (let x = 0; x < var1.length; x++) {
  let rest = var1.substring(0, x) + var1.substring(x + 1)
  allPermutationsStringNoDuplicate(rest, var2 + var1[x])
 }
 /* 
 Thanks to "Koushik" for the code above
 https://youtu.be/5e3plF76dpo
 */
 return finalResult
}

/* 
You have to display one by one this follow execution of the funcion because if you use it with more than one at the time the arr "finalResult" will stack with the previous execution
*/
// console.log(allPermutationsStringNoDuplicate("abc")) // Array(6) [ "abc", "acb", "bac", "bca", "cab", "cba" ]
// console.log(allPermutationsStringNoDuplicate("let")) // Array(6) [ "let", "lte", "elt", "etl", "tle", "tel" ]
// console.log(allPermutationsStringNoDuplicate("abcd")) // Array(24) [ "abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", … ]
// console.log(allPermutationsStringNoDuplicate("abcde")) // Array(120) [ "abcde", "abced", "abdce", "abdec", "abecd", "abedc", "acbde", "acbed", "acdbe", "acdeb", … ]
// console.log(allPermutationsStringNoDuplicate("abcdef")) // Array(720) [ "abcdef", "abcdfe", "abcedf", "abcefd", "abcfde", "abcfed", "abdcef", "abdcfe", "abdecf", "abdefc", … ]
// console.log(allPermutationsStringNoDuplicate("abcdefgh")) // Array(40320) [ "abcdefgh", "abcdefhg", "abcdegfh", "abcdeghf", "abcdehfg", "abcdehgf", "abcdfegh", "abcdfehg", "abcdfgeh", "abcdfghe", … ]
// console.log(allPermutationsStringNoDuplicate("*$*")) // Array(6) [ "*$*", "**$", "$**", "$**", "**$", "*$*" ]
// console.log(allPermutationsStringNoDuplicate("*$°")) //Array(6) [ "*$°", "*°$", "$*°", "$°*", "°*$", "°$*" ]