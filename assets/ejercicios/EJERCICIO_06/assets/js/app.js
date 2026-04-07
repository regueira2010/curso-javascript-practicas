const inputMonto = document.getElementById("monto");
const inputCantidad = document.getElementById("cantidad");
const btnCalcular = document.getElementById("btnCalcular");
const contenedorResultado = document.getElementById("resultado");

const IVA = 0.19;

btnCalcular.addEventListener("click", () => {
  const monto = parseFloat(inputMonto.value);
  const cantidad = parseInt(inputCantidad.value);

  // Validación básica
  if (isNaN(monto) || isNaN(cantidad) || monto <= 0 || cantidad <= 0) {
    contenedorResultado.innerHTML = `
            <div class="alert alert-danger border-0 shadow-sm">
                Por favor, ingresa valores válidos mayores a cero.
            </div>`;
    return;
  }

  // Cálculos
  const subTotal = monto * cantidad;
  const ivaTotal = subTotal * IVA;
  const total = subTotal + ivaTotal;

  // Renderizado en el DOM con formato de moneda
  contenedorResultado.innerHTML = `
        <div class="card bg-light border-0 shadow-sm animate__animated animate__fadeIn">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-2">
                    <span>Subtotal Neto:</span>
                    <span class="fw-bold">$${subTotal.toLocaleString("es-CL")}</span>
                </div>
                <div class="d-flex justify-content-between mb-2 text-secondary">
                    <span>IVA (19%):</span>
                    <span>$${ivaTotal.toLocaleString("es-CL")}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between text-success h5">
                    <strong>TOTAL:</strong>
                    <strong>$${total.toLocaleString("es-CL")}</strong>
                </div>
            </div>
        </div>
    `;
});
