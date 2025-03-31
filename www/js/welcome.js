// Establece la fecha objetivo
const fechaObjetivo = new Date("Oct 11, 2025 12:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const x = setInterval(function () {

  // Obtén la fecha y hora actual
  const ahora = new Date().getTime();

  // Encuentra la distancia entre ahora y la fecha objetivo
  const distancia = fechaObjetivo - ahora;

  // Calcula el tiempo para días, horas, minutos y segundos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Muestra el resultado en los elementos con los IDs correspondientes
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  // Si la cuenta regresiva ha terminado, escribe un mensaje
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("cuenta-atras").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
}, 1000);


// Función para mostrar Google Maps
function initMap() {
  const iglesia = { lat: 36.597627129642355, lng: -6.235430154492191 };
  const finca = { lat: 36.68532176597533, lng: -6.249484967459108 };
  // const center = { lat: 41.513338993899914, lng: 2.2339041952419825 };

  var map = new google.maps.Map(document.getElementById("mapDiv"), {
    zoom: 9,
    center: iglesia,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });

  new google.maps.Marker({
    position: iglesia,
    map,
    title: "Parroquia"
  });

  new google.maps.Marker({
    position: finca,
    map,
    title: "Finca"
  });
}


function animateOnScroll(className) {
  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll(`.${className}`);
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.85;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerPoint) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  });
}

// Llamar a la función para distintos elementos
document.addEventListener("DOMContentLoaded", function () {
  animateOnScroll('event');      // Para los eventos del itinerario
  animateOnScroll('scroll-reveal'); // Para los elementos que se revelan al hacer scroll
});


// // Itinerario
// window.addEventListener('scroll', function () {
//   const events = document.querySelectorAll('.event');
//   const windowHeight = window.innerHeight;
//   const triggerPoint = windowHeight * 0.85;

//   events.forEach(event => {
//     const eventTop = event.getBoundingClientRect().top;
//     if (eventTop < triggerPoint) {
//       event.classList.add('show');
//     } else {
//       event.classList.remove('show');
//     }
//   });
// });

