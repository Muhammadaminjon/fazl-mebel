AOS.init();
const drop = document.querySelector(".dropdown");
const lang = document.querySelector(".lang");
const text = document.querySelector(".lang-text");
drop.addEventListener("click", () => {
  text.classList.toggle("active");
});

text.addEventListener("click", () => {
  lang.classList.remove("active");
});
