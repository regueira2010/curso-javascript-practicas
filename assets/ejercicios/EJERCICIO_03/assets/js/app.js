const boton = document.getElementById("btnCalcular");
const input = document.getElementById("inputDiametro");
const cajaResultado = document.getElementById("resultado");

// Es la funcion para ocultar el campo de resultados
const mostrarError = (mensaje) => {
    cajaResultado.innerHTML = mensaje;
    cajaResultado.classList.replace("alert-info", "alert-danger");
    cajaResultado.classList.remove("d-none");
};

// Se pinta los resultados en pantalla
const renderizarResultado = (d, r, a) => {
    cajaResultado.innerHTML = `
        <strong>Resultados para diámetro ${d} ctm:</strong><br>
        • Radio calculado: <strong>${r.toFixed(2)} ctm.</strong><br>
        • Área total: <strong>${a.toFixed(2)} ctm.</strong>
    `;
    cajaResultado.classList.replace("alert-danger", "alert-info");
    cajaResultado.classList.remove("d-none");
};

// Se escucha el click en el boton
boton.addEventListener("click", () => {
    let diametro = parseFloat(input.value);

    if (isNaN(diametro) || diametro <= 0) {
        mostrarError("Por favor, ingresa un número válido y mayor a cero.");
        return;
    }

    let radio = diametro / 2;
    let area = Math.PI * Math.pow(radio, 2);

    renderizarResultado(diametro, radio, area);
});