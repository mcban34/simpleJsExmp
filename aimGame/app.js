let count = 0;
let sureHiz = 1000;
function randomDeger(){
        let myElement = document.querySelector(".myElement");
        let parentElement = document.querySelector(".parent");
        
        let rastgeleX = Math.floor(Math.random() * (parentElement.offsetWidth - 35));
        let rastgeleY = Math.floor(Math.random() * (parentElement.offsetHeight - 35));

        setTimeout(() => {
            myElement.style.left=`${rastgeleX}px`;
            myElement.style.top=`${rastgeleY}px`;
        }, 100);

        if(count>=3){
            sureHiz=800;
        }
        if(count>=5){
            sureHiz=500;
        }
        if(count>=7){
            sureHiz=100;
        }
        if(count>=10){
            sureHiz=10;
            myElement.style.width="30px";
            myElement.style.height="30px";
        }
        if(count>=20){
            myElement.style.width="20px";
            myElement.style.height="20px";
        } 
}

let saniye = 30;
let sayac = setInterval(() => {
    saniye--;
    document.querySelector(".sayac").innerHTML=`Kalan Saniyeniz: ${saniye}`;
    if(saniye<0){
        clearInterval(sayac);
        document.querySelector(".parent").style.display ="none";
        document.querySelector(".sonucEkrani").style.display="block";
        document.querySelector(".sonuc").innerHTML=`Sonucunuz : ${count}`
    }
}, 1000);



document.querySelector(".myElement").addEventListener("click",function(){
    count++;
    console.log(count);
    randomDeger();
})
  