//@ts-check

const practice = (
 var1 = "rgb",
 var2 = "hex",
 var3 = "hsl",
 var4 = "color keyword",
 var5 = "opacity or alpha",
 ...rest
) => {
 let rgbFormat = var1.match(/[0-9]*/g).filter((x) => x !== "")

 let RGBtoHSL
 let RGBtoHEX
 let HEXtoRGB
 let HEXtoHSL
 let HSLtoHEX
 let HSLtoRGB
 let ColorHEXtoRGB
 let ColorHEXtoHSL

 try {
  if (rgbFormat.length !== 3) {
   throw new Error(`RGB don't have three values, was: ${rgbFormat}`)
  }

  if (!rgbFormat.every((x) => Number(x) >= 0 && Number(x) <= 255)) {
   throw new Error(`RGB is outside the range, was: ${rgbFormat}`)
  }

  let RGBtoHSLGet = RGBtoHSLFunction(rgbFormat)

  RGBtoHSL = [
   Math.round(RGBtoHSLGet[0]),
   RGBtoHSLGet[1].toFixed(1),
   RGBtoHSLGet[2].toFixed(1),
  ]
  console.log("RGBtoHSL:", RGBtoHSL)

  RGBtoHEX = RGBtoHEXFunction(rgbFormat)
  console.log("RGBtoHEX:", RGBtoHEX)
 } catch (e) {
  console.log(e)
 }

 try {
  let separateHex = []
  let captureVar2 = var2.match(/[0-9A-Za-z]/g).join("")

  if (captureVar2.length !== 3 && captureVar2.length !== 6) {
   throw new Error(`The HEX value is not 3 or 6 length, was: "${captureVar2}"`)
  }

  if (captureVar2.length === 6) {
   for (let x = 0; x < 6; x += 2) {
    separateHex.push(captureVar2.slice(x, x + 2))
   }
  } else if (captureVar2.length === 3) {
   for (let x = 0; x < 3; x++) {
    separateHex.push(captureVar2.slice(x, x + 1))
   }
  }

  HEXtoRGB = HEXToRGBFunction(captureVar2)
  console.log("HEXtoRGB:", HEXtoRGB)

  HEXtoHSL = HEXtoHSLFunction(captureVar2)
  console.log("HEXtoHSL:", HEXtoHSL)
 } catch (e) {
  console.log(e)
 }

 let hslFormat = var3
  .match(/[0-9]*/g)
  .filter((x) => x !== "")
  .map((x) => Number(x))

 try {
  let finalHSLFormat = []
  if (hslFormat[0] <= 360 && hslFormat[0] >= 0) {
   finalHSLFormat.push(hslFormat[0])
  } else {
   throw new Error(`First value out of range, was: ${hslFormat[0]}`)
  }
  if (hslFormat[1] >= 0 && hslFormat[1] <= 100) {
   finalHSLFormat.push(hslFormat[1])
  } else {
   throw new Error(`Second value out of range, was: ${hslFormat[1]}`)
  }
  if (hslFormat[2] >= 0 && hslFormat[2] <= 100) {
   finalHSLFormat.push(hslFormat[2])
  } else {
   throw new Error(`Third value out of range, was: ${hslFormat[1]}`)
  }

  HSLtoHEX = hslToHexFunction(
   finalHSLFormat[0],
   finalHSLFormat[1],
   finalHSLFormat[2],
  )
  console.log("HSLtoHEX:", HSLtoHEX)

  HSLtoRGB = hslToRgbFunction(
   finalHSLFormat[0],
   finalHSLFormat[1],
   finalHSLFormat[2],
  )
  console.log("HSLtoRGB:", HSLtoRGB)
 } catch (e) {
  console.log(e)
 }

 try {
  var4 = var4.match(/[A-Za-z]+/g)[0]

  if (var4 !== "color keyword") {
   let nameAndHexColor = {
    black: "000000",
    silver: "c0c0c0",
    gray: "808080",
    white: "ffffff",
    maroon: "800000",
    red: "ff0000",
    purple: "800080",
    fuchsia: "ff00ff",
    green: "008000",
    lime: "00ff00",
    olive: "808000",
    yellow: "ffff00",
    navy: "000080",
    blue: "0000ff",
    teal: "008080",
    aqua: "00ffff",
    orange: "ffa500",
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    blanchedalmond: "ffebcd",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "lightcyan",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    oldlace: "fdf5e6",
    olivedrab: "6b8e23",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    whitesmoke: "f5f5f5",
    yellowgreen: "9acd32",
    rebeccapurple: "663399",
   }

   if (nameAndHexColor[var4] === undefined) {
    throw new Error(`"${var4}" not found`)
   }

   console.log(`Color: ${var4}`)

   ColorHEXtoRGB = HEXToRGBFunction(nameAndHexColor[var4])
   console.log(`${var4} to RGB:`, ColorHEXtoRGB)
   ColorHEXtoHSL = HEXtoHSLFunction(nameAndHexColor[var4])
   console.log(`${var4} to HSL:`, ColorHEXtoHSL)
  }
 } catch (e) {
  console.log(e)
 }

 let RGBtoHSLAlpha
 let RGBtoHEXAlpha
 let HEXtoRGBAlpha
 let HEXtoHSLAlpha
 let HSLtoHEXAlpha
 let HSLtoRGBAlpha
 let ColorHEXtoRGBAlpha
 let ColorHEXtoHSLAlpha

 try {
  if (var5 === "opacity or alpha") {
   throw new Error(`The value "${var5}" is not a number`)
  }
  if (Number(var5) < 0 || Number(var5) > 1) {
   throw new Error(`The value "${var5}" is not in the range: 0 and 1`)
  }

  if (RGBtoHSL.length === 0) {
   throw new Error("RGBtoHSL.length === 0")
  }

  if (RGBtoHEX === undefined) {
   throw new Error("RGBtoHEX === undefined")
  }

  if (HEXtoRGB === undefined) {
   throw new Error("HEXtoRGB === undefined")
  }

  if (HEXtoHSL === undefined) {
   throw new Error("HEXtoHSL === undefined")
  }

  if (HSLtoHEX === undefined) {
   throw new Error("HSLtoHEX === undefined")
  }

  if (HSLtoRGB === undefined) {
   throw new Error("HSLtoRGB === undefined")
  }

  if (ColorHEXtoRGB === undefined) {
   throw new Error("ColorHEXtoRGB === undefined")
  }

  if (ColorHEXtoHSL === undefined) {
   throw new Error("ColorHEXtoHSL === undefined")
  }

  RGBtoHSLAlpha = [...RGBtoHSL, var5]
  console.log("RGBtoHSLAlpha:", RGBtoHSLAlpha)

  RGBtoHEXAlpha = [...RGBtoHEX, addAlphaToHEX(var5)]
  console.log("RGBtoHEXAlpha:", RGBtoHEXAlpha)

  HEXtoRGBAlpha = { ...HEXtoRGB, Alpha: var5 }
  console.log("HEXtoRGBAlpha:", HEXtoRGBAlpha)

  HEXtoHSLAlpha = { ...HEXtoHSL, Alpha: var5 }
  console.log("HEXtoHSLAlpha:", HEXtoHSLAlpha)

  HSLtoHEXAlpha = HSLtoHEX + addAlphaToHEX(var5)
  console.log("HSLtoHEXAlpha:", HSLtoHEXAlpha)

  HSLtoRGBAlpha = [...HSLtoRGB, var5]
  console.log("HSLtoRGBAlpha:", HSLtoRGBAlpha)

  ColorHEXtoRGBAlpha = { ...ColorHEXtoRGB, Alpha: var5 }
  console.log("ColorHEXtoRGBAlpha:", ColorHEXtoRGBAlpha)

  ColorHEXtoHSLAlpha = { ...ColorHEXtoHSL, Alpha: var5 }
  console.log("ColorHEXtoHSLAlpha:", ColorHEXtoHSLAlpha)
 } catch (e) {
  console.log(e)
 }

 return [
  { RGBtoHSL: RGBtoHSL },
  { RGBtoHEX: RGBtoHEX },
  { HEXtoRGB: HEXtoRGB },
  { HEXtoHSL: HEXtoHSL },
  { HSLtoHEX: HSLtoHEX },
  { HSLtoRGB: HSLtoRGB },
  { ColorHEXtoRGB: ColorHEXtoRGB },
  { ColorHEXtoHSL: ColorHEXtoHSL },
  { RGBtoHSLAlpha: RGBtoHSLAlpha },
  { RGBtoHEXAlpha: RGBtoHEXAlpha },
  { HEXtoRGBAlpha: HEXtoRGBAlpha },
  { HEXtoHSLAlpha: HEXtoHSLAlpha },
  { HSLtoHEXAlpha: HSLtoHEXAlpha },
  { HSLtoRGBAlpha: HSLtoRGBAlpha },
  { ColorHEXtoRGBAlpha: ColorHEXtoRGBAlpha },
  { ColorHEXtoHSLAlpha: ColorHEXtoHSLAlpha },
 ]
}

