
function soruUret(){

  //!rastgele 2 sayı ürettik
  let sayilar = [];
  for(let i=0;i<2;i++){
    let sayi = Math.floor(Math.random() * 10);
    sayilar.push(sayi)
  } 

  //!rastegele bir işlem ürettik
  let islemler = ["+","-","*","/"];
  let rstİslem =  islemler[Math.floor(Math.random() * islemler.length)]
  
  //!ürütilen sayikar ve işlemi yan yana birleştirik
  totalSayi = sayilar[0] + rstİslem + sayilar[1] //=>

  //!eval ile bana gelen string ifadeyi komutsal olarak işleme aldık
  totalSayiNumber = parseInt(eval(totalSayi));

  document.querySelector(".soru").innerHTML=totalSayi;
  
  console.log(parseInt(totalSayiNumber))

  //!1) sorunun string hali => "3+7"
  //!2) sornun cevabı number halde => 10
  
}
 //!sayfa başladığında fonksiyonum çalışsın ve bana değetler gelsin
soruUret();

//!kalan süreyi 1 dakika olarak hazır yapı kullandım
dogruCevapSayisi = 0;
sayac = 60;
interval = setInterval(function() { //*sürekli olarak saniyeyi güncelledim
  document.querySelector(".sayac").innerHTML=`Kalan Saniyeniz : ${sayac}` //*saniye her güncellendiğinde saniyeyi ekrana yazdım
  sayac--; //*saniyeyi geriye doğru 1 eksilttim
  if (sayac < 0) { 
    clearInterval(interval); //*saniyem sıfırından küçük olduğu zaman clearInterval ile zamanlayıcı durdurukdu
    document.querySelector(".sayac").innerHTML=`Süreniz Doldu! Puanınız:  ${dogruCevapSayisi*10}`;
    document.querySelector(".soruApp").remove(); //*süre bitttiğinde ekranı temizliyor (elementkeri domdan siliyorum)
  }
}, 1000); //*süre bandını ayarlıyorum


document.querySelector(".cevapla").addEventListener("click",function(){
  let girilenDeger = document.querySelector(".girilenDeger").value; //*input ile kullanıcıdan cevabını aldım
  if(girilenDeger==totalSayiNumber){ //*fonskyiondan gellen random işlem doğruysa yani inputa eşitse
    document.querySelector(".cevapKontrol").innerHTML="DOĞRU BİLDİNİZ!"
    sayac+=2; //*soruyu her bildiğinde saniyeye 2 ekliyorum
    dogruCevapSayisi++; //*soruyu her bilidğinde doğru cevap sayısını arttırcam
    soruUret(); //*soruyu bilidği için yeni getiriyorum ve fonksiyonumu çalıştıryorum
  }
  else{
    document.querySelector(".cevapKontrol").innerHTML="HATALI CEVAP!"
    sayac-=5; //*soruyu yanlış bildiğinde saniyeden 5 eksilteceğim
  }
})

atlamaSayisi = 3; //*soruyu atlama sayısı belirliyorum
document.querySelector(".atla").addEventListener("click",function(){
  atlamaSayisi-=1; //*soruyu her atladığımda -1 oalcak
  document.querySelector(".atla").innerHTML=`Soruyu Atla! ${atlamaSayisi} Hak!`
  if (atlamaSayisi==0){ //*atlama sayısı sıfır olduğunda 
    document.querySelector(".soruApp").remove(); //*elementleri kaldıracak
    document.querySelector(".sayac").innerHTML=`Atlaya Atlaya Gittiniz! Toplam Puanınız : ${dogruCevapSayisi*10}`
    clearInterval(interval); //*atlama sayısı sınırı aşıldığı için sayaç dururulur
  }
  soruUret();

})