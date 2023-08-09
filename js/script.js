// Función para crear una estrella
function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    return star;
}

// Función para añadir estrellas al contenedor
function addStars(container, count) {
    for (let i = 0; i < count; i++) {
        const star = createStar();
        const x = Math.random() * window.innerWidth; // Posición horizontal aleatoria
        const y = Math.random() * window.innerHeight; // Posición vertical aleatoria
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        container.appendChild(star);
    }
}

// Añadir estrellas al contenedor de estrellas
const starsContainer = document.querySelector(".stars-container");
addStars(starsContainer, 50); // Puedes ajustar la cantidad de estrellas

// Añadir clase de animación a las estrellas
const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    star.style.animationDelay = `${index * 0.1}s`;
});

/*Animacion navbar*/
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('custom-navbar');

    function updateNavbarPosition() {
        if (window.scrollY >= navbar.offsetTop) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Volver a la posición original en la mitad de la pantalla de la sección de inicio
        const windowHeight = window.innerHeight;
        const halfWindowHeight = windowHeight / 2;
        const sectionInicio = document.getElementById('welcome');
        const sectionInicioTop = sectionInicio.offsetTop;

        if (window.scrollY >= sectionInicioTop && window.scrollY < sectionInicioTop + halfWindowHeight) {
            navbar.classList.remove('scrolled');
        }

        // Verificar si el scroll está sobre la sección "proyectos"
        const sectionProyectos = document.getElementById('proyectos');
        const sectionProyectosTop = sectionProyectos.offsetTop;
        const sectionProyectosBottom = sectionProyectosTop + sectionProyectos.clientHeight;

        if (window.scrollY >= sectionProyectosTop && window.scrollY < sectionProyectosBottom) {
            navbar.classList.add('proyecto-nav');
        } else {
            navbar.classList.remove('proyecto-nav');
        }

        // Verificar si el scroll está sobre la sección "sobre-mi"
        const sectionSobreMi= document.getElementById('sobre-mi');
        const sectionSobreMiTop = sectionSobreMi.offsetTop;
        const sectionSobreMiBottom = sectionSobreMiTop + sectionSobreMi.clientHeight;

        if (window.scrollY >= sectionSobreMiTop && window.scrollY < sectionSobreMiBottom) {
            navbar.classList.add('sobre-mi-nav');
        } else {
            navbar.classList.remove('sobre-mi-nav');
        }

        // Verificar si el scroll está sobre la sección "contacto"
        const sectionContacto = document.getElementById('contacto');
        const sectionContactoTop = sectionContacto.offsetTop;
        const sectionContactoBottom = sectionContactoTop + sectionContacto.clientHeight;

        if (window.scrollY >= sectionContactoTop && window.scrollY < sectionContactoBottom) {
            navbar.classList.add('contacto-nav');
        } else {
            navbar.classList.remove('contacto-nav');
        }
    } 

    window.addEventListener('scroll', updateNavbarPosition);
});

  
  
  
  