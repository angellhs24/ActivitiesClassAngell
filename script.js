document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-status');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    // Manejo de consulta de libros
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.book-card');
            const title = card.querySelector('h3').innerText;
            
            // Efecto visual simple al hacer clic
            button.innerText = "Verificando...";
            button.style.opacity = "0.7";

            setTimeout(() => {
                alert(`[KnowledgeHub] El libro "${title}" está disponible para préstamo en la estantería B-12.`);
                button.innerText = "Consultar Disponibilidad";
                button.style.opacity = "1";
            }, 800);
        });
    });

    // Manejo de búsqueda
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if(query.length > 0) {
            alert(`Iniciando búsqueda de: "${query}"... \nConectando con la base de datos de UPIICSA.`);
        } else {
            alert("Por favor, escribe el nombre de un libro o autor.");
        }
    });

    // Permitir buscar al presionar 'Enter'
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});