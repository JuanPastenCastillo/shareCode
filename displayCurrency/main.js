// @ts-check
// This JavaScript program create a specified currency formatting from a given number
const displayCurrency = (var1, var2, var3) => {
 let theLocal = var3 || undefined
 let theOptions = { style: "currency", currency: var2 }
 
 let useIntl = new Intl.NumberFormat(theLocal, theOptions).format(var1)
 console.log(useIntl)
 return useIntl
}

displayCurrency(123456.789, "EUR") // €123,456.79
displayCurrency(123456.789, "USD", "en-us") // $123,456.79
displayCurrency(123456.789, "USD", "fa") // $۱۲۳٬۴۵۶٫۷۹
displayCurrency(123456.789, "JPY") // ¥123,457
displayCurrency(123456.789, "JPY", "fi") // 123 457 ¥
displayCurrency(123456.789, "NOK") // NOR 123,456.79
displayCurrency(123456.789, "AUD") // A$123,456.79
displayCurrency(123456.789, "CLP") // CLP 123,456.79
