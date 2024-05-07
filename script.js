const convertButton = document.querySelector(".convertButton")
const convertSelect = document.querySelector(".convertSelect")

function convertValues(){
    const inputConvertValue = document.querySelector(".inputConvert").value
    const realValueToConvert = document.querySelector(".realValueToConvert")//valor para converter
    const otherValueConvert = document.querySelector(".otherValueConvert")//valor convertido
    
    console.log(convertSelect.value)
    const dolarToday = 5.1
    const euroToday = 5.47
    const australianoToday = 3.36
    const canadaToday = 3.71
    const francoToday = 5.6
    const ieneToday = 0.033
    const libraToday = 6.38
    const liraToday = 0.16
    const pesoToday = 0.05
    const wonToday = 0.037
    const yuanToday = 0.72

    if(convertSelect.value == "dolar"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(inputConvertValue / dolarToday)

    }
    if(convertSelect.value == "euro"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(inputConvertValue / euroToday)

    }
    if(convertSelect.value == "dolcanad"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("ca-CA", {
            style: "currency", 
            currency: "CAD"
        }).format(inputConvertValue / canadaToday)
    }

    if(convertSelect.value == "dolaustral"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("au-AU", {
            style: "currency", 
            currency: "AUD"
        }).format(inputConvertValue / australianoToday)
    }

    if(convertSelect.value == "franco"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("li-LI", {
            style: "currency",
            currency: "CHF"
        }).format(inputConvertValue / francoToday)
    }

    if(convertSelect.value == "iene"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputConvertValue / ieneToday)
    }
    if(convertSelect.value == "libra"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("sf-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputConvertValue / libraToday)
    }

    if(convertSelect.value == "liraturca"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(inputConvertValue / liraToday)
    }

    if(convertSelect.value == "peso"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("ar-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputConvertValue / pesoToday)
    }
    if(convertSelect.value == "won"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("kr-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputConvertValue / wonToday)
    }
    if(convertSelect.value == "yuan"){
        otherValueConvert.innerHTML = new Intl.NumberFormat("cn-CN", {
            style: "currency",
            currency: "RMB"
        }).format(inputConvertValue / yuanToday)
    }

    realValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputConvertValue)   
    }
console.log(convertValues)
convertButton.addEventListener("click", convertValues)