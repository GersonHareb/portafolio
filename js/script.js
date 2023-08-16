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
addStars(starsContainer, 200); // ajustar la cantidad de estrellas

// Añadir clase de animación a las estrellas
const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    star.style.animationDelay = `${index * 0.1}s`;
});

/*Animacion navbar*/
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('custom-navbar');
    const navLinks = navbar.querySelectorAll('.navbar-menu a');


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
             navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === '#proyectos') {
                    navLink.classList.add('active-proyecto');
                } else {
                    navLink.classList.remove('active-proyecto');
                }
            });
        } else {
            navbar.classList.remove('proyecto-nav');
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-proyecto');
            });
        }

        // Verificar si el scroll está sobre la sección "sobre-mi"
        const sectionSobreMi= document.getElementById('sobre-mi');
        const sectionSobreMiTop = sectionSobreMi.offsetTop;
        const sectionSobreMiBottom = sectionSobreMiTop + sectionSobreMi.clientHeight;

        if (window.scrollY >= sectionSobreMiTop && window.scrollY < sectionSobreMiBottom) {
            navbar.classList.add('sobre-mi-nav');
            navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === '#sobre-mi') {
                    navLink.classList.add('active-sobre-mi');
                } else {
                    navLink.classList.remove('active-sobre-mi');
                }
            });
        } else {
            navbar.classList.remove('sobre-mi-nav');
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-sobre-mi');
            });
        }

        // Verificar si el scroll está sobre la sección "contacto"
        const sectionContacto = document.getElementById('contacto');
        const sectionContactoTop = sectionContacto.offsetTop;
        const sectionContactoBottom = sectionContactoTop + sectionContacto.clientHeight;

        if (window.scrollY >= sectionContactoTop && window.scrollY < sectionContactoBottom) {
            navbar.classList.add('contacto-nav');
            navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === '#contacto') {
                    navLink.classList.add('active-contacto');
                } else {
                    navLink.classList.remove('active-contacto');
                }
            });
        } else {
            navbar.classList.remove('contacto-nav');
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-contacto');
            });
        }
    } 

    window.addEventListener('scroll', updateNavbarPosition);
});

  
  
  
  