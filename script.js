const textAreaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainCounterE1 = document.getElementById("remaining-counter")

textAreaE1.addEventListener("keyup", () => {
    UpdateCounter()
})
UpdateCounter()
function UpdateCounter() {
    totalCounterE1.innerText = textAreaE1.value.length
    remainCounterE1.innerText=textAreaE1.getAttribute("maxLength")-totalCounterE1.innerText
}