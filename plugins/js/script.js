// ! Navbar Scripts
const navItems = document.querySelector(".nav__items");
const openNavBtn = document.querySelector(".open__nav-btn");
const closeNavBtn = document.querySelector(".close__nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
});

// ! Swiper Scripts
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
