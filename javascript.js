const Popup = document.querySelector("#popup_sprite");

window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("siden vises");

  Popup.classList.add("show");
}
