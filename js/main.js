AOS.init();
const drop = document.querySelector(".dropdown");
const lang = document.querySelector(".menu-lang");
const text = document.querySelector(".lang");
const modal = document.querySelector(".assortment-modal");
const dark = document.querySelector(".dark");
drop.addEventListener("click", () => {
  lang.classList.toggle("active");
});

text.addEventListener("click", () => {
  text.classList.remove("active");
});

// modal
const heroBtn = document.getElementById("hero-btn");
const grey = document.querySelector(".grey");
const heromodal = document.querySelector(".hero-modal");
const about = document.querySelector("#about");
const assortment = document.querySelector("#assortment");
const works = document.querySelector("#works");
const click = document.querySelectorAll(".parent1");

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
works.addEventListener("click", () => {
  grey.style.display = "block";
  heromodal.classList.toggle("active");
});
grey.addEventListener("click", () => {
  grey.style.display = "none";
  heromodal.classList.remove("active");
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// inputs
const inputs = document.querySelectorAll("input");
inputs.forEach((inp) => {
  inp.oninvalid = function (e) {
    e.target.setCustomValidity("");
    if (inp.attributes.getNamedItem("data-tel")) {
      if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("Telefon raqami to'liq kiritilishi kerak!");
      }
    } else {
      if (!e.target.validity.valid) {
        e.target.setCustomValidity("Ism kiritilishi kerak!");
      }
    }
  };
  inp.oninput = function (e) {
    e.target.setCustomValidity("");
  };
});

//form
const orderForm = document.getElementById("order-form");
const submittedMsg = `<p class='submitted-msg'><i class="fas fa-check"></i> Muvaffaqiyatli yuborildi! Mutaxassis tez orada siz bilan aloqaga chiqadi</p>`;
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("order-msg").innerHTML = submittedMsg;
});

// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});
