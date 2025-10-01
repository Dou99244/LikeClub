// JavaScript mejorado para navegación responsive (mobile y desktop)
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar sección por defecto (Inicio)
    showSection('inicio');

    // Manejar clics en enlaces del menú (reemplaza onclick inline)
    const navLinks = document.querySelectorAll('.nav a[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recarga de página en mobile/desktop
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
                toggleMenu(); // Cierra el menú hamburguesa
            }
        });
    });

    // Manejar botón de login (por separado)
    const btnLogin = document.querySelector('.btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
          window.location.href = "http://192.168.70.195/LikeClubLoggin/acceso.php";


            toggleMenu(); // Cierra menú si está abierto
        });
    }

    // Manejar formulario de reseñas (ejemplo simple)
    const formResena = document.querySelector('.form-reseña');
    if (formResena) {
        formResena.addEventListener('submit', function(e) {
            e.preventDefault();
            const calificacion = formResena.querySelector('input[type="number"]').value;
            const comentario = formResena.querySelector('textarea').value;
            if (calificacion && comentario) {
                alert('¡Reseña enviada! (En producción, se guardaría en la DB via backend).');
                formResena.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Cerrar menú al tocar fuera (mejora para mobile)
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
        if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
});

// Función para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Scroll suave a la sección
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para toggle del menú hamburguesa
function toggleMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

function toggleMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}





