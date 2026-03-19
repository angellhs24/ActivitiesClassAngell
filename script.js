document.addEventListener('DOMContentLoaded', () => {

    // Referencias
    const buttons = document.querySelectorAll('.btn-status');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    // MÓDULO DE MODALES (VENTANAS FLOTANTES)
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Bloquea scroll fondo
        }
    }

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Libera scroll
        }
    }

    window.closeAllModals = function() {
        document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        document.body.style.overflow = 'auto';
    }

    // Cerrar modal al hacer clic fuera del cuadro blanco
    window.onclick = function(event) {
        if (event.target.classList.contains('modal-overlay')) {
            closeAllModals();
        }
    }

    // CONSULTA DE LIBROS
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.book-card');
            const title = card.querySelector('h3').innerText;
            
            const originalText = button.innerText;
            button.innerText = "Verificando...";
            button.style.opacity = "0.7";
            button.disabled = true;

            setTimeout(() => {
                alert(`[KnowledgeHub] El libro "${title}" está disponible para préstamo en UPIICSA.`);
                button.innerText = originalText;
                button.style.opacity = "1";
                button.disabled = false;
            }, 800);
        });
    });

    // BÚSQUEDA
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if(query.length > 0) {
            alert(`Buscando: "${query}" en el sistema de bibliotecas...`);
        } else {
            alert("Por favor, ingresa un término de búsqueda.");
        }
    });

    // Soporte para tecla Enter en el buscador
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
});
