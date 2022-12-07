const menu = document.getElementById("menu-bars");
const nav = document.getElementById("nav");
const searchIcon = document.getElementById("search-icons");
const searchForm = document.getElementById("search-form");
const close = document.getElementById("close");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};

searchIcon.onclick = () => {
  searchForm.classList.toggle("active");
};

close.onclick = () => {
  searchForm.classList.remove("active");
};

const swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
