const boton = document.getElementById("btnContarVocales");

boton.addEventListener("click", () => {
  const VOCALES = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let palabras = [];
  let cantidad = parseInt(prompt("¿Cuántas palabras deseas procesar?"));

  for (let i = 0; i < cantidad; i++) {
    let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
    if (palabra) {
      palabras.push(palabra.toLowerCase());
    }
  }

  let totalVocales = 0;
  let textoCompleto = palabras.join("");
  console.log(textoCompleto);
  for (let i = 0; i < textoCompleto.length; i++) {
    let letra = textoCompleto[i];
    if (VOCALES.includes(letra)) {
      totalVocales++;
    }
  }

  resultado.classList.remove("d-none");
  resultado.innerHTML = `
        <p class="mb-1"><strong>Palabras:</strong> ${palabras.join(", ")}</p>
        <p class="mb-0"><strong>Total vocales:</strong> ${totalVocales}</p>
    `;
});
