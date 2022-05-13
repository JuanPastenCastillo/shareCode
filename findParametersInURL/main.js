// @ts-check
// This Javascript program get in object the parameters of an URL
const findParametersInURL = (var1) => {
 let toArr = var1.split("?")

 if (toArr.length === 1) {
  console.log({}, undefined)
  return undefined
 }

 let separateFirst = toArr[1].split("&")
 let separateSecond = separateFirst.map((x) => x.split("="))

 let finalResult = {}
 for (const [index, value] of separateSecond) {
  finalResult[index] = value
 }
 console.log("finalResult:", finalResult)
 return finalResult
}

findParametersInURL("https://url.com/page?name=Adam&surname=Smith") // Object { name: "Adam", surname: "Smith" }

findParametersInURL(
 "https://www.google.com/search?q=found+something&source=hp&ei=NOF-YonnFIuH5OUPgpyUoAE&iflsig=AJiK0e8AAAAAYn7vREdPTQHbidkgGqVq_x95m3oKnZJ0&ved=0ahUKEwiJ0eO-yN33AhWLA7kGHQIOBRQQ4dUDCAY&uact=5&oq=found+something&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsILhCABBDHARDRAzoLCC4QgAQQxwEQowI6CAguEIAEENQCOgQIABAKOgcIABCABBAKOgsILhCABBDHARCvAVAAWPULYLAMaABwAHgAgAFyiAGCCZIBBDExLjOYAQCgAQE&sclient=gws-wiz",
)
/* 
{
  "q": "found+something",
  "source": "hp",
  "ei": "NOF-YonnFIuH5OUPgpyUoAE",
  "iflsig": "AJiK0e8AAAAAYn7vREdPTQHbidkgGqVq_x95m3oKnZJ0",
  "ved": "0ahUKEwiJ0eO-yN33AhWLA7kGHQIOBRQQ4dUDCAY",
  "uact": "5",
  "oq": "found+something",
  "gs_lcp": "Cgdnd3Mtd2l6EAMyBQguEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsILhCABBDHARDRAzoLCC4QgAQQxwEQowI6CAguEIAEENQCOgQIABAKOgcIABCABBAKOgsILhCABBDHARCvAVAAWPULYLAMaABwAHgAgAFyiAGCCZIBBDExLjOYAQCgAQE",
  "sclient": "gws-wiz"
}
*/

findParametersInURL("https://javascript.info/search/?query=algorithm&type=article") // Object { query: "algorithm", type: "article" }

findParametersInURL("google.com") // Object {  } undefined

findParametersInURL("developer.mozilla.org") // Object {  } undefined
