// @ts-check
// This JavaScript program remove HTML/XML tags from string
const removeHTMLandXML = (var1) => {
 let finalResult = var1.match(/(?<=\>)[A-Za-z0-9].+?(?=\<)/g).join("")
 console.log('finalResult:', finalResult)
 return finalResult
}


removeHTMLandXML("<p><em>Lorem</em> <strong>ipsum</strong></p>") // finalResult: Loremipsum
removeHTMLandXML("<h1>224</h1>") // finalResult: 224
removeHTMLandXML("<title>Pratice Now</title>") // finalResult: Pratice Now
removeHTMLandXML("<p>This Javascript program remove HTML and XML tags form string</p>") // finalResult: This Javascript program remove HTML and XML tags form string
removeHTMLandXML("<body><h1>55</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, perspiciatis omnis eum possimus illo velit recusandae consequuntur impedit quibusdam, tempora, fugiat cupiditate. Blanditiis laudantium unde eveniet culpa hic placeat nobis.</p><script src='./main.js'></script></body>") // finalResult: 55Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, perspiciatis omnis eum possimus illo velit recusandae consequuntur impedit quibusdam, tempora, fugiat cupiditate. Blanditiis laudantium unde eveniet culpa hic placeat nobis.