const RGBtoHSLFunction = (...RGB) => {
 let captureRGB = [...RGB][0]
 let r = captureRGB[0] / 255
 let g = captureRGB[1] / 255
 let b = captureRGB[2] / 255
 const l = Math.max(r, g, b)
 const s = l - Math.min(r, g, b)
 const h = s
  ? l === r
    ? (g - b) / s
    : l === g
    ? 2 + (b - r) / s
    : 4 + (r - g) / s
  : 0
 return [
  60 * h < 0 ? 60 * h + 360 : 60 * h,
  100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
  (100 * (2 * l - s)) / 2,
 ]
}

const RGBtoHEXFunction = (...RGB) => {
 return [...RGB][0].map((x) => {
  x = parseInt(x).toString(16)
  return x.length === 1 ? `0${x}` : x
 })
}

const HEXToRGBFunction = (hex) => {
 let r = 0,
  g = 0,
  b = 0
 // handling 3 digit hex
 if (hex.length == 3) {
  r = "0x" + hex[0] + hex[0]
  g = "0x" + hex[1] + hex[1]
  b = "0x" + hex[2] + hex[2]
  // handling 6 digit hex
 } else if (hex.length == 6) {
  r = "0x" + hex[0] + hex[1]
  g = "0x" + hex[2] + hex[3]
  b = "0x" + hex[4] + hex[5]
  // r = "0x" + hex[1] + hex[2];
  // g = "0x" + hex[3] + hex[4];
  // b = "0x" + hex[5] + hex[6];
 }

 return {
  red: +r,
  green: +g,
  blue: +b,
 }
}

