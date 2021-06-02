const Popup = document.querySelector("#popupskaerm");
const knap = document.querySelector("#popupknap");

window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("siden vises");
  knap.addEventListener("click", Clickhandler);
}

function Clickhandler() {
  console.log("click");
  Popup.classList.add("skjul");
}
