const tas_kagit_makas = ["Taş","Kağıt","Makas"]

let appKutu = document.querySelector("#app")

let oyuncuBirKutu = document.createElement("div")
let oyuncuIkiKutu = document.createElement("div")
let oynaButonu = document.createElement("button")
let oyunSayac = document.createElement("span")

let oyunSayacAdet = 0


function sonucUret() {
    let i = Math.floor(Math.random() * 3);
    let sonuc = tas_kagit_makas[i]
    return sonuc
}

function sahneOlustur() {
appKutu.append(oyuncuBirKutu,oyuncuIkiKutu,oynaButonu, oyunSayac);

oynaButonu.textContent = "Oyna"
oynaButonu.classList.add("btn" , "btn-success");
oynaButonu.addEventListener("click", oyna) //oyna'ya () koyma, eventlistener kendi bunu yapar

oyuncuBirKutu.classList.add("bg-primary","p-5","h1");
oyuncuIkiKutu.classList.add("bg-secondary","p-5","h1");

oyunSayac.classList.add("badge","bg-info")
}

function oyna() {
    let birinciOyuncuSonuc = sonucUret()
    let ikinciOyuncuSonuc = sonucUret()
    
    oyuncuBirKutu.textContent = birinciOyuncuSonuc
    oyuncuIkiKutu.textContent = ikinciOyuncuSonuc

    oyunSayacAdet = oyunSayacAdet + 1
    oyunSayac.textContent = oyunSayacAdet
}

sahneOlustur()