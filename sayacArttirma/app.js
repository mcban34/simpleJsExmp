let btn = document.querySelectorAll(".btn");
let sayi = document.querySelector(".sayi");
let count = 0;
btn.forEach(function(element){
  element.addEventListener("click",function(e){
    let x = e.currentTarget.classList;
    if(x.contains("arttir")){
      count++;
      sayi.innerHTML=count;
    }
    else if(x.contains("azalt")){
      count--;
      sayi.innerHTML=count;
    }
    else{
      count=0;
      sayi.innerHTML=count;
    }
    if(count>0){
      sayi.style.background="green";
    }
    else if(count<0){
      sayi.style.background="red";
    }
    else{
      sayi.style.background="white";
    }
  })
})