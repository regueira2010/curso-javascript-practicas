const contenedorResultado = document.getElementById("resultado");
const juegarPPT = document.getElementById("btnJugar");

juegarPPT.addEventListener("click", () => {
  contenedorResultado.innerHTML = "";
  numerosDeJugadas();
});

//Función juaga de la computadora
function obtenerJugadaComputadora() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "piedra";
      break;

    case 1:
      return "papel";
      break;

    case 2:
      return "tijera";
      break;
  }
}

//Función introducir y validar número de jugadas
function numerosDeJugadas() {
  let numeroJugadas;
  do {
    numeroJugadas = +prompt("¿Cuántas veces vas a jugar?");
    if (isNaN(numeroJugadas)) {
      alert("Debe ingresar un número");
      numeroJugadas = 0;
    } else if (numeroJugadas <= 0) {
      alert("El número está fuera de rango");
    }
  } while (numeroJugadas <= 0);

  jugar(numeroJugadas);
}

//Función obtiene la opción del usuario y muestra el resultado
function jugar(n) {
  for (let i = 0; i < n; i++) {
    let opcionUsuario = prompt(
      `Ronda ${i + 1} de ${n}\nElige: Piedra, Papel o Tijera`,
    )?.toLowerCase();

    while (
      opcionUsuario !== "piedra" &&
      opcionUsuario !== "papel" &&
      opcionUsuario !== "tijera"
    ) {
      opcionUsuario = prompt(
        "Opción incorrecta, elige tu opción: Piedra, Papel o Tijera",
      )?.toLowerCase();
    }
    let opcionComputadora = obtenerJugadaComputadora();
    //console.log(opcionComputadora);

    let resultado = ganador(opcionUsuario, opcionComputadora);
    //console.log(resultado);

    const mostrarGanador = `
        <div class="card shadow-sm mb-3 border-secondary text-start animate__animated animate__fadeIn">
                <div class="card-header bg-dark text-white d-flex justify-content-between">
                    <span>Ronda ${i + 1}</span>
                    <span class="badge bg-info text-dark">VS PC</span>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        Elección: <span class="badge bg-secondary text-capitalize">${opcionUsuario}</span> vs 
                        <span class="badge bg-secondary text-capitalize">${opcionComputadora}</span>
                    </p>
                    <h5 class="mt-2 text-center">${resultado}</h5>
                </div>
            </div>`;
    contenedorResultado.innerHTML += mostrarGanador;
  }
}

//Función de comparación para obtner el ganador
function ganador(opcionUsuario, opcionComputadora) {
    if (opcionUsuario === opcionComputadora) {
        return `<span class="text-warning fw-bold">😑 ¡Es un empate!</span>`;
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        return `<span class="text-success fw-bold">😄 ¡Ganaste esta ronda!</span>`;
    } else {
        return `<span class="text-danger fw-bold">😪 Perdiste contra la PC</span>`;
    }
}
