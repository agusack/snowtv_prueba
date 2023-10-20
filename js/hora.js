// Obtener el elemento donde mostraremos la hora
var divHora = document.getElementById("hora");

// Función para actualizar la hora cada segundo
function actualizarHora() {
    var fechaActual = new Date();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    // Formatear la hora para mostrar siempre dos dígitos
    var horaFormateada = (hora < 10 ? "0" : "") + hora;
    var minutosFormateados = (minutos < 10 ? "0" : "") + minutos;
    var segundosFormateados = (segundos < 10 ? "0" : "") + segundos;

    // Construir la cadena de la hora
    var cadenaHora = horaFormateada + ":" + minutosFormateados;

    // Actualizar el contenido del elemento HTML con la hora
    divHora.textContent = cadenaHora;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);