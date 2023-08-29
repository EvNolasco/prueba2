// Selecciona el elemento de la barra de navegación
const navbar = document.querySelector('.navbar');

// Selecciona las secciones que no son la "portada"
const aboutMeSection = document.querySelector('.about-me');
const pricingSection = document.querySelector('.pricing');
const contactSection = document.querySelector('.contact');

// Función para cambiar la visibilidad del navbar
function toggleNavbarVisibility() {
    const portadaRect = aboutMeSection.getBoundingClientRect(); // Obtener las coordenadas y dimensiones de la sección "portada"
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador
  
    // Verificar si la parte superior de la sección "portada" está al menos el 20% visible
    if (portadaRect.top <= 0.1 * windowHeight) {
      navbar.style.display = 'block'; // Mostrar navbar cuando se desplaza
    } else {
      navbar.style.display = 'none';  // Ocultar navbar en la parte superior
    }
  }
  
  // Agregar evento de desplazamiento para cambiar la visibilidad del navbar
  window.addEventListener('scroll', toggleNavbarVisibility);
  
  // Agregar evento de carga inicial para configurar la visibilidad del navbar
  window.addEventListener('load', toggleNavbarVisibility);


//Mensaje de alerta
document.getElementById("enviarBtn").addEventListener("click", function(event) {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;

  var errorMessage = "";

  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      errorMessage = "Por favor complete todos los campos obligatorios.";
  }

  document.getElementById("errorMessage").textContent = errorMessage;

  if (errorMessage !== "") {
      event.preventDefault(); // Evita que el formulario se envíe si hay campos faltantes
  }
});


