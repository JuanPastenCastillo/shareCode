// @ts-check
// This JavaScript program convert a string from camelcase
const camelCaseSeparate = (var1, var2) => {
 let finalResult = var1
  .match(/[A-Z][a-z]+|[a-z]+/g)
  .filter(x => x !== "")
  .map(x => x.toLowerCase())
  .join(var2)
  
 console.log('finalResult:', finalResult)
 return finalResult
}

camelCaseSeparate("someDatabaseFieldName", " ") // finalResult: some database field name
camelCaseSeparate("someLabelThatNeedsToBeChanged", "-") // finalResult: some-label-that-needs-to-be-changed
camelCaseSeparate("someStringWithThisValue", "_") // finalResult: some_string_with_this_value

