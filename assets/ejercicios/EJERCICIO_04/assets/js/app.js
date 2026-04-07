const mes = document.getElementById("mes");
const btnEnviar = document.getElementById("btnMes");
const resultado = document.getElementById("resultado");

// Arreglo de meses por nombres y cantidad de dias
const nombres = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


btnEnviar.addEventListener("click", () => {
  const input = mes.value.trim().toLowerCase();
  const indice = nombres.indexOf(input);
  
  if (indice !== -1) {
    resultado.innerHTML = `
    <div class="alert alert-info border-0 shadow-sm animate__animated animate__fadeIn">
        <i class="bi bi-info-circle-fill me-2"></i>
        El mes de <strong>${input}</strong> tiene <strong>${diasMeses[indice]}</strong> días.
    </div>`;
    mes.value = "";
  }
});
