document.addEventListener('DOMContentLoaded', () => {
    // Alerta de disponibilidad
    const buttons = document.querySelectorAll('.btn-status');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const bookTitle = button.parentElement.querySelector('h3').innerText;
            alert(`Consultando disponibilidad de: "${bookTitle}" en el sistema KnowledgeHub...`);
        });
    });

    // Simulación de búsqueda
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if(query) {
            alert(`Buscando: ${query} en el catálogo de la Universidad...`);
        } else {
            alert("Por favor, ingresa un término de búsqueda.");
        }
    });
});