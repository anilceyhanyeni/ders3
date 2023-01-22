const elApp = document.querySelector("#app")

//1- ziyaretçinin tarayısında(localstorage) daha önceden  oluşturulmuş olan ziyaretSayisi anahtarı var mı?
let ziyaretSayac = localStorage.getItem("ziyaretSayisi")
if( ziyaretSayac === null ) {
    //daha önce hiç ziyaret sayacı kaydedilmemiş
    localStorage.setItem("ziyaretSayisi", "1")
    ziyaretSayac = 1

    let adSoyad = prompt("Görünüşe göre sayfaya ilk kez girdiniz, lütfen ad soyad girin:")
    let seviye = prompt("Oyun zorluk düzeyini seçin: \n 1-Kolay \n 2-Orta \n 3-Zor")

    let oyuncuBilgi = {
        adSoyad: adSoyad,
        seviye: seviye
    }

    localStorage.setItem("oyuncuBilgi", JSON.stringify(oyuncuBilgi) )


} else {
    //ziyaretçi tarayısında daha önce ziyaret sayaç bilgisi kaydedilmiş
    //değeri oku, numbera çevir, ve değeri 1 arttır, son değeri tekrar kaydet
    ziyaretSayac = parseInt(ziyaretSayac)
    ziyaretSayac++
    localStorage.setItem("ziyaretSayisi", ziyaretSayac)

    let oyuncuBilgiJSON = localStorage.getItem("oyuncuBilgi")
    let oyuncuBilgi = JSON.parse(oyuncuBilgiJSON)
    
    let bilgiParagraf = document.createElement("p")
    bilgiParagraf.innerHTML = ` <span>${oyuncuBilgi.adSoyad}</span>  <span>${oyuncuBilgi.seviye}</span> `
    elApp.append(bilgiParagraf)
}

let sayacEleman = document.createElement("span")
sayacEleman.textContent = ziyaretSayac
elApp.append(sayacEleman)