const addZero = x => x<10 ? "0" + x : x

function getDateTime() {
    let time = new Date();
    let saat = addZero(time.getHours());
    let dakika = addZero(time.getMinutes());
    let saniye = addZero(time.getSeconds());
    document.querySelector(".saat").innerHTML=`${saat}:${dakika}:${saniye}`
}

setInterval(() => {
    getDateTime()
}, 1000);