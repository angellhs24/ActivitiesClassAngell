const libros = [
    { cat: 'Matemáticas', t: 'Cálculo Diferencial', a: 'Leithold', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400' },
    { cat: 'Programación', t: 'Clean Code', a: 'Robert C. Martin', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400' },
    { cat: 'Economía', t: 'Macroeconomía', a: 'Paul Krugman', img: 'https://images.unsplash.com/photo-1611974714024-4627aa57368d?q=80&w=400' },
    { cat: 'Administración', t: 'Gestión Moderna', a: 'Peter Drucker', img: 'https://images.unsplash.com/photo-1454165833767-027ff33027b0?q=80&w=400' },
    { cat: 'Química', t: 'Química Orgánica', a: 'Wade Jr.', img: 'https://images.unsplash.com/photo-1532187863486-abf9d3a40257?q=80&w=400' },
    { cat: 'Literatura', t: 'Cien Años de Soledad', a: 'García Márquez', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400' },
    { cat: 'Transporte', t: 'Logística Global', a: 'Ronald Ballou', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400' },
    { cat: 'Ferroviaria', t: 'Ingeniería de Vías', a: 'López Pita', img: 'https://images.unsplash.com/photo-1474487024267-582df14b4c33?q=80&w=400' }
];

document.addEventListener('DOMContentLoaded', () => {
    renderGrid('mainBookGrid', libros);
});

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// FIX: Función para abrir TODO el catálogo
function openFullCatalog() {
    document.getElementById('catalogo-title').innerText = "Catálogo General UPIICSA";
    renderGrid('subCatalogGrid', libros, true); // Muestra TODOS los libros con Lorem Ipsum
    openModal('modal-catalogo');
}

// Abre catálogo por categoría específica
function openSubCatalog(categoria) {
    const filtrados = libros.filter(l => l.cat === categoria);
    document.getElementById('catalogo-title').innerText = `Biblioteca de ${categoria}`;
    renderGrid('subCatalogGrid', filtrados, true);
    openModal('modal-catalogo');
}

function renderGrid(containerId, data, withLorem = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    data.forEach(libro => {
        const desc = withLorem ? `<p style="font-size:0.8rem; color:#666; margin: 10px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id porta nulla, ac maximus nisi.</p>` : '';
        container.innerHTML += `
            <div class="book-card">
                <img src="${libro.img}" alt="${libro.t}">
                <div class="book-info">
                    <span style="font-size:0.7rem; color:var(--secondary); font-weight:bold;">${libro.cat}</span>
                    <h3>${libro.t}</h3>
                    <p>Autor: ${libro.a}</p>
                    ${desc}
                    <button class="btn-status" onclick="alert('Verificando disponibilidad en Sede UPIICSA...')">Consultar</button>
                </div>
            </div>
        `;
    });
}

function showAllBooks() {
    renderGrid('mainBookGrid', libros);
    window.scrollTo({top: 0, behavior: 'smooth'});
}
