AOS.init();
// const drop = document.querySelector(".dropdown");
// const lang = document.querySelector(".lang");
// const text = document.querySelector(".lang-text");
// drop.addEventListener("click", () => {
//   text.classList.toggle("active");
// });

// text.addEventListener("click", () => {
//   lang.classList.remove("active");
// });

const heroBtn = document.getElementById("hero-btn");
const grey = document.querySelector(".grey");
const heromodal = document.querySelector(".hero-modal");

heroBtn.addEventListener("click", () => {
  grey.style.display = "block";
  heromodal.classList.toggle("active");
});

grey.addEventListener("click", () => {
  grey.style.display = "none";
  heromodal.classList.remove("active");
});
