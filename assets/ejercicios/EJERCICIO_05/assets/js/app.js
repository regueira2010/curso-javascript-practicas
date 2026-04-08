const boton = document.getElementById("btnOrdenar"); // Se captura el boton para lanzar la funcion

boton.addEventListener("click", () => {
  let lista = [];

  for (let i = 0; i < 3; i++) {
    let contador = i + 1;
    let num;

    while (true) {
      num = parseInt(
        prompt(`Ingrese un número para la posición ${contador}: `));
      if (!isNaN(num)) {
        break;
      }
      alert("Por favor, ingresa un número valido.");
    }

    lista.push(num);
  } // Crea un arreglo, solicita los datos y valida que sean numeros.

  let n;
  do {
    n = 0;
    for (let i = 0; i < lista.length - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        let aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
        n++;
      }
    }
  } while (n != 0); // Si hay cambios 'n' no sera cero y se repite el do tantas veces como sea necesario

  const pMensaje = document.getElementById("comparacion");
  const pLista = document.getElementById("listaResultado");
  pLista.innerText = `La lista ordenada es: ${lista.join(", ")}`; // Se imprime la lista en el HTML con un mensaje para validar si son o no iguales los numeros ingresados

  if (lista[0] === lista[lista.length - 1]) {  
    pMensaje.innerText = "Todos los numeros ingresados son iguales";
  } else {
    pMensaje.innerText = "No todos los numeros son iguales";
  }
});
