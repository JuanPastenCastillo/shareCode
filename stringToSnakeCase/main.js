// @ts-check
// This JavaScript program convert a string to snake case
const stringToSnakeCase = (var1) => {
 let separateWithRegex = var1.match(
  /[A-Z][A-Z]*(?![a-z])|[A-Z][a-z]*|[a-z]*|[A-Za-z]*(?=_|-| )|(?<=_|-| )[A-Za-z]*/g
 )

 let formated = separateWithRegex
  .filter(x => x !== "")
  .join("-")
  .toLowerCase()

 console.log(formated)
 return formated
}


stringToSnakeCase("camelCase") // camel-case
stringToSnakeCase("some text") // some-text
stringToSnakeCase("some-mixed_sintrg With spaces_underscores-and-hypens_Plus-More") // some-mixed-sintrg-with-spaces-underscores-and-hypens-plus-more
stringToSnakeCase("allThe-small Things") // all-the-small-things
stringToSnakeCase("iAMListeningToFMWhileLoadingDifferentURLOnlyWithMyBrowserAndAlsoEditingSomeXMLAndHTML") // i-am-listening-to-fm-while-loading-different-url-only-with-my-browser-and-also-editing-some-xml-and-html