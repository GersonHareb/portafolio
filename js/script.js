/*Creacion estrellas */
function crearEstrella() {
  const estrella = document.createElement('div');
  estrella.classList.add('estrella');
  let estrellasActivas = 0;
  estrellasActivas++;

  if (window.innerWidth <= 768) { // Si es un móvil
    estrella.style.left = Math.random() * 100 + 'vw';
    estrella.style.top = '-5vh'; // Comienza fuera de la pantalla arriba
  } else { // Si es un escritorio
    estrella.style.left = '105vw'; // Comienza fuera de la pantalla a la derecha
    estrella.style.top = Math.random() * 100 + 'vh';
  }

  if (Math.random() < 0.5) {
    estrella.classList.add('estrellaBrillante');
  }

  espacio.appendChild(estrella);

  let posicion;
  if (window.innerWidth <= 768) {
    posicion = 5;
  } else {
    posicion = 105;
  }

  const animacion = setInterval(() => {
    if (window.innerWidth <= 768) {
      posicion += 2;
      estrella.style.top = posicion + 'vh';
    } else {
      posicion -= 1;
      estrella.style.left = posicion + 'vw';
    }

    if ((window.innerWidth <= 768 && posicion > 100) || (window.innerWidth > 768 && posicion < 1)) { // Cuando la estrella sale de la pantalla
      estrella.remove();
      clearInterval(animacion);
      estrellasActivas--;
    }
  }, 20);
}

setInterval(crearEstrella, 100);


/* Animacion Nave Gersin*/
const nave = document.querySelector('#espacio img');
let keys = {};

window.addEventListener('keydown', function (e) {
  keys[e.key] = true;
  e.preventDefault();
});

window.addEventListener('keyup', function (e) {
  keys[e.key] = false;
});

let posicionInicialEstablecida = false;

function moveNave() {
  const stepHorizontal = 1.2;
  const stepVertical = 1.6;
  let left = parseFloat(nave.style.left || 50);

  if (!posicionInicialEstablecida && !keys['ArrowUp'] && !keys['ArrowDown']) {
    if (window.innerWidth <= 768) {
      nave.style.top = `${100 - 28}%`;
    } else {
      nave.style.top = `30%`;
    }
    posicionInicialEstablecida = true;
  }

  let top = parseFloat(nave.style.top || 50);

  if (keys['ArrowLeft']) left -= stepHorizontal;
  if (keys['ArrowRight']) left += stepHorizontal;
  if (keys['ArrowUp']) top -= stepVertical;
  if (keys['ArrowDown']) top += stepVertical;

  /*Limitar la posición para que la nave no se salga del viewport*/
  left = Math.max(0, Math.min(left, 100));
  top = Math.max(0, Math.min(top, 100));

  nave.style.left = `${left}%`;
  nave.style.top = `${top}%`;

  /*Si Gersito está avanzando, añadir la clase de propulsor*/
  if (keys['ArrowRight']) {
    nave.classList.add('propulsor');
  } else {
    nave.classList.remove('propulsor');
  }

  requestAnimationFrame(moveNave);
}

moveNave();



/*Disparar*/
var proyectil = document.createElement('div');
window.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    disparar();
  }
});


function disparar() {
var nave = document.querySelector('#espacio img');
var rect = nave.getBoundingClientRect();

var proyectil = document.createElement('div');
proyectil.style.position = 'absolute';

if (window.innerWidth <= 768) {
  proyectil.style.left = (rect.left + rect.right) / 2 + 'px'; 
  proyectil.style.top = rect.top + 'px';
  proyectil.style.width = '5px';
  proyectil.style.height = '20px';
} else {
  proyectil.style.left = (rect.left + rect.right) / 2 - 10 + 'px';
  proyectil.style.top = (rect.top + rect.bottom) / 2 + 'px';
  proyectil.style.width = '20px';
  proyectil.style.height = '5px';
}

proyectil.style.background = 'yellow';
proyectil.style.boxShadow = '8px -4px 87px 12px rgba(28,137,161,1)';
document.getElementById('espacio').appendChild(proyectil);

/* Animacion disparo */
var velocidad = 30;
var moverProyectil = setInterval(function() {
  if (window.innerWidth <= 768) {
    var top = parseFloat(proyectil.style.top);
    proyectil.style.top = (top - velocidad) + 'px';

    if (top < 0) {
      clearInterval(moverProyectil);
      document.getElementById('espacio').removeChild(proyectil);
    }
  } else {
    var left = parseFloat(proyectil.style.left);
    proyectil.style.left = (left + velocidad) + 'px';

    if (left > window.innerWidth) {
      clearInterval(moverProyectil);
      document.getElementById('espacio').removeChild(proyectil);
    }
  }
}, 16);
}


/*utilizar mis repositorios Github*/
const projectContainer = document.getElementById('github-projects');
const topicFilter = document.getElementById('topic-filter');

// Función para crear y mostrar las cartas
function displayRepos(repos) {
  projectContainer.innerHTML = '';

  repos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h3');
    title.innerText = repo.name;

    const description = document.createElement('p');
    description.innerText = repo.description || 'Sin descripción';

    const link = document.createElement('a');
    link.href = repo.html_url;
    link.innerText = 'Ver en GitHub';

    const topicsContainer = document.createElement('div');
    topicsContainer.className = 'topics';
    if (repo.topics && repo.topics.length > 0) {
      repo.topics.forEach(topic => {
        const topicLabel = document.createElement('span');
        topicLabel.className = 'topic-label';
        topicLabel.innerText = topic;
        topicsContainer.appendChild(topicLabel);
      });
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(topicsContainer);
    card.appendChild(link);

    projectContainer.appendChild(card);
  });
}

// Fetch inicial
fetch('https://api.github.com/users/GersonHareb/repos', {
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json'
  }
})
.then(response => response.json())
.then(data => {
  // Muestra todos los repositorios al inicio
  displayRepos(data);

  // Añade el evento al combo para filtrar los repos
  topicFilter.addEventListener('change', function() {
    const selectedTopic = this.value;
    let filteredRepos;

    if (selectedTopic === 'all') {
      filteredRepos = data;
    } else {
      filteredRepos = data.filter(repo => repo.topics && repo.topics.includes(selectedTopic));
    }

    displayRepos(filteredRepos);
  });
});

