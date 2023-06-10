  //!BUTON SEÇ
  let selectedButton;
  function selectButton(button) {
    if (selectedButton) {
      selectedButton.style.backgroundColor = "";
    }
    selectedButton = button;
    selectedButton.style.backgroundColor = "#099b94";
  } 

window.addEventListener('load', function() {
  const firstButton = document.querySelector('button:first-of-type');
  selectButton(firstButton);
});


document.querySelector(".create").addEventListener("click",function(){
  let parentFooter = document.querySelector(".parentFooter");
  document.querySelector(".parentTitleP").style.display="none";
  if (selectedButton) {
      selectedValue = parseInt(selectedButton.value);
      console.log(selectedValue);
  }
  for(let i=0;i<selectedValue;i++){
    let colorInp = document.createElement("input");
    colorInp.type="color";
    colorInp.className="inpColor";
    parentFooter.prepend(colorInp);
  }
  parentFooter.style.display="block"
  document.querySelector(".parentCenter").style.display="none";
})



document.querySelector(".renkVer").addEventListener("click",function(){
  let inpColor = document.querySelectorAll(".inpColor");
  let parentFooter = document.querySelector(".parentFooter");
  let colorsArray = []
  inpColor.forEach(element => {
    colorsArray.push(element.value)
  });
  let colorText = document.createElement("h5");
  colorText.innerHTML=`CSS Kodu : linear-gradient(${colorsArray})`;
  colorText.style.marginTop="1rem"
  parentFooter.appendChild(colorText)

  // console.log(colorText)
  document.body.style.background=`linear-gradient(${colorsArray})`;
})


