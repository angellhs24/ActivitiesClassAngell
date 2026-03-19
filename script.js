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
    renderGrid('mainBookGrid', libros.slice(0, 3)); // Solo mostramos 3 destacados al inicio
});

// MODALES
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// FIX: Función de CATÁLOGO GENERAL (Muestra todos)
function openFullCatalog() {
    const grid = document.getElementById('subCatalogGrid');
    document.getElementById('catalogo-title').innerText = "Catálogo Institucional Completo";
    renderGrid('subCatalogGrid', libros, true); // True activa el Lorem Ipsum
    openModal('modal-catalogo');
}

// Función de CATEGORÍA ESPECÍFICA
function openSubCatalog(categoria) {
    const filtrados = libros.filter(l => l.cat === categoria);
    document.getElementById('catalogo-title').innerText = `Especialidad: ${categoria}`;
    renderGrid('subCatalogGrid', filtrados, true);
    openModal('modal-catalogo');
}

function renderGrid(containerId, data, withLorem = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    data.forEach(libro => {
        const desc = withLorem ? `<p style="color:#666; font-size:0.85rem; margin: 15px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>` : '';
        
        container.innerHTML += `
            <div class="book-card">
                <img src="${libro.img}" alt="${libro.t}">
                <div class="book-info">
                    <small style="color:var(--secondary); font-weight:700;">${libro.cat}</small>
                    <h3 style="margin:5px 0;">${libro.t}</h3>
                    <p style="color:#888; font-size:0.9rem;">${libro.a}</p>
                    ${desc}
                    <button class="btn-status" style="width:100%; padding:12px; border-radius:12px; border:1px solid var(--primary); background:none; color:var(--primary); font-weight:700; cursor:pointer; margin-top:10px;" onclick="alert('Libro disponible en estantería física.')">Consultar</button>
                </div>
            </div>
        `;
    });
}

function showAllBooks() {
    renderGrid('mainBookGrid', libros);
    window.scrollTo({top: 0, behavior: 'smooth'});
}
