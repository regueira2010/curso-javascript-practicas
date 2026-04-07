const numMovil = document.getElementById("inputTelefono");
const btnBuscar = document.getElementById("btnBuscar");
const mensajeBusqueda = document.getElementById("resultadoBusqueda");

// Objeto con 20 números aleatorios (Formato: "9XXXXXXXX")
const agenda = [
    { nombre: "Juan Pérez", telefono: "911111111" },
    { nombre: "María Ignacia", telefono: "912345678" },
    { nombre: "Andrés Soto", telefono: "922334455" },
    { nombre: "Carla Villalobos", telefono: "933445566" },
    { nombre: "Diego Portales", telefono: "944556677" },
];

btnBuscar.addEventListener("click", () => {
    const busqueda = "9" + numMovil.value.trim();

    if (numMovil.value.length !== 8) {
        mensajeBusqueda.innerHTML = `<div class="alert alert-warning">Ingresa 8 números para completar el teléfono a llamar.</div>`;
        return;
    }

    const contacto = agenda.find(item => item.telefono === busqueda); // aplicacion del metodo find(), se compara el valor telefono en el arreglo con lo que viene del input

    if (contacto) {// si se encuentra el contacto trae los datos encontrados
        mensajeBusqueda.innerHTML = `
            <div class="alert alert-success shadow-sm">
                <strong>Llamando a:</strong><br>
                <strong>Nombre:</strong> ${contacto.nombre} <br>
                <strong>Teléfono:</strong> ${contacto.telefono}
            </div>`;
    } else {
        mensajeBusqueda.innerHTML = `
            <div class="alert alert-danger shadow-sm">
                Número no encontrado en la agenda.
            </div>`;
    }
});