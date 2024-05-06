const convertButton = document.querySelector(".convertButton")

function convertValues(){
    const inputConvertValue = document.querySelector(".inputConvert").value
    const realValueToConvert = document.querySelector(".realValueToConvert")//valor para converter
    const otherValueConvert = document.querySelector(".otherValueConvert")//valor convertido

    const dolarToday = 5.1

    const convertValues = inputConvertValue / dolarToday

    realValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputConvertValue)

    otherValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    }).format(convertValues)

    console.log(convertValues)
}

convertButton.addEventListener("click", convertValues)