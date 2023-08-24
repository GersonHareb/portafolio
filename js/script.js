/*Animacion video */

document.addEventListener('DOMContentLoaded', () => {
    const cartasProyecto = document.querySelectorAll('.carta-proyecto');
  
    cartasProyecto.forEach(cartaProyecto => {
      const video = cartaProyecto.querySelector('video');
  
      cartaProyecto.addEventListener('mouseenter', () => {
        video.play();
      });
  
      cartaProyecto.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  });


  function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');
  
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
    if (window.innerWidth <= 768) { // Si es un móvil
      posicion = -5; // Comienza en -5vh
    } else { // Si es un escritorio
      posicion = 105; // Comienza en 105vw
    }
  
    const animacion = setInterval(() => {
      if (window.innerWidth <= 768) { // Si es un móvil
        posicion += 2; // Incrementamos la posición
        estrella.style.top = posicion + 'vh'; // Mueve hacia abajo
      } else { // Si es un escritorio
        posicion -= 1;
        estrella.style.left = posicion + 'vw'; // Mueve hacia la izquierda
      }
  
      if ((window.innerWidth <= 768 && posicion > 100) || (window.innerWidth > 768 && posicion < -5)) { // Cuando la estrella sale de la pantalla
        estrella.remove();
        clearInterval(animacion);
      }
    }, 20);
  }
  setInterval(crearEstrella, 100);
  
  
  /* Animacion Gersito*/
  const nave = document.querySelector('#espacio img');
  let keys = {};
  
  window.addEventListener('keydown', function (e) {
    keys[e.key] = true;
    e.preventDefault(); // Detiene el comportamiento predeterminado
  });
  
  window.addEventListener('keyup', function (e) {
    keys[e.key] = false;
  });
  
  function moveNave() {
    const step = 1; // Puedes ajustar este valor según la velocidad que desees
  

    const stepHorizontal = 1.2; 
    const stepVertical = 1.6; 
    
    // Obtiene el tamaño del viewport y de la nave
    const viewportWidth = document.getElementById('espacio').offsetWidth;
    const viewportHeight = document.getElementById('espacio').offsetHeight;
    const naveWidth = nave.offsetWidth;
    const naveHeight = nave.offsetHeight;
    
    let left = parseFloat(nave.style.left || 50);
    let top = parseFloat(nave.style.top || 30);
    
    if (keys['ArrowLeft']) left -= stepHorizontal;
    if (keys['ArrowRight']) left += stepHorizontal;
    if (keys['ArrowUp']) top -= stepVertical; 
    if (keys['ArrowDown']) top += stepVertical;
    
    // Limitar la posición para que la nave no se salga del viewport
    left = Math.max(0, Math.min(left, 100 - naveWidth / viewportWidth * 100));
    top = Math.max(0, Math.min(top, 100 - naveHeight / viewportHeight * 100));
    
    nave.style.left = `${left}%`;
    nave.style.top = `${top}%`;

    // Si Gersito está avanzando, añadir la clase de propulsor
    if (keys['ArrowRight']) {
        nave.classList.add('propulsor');
    } else {
        nave.classList.remove('propulsor');
    }
    
    
  
    requestAnimationFrame(moveNave);
  }
  
  requestAnimationFrame(moveNave);

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
    proyectil.style.left = rect.right + 'px';
    proyectil.style.top = (rect.top + rect.bottom) / 2 + 'px';
    proyectil.style.width = '20px';
    proyectil.style.height = '5px';
    proyectil.style.background = 'yellow';
    proyectil.style.boxShadow = '8px -4px 87px 12px rgba(28,137,161,1)';
    document.getElementById('espacio').appendChild(proyectil);
  
    /*Animacion disparo*/
    var velocidad = 30;
    var moverProyectil = setInterval(function() {
      var left = parseFloat(proyectil.style.left);
      proyectil.style.left = (left + velocidad) + 'px';
      
      // Verifica si el proyectil está fuera de la pantalla
      if (left > window.innerWidth) {
        clearInterval(moverProyectil);
        document.getElementById('espacio').removeChild(proyectil);
      }
    }, 16);
  }
  
  




  