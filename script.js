const buttonToogle = document.querySelector(".button_toogle");
const painel = document.querySelector(".painel_menu");
console.log(painel);
console.log(buttonToogle);
buttonToogle.addEventListener("click", () => {
  painel.classList.toggle("close_painel");

  if (painel.classList.contains("close_painel")) {
    buttonToogle.innerHTML = `<img src="assets/images/icon-menu.svg" alt="" />`;
  } else {
    buttonToogle.innerHTML = `<img src="assets/images/icon-close.svg" alt="" />`;
  }
});
