let convertLEl = document.getElementById("convertL-el")
let convertVEl = document.getElementById("convertV-el")
let convertMEl = document.getElementById("convertM-el")

let tap = document.getElementById("tap")
let Enter = document.getElementById("enter")
let x1, y1, x2, y2

function m2f(enterValue) {
    x1 = enterValue
    y1 = (3.281 * x1).toFixed(3)
    y2 = enterValue
    x2 = (enterValue / 3.281).toFixed(3)
    convertLEl.innerHTML = `${enterValue} meters = ${y1} feet | ${y2} feet = ${x2} meters`
}

function l2g(enterValue) {
    x1 = enterValue
    y1 = (0.264 * x1).toFixed(3)
    y2 = enterValue
    x2 = (enterValue / 0.264).toFixed(3)
    convertVEl.innerHTML = `${enterValue} liters = ${y1} gallons | ${y2} gallons = ${x2} liters`
}

function k2p(enterValue) {
    x1 = enterValue
    y1 = (2.204 * x1).toFixed(3)
    y2 = enterValue
    x2 = (enterValue / 2.204).toFixed(3)
    convertMEl.innerHTML = `${enterValue} kilos = ${y1} pounds | ${y2} pounds = ${x2} kilos`
}

tap.addEventListener("click", function () {
    let enterValue = Enter.value
    if (!isNaN(enterValue) && enterValue.trim() !== "") {
        m2f(enterValue);
        l2g(enterValue)
        k2p(enterValue)
    } else {
        convertLEl.innerHTML = "Please enter a valid number!";
        convertVEl.innerHTML = "Please enter a valid number!";
        convertMEl.innerHTML = "Please enter a valid number!";
    }
})

Enter.addEventListener("keypress", function (event) {
    let enterValue = Enter.value
    if (event.key === "Enter") {
        event.preventDefault();
        if (!isNaN(enterValue) && enterValue.trim() !== "") {
            m2f(enterValue);
            l2g(enterValue)
            k2p(enterValue)
        } else {
            convertLEl.innerHTML = "Please enter a valid number!";
            convertVEl.innerHTML = "Please enter a valid number!";
            convertMEl.innerHTML = "Please enter a valid number!";
        }
    }
})