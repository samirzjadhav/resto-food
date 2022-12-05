const menu = document.getElementById("menu-bars");
const nav = document.getElementById("nav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};
