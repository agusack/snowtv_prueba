// Video de trancision especial - SnowTV
var snowTv = 'img/video_snowtv_1.mp4';
// Reproducir el video especial cada 'X' bloques
var transicionEspecialDespuesDe = 1;

// Array con la lista de bloques de videos
var bloquesVideos = [
    [
        'img/video_1.mp4',
        'img/video_5.mp4',
        'img/video_3.mp4'
    ],
    [
        'img/video_6.mp4',
        'img/video_4.mp4',
        'img/video_2.mp4'
    ],
    [
        'img/video_1.mp4',
        'img/video_5.mp4',
        'img/video_3.mp4'
    ]
    // Agregar más bloques según sea necesario
];

var bloqueActual = 0; // Índice del bloque actual
var videoActual = 0;  // Índice del video actual en el bloque actual
var bloquesReproducidos = 0; // Contador de bloques reproducidos

// Obtener la hora actual
var now = new Date();
var hora = now.getHours();
var minutos = now.getMinutes();
console.log(hora, minutos)
// Switch para determinar el video a iniciar segun la hora.
switch (hora) {
    case 1:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 1hs a 1:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 1:30hs a 2hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
    case 2:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 2hs a 2:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 2:30hs a 3hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 3:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 3hs a 3:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 3:30hs a 4hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 4:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 4hs a 4:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 4:30hs a 5hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 5:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 5hs a 5:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 5:30hs a 6hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 6:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 6hs a 6:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 6:30hs a 7hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 7:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 7hs a 7:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 7:30hs a 8hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 8:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 8hs a 8:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 8:30hs a 9hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 9:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 9hs a 9:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 9:30hs a 10hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 10:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 10hs a 10:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 10:30hs a 11hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 11:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 11hs a 11:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 11:30hs a 12hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 12:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 1hs a 1:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 1:30hs a 2hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 13:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 13hs a 13:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 13:30hs a 14hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
    case 14:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 14hs a 14:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 14:30hs a 15hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 15:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 15hs a 15:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 15:30hs a 16hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 16:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 16hs a 16:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 16:30hs a 17hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 17:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 17hs a 17:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 17:30hs a 18hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 18:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 18hs a 18:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 18:30hs a 19hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 19:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 19hs a 19:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 19:30hs a 20hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 20:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 20hs a 20:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 20:30hs a 21hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 21:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 21hs a 21:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 21:30hs a 22hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 22:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 22hs a 22:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 22:30hs a 23hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 23:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 23hs a 23:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 23:30hs a 00hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
      case 0:
        if ((minutos >= 0) && (minutos < 30)) {
            // Bloque a transmitir de 00hs a 00:30hs
            bloqueActual = 0;            
            if ((minutos >= 0) && (minutos < 10)) {
                videoActual = 0;
            } else if ((minutos >= 10) && (minutos < 20)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            }
        } else {
            // Bloque a transmitir de 00:30hs a 1hs
            bloqueActual = 1;
            if ((minutos >= 30) && (minutos < 40)) {
                videoActual = 0;
            } else if ((minutos >= 40) && (minutos < 50)) {
                videoActual = 1;
            } else {
                videoActual = 2;
            } 
        }
      break;
    // Puedes agregar más casos aquí
    default:
      bloqueActual = 0;
      videoActual = 0;
  }

// Configura el reproductor de Video.js
var player = videojs('tv-player', {
    fluid: true,     // Hace que el reproductor sea responsive
    autoplay: true,  // Inicia la reproducción automáticamente
    //controls: true,  // Muestra los controles del reproductor
});

