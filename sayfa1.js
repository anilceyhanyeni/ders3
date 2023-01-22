let el1 = document.querySelector("#kutu1")

let el2 = document.querySelector("#kutu2")

console.log(el1.id)

el1.style.backgroundColor = "red"
el1.style.minHeight = "50px"


el1.addEventListener("click", function () {
    console.log("Kutu1 tıklandı")
})

let sinifVarmi = el1.hasAttribute("class")

console.log(sinifVarmi)