const title = document.getElementById("name");

function typeLetter(e) {
  const textArray = e.innerHTML.split("");
  e.innerHTML = " ";
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      e.innerHTML += letter;
    }, 150 * i);
  });
}

typeLetter(title);




/*---------MENU HAMBURGUER------*/

const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navMenu");




const toggleOn = (e) => {
  
  if (e.type === "touchstart") e.preventDefault();
  nav.classList.toggle("active");

  
}

function closeMenu() {
  const navegation = document.getElementById('nav');
  nav.classList.remove('active');
  document.getElementById('btnMobile').checked = false;
}
 

btnMobile.addEventListener("click", toggleOn);
btnMobile.addEventListener("touchstart", toggleOn);



/*--------Animações----------*/

AOS.init();

