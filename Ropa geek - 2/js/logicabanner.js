let c = 1;
const total = 5;

function giro() {
  c = (c % total) + 1;

  document.querySelector(".hero").style.backgroundImage =
    `url("../imagenes/banner/banner${c}.jpg")`;

  setTimeout(giro, 2500); //creen que dos segundos y medio es suficiente?//
}

window.addEventListener("load", giro);
