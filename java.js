let celsiusData = document.getElementById("celsius-data")
let fahrenheitData = document.getElementById("fahrenheit-data")
let kelvinData = document.getElementById("kelvin-data")

let showCelsiusData = document.getElementById("show-celsius")
let showfahrenheitData = document.getElementById("show-fahrenheit")
let showkelvinData = document.getElementById("show-kelvin")

function celsiusToFahrenheit(num) {
    let celsius = (num * 9/5) + 32
    showfahrenheitData.textContent = celsius
}

function celsiusToKelvin(num) {
    let celsius = num + 273.15
    showkelvinData.textContent = celsius
}

function fahrenheitToCelsius(num) {
    let fahrenheit = (num - 32) / 1.8;
    showCelsiusData.textContent = fahrenheit
}

function fahrenheitToKelvin(num) {
    let fahrenheit = ((num - 32) / 1.8) + 273.15;
    showkelvinData.textContent = fahrenheit
}

function kelvinToCelius(num) {
    let kelvin = num - 273.15
    showCelsiusData.textContent = kelvin
}

function kelvinToFahrenheit(num) {   
    let kelvin = ((num - 273.15) * 9/5) + 32
    showfahrenheitData.textContent = kelvin
}

document.getElementById("submit-celsius").addEventListener("click", () => {  
    fahrenheitData.value = ""
    kelvinData.value = ""
    let value = celsiusData.value
    if(value === "") {
        showCelsiusData.textContent = "Enter a value"
        showfahrenheitData.textContent = "Enter a value"
        showkelvinData.textContent = "Enter a value"
    } else {
        showCelsiusData.textContent = value
        celsiusToFahrenheit(value)
        celsiusToKelvin(value)
    }
})

document.getElementById("submit-fahrenheit").addEventListener("click", () => {
    celsiusData.value = ""
    kelvinData.value = ""
    let value = fahrenheitData.value
    if(value === "") {
        showCelsiusData.textContent = "Enter a value"
        showfahrenheitData.textContent = "Enter a value"
        showkelvinData.textContent = "Enter a value"
    } else {
        showfahrenheitData.textContent = value
        fahrenheitToCelsius(value)
        fahrenheitToKelvin(value)
    }
})

document.getElementById("submit-kelvin").addEventListener("click", () => {
    celsiusData.value = ""
    fahrenheitData.value = ""
    let value = kelvinData.value
    if(value === "") {
        showCelsiusData.textContent = "Enter a value"
        showfahrenheitData.textContent = "Enter a value"
        showkelvinData.textContent = "Enter a value"
    } else {
        showkelvinData.textContent = value
        kelvinToCelius(value)
        kelvinToFahrenheit(value)
    }
})

document.getElementById("refresh").addEventListener("click", () => {
    showCelsiusData.textContent = "0"
    showfahrenheitData.textContent = "0"
    showkelvinData.textContent = "0"
})

document.getElementById("refresh-celsius").addEventListener("click", () => {
    celsiusData.value = ""
})

document.getElementById("refresh-kelvin").addEventListener("click", () => {
    kelvinData.value = ""
})

document.getElementById("refresh-fahrenheit").addEventListener("click", () => {  
    fahrenheitData.value = ""
})