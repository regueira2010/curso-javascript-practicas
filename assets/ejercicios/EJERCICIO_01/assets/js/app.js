const boton = document.getElementById("btnSaludar"); // capturas el boton del html
boton.addEventListener("click", () => {
  // agrega un evento al boton que espera a que se le haga click
  let nombre = prompt("¿Cómo te llamas?");
  if (nombre) {
    window.alert("¡Hola, " + nombre + "! Bienvenido a mi prtactica de JS.");
  } else {
    window.alert("¡Hola, persona sin nombre. ");
  }
});
