
// let kullaniciAdi = localStorage.getItem("kullanıcıadı");
// let sifre = localStorage.getItem("sifre");
let kullaniciAdi = "mehmet";
let sifre = "123";

$(".hataligiris").hide();

let bakiye = 1000;

$(".girisyapbtn").click(function(){
    let girilenKullaniciAdi = $(".kadi").val();
    let girilenSifre = $(".sifre").val();
    //bismillah
    if(girilenKullaniciAdi==kullaniciAdi && girilenSifre==sifre){
        $(".girisyap").hide();
        $(".islemsec").show();
        $(".toplambakiye").html(`Kalan Tutarız : ${bakiye}`);

        $(".islemyapbtn").click(function(){
            let secilenİslem = $(".islemsecinput").val();
            let girilenTutar = Number($(".girilentutar").val());
            if(secilenİslem=="Para Çek"){
                let kalantutar = bakiye- girilenTutar;
                $(".kalanbakiye").html(`Para Çekme İşlemi Tamamlandı. Kalan Bakiyeniz : ${kalantutar}`);
                $(".toplambakiye").hide();
            }
            else if(secilenİslem=="Para Yatır"){
                kalantutar = bakiye + girilenTutar;
                $(".kalanbakiye").html(`Para Yatırma İşlemi Tamamlandı. Toplam Bakiyeniz: ${kalantutar}`); 
                $(".toplambakiye").hide();
            }
            else if(secilenİslem=="Kredi Çek"){
                $(".islemsec").hide();
                $(".krediaysec").show();

                $(".kredihesapla").click(function(){
                    let girilenTutar = Number($(".girilentutar").val());
                    let krediVade = $(".kredivade").val();
                    if(krediVade=="3 Ay"){
                        let faizOranı = girilenTutar * 0.18;
                        let toplamBorc = faizOranı + girilenTutar;
                        $(".kredigeriodeme").html(`Toplam Borcunuz : ${toplamBorc}`);
                    }
                    else if(krediVade=="6 Ay"){
                        let faizOranı = girilenTutar * 0.25;
                        let toplamBorc = faizOranı + girilenTutar;
                        $(".kredigeriodeme").html(`Toplam Borcunuz : ${toplamBorc}`);
                    }
                    else if(krediVade=="9 Ay"){
                        let faizOranı = girilenTutar * 0.70;
                        let toplamBorc = faizOranı + girilenTutar;
                        $(".kredigeriodeme").html(`Toplam Borcunuz : ${toplamBorc}`);
                    }
                });
            }
        });
    }
    else{
        $(".hataligiris").show();
    }
});

$(".kartsizislembtn").click(function(){
    $(".girisyap").hide();
    $(".kartsizislem").show();
});

$(".kartsizislemsec").click(function(){
    let kartsizislemİnput = $(".karsizisleminput").val();
    if(kartsizislemİnput=="İBAN Para Gönder"){
        $(".ibanparagonder").show();
        $(".kartsizislem").hide();
    }
    else if(kartsizislemİnput=="Üniversite Harç Ödemesi"){
         $(".kartsizislem").hide();
         $(".harcode").show();
    }
});


$(".ibangonderbtn").click(function(){
    let girilenİban = Number($(".girileniban").val());
    let kaydedilenİban = localStorage.getItem("iban");
    let ibantutar = Number($(".ibantutar").val());
    if(girilenİban==kaydedilenİban){
        alert(`Para Gönderme İşleminiz Tamamlandı! Gönderilen Tutar : ${ibantutar}`);
        
    }
    else{
        alert("Girilen İban Yanlış")   
    }
});

$(".harcodebtn").click(function(){
    let girilentc = Number($(".harcodeinput").val());
    let mevcuttc = localStorage.getItem("tc");

    if(girilentc == mevcuttc){
        alert("tcdoğru");
    }
});

