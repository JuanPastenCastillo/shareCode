// @ts-check
// This Javascript program find the shortest word and create a palindrome adding at the end of itself the shortest word in reverse
const shortestAndPalindromeString = (var1) => {
 let toArr = var1.split(" ").filter((x) => x !== "")

 let shortestWord = toArr.sort((a, b) => a.length - b.length)[0]

 let createPalindrome =
  shortestWord +
  shortestWord
   .split("")
   .sort((a, b) => a - b)
   .join("")
 console.log("createPalindrome:", createPalindrome)
 return createPalindrome
}

shortestAndPalindromeString("palindrome            with all words!") // createPalindrome: alllla
shortestAndPalindromeString("Creative syndrome parallax    ") // createPalindrome: CreativeevitaerC
shortestAndPalindromeString("Like and share!") // createPalindrome: anddna
