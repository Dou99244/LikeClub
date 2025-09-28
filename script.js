
document.addEventListener('DOMContentLoaded', function() {
 
    showSection('inicio');


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

    
    const btnLogin = document.querySelector('.btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirigiendo a login... (Integra con tu backend para autenticación con Usuarios).');
        });
    }

 
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
        if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
});

function showSection(sectionId) {
  
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

   
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

   
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

   
    toggleMenu();
}


function toggleMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}
