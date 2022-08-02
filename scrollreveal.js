//-----------Biblioteca ScrollReveal-----------------------------------

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".introSection", {
  delay: 450,
  origin: "top",
  distance: "600px",
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".about", {
  delay: 450,
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal(".skillsSection", {
  delay: 700,
  origin: "left",
  distance: "120px",
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal(".portifolioSection", {
  delay: 700,
  origin: "rigth",
  distance: "120px",
  easing: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".contactSection", {
  delay: 550,
  origin: "bottom",
  distance: "120px",
  easing: "ease-in-out",
  reset: true,
});
