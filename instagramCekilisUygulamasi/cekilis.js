document.querySelector(".cekilisYap").addEventListener("click",function(){
  let kullanicilar = document.querySelector(".kullanicilar").value;
  kullanicilar = kullanicilar.split("\n") //split() girilen değerleri dizi haline getirir
  
  let kazananSayisi = document.querySelector(".kazananSayisi").value;
  let kazananlar = []
  for(let i=0;i<kazananSayisi;i++){
    let kazananİndex = Math.floor(Math.random() * kullanicilar.length);
    let kazanan = kullanicilar[kazananİndex]
    kazananlar.push(kazanan);
    kullanicilar.splice(kazananİndex,1);
  }

  let yedekSayisi = document.querySelector(".yedekSayisi").value;
  let yedekler=[]
  for(let i=0;i<yedekSayisi;i++){
    let yedekİndex = Math.floor(Math.random()*kullanicilar.length);
    let yedek = kullanicilar[yedekİndex];
    yedekler.push(yedek);
    kullanicilar.splice(yedekİndex,1);
  }

  let table = document.createElement("table");
  table.border="1";
  let th = document.createElement("th");
  th.innerHTML="Kazananlar";

  let yazdirKazanan = kazananlar.map(item =>{
    return `
    <tr>
    <td>${item}</td>
    </tr>
    `
  })

  let table2 = document.createElement("table");
  table2.border="1";
  table2.style.marginTop="1rem"
  let th2 = document.createElement("th");
  th2.innerHTML="Yedekler";

  
  let yazdirYedek = yedekler.map(item =>{
    return `
    <tr>
    <td>${item}</td>
    </tr>
    `
  })
  
  table.innerHTML=yazdirKazanan.join("");
  table.prepend(th)//!eleman başına eklemek

  table2.innerHTML=yazdirYedek.join("");
  table2.prepend(th2)//!eleman başına eklemek


  document.body.append(table,table2)

  // table.append(th);
  // document.body.appendChild(table)

  console.log(kazananlar,yedekler);
})