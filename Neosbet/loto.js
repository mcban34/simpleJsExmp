let pcRandom = []
for(let i=0;i<3;i++){
  let rndSayi = Math.floor(Math.random()*10);
  pcRandom.push(rndSayi);
}
console.log(pcRandom)
document.querySelector(".basla").addEventListener("click",function(){
  bakiye = Number(document.querySelector(".bakiye").value);
  let sifre = document.querySelector(".sifre").value;
  document.querySelector(".oyunBakiye").innerHTML=`Bakiyeniz : ${bakiye}`;
  document.querySelector(".girisText").innerHTML="Bakiyeniz Yükleniyor.."
  if(sifre=="1234"){
    setTimeout(()=>{
      document.querySelector(".giris").style.display="none";
      document.querySelector(".oyun").style.display="block";
    },2000)
  }
})


document.querySelector(".oyna").addEventListener("click",function(){


  let tahminSayi = document.getElementsByClassName("tahminSayi");
  let tahminler = [];
  for(let i=0; i<tahminSayi.length; i++){
      tahminler.push(Number(tahminSayi[i].value));
  }
  console.log(tahminler)

  sayac = 0;
  if(pcRandom[0]==tahminler[0]){
    sayac++;
  }
  if(pcRandom[1]==tahminler[1]){
    sayac++;
  }
  if(pcRandom[2]==tahminler[2]){
    sayac++;
  }

  let bahisMiktar = Number(document.querySelector(".bahisMiktar").value);

  let sonuc = document.querySelector(".sonuc");
  if(sayac==3){
    bahisMiktar *= 3;
    sonuc.innerHTML=`Tebrikler 3 Adet Bildiniz! Kazanılan Tutar : ${bahisMiktar}`;
    bakiye+=bahisMiktar;
    document.querySelector(".oyunBakiye").innerHTML=`Kalan Bakiye : ${bakiye}`;
  }
  else if(sayac==2){
    bahisMiktar *= 2;
    sonuc.innerHTML=`Tebrikler 2 Adet Bildiniz! Kazanılan Tutar : ${bahisMiktar}`;
    bakiye+=bahisMiktar;
    document.querySelector(".oyunBakiye").innerHTML=`Kalan Bakiye : ${bakiye}`;
  }
  else if(sayac==1){
    sonuc.innerHTML=`Amorti! Kazanılan Tutar : ${bahisMiktar}`;
    bakiye+=bahisMiktar;
    document.querySelector(".oyunBakiye").innerHTML=`Kalan Bakiye : ${bakiye}`;
  }
  else{
    sonuc.innerHTML="Kasa Kazandı! Tekrar Deneyiniz!"
    bakiye-=bahisMiktar;
    document.querySelector(".oyunBakiye").innerHTML=`Kalan Bakiye : ${bakiye}`;
  }

});