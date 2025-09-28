
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
});


function showSection(sectionId) {
   
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

   
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        target
}
