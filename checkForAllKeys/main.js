// @ts-check
// This JavaScript program check if the predicate (second argument) is truthy on all elements of a collection (first argument).
const checkForAllKey = (var1, var2) => {
 let getKeys = new Set()
 for (const x of var1) {
  getKeys.add(Object.keys(x).join(" "))
 }
 
 let foundKey = true
 for (const x of getKeys) {
  let foundWithReg = new RegExp(var2)
  if(foundWithReg.test(x) === false){
   foundKey = false
   break
  }
 }
 
 if(foundKey){
  console.log(`✅ Key "${var2}" found it in all keys`);
  return true
 } else {
  console.log(`❌ Key "${var2}" not found it in all keys`);
  return false
 }
}

checkForAllKey([
 { user: "bob", sex: "Male" },
 { user: "Ash", sex: "female" }
],
 "sex") // ✅ Key "${var2}" found it
 
checkForAllKey([
 { user: "bob", sex: "Male" },
 { user: "Ash", city: "Oslo" }
],
 "sex") // ❌ Key "${var2}" not found it
 
checkForAllKey([
 { user: "bob", country: "Norway" },
 { user: "Ash", sex: "female" }
],
 "sex") // ❌ Key "${var2}" not found it

checkForAllKey([
 { user: "bob", sex: "Male" },
 { user: "Ash", sex: "female" }
],
 "city") // ❌ Key "${var2}" not found it
