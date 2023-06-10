function randomColor(){
  let colorText = "0123456789ABCDEF"
  newColor = "#"
  for(let i=0;i<6;i++){
    newColor += colorText[Math.floor(Math.random()*colorText.length)]
  } 
  return newColor;
}
document.querySelector(".randomAl").addEventListener("click",function(){
  let boxs = document.getElementsByClassName("box");
  for (let i=0; i<boxs.length;i++){
    deneme = randomColor()
    boxs[i].style.background=deneme
    boxs[i].innerHTML=newColor; 
  }
})