// JavaScript básico para mostrar/ocultar secciones y manejar interacciones
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar sección por defecto (Inicio)
    showSection('inicio');

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

    // Botón de login (ejemplo: alerta, en real: modal o redirección)
    const btnLogin = document.querySelector('.btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirigiendo a login... (Integra con tu backend para autenticación con Usuarios).');
        });
    }
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
    }

    // Scroll suave a la sección
    targetSection.scrollIntoView({ behavior: 'smooth' });
}