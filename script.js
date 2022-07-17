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
