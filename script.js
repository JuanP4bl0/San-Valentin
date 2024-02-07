const botonSi = document.querySelector(".si");
const mensajeBonito = document.querySelector(".mensaje-bonito");

botonSi.addEventListener("click", () => {
  mensajeBonito.style.display = "block";
  mensajeTriste.style.display = "none";

});

const botonNo = document.querySelector(".no");
const mensajeTriste = document.querySelector(".mensaje-triste");

botonNo.addEventListener("click", () => {
  mensajeTriste.style.display = "block";
    mensajeBonito.style.display = "none";

});
