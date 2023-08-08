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