function HEXtoHSLFunction(hex) {
 if (hex.length === 3) {
  hex = hex
   .split("")
   .map((x) => x + x)
   .join("")
 }
 var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex)
 if (!result) {
  return null
 }
 var r = parseInt(result[1], 16)
 var g = parseInt(result[2], 16)
 var b = parseInt(result[3], 16)
 ;(r /= 255), (g /= 255), (b /= 255)
 var max = Math.max(r, g, b),
  min = Math.min(r, g, b)
 var h,
  s,
  l = (max + min) / 2
 if (max == min) {
  h = s = 0
 } else {
  var d = max - min
  s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  switch (max) {
   case r:
    h = (g - b) / d + (g < b ? 6 : 0)
    break
   case g:
    h = (b - r) / d + 2
    break
   case b:
    h = (r - g) / d + 4
    break
  }
  h /= 6
 }
 s = s * 100
 s = Math.round(s)
 l = l * 100
 l = Math.round(l)
 h = Math.round(360 * h)

 return {
  h: h,
  s: s,
  l: l,
 }
}

const hslToHexFunction = (h, s, l) => {
 l /= 100
 const a = (s * Math.min(l, 1 - l)) / 100
 const f = (n) => {
  const k = (n + h / 30) % 12
  const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  return Math.round(255 * color)
   .toString(16)
   .padStart(2, "0") // convert to Hex and prefix "0" if needed
 }
 return `#${f(0)}${f(8)}${f(4)}`
}

const hslToRgbFunction = (h, s, l) => {
 s /= 100
 l /= 100
 const k = (n) => (n + h / 30) % 12
 const a = s * Math.min(l, 1 - l)
 const f = (n) =>
  l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
 return [255 * f(0), 255 * f(8), 255 * f(4)].map((x) => Math.round(x))
}

const addAlphaToHEX = (opacity) => {
 // coerce values so ti is between 0 and 1.
 const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
 return _opacity.toString(16).toUpperCase()
}

console.dir(practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "wheat", ".5"))

// With this way you can display only the result that have some tranform
let toTry = practice(" 255 , 300, 1000 ", "	           #f0a").filter((x) => x[Object.keys(x)])
console.dir("toTry:", toTry)

console.log(practice(" 255 , 300, 1000 ", "	           #f0a"))
practice(" 255 , 300, 1000 ", "	           #f0fa")
practice(" 255 , 300, 1000 ", "	           #f0f")
practice(" 255 , , 1000 ", "	           #f0fa")
practice(" 255 , 200, 100 ", "	           #f0f")
practice(" 255 , 200, 100 ", "	           f0f")
practice(" 255 , 200, 100 ", "	           #34ae47   ")
practice(" 255 , 200, 100 ", "	           34ae47   ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   360,    100, 50  ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   360,    1000 ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   360,    1000, 100 ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "black")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "bla   ck       ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "black       ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "      steelblue       ")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "noExist")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "wheat", "0.5")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "wheat", ".5")
practice(" 255 , 200, 100 ", "	           34ae47   ", "   5,    90, 55 ", "wheat")

/* 
First parameter recibe RGB value and transform to HEX & HSL
Second parameter recibe HEX value and transform to RGB & HSL
Third parameter recibe HSL value and transform to HEX & RGB
Four parameter recibe color key name value and transform to HSL & RGB
Five parameter recibe alpha value and added to RGB, HSL, HEX & color key name values

The program have try catch code to not stop the execution if something is well typed later but not before


*/

/* 
Thanks to "Nippey" for the code: RGB to HEX
https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript

Thanks to "OSCC" for the code: RGB to HSL
https://www.30secondsofcode.org/js/s/rgb-to-hsl

Thanks to "AmitDiwan" for the code: HEX to RGB
https://www.tutorialspoint.com/hexadecimal-color-to-rgb-color-javascript

Thanks to "www.html-code-generator.com" for the code: HEX to HSL
https://www.html-code-generator.com/javascript/color-converter-script

Thanks to "icl7126" for the code: HSL to HEX
https://stackoverflow.com/a/44134328/13316519

Thanks to "30secondofcode" for the code: HSL to RGB
https://www.30secondsofcode.org/js/s/hsl-to-rgb

Thanks to "gomakethings" for the code: 3 digit hex to 6 digit hex
https://gomakethings.com/converting-a-color-from-a-three-digit-hexcolor-to-a-six-digit-hexcolor-with-vanilla-js/

*/
