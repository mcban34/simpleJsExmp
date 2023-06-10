
document.querySelector(".olustur").addEventListener("click",function(){
  
  let inpVal = document.querySelectorAll(".inp");
  let inpLen = parseInt(document.querySelector(".inpVal").value);
  

  if(document.querySelector(".inpVal").value!=""){
    let passWord = ""
    if(inpVal[0].checked){
      passWord+="abcdefghjklmnoprsştyuzyxw"
    }
    if(inpVal[1].checked){
      passWord+="1234567890"
    }
    if(inpVal[2].checked){
      passWord+="!#%&?*,.+-_"
    }

    let newPass=""
    for(let i=0;i<inpLen;i++){
      newPass += passWord.charAt(Math.floor(Math.random()*passWord.length));
    }

    document.querySelector(".sonuc").innerHTML=newPass;
  }

  else{
    console.log("boş geçme la");
  }
})