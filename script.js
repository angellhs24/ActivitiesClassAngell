// Base de datos de libros con links DIRECTOS A IMAGEN corregidos
const libros = [
    { 
        cat: 'Matemáticas', 
        t: 'Cálculo Diferencial', 
        a: 'Leithold', 
        // Imagen de una pizarra con fórmulas
        img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Programación', 
        t: 'Clean Code', 
        a: 'Robert C. Martin', 
        // Imagen de código fuente en una pantalla
        img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Economía', 
        t: 'Macroeconomía', 
        a: 'Paul Krugman', 
        // Imagen de gráficas financieras (reemplazo directo)
        img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Administración', 
        t: 'Gestión Moderna', 
        a: 'Peter Drucker', 
        // Imagen de reunión de negocios/estrategia (reemplazo directo)
        img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Química', 
        t: 'Química Orgánica', 
        a: 'Wade Jr.', 
        // Imagen de tubos de ensayo y laboratorio (reemplazo directo)
        img: 'https://images.unsplash.com/photo-1532187863486-abf9d3a40257?auto=format&fit=crop&q=80&w=400' 
    },
    { 
        cat: 'Literatura', 
        t: 'Cien Años de Soledad', 
        a: 'García Márquez', 
        // Imagen de un libro antiguo abierto
        img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Transporte', 
        t: 'Logística Global', 
        a: 'Ronald Ballou', 
        // Imagen de contenedores de envío
        img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop' 
    },
    { 
        cat: 'Ferroviaria', 
        t: 'Ingeniería de Vías', 
        a: 'López Pita', 
        // Imagen directa de vías de tren (la que ya te funcionaba)
        img: 'https://images.unsplash.com/photo-1474487024267-582df14b4c33?auto=format&fit=crop&q=80&w=400' 
    }
];

// Al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    // Mostramos los primeros 3 libros como "destacados" en el inicio
    renderGrid('mainBookGrid', libros.slice(0, 3));
    
    // Configurar el buscador para que funcione con la tecla Enter
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
});

// GESTIÓN DE MODALES
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita scroll al estar abierto
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Cerrar modales al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// MUESTRA TODOS LOS LIBROS EN EL CATÁLOGO (CON LOREM IPSUM)
function openFullCatalog() {
    renderGrid('subCatalogGrid', libros, true);
    document.getElementById('catalogo-title').innerText = "Catálogo Institucional";
    openModal('modal-catalogo');
}

// MUESTRA POR ACADEMIA/CATEGORÍA (CON LOREM IPSUM)
function openSubCatalog(categoria) {
    const filtrados = libros.filter(l => l.cat === categoria);
    document.getElementById('catalogo-title').innerText = `Biblioteca de ${categoria}`;
    renderGrid('subCatalogGrid', filtrados, true);
    openModal('modal-catalogo');
}

// FUNCIÓN MAESTRA PARA DIBUJAR LOS LIBROS
function renderGrid(containerId, data, withLorem = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (data.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No se encontraron resultados.</p>';
        return;
    }

    data.forEach(libro => {
        const desc = withLorem ? `<p style="color:#666; font-size:0.8rem; margin: 10px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>` : '';
        
        container.innerHTML += `
            <div class="book-card">
                <img src="${libro.img}" alt="${libro.t}" onerror="this.src='https://images.unsplash.com/photo-1543003923-4330f3396860?q=80&w=400'">
                <div class="book-info">
                    <small style="color:var(--secondary); font-weight:700;">${libro.cat}</small>
                    <h3 style="margin:5px 0;">${libro.t}</h3>
                    <p style="color:#888; font-size:0.9rem;">${libro.a}</p>
                    ${desc}
                    <button class="btn-status" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid var(--primary); background:none; color:var(--primary); font-weight:700; cursor:pointer; margin-top:10px;" onclick="alert('Verificando disponibilidad en sistema...')">Consultar</button>
                </div>
            </div>
        `;
    });
}

// FUNCIÓN PARA EL BOTÓN INICIO (MUESTRA TODO EN LA PÁGINA PRINCIPAL)
function showAllBooks() {
    renderGrid('mainBookGrid', libros);
    document.getElementById('display-title').innerText = "Catálogo Completo";
    document.getElementById('display-subtitle').innerText = "Explora todo nuestro acervo bibliográfico.";
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// FUNCIÓN DE BÚSQUEDA
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (query === "") {
        renderGrid('mainBookGrid', libros.slice(0, 3));
        document.getElementById('display-title').innerText = "Libros Destacados";
        return;
    }

    const filtrados = libros.filter(l => 
        l.t.toLowerCase().includes(query) || 
        l.a.toLowerCase().includes(query) || 
        l.cat.toLowerCase().includes(query)
    );

    renderGrid('mainBookGrid', filtrados);
    document.getElementById('display-title').innerText = `Resultados: "${query}"`;
}
