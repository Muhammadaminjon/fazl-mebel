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

// modal
const heroBtn = document.getElementById("hero-btn");
const grey = document.querySelector(".grey");
const heromodal = document.querySelector(".hero-modal");
const about = document.querySelector("#about");
const assortment = document.querySelector("#assortment");

heroBtn.addEventListener("click", () => {
  grey.style.display = "block";
  heromodal.classList.toggle("active");
});
assortment.addEventListener("click", () => {
  grey.style.display = "block";
  heromodal.classList.toggle("active");
});
about.addEventListener("click", () => {
  grey.style.display = "block";
  heromodal.classList.toggle("active");
});
grey.addEventListener("click", () => {
  grey.style.display = "none";
  heromodal.classList.remove("active");
});
// assortment
const all = document.querySelector(".all");
const mebel = document.querySelector(".mebel");
const ofic = document.querySelector(".ofic");
const ckock = document.querySelector(".ckock");
const kop = document.querySelector(".kop");
const lox = document.querySelector(".lox");

all.addEventListener("click", () => {
  all.classList.toggle("filteractive");
  mebel.classList.remove("filteractive");
  ofic.classList.remove("filteractive");
  ckock.classList.remove("filteractive");
  kop.classList.remove("filteractive");
  lox.classList.remove("filteractive");
});
mebel.addEventListener("click", () => {
  mebel.classList.toggle("filteractive");
  all.classList.remove("filteractive");
  ofic.classList.remove("filteractive");
  ckock.classList.remove("filteractive");
  kop.classList.remove("filteractive");
  lox.classList.remove("filteractive");
});
ofic.addEventListener("click", () => {
  ofic.classList.toggle("filteractive");
  mebel.classList.remove("filteractive");
  all.classList.remove("filteractive");
  ckock.classList.remove("filteractive");
  kop.classList.remove("filteractive");
  lox.classList.remove("filteractive");
});
ckock.addEventListener("click", () => {
  ckock.classList.toggle("filteractive");
  mebel.classList.remove("filteractive");
  ofic.classList.remove("filteractive");
  all.classList.remove("filteractive");
  kop.classList.remove("filteractive");
  lox.classList.remove("filteractive");
});
kop.addEventListener("click", () => {
  kop.classList.toggle("filteractive");
  mebel.classList.remove("filteractive");
  ofic.classList.remove("filteractive");
  ckock.classList.remove("filteractive");
  all.classList.remove("filteractive");
  lox.classList.remove("filteractive");
});
lox.addEventListener("click", () => {
  lox.classList.toggle("filteractive");
  mebel.classList.remove("filteractive");
  ofic.classList.remove("filteractive");
  ckock.classList.remove("filteractive");
  kop.classList.remove("filteractive");
  all.classList.remove("filteractive");
});
