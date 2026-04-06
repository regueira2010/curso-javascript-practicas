let numeroMagico = Math.floor(Math.random() * 100) + 1;
let intentos = 5;
let numerosUsados = [];

const entrada = document.getElementById("entrada");
const botonAdivinar = document.getElementById("adivinar");
const botonLimpiar = document.getElementById("limpiar");
const mensaje = document.getElementById("mensaje");

mensaje.innerHTML = `¡Suerte! Tienes ${intentos} intentos.`;

botonAdivinar.onclick = () => {
  let valorUsuario = parseInt(entrada.value);

  if (numerosUsados.includes(valorUsuario) || valorUsuario < 1 || valorUsuario > 100) {
    // Valida y sale de la funcion sin restar intentos
    mensaje.innerText = `El número ${valorUsuario} ya lo usaste o es menor a 1 o mayor a 100. 
    ¡Prueba otro sin perder intento, 
    te quedan ${intentos} intentos!`;
    return; //
  }

  numerosUsados.push(valorUsuario);
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
  let numerosUsados = [];
  entrada.value = "";
  mensaje.innerText = `¡Suerte! Tienes ${intentos} intentos.`;
  botonAdivinar.disabled = false;
};
