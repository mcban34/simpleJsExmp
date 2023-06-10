
//!sayfa geçişleri
let loginEkran = document.querySelector(".login");
let registerEkran = document.querySelector(".register");
document.querySelector(".kayitBtn").addEventListener("click",function(evet){
  evet.preventDefault();
  loginEkran.style.display="none";
  registerEkran.style.display="block";
})

document.querySelector(".girisBtn").addEventListener("click",function(evet){
  evet.preventDefault();
  loginEkran.style.display="block";
  registerEkran.style.display="none";
})

// let kullanicilar = []
// localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))

//!giriş yap alanı
document.querySelector(".girisYap").addEventListener("click",function(){

  let girisKadi = document.getElementById("girisKadi").value;
  let girisSifre = document.getElementById("girisSifre").value;

  let kullanicilar = JSON.parse(localStorage.getItem("kullanicilar"));
  console.log(kullanicilar)  
  for(let i=0;i<kullanicilar.length;i++){
    if(kullanicilar[i].kadi==girisKadi && kullanicilar[i].sifre==girisSifre){
      girisOnay = true;
      break;
    }
    else{
      girisOnay=false;
    }
  }

  if (girisOnay==true){
    console.log("Giriş Başarılı");
  }

  else if(girisOnay==false){
    console.log("giriş başarısız");
  }
})



//!kayit ol alanı
document.querySelector(".kayitOl").addEventListener("click",function(){
  let kayitKadi = document.getElementById("kayitKadi").value;
  let kayitSifre = document.getElementById("kayitSifre").value;
  

  try{
    let kullanicilar = JSON.parse(localStorage.getItem("kullanicilar"));
    let kullanici = {
      kadi:kayitKadi,
      sifre:kayitSifre,
    }
    kullanicilar.push(kullanici);
    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar)) 
  }
  catch{
    let kullaniciDİzi = []
    let kullanici = {
      kadi:kayitKadi,
      sifre:kayitSifre,
    }
    kullaniciDİzi.push(kullanici);
    localStorage.setItem("kullanicilar",JSON.stringify(kullaniciDİzi)) 
  }
  
 
})
