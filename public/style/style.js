// -------------reproducción videos header----------------------

// seleccionamos los videos que tiene el contenedor 
let containerSlider = document.querySelector('.containerSlider');

// para saber cuántos videos tenemos, usamos el 
let videos = containerSlider.querySelectorAll('video');

// se empieza con -1 para iniciar desde el primer video 
let index = -1;

function cambiarVideo() {
    // avanzamos al siguiente video circularmente
    index = (index + 1) % videos.length;
    // cambiamos el transform del CSS para desplazar al siguiente video 
    containerSlider.style.transform = 'translateX(-' + (index * 100) + '%)';
    // reproducimos el video
    videos[index].play();
}

videos.forEach((video, i) => {
    // escucha el evento 'ended' para cambiar automáticamente cuando el video termine
    video.addEventListener('ended', () => {
        cambiarVideo();
    });
});

// Programa el cambio de video inicial
cambiarVideo();

