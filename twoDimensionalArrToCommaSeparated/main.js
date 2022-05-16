// @ts-check
// This JavaScript program convert a 2D array to a comma-separated values (CSV) string
const twoDimensionalArrToCommaSeparated = (var1, var2) => {
 let finalResult = var1.map((x) => x.map((y) => `"${y}"`).join(var2)).join("\n")
 console.log("finalResult:", finalResult)
 return finalResult
}

twoDimensionalArrToCommaSeparated([
 ["a", "b"],
 ["c", "d"],
])
/* 
"a","b"
"c","d"
*/

twoDimensionalArrToCommaSeparated(
 [
  ["a", "b"],
  ["c", "d"],
 ],
 ";",
)
/* 
"a";"b"
"c";"d" 
*/
