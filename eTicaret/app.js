fetch("urunler.json")
.then(response => response.json())
.then(value =>{
  let container = document.createElement("div");
  container.className="container";

  let row = document.createElement("div");
  row.className="row";

  container.appendChild(row)

  value.forEach(element => {

    // console.log(element)

    let col3 = document.createElement("div");
    col3.className="col-md-3";

    let myCard = document.createElement("div");
    myCard.className="card mb-5";

    let baslik = document.createElement("h6");
    baslik.innerHTML=element.title;

    let image = document.createElement("img");
    image.src=element.image;

    let description = document.createElement("p");
    description.innerHTML=element.description;

    let price = document.createElement("p");
    price.innerHTML=`<b>Fiyat : ${element.price}₺</b>`;

    let Mybutton = document.createElement("button");
    Mybutton.innerHTML="Sepete Ekle";
    Mybutton.className="btn btn-primary addToCart";


    sepettekiUrun = [] 
     Mybutton.addEventListener("click",function(){
        let cardBox = document.querySelector(".cardBox");

        //*sepet card
        let sepetCardDiv = document.createElement("div");
        sepetCardDiv.className="sepetCardDiv";

        //*sepet card title
        let sepetCardTitle = document.createElement("h6");
        sepetCardTitle.innerHTML=element.title;

        //*sepet card image
        let sepetCardİmage = document.createElement("img");
        sepetCardİmage.style.width="100px"
        sepetCardİmage.style.height="100px"
        sepetCardİmage.src=element.image;

        //*sepet card Fiyat
        let sepetCardPrice = document.createElement("p");
        sepetCardPrice.className="urunFiyat"
        let newPrice = element.price;
        newPrice = newPrice.toString().slice(0, 6); // "3.98"
        newPrice = Number(newPrice)
        // newPrice = newPrice.toFixed(35);
        console.log(newPrice)
        sepetCardPrice.innerHTML=newPrice;

      
        let test = {
          urunAdi: element.title,
          urunFiyat:element.price
        }

        sepettekiUrun.push(test)



        sepetCardDiv.append(sepetCardİmage,sepetCardTitle,sepetCardPrice);
        cardBox.appendChild(sepetCardDiv)

        // sepettekiUrunFiyat.push(Number(sepetCardDiv.lastChild.innerHTML))
        // console.log(sepettekiUrunFiyat)
        sepet();
     })


    row.appendChild(col3);
    col3.appendChild(myCard);
    myCard.append(image,baslik,description,price,Mybutton)

  });
  document.body.appendChild(container)
})


function sepet(){
  let sepetUrun = document.getElementsByClassName("sepetCardDiv");
  let toplamFiyat = 0;

  for(let i=0;i<sepetUrun.length;i++){
    sepetUrun[i].addEventListener("click",function(event){
      const silinecekUrun = event.currentTarget; // Seçilen ürünün tamamı
      const silinecekFiyat = Number(silinecekUrun.querySelector(".urunFiyat").innerHTML); // Seçilen ürünün fiyatı
      toplamFiyat -= silinecekFiyat; // Toplam fiyattan çıkar
      document.querySelector(".toplamFiyat").innerHTML = `Sepet Tutarı : ${toplamFiyat.toFixed(2)} `;

      silinecekUrun.remove(); // Ürünü sepetten çıkar
    });

    const fiyatNumber = Number(sepetUrun[i].lastChild.innerHTML);
    toplamFiyat += fiyatNumber;
    document.querySelector(".toplamFiyat").innerHTML = `Sepet Tutarı : ${toplamFiyat.toFixed(2)} `;
    
  }

}