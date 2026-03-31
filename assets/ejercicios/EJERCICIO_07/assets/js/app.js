let numeroMagico = Math.floor(Math.random() * 100) + 1;
let intentos = 5;

const entrada = document.getElementById("entrada");
const botonAdivinar = document.getElementById("adivinar");
const botonLimpiar = document.getElementById("limpiar");
const mensaje = document.getElementById("mensaje");

mensaje.innerHTML = `¡Suerte! Tienes ${intentos} intentos.`;

botonAdivinar.onclick = () => {
  let valorUsuario = parseInt(entrada.value);
  intentos--;

  if (valorUsuario === numeroMagico) {
    mensaje.innerText = "Acertaste el número";
    botonAdivinar.disabled = true;
  } else if (intentos === 0) {
    mensaje.innerText = "Has perdido. El número era " + numeroMagico;
    botonAdivinar.disabled = true;
  } else {
    if (valorUsuario < numeroMagico) {
      mensaje.innerText = `Te quedan ${intentos} intentos y el número es mayor`;
    } else {
      mensaje.innerText = `Te quedan ${intentos} intentos y el número es menor`;
    }
  }
};

botonLimpiar.onclick = () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  intentos = 5;
  entrada.value = "";
  mensaje.innerText = `¡Suerte! Tienes ${intentos} intentos.`;
  botonAdivinar.disabled = false;
};