// Función para cargar el siguiente video
function cargarSiguienteVideo() {
    videoActual++;

    if (videoActual >= bloquesVideos[bloqueActual].length) {
        videoActual = 0; // Reiniciar al primer video si llegamos al final del bloque
        bloqueActual++;
        bloquesReproducidos++;

        if (bloqueActual >= bloquesVideos.length) {
            bloqueActual = 0; // Reiniciar al primer bloque si llegamos al final
        }
    }

    if (bloquesReproducidos === transicionEspecialDespuesDe) {
        var siguienteVideo = snowTv;

        // Crear un nuevo elemento de video para precargar el siguiente video
        var videoSiguiente = document.createElement('video');
        videoSiguiente.src = siguienteVideo;
        videoSiguiente.preload = 'auto'; // Precarga el video completo
        videoSiguiente.load(); // Cargar, pero no reproducir

        videoSiguiente.addEventListener('loadeddata', function() {
            console.log('Siguiente video cargado por completo:', siguienteVideo);

            // Aquí puedes agregar cualquier lógica adicional que necesites cuando el video siguiente se haya cargado por completo.
        });
    } else {

        var siguienteVideo = bloquesVideos[bloqueActual][videoActual];

        // Crear un nuevo elemento de video para precargar el siguiente video
        var videoSiguiente = document.createElement('video');
        videoSiguiente.src = siguienteVideo;
        videoSiguiente.preload = 'auto'; // Precarga el video completo
        videoSiguiente.load(); // Cargar, pero no reproducir

        videoSiguiente.addEventListener('loadeddata', function() {
            console.log('Siguiente video cargado por completo:', siguienteVideo);

            // Aquí puedes agregar cualquier lógica adicional que necesites cuando el video siguiente se haya cargado por completo.
        });
    }
}

// Función para reproducir el "video especial"
function reproducirVideoEspecial() {
    var videoEspecial = snowTv;

    // Configurar el video especial en el reproductor
    player.src({ src: videoEspecial, type: 'video/mp4' });

    player.one('canplay', function() {
        var duracionVideoEspecial = player.duration();
        console.log('Reproduciendo video especial:', videoEspecial, 'Duracion:', duracionVideoEspecial, 'segundos', 'Bloques reproducidos:', bloquesReproducidos);

        // Iniciar la transición suave 0.5 segundos antes de que finalice el video especial
        setTimeout(function() {
            iniciarTransicion();
            mostrarLogoHora();
        }, (duracionVideoEspecial - 0.5) * 1000);

        bloquesReproducidos = 0; // Reiniciar el contador de bloques reproducidos
        // Cargar el siguiente video en segundo plano
        videoActual--;
        cargarSiguienteVideo();
    });
}

// Función para reproducir el siguiente video
function reproducirSiguienteVideo() {
    var siguienteVideo = bloquesVideos[bloqueActual][videoActual];

    // Configurar el siguiente video en el reproductor, pero no reproducirlo aún
    player.src({ src: siguienteVideo, type: 'video/mp4' });

    player.one('canplay', function() {
        var duracionVideo = player.duration();
        console.log('Reproduciendo - Bloque:', bloqueActual + 1, 'Video:', videoActual + 1, 'Duracion:', duracionVideo, 'segundos', 'Bloques reproducidos:', bloquesReproducidos);

        // Iniciar la transición suave 0.5 segundos antes de que finalice el video
        setTimeout(function() {
            iniciarTransicion();
        }, (duracionVideo - 0.5) * 1000);

        // Cargar el siguiente video en segundo plano
        cargarSiguienteVideo();
    });
}

// Capa de superposición para la transición
var overlay = document.getElementById('transicion-overlay');

// Función para iniciar la transición suave
function iniciarTransicion() {
    overlay.style.opacity = '1';
}

// Función para finalizar la transición suave
function terminarTransicion() {
    setTimeout(function() {
        overlay.style.opacity = '0';
    }, 500);
}

var logo = document.getElementById('logo');
var hora = document.getElementById('hora');

// Función para ocultar logo y hora
function ocultarLogoHora() {
    logo.style.opacity = '0';
    hora.style.opacity = '0';
}

// Función para finalizar el ocultamiento logo y hora
function mostrarLogoHora() {
    setTimeout(function() {
        logo.style.opacity = '1';
        hora.style.opacity = '1';
    }, 500);
}

// Comienza a reproducir desde el primer video del primer bloque
reproducirSiguienteVideo();

// Cambia al siguiente video cuando el actual haya terminado
player.on('ended', function() {
    terminarTransicion();

    if (bloquesReproducidos === transicionEspecialDespuesDe) {
        ocultarLogoHora();
        // Reproducir el video especial después de la cantidad de bloques especificada
        reproducirVideoEspecial();
    } else {
        // Continuar reproduciendo bloques normales
        reproducirSiguienteVideo();
    }
});