const title = document.getElementById("name");

function typeLetter(e) {
  const textArray = e.innerHTML.split("");
  e.innerHTML = " ";
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      e.innerHTML += letter;
    }, 200 * i);
  });
}

typeLetter(title);

/*---------MENU HAMBURGUER------*/

const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navMenu");
var estate = false;

function toggleOn(event) {
  if(estate !=true){
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}
 
}





btnMobile.addEventListener("click", toggleOn);
btnMobile.addEventListener("touchstart", toggleOn);
