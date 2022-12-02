const botaoMenu = document.querySelector(".cabecalho__menu");
const menuLateral = document.querySelector(".menu-lateral__link");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-lateral--ativo");
});

menuLateral.addEventListener("click", () => {
  menuLateral.classList.toggle("menu-lateral__link--ativo");
});
