let btns = document.querySelectorAll(".btn")
let input = document.querySelector(".textMain")
btns.forEach(element => {
  element.addEventListener("click",function(){
    if(element.value=="="){
      let islemSonuc = eval(document.querySelector(".textMain").value)
      input.value=""
      input.value=islemSonuc
    }
    else{
      input.value+=element.value;
    }
  })
});