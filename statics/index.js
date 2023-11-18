// ------------- cuenta regresiva ----------------------

// guardamos la fecha 14 de octubre de 2023
const fechaDada = new Date('2023-10-20T00:00:00').getTime();

// actualizamos el contador cada segundo
const intervalo = setInterval(function () {
    // obtenemos la hora actual en milisegundos
    const ahora = new Date().getTime();

    // Calcula el tiempo restante hasta la fecha dada
    const tiempoRestante = fechaDada - ahora;

    // verificamos si ya se acabo el tiempo
    if (tiempoRestante <= 0) {
        clearInterval(intervalo); //detenemos el contador si se llega a la fecha dada
        document.getElementById("cuenta").innerHTML = "Ya es la fecha dada";
    } else {
        // calculamos las horas, los días, los segundos que faltan para la fecha dada
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // actualizamos la cuenta regresiva en HTML
        document.getElementById("cuenta").innerHTML = `Faltan ${dias} Dias, ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos para que el evento comience.`;
    }
}, 1000); // ejecutamos el programa cada 1000 milisegundos


// ------------mostrar barra lateral----------------------
function abrir() {
    document.getElementById('containerBarra').style.display = 'block';
}
function cerrar() {
    document.getElementById('containerBarra').style.display = 'none';
}