/* ----------------------------------------------------
   A. SEMILLA DE DATOS DE EJEMPLO
   ---------------------------------------------------- */
const SEED_PROPERTIES = [
    {
        id: "prop_seed_1",
        title: "Exclusivo Departamento en Cayma Alta con Vista al Misti",
        description: "Espectacular departamento con amplias terrazas, acabados en granito y mármol de sillar, ubicado en una zona residencial muy segura de Cayma. A pocos pasos de centros comerciales y colegios.",
        type: "Piso",
        price: 520000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0001",
        surface_built: 135,
        surface_usable: 115,
        surface_plot: 0,
        bedrooms: 3,
        bathrooms: 3,
        toilets: 1,
        floor: 4,
        year_built: 2021,
        address: "Av. León Velarde 204",
        city: "Arequipa",
        postal_code: "04018",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3852,
        lng: -71.5458,
        features: ["Ascensor", "Terraza/Balcón", "Garaje", "Cocina Equipada"],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "A",
        agent_name: "Juan Pérez",
        agent_phone: "959656213",
        agent_email: "juan@ambientesarequipa.com",
        featured: true,
        created_at: "2025-01-01"
    },
    {
        id: "prop_seed_2",
        title: "Hermosa Casa Colonial en Yanahuara",
        description: "Casa tradicional con arquerías de sillar originales en Yanahuara, ideal para residencia o negocio exclusivo. Cuenta con un hermoso patio central arequipeño y amplios salones.",
        type: "Casa",
        price: 1150000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0002",
        surface_built: 340,
        surface_usable: 300,
        surface_plot: 420,
        bedrooms: 5,
        bathrooms: 4,
        toilets: 2,
        floor: 1,
        year_built: 1985,
        address: "Calle Lima 302, Yanahuara",
        city: "Arequipa",
        postal_code: "04017",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3888,
        lng: -71.5415,
        features: ["Jardín", "Garaje", "Calefacción", "Trastero"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "C",
        agent_name: "Gabriela Torres",
        agent_phone: "903263397",
        agent_email: "gabriela@ambientesarequipa.com",
        featured: true,
        created_at: "2025-01-02"
    },
    {
        id: "prop_seed_3",
        title: "Chalet Moderno en Sabandía",
        description: "Lujoso chalet rodeado de campiña, con piscina templada, amplios jardines y zona de parrillas completa. Clima soleado todo el año y total tranquilidad fuera del bullicio urbano.",
        type: "Chalet",
        price: 950000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0003",
        surface_built: 280,
        surface_usable: 240,
        surface_plot: 600,
        bedrooms: 4,
        bathrooms: 4,
        toilets: 1,
        floor: 2,
        year_built: 2019,
        address: "Av. Sabandía s/n",
        city: "Arequipa",
        postal_code: "04009",
        province: "Arequipa",
        country: "Perú",
        lat: -16.4447,
        lng: -71.5011,
        features: ["Piscina", "Jardín", "Garaje", "Terraza/Balcón", "Amueblado"],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "A",
        agent_name: "Juan Pérez",
        agent_phone: "959656213",
        agent_email: "juan@ambientesarequipa.com",
        featured: false,
        created_at: "2025-01-03"
    },
    {
        id: "prop_seed_4",
        title: "Ático Penthouse en Cerro Colorado",
        description: "Moderna propiedad en piso 8 con inmejorable vista a los tres volcanes de Arequipa. Zona exclusiva con ascensor directo, jacuzzi en terraza y acabados de lujo.",
        type: "Ático",
        price: 780000,
        currency: "S/",
        status: "Reservada",
        reference: "AR-0004",
        surface_built: 190,
        surface_usable: 160,
        surface_plot: 0,
        bedrooms: 3,
        bathrooms: 3,
        toilets: 1,
        floor: 8,
        year_built: 2022,
        address: "Calle Los Guindos 402",
        city: "Arequipa",
        postal_code: "04011",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3725,
        lng: -71.5583,
        features: ["Ascensor", "Terraza/Balcón", "Garaje", "Aire Acondicionado", "Cocina Equipada"],
        images: [
            "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "B",
        agent_name: "Gabriela Torres",
        agent_phone: "903263397",
        agent_email: "gabriela@ambientesarequipa.com",
        featured: true,
        created_at: "2025-01-04"
    },
    {
        id: "prop_seed_5",
        title: "Departamento Económico en el Cercado",
        description: "Ideal para estudiantes o profesionales, ubicado estratégicamente a cuadras de la UNSA y Plaza de Armas. Excelente conectividad a transporte público.",
        type: "Piso",
        price: 260000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0005",
        surface_built: 72,
        surface_usable: 68,
        surface_plot: 0,
        bedrooms: 2,
        bathrooms: 1,
        toilets: 0,
        floor: 3,
        year_built: 2012,
        address: "Calle Melgar 112",
        city: "Arequipa",
        postal_code: "04001",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3970,
        lng: -71.5305,
        features: ["Cocina Equipada", "Depósito"],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "D",
        agent_name: "Juan Pérez",
        agent_phone: "959656213",
        agent_email: "juan@ambientesarequipa.com",
        featured: false,
        created_at: "2025-01-05"
    },
    {
        id: "prop_seed_6",
        title: "Local Comercial Estreno Av. Ejercito",
        description: "Local comercial de alto flujo peatonal y vehicular en plena Av. Ejército. Cuenta con amplias mamparas de vidrio templado, sótano y mezanine.",
        type: "Local",
        price: 680000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0006",
        surface_built: 150,
        surface_usable: 145,
        surface_plot: 180,
        bedrooms: 0,
        bathrooms: 2,
        toilets: 2,
        floor: 1,
        year_built: 2023,
        address: "Av. Ejército 720",
        city: "Arequipa",
        postal_code: "04017",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3912,
        lng: -71.5492,
        features: ["Accesibilidad", "Trastero"],
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "A",
        agent_name: "Gabriela Torres",
        agent_phone: "903263397",
        agent_email: "gabriela@ambientesarequipa.com",
        featured: false,
        created_at: "2025-01-06"
    },
    {
        id: "prop_seed_7",
        title: "Terreno Plano para Proyecto Inmobiliario",
        description: "Excelente terreno en Cayma, muy cerca del Club del Colegio de Abogados. Completamente cercado, cuenta con factibilidad para servicios de luz, agua y desagüe.",
        type: "Terreno",
        price: 850000,
        currency: "S/",
        status: "Vendida",
        reference: "AR-0007",
        surface_built: 0,
        surface_usable: 0,
        surface_plot: 500,
        bedrooms: 0,
        bathrooms: 0,
        toilets: 0,
        floor: 0,
        year_built: 2024,
        address: "Urb. Los Portales Calle B-12",
        city: "Arequipa",
        postal_code: "04018",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3788,
        lng: -71.5522,
        features: ["Accesibilidad"],
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "G",
        agent_name: "Gabriela Torres",
        agent_phone: "903263397",
        agent_email: "gabriela@ambientesarequipa.com",
        featured: false,
        created_at: "2025-01-07"
    },
    {
        id: "prop_seed_8",
        title: "Moderna Residencia en Cayma Sector Vallecito",
        description: "Exquisita arquitectura minimalista con ventanales de doble altura, acabados en madera Shihuahuaco, cocina equipada con isla de cuarzo y terraza lounge.",
        type: "Casa",
        price: 1200000,
        currency: "S/",
        status: "Disponible",
        reference: "AR-0008",
        surface_built: 310,
        surface_usable: 280,
        surface_plot: 350,
        bedrooms: 4,
        bathrooms: 5,
        toilets: 1,
        floor: 2,
        year_built: 2022,
        address: "Calle Los Cedros 304",
        city: "Arequipa",
        postal_code: "04018",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3915,
        lng: -71.5450,
        features: ["Terraza/Balcón", "Garaje", "Cocina Equipada", "Jardín"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        ],
        energy_cert: "A",
        agent_name: "Juan Pérez",
        agent_phone: "959656213",
        agent_email: "juan@ambientesarequipa.com",
        featured: true,
        created_at: "2025-01-08"
    }
];

/* ----------------------------------------------------
   B. SISTEMA DE BASE DE DATOS LOCALSTORAGE
   ---------------------------------------------------- */
const DB_KEY = 'ambientes_properties';

function initDB() {
    if (!localStorage.getItem(DB_KEY)) {
        localStorage.setItem(DB_KEY, JSON.stringify(SEED_PROPERTIES));
    }
}

function getProperties() {
    initDB();
    return JSON.parse(localStorage.getItem(DB_KEY));
}

function saveProperties(props) {
    localStorage.setItem(DB_KEY, JSON.stringify(props));
}

/* ----------------------------------------------------
   C. RUTEO Y MANEJO DE VISTAS (SPA)
   ---------------------------------------------------- */
let currentSection = 'frontend';

function navigateTo(section) {
    // Si navega al panel admin, validar autenticación primero
    if (section === 'admin') {
        const isAuth = sessionStorage.getItem('ambientes_authenticated') === 'true';
        if (!isAuth) {
            document.querySelectorAll('.page-section').forEach(sec => {
                sec.classList.remove('active');
            });
            const targetSec = document.getElementById('section-admin');
            if (targetSec) targetSec.classList.add('active');

            document.getElementById('admin-login-container').style.display = 'flex';
            document.getElementById('admin-main-panel').style.display = 'none';
            document.getElementById('nav-menu').classList.remove('active');
            return;
        } else {
            document.getElementById('admin-login-container').style.display = 'none';
            document.getElementById('admin-main-panel').style.display = 'block';
        }
    }

    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    const targetSec = document.getElementById(`section-${section}`);
    if (targetSec) targetSec.classList.add('active');

    // Reset active link style
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    if (section === 'frontend') {
        document.getElementById('nav-comprar').classList.add('active');
    } else if (section === 'vender') {
        document.getElementById('nav-vender').classList.add('active');
    } else if (section === 'contacto') {
        document.getElementById('nav-contacto').classList.add('active');
    }

    // Close mobile menu if open
    document.getElementById('nav-menu').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (section === 'admin') {
        renderAdmin();
    } else if (section === 'frontend') {
        renderPublicCatalog();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

/* ----------------------------------------------------
   D. RENDERIZACIÓN DEL CATÁLOGO PÚBLICO
   ---------------------------------------------------- */
function renderPublicCatalog() {
    const container = document.getElementById('properties-grid');
    const properties = getProperties();
    
    // Obtener valores del buscador
    const filterLoc = document.getElementById('filter-location').value.toLowerCase().trim();
    const filterType = document.getElementById('filter-type').value;
    const filterMinPrice = parseFloat(document.getElementById('filter-price-min').value) || 0;
    const filterMaxPrice = parseFloat(document.getElementById('filter-price-max').value) || Infinity;
    const filterBeds = document.getElementById('filter-bedrooms').value;

    // Filtrar
    const filtered = properties.filter(prop => {
        const matchLoc = !filterLoc || 
            prop.address.toLowerCase().includes(filterLoc) || 
            prop.city.toLowerCase().includes(filterLoc) ||
            prop.title.toLowerCase().includes(filterLoc);
        const matchType = filterType === 'Todos' || prop.type === filterType;
        const matchPrice = prop.price >= filterMinPrice && prop.price <= filterMaxPrice;
        let matchBeds = true;
        if (filterBeds !== 'Todos') {
            const bedNum = parseInt(filterBeds);
            matchBeds = prop.bedrooms >= bedNum;
        }
        return matchLoc && matchType && matchPrice && matchBeds;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>No encontramos propiedades</h3>
                <p>Intenta cambiar los parámetros de búsqueda o limpiar los filtros.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    filtered.forEach(prop => {
        const principalImage = prop.images && prop.images[0] ? prop.images[0] : 'https://via.placeholder.com/800x600/1A4D3E/FFFFFF?text=Sin+Foto';
        
        const card = document.createElement('div');
        card.className = 'property-card';
        
        let featuredBadge = prop.featured ? `<div class="badge-featured">Destacado</div>` : '';
        
        let statusClass = 'status-disponible';
        if (prop.status === 'Reservada') statusClass = 'status-reservada';
        if (prop.status === 'Vendida') statusClass = 'status-vendida';
        
        const statusBadge = `<div class="badge-status ${statusClass}">${prop.status}</div>`;

        card.innerHTML = `
            <div class="card-img-container">
                ${featuredBadge}
                ${statusBadge}
                <img src="${principalImage}" class="card-img" alt="${prop.title}">
            </div>
            <div class="card-content">
                <div class="card-type">${prop.type}</div>
                <div class="card-price">${prop.currency} ${prop.price.toLocaleString('es-PE')}</div>
                <h3 class="card-title">${prop.title}</h3>
                <div class="card-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${prop.address}, ${prop.city}</span>
                </div>
                <div class="card-features">
                    <span class="card-feature-item">
                        <i class="fa-solid fa-bed"></i> ${prop.bedrooms} Hab.
                    </span>
                    <span class="card-feature-item">
                        <i class="fa-solid fa-bath"></i> ${prop.bathrooms} Baños
                    </span>
                    <span class="card-feature-item">
                        <i class="fa-solid fa-maximize"></i> ${prop.surface_built} m²
                    </span>
                </div>
                <button class="btn-card-details" onclick="openDetails('${prop.id}')">
                    <i class="fa-solid fa-circle-info"></i> Ver Detalles
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Listener en tiempo real del buscador
document.getElementById('filter-location').addEventListener('input', renderPublicCatalog);
document.getElementById('filter-type').addEventListener('change', renderPublicCatalog);
document.getElementById('filter-price-min').addEventListener('input', renderPublicCatalog);
document.getElementById('filter-price-max').addEventListener('input', renderPublicCatalog);
document.getElementById('filter-bedrooms').addEventListener('change', renderPublicCatalog);

function resetFilters() {
    document.getElementById('filter-location').value = '';
    document.getElementById('filter-type').value = 'Todos';
    document.getElementById('filter-price-min').value = '';
    document.getElementById('filter-price-max').value = '';
    document.getElementById('filter-bedrooms').value = 'Todos';
    renderPublicCatalog();
    showToast('Filtros restablecidos', 'success');
}

/* ----------------------------------------------------
   E. MODAL DE DETALLE DE PROPIEDAD
   ---------------------------------------------------- */
let currentModalImageIndex = 0;
let currentModalImages = [];

function openDetails(id) {
    const properties = getProperties();
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    // Datos principales
    document.getElementById('modal-title-text').innerText = prop.title;
    document.getElementById('modal-location-text').innerText = `${prop.address}, ${prop.city}`;
    document.getElementById('modal-price-text').innerText = `${prop.currency} ${prop.price.toLocaleString('es-PE')}`;
    document.getElementById('modal-badge-type').innerText = prop.type.toUpperCase();
    document.getElementById('modal-badge-ref').innerText = prop.reference;
    document.getElementById('modal-badge-status').innerText = prop.status;

    // Cambiar color del badge status en modal
    const statusBadge = document.getElementById('modal-badge-status');
    statusBadge.className = 'feature-tag';
    if (prop.status === 'Disponible') statusBadge.style.backgroundColor = 'var(--disponible)';
    else if (prop.status === 'Reservada') statusBadge.style.backgroundColor = 'var(--reservada)';
    else statusBadge.style.backgroundColor = 'var(--vendida)';
    statusBadge.style.color = 'var(--white)';

    // Especificaciones físicas
    document.getElementById('modal-spec-built').innerText = `${prop.surface_built} m²`;
    document.getElementById('modal-spec-usable').innerText = `${prop.surface_usable || 0} m²`;
    document.getElementById('modal-spec-bedrooms').innerText = prop.bedrooms;
    document.getElementById('modal-spec-bathrooms').innerText = prop.bathrooms;
    document.getElementById('modal-spec-floor').innerText = prop.floor || 'N/A';
    document.getElementById('modal-spec-year').innerText = prop.year_built || 'N/A';

    // Descripción y tags
    document.getElementById('modal-desc-text').innerText = prop.description;
    
    const featuresContainer = document.getElementById('modal-features-container');
    featuresContainer.innerHTML = '';
    if (prop.features && prop.features.length > 0) {
        prop.features.forEach(feat => {
            const span = document.createElement('span');
            span.className = 'feature-tag';
            span.innerText = feat;
            featuresContainer.appendChild(span);
        });
    } else {
        featuresContainer.innerHTML = '<span style="font-size: 0.9rem; opacity:0.6;">Ninguno</span>';
    }

    // Mapa mockup
    document.getElementById('modal-map-address').innerText = `${prop.address}, ${prop.city}`;
    document.getElementById('modal-map-coords').innerText = `Coordenadas: Lat: ${prop.lat || -16.3989}, Lng: ${prop.lng || -71.5350}`;

    // Agente
    const agentName = prop.agent_name || 'Asesor Ambientes';
    const agentPhone = prop.agent_phone || '959656213';
    const agentEmail = prop.agent_email || 'info@ambientesarequipa.com';
    
    document.getElementById('modal-agent-name').innerText = agentName;
    document.getElementById('modal-agent-phone').innerText = `+51 ${agentPhone}`;
    document.getElementById('modal-agent-email').innerText = agentEmail;
    
    // Generar iniciales del avatar
    const initials = agentName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('modal-agent-avatar').innerText = initials;

    // Configurar el botón de WhatsApp dinámico para este agente
    const cleanPhone = agentPhone.replace(/\s+/g, '');
    const waText = encodeURIComponent(`Hola ${agentName}, estoy interesado en la propiedad "${prop.title}" (Ref: ${prop.reference}). Solicito más información.`);
    const waUrl = `https://wa.me/51${cleanPhone}?text=${waText}`;
    
    // Buscar o inyectar el botón de WhatsApp
    let waBtn = document.getElementById('modal-wa-btn');
    if (!waBtn) {
        waBtn = document.createElement('a');
        waBtn.id = 'modal-wa-btn';
        waBtn.className = 'btn-whatsapp-agent';
        waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Contactar por WhatsApp';
        waBtn.target = '_blank';
        // Insertarlo antes del formulario
        const parent = document.querySelector('.agent-card');
        const form = document.querySelector('.agent-card .contact-form');
        parent.insertBefore(waBtn, form);
    }
    waBtn.href = waUrl;

    // Galería
    currentModalImages = prop.images && prop.images.length > 0 ? prop.images : ['https://via.placeholder.com/800x600/1A4D3E/FFFFFF?text=Sin+Foto'];
    setModalImage(0);

    const thumbsContainer = document.getElementById('modal-thumbnails-container');
    thumbsContainer.innerHTML = '';
    currentModalImages.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = `modal-thumb ${index === 0 ? 'active' : ''}`;
        thumb.onclick = () => setModalImage(index);
        thumbsContainer.appendChild(thumb);
    });

    // Abrir Modal
    document.getElementById('details-modal').classList.add('active');
}

function setModalImage(index) {
    currentModalImageIndex = index;
    document.getElementById('modal-primary-img').src = currentModalImages[index];
    
    // Resaltar miniatura activa
    const thumbs = document.querySelectorAll('.modal-thumb');
    thumbs.forEach((t, i) => {
        if (i === index) t.classList.add('active');
        else t.classList.remove('active');
    });
}

function closeModal() {
    document.getElementById('details-modal').classList.remove('active');
}

function closeModalOutside(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
}

function handleAgentContact(event) {
    event.preventDefault();
    const name = document.getElementById('lead-name').value;
    const email = document.getElementById('lead-email').value;
    const phone = document.getElementById('lead-phone').value;
    const message = document.getElementById('lead-message').value;

    console.log('Interés registrado:', { name, email, phone, message });
    showToast('¡Gracias! Su mensaje fue enviado exitosamente al agente.', 'success');
    
    // Reset form
    event.target.reset();
    closeModal();
}

function handleGeneralContact(event) {
    event.preventDefault();
    const name = document.getElementById('gen-name').value;
    const email = document.getElementById('gen-email').value;
    const phone = document.getElementById('gen-phone').value;
    const message = document.getElementById('gen-message').value;

    console.log('Contacto General:', { name, email, phone, message });
    showToast('¡Mensaje enviado! Nos comunicaremos con usted a la brevedad.', 'success');
    event.target.reset();
}

/* ----------------------------------------------------
   F. PANEL DE ADMINISTRACIÓN - LOGICA CRUD
   ---------------------------------------------------- */
function renderAdmin() {
    const properties = getProperties();
    
    // Actualizar Estadísticas del Dashboard
    const total = properties.length;
    const disponibles = properties.filter(p => p.status === 'Disponible').length;
    const vendidas = properties.filter(p => p.status === 'Vendida' || p.status === 'Reservada').length;

    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-disponibles').innerText = disponibles;
    document.getElementById('stat-vendidas').innerText = vendidas;

    // Actualizar contador de solicitudes
    const reqs = getSellerRequests();
    const badge = document.getElementById('badge-requests-count');
    if (badge) badge.innerText = reqs.length;

    // Renderizar la tabla de administración
    const tbody = document.getElementById('admin-properties-table-body');
    tbody.innerHTML = '';

    properties.forEach(prop => {
        const tr = document.createElement('tr');
        const pImg = prop.images && prop.images[0] ? prop.images[0] : 'https://via.placeholder.com/800x600/1A4D3E/FFFFFF?text=Sin+Foto';
        
        let statusClass = 'status-disponible';
        if (prop.status === 'Reservada') statusClass = 'status-reservada';
        if (prop.status === 'Vendida') statusClass = 'status-vendida';

        tr.innerHTML = `
            <td><strong>${prop.reference}</strong></td>
            <td><img src="${pImg}" class="table-thumb" alt="Thumbnail"></td>
            <td><div style="font-weight: 600; max-width: 250px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${prop.title}</div></td>
            <td>${prop.type}</td>
            <td style="font-weight: 700;">${prop.currency} ${prop.price.toLocaleString('es-PE')}</td>
            <td><span class="table-badge-status ${statusClass}" style="color:var(--white);">${prop.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-action btn-edit" title="Editar" onclick="editProperty('${prop.id}')">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn-action btn-delete" title="Eliminar" onclick="deleteProperty('${prop.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function showForm() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('admin-table-container').style.display = 'none';
    document.getElementById('admin-actions-bar').style.display = 'none';
    document.getElementById('property-form').reset();
    document.getElementById('prop-id').value = '';
    document.getElementById('form-title').innerText = 'Agregar Nueva Propiedad';
    document.getElementById('btn-save-submit').innerText = 'Guardar Propiedad';
    
    // Limpiar previsualizaciones de imágenes cargadas y input file
    document.getElementById('upload-preview-container').innerHTML = '';
    const fileInput = document.getElementById('prop-upload-files');
    if (fileInput) fileInput.value = '';

    // Autogenerar Referencia temporal para vista
    const props = getProperties();
    const nextRefNum = props.length + 1;
    const refString = `AR-${String(nextRefNum).padStart(4, '0')}`;
    document.getElementById('prop-reference').value = refString;
}

function hideForm() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('admin-table-container').style.display = 'block';
    document.getElementById('admin-actions-bar').style.display = 'flex';
    document.getElementById('upload-preview-container').innerHTML = '';
    const fileInput = document.getElementById('prop-upload-files');
    if (fileInput) fileInput.value = '';
}

function saveProperty(event) {
    event.preventDefault();
    
    const properties = getProperties();
    const id = document.getElementById('prop-id').value;
    
    // Checkboxes features
    const features = [];
    const checkboxes = document.querySelectorAll('input[name="features"]:checked');
    checkboxes.forEach(cb => features.push(cb.value));

    // Images arrays
    const images = [];
    const img1 = document.getElementById('prop-img-1').value;
    const img2 = document.getElementById('prop-img-2').value;
    const img3 = document.getElementById('prop-img-3').value;

    if (img1) images.push(img1);
    if (img2) images.push(img2);
    if (img3) images.push(img3);

    if (id) {
        // Editar
        const index = properties.findIndex(p => p.id === id);
        if (index !== -1) {
            properties[index] = {
                ...properties[index],
                title: document.getElementById('prop-title').value,
                type: document.getElementById('prop-type').value,
                price: parseFloat(document.getElementById('prop-price').value),
                status: document.getElementById('prop-status').value,
                description: document.getElementById('prop-description').value,
                surface_built: parseFloat(document.getElementById('prop-built').value) || 0,
                surface_usable: parseFloat(document.getElementById('prop-usable').value) || 0,
                surface_plot: parseFloat(document.getElementById('prop-plot').value) || 0,
                bedrooms: parseInt(document.getElementById('prop-bedrooms').value) || 0,
                bathrooms: parseInt(document.getElementById('prop-bathrooms').value) || 0,
                toilets: parseInt(document.getElementById('prop-toilets').value) || 0,
                floor: parseInt(document.getElementById('prop-floor').value) || 0,
                year_built: parseInt(document.getElementById('prop-year').value) || new Date().getFullYear(),
                address: document.getElementById('prop-address').value,
                city: document.getElementById('prop-city').value,
                postal_code: document.getElementById('prop-postal').value,
                province: document.getElementById('prop-province').value,
                country: document.getElementById('prop-country').value,
                features: features,
                energy_cert: document.getElementById('prop-energy').value,
                images: images,
                agent_name: document.getElementById('prop-agent-name').value,
                agent_phone: document.getElementById('prop-agent-phone').value,
                agent_email: document.getElementById('prop-agent-email').value,
                featured: document.getElementById('prop-featured').checked
            };
            showToast('Propiedad actualizada exitosamente', 'success');
        }
    } else {
        // Crear nueva propiedad
        const newRefNum = properties.length + 1;
        const nextRef = `AR-${String(newRefNum).padStart(4, '0')}`;
        
        const newProp = {
            id: 'prop_' + Date.now(),
            title: document.getElementById('prop-title').value,
            description: document.getElementById('prop-description').value,
            type: document.getElementById('prop-type').value,
            price: parseFloat(document.getElementById('prop-price').value),
            currency: "S/",
            status: document.getElementById('prop-status').value,
            reference: nextRef,
            surface_built: parseFloat(document.getElementById('prop-built').value) || 0,
            surface_usable: parseFloat(document.getElementById('prop-usable').value) || 0,
            surface_plot: parseFloat(document.getElementById('prop-plot').value) || 0,
            bedrooms: parseInt(document.getElementById('prop-bedrooms').value) || 0,
            bathrooms: parseInt(document.getElementById('prop-bathrooms').value) || 0,
            toilets: parseInt(document.getElementById('prop-toilets').value) || 0,
            floor: parseInt(document.getElementById('prop-floor').value) || 0,
            year_built: parseInt(document.getElementById('prop-year').value) || new Date().getFullYear(),
            address: document.getElementById('prop-address').value,
            city: document.getElementById('prop-city').value,
            postal_code: document.getElementById('prop-postal').value,
            province: document.getElementById('prop-province').value,
            country: document.getElementById('prop-country').value,
            lat: -16.3989 + (Math.random() - 0.5) * 0.05,
            lng: -71.5350 + (Math.random() - 0.5) * 0.05,
            features: features,
            images: images,
            energy_cert: document.getElementById('prop-energy').value,
            agent_name: document.getElementById('prop-agent-name').value,
            agent_phone: document.getElementById('prop-agent-phone').value,
            agent_email: document.getElementById('prop-agent-email').value,
            featured: document.getElementById('prop-featured').checked,
            created_at: new Date().toISOString().split('T')[0]
        };
        properties.push(newProp);
        showToast('Nueva propiedad guardada correctamente', 'success');
    }

    saveProperties(properties);
    renderAdmin();
    hideForm();
}

function editProperty(id) {
    const properties = getProperties();
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    showForm();

    document.getElementById('form-title').innerText = `Editar Propiedad: ${prop.reference}`;
    document.getElementById('btn-save-submit').innerText = 'Actualizar Propiedad';
    document.getElementById('prop-id').value = prop.id;
    document.getElementById('prop-reference').value = prop.reference;

    document.getElementById('prop-title').value = prop.title;
    document.getElementById('prop-type').value = prop.type;
    document.getElementById('prop-price').value = prop.price;
    document.getElementById('prop-status').value = prop.status;
    document.getElementById('prop-description').value = prop.description;

    document.getElementById('prop-built').value = prop.surface_built;
    document.getElementById('prop-usable').value = prop.surface_usable;
    document.getElementById('prop-plot').value = prop.surface_plot;
    document.getElementById('prop-bedrooms').value = prop.bedrooms;
    document.getElementById('prop-bathrooms').value = prop.bathrooms;
    document.getElementById('prop-toilets').value = prop.toilets;
    document.getElementById('prop-floor').value = prop.floor;
    document.getElementById('prop-year').value = prop.year_built;

    document.getElementById('prop-address').value = prop.address;
    document.getElementById('prop-city').value = prop.city;
    document.getElementById('prop-postal').value = prop.postal_code;
    document.getElementById('prop-province').value = prop.province;
    document.getElementById('prop-country').value = prop.country;

    // Checkboxes
    const checkboxes = document.querySelectorAll('input[name="features"]');
    checkboxes.forEach(cb => {
        cb.checked = prop.features && prop.features.includes(cb.value);
    });

    document.getElementById('prop-energy').value = prop.energy_cert;

    // URLs Images
    document.getElementById('prop-img-1').value = prop.images && prop.images[0] ? prop.images[0] : '';
    document.getElementById('prop-img-2').value = prop.images && prop.images[1] ? prop.images[1] : '';
    document.getElementById('prop-img-3').value = prop.images && prop.images[2] ? prop.images[2] : '';

    // Renderizar previsualizaciones de fotos
    renderUploadPreview();

    // Agente
    document.getElementById('prop-agent-name').value = prop.agent_name || '';
    document.getElementById('prop-agent-phone').value = prop.agent_phone || '';
    document.getElementById('prop-agent-email').value = prop.agent_email || '';

    // Destacado
    document.getElementById('prop-featured').checked = prop.featured || false;
}

function deleteProperty(id) {
    const properties = getProperties();
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    const confirmDel = confirm(`¿Está seguro de que desea eliminar la propiedad con referencia ${prop.reference}?`);
    if (confirmDel) {
        const newProps = properties.filter(p => p.id !== id);
        saveProperties(newProps);
        renderAdmin();
        showToast('Propiedad eliminada con éxito', 'success');
    }
}

/* ----------------------------------------------------
   G. UTILIDADES Y CARGA INICIAL
   ---------------------------------------------------- */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.4s reverse forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// Cargar todo al iniciar
window.addEventListener('DOMContentLoaded', () => {
    initDB();
    renderPublicCatalog();
});

/* ----------------------------------------------------
   H. AUTENTICACIÓN DEL ADMINISTRADOR
   ---------------------------------------------------- */
const ADMIN_PASSWORD = 'admin123';

function checkAdminPassword(event) {
    event.preventDefault();
    const passInput = document.getElementById('admin-password-input').value;
    if (passInput === ADMIN_PASSWORD) {
        sessionStorage.setItem('ambientes_authenticated', 'true');
        document.getElementById('admin-login-container').style.display = 'none';
        document.getElementById('admin-main-panel').style.display = 'block';
        renderAdmin();
        showToast('Acceso concedido', 'success');
        document.getElementById('admin-password-input').value = '';
    } else {
        showToast('Contraseña incorrecta', 'error');
    }
}

function logoutAdmin() {
    sessionStorage.removeItem('ambientes_authenticated');
    navigateTo('frontend');
    showToast('Sesión cerrada correctamente', 'success');
}

/* ----------------------------------------------------
   I. CARGA DE IMÁGENES LOCALES A BASE64
   ---------------------------------------------------- */
function handleLocalFilesUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const imgInputs = [
        document.getElementById('prop-img-1'),
        document.getElementById('prop-img-2'),
        document.getElementById('prop-img-3')
    ];

    let filesProcessed = 0;
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64String = e.target.result;
            
            // Encuentra la primera casilla de URL vacía
            let placed = false;
            for (let input of imgInputs) {
                if (!input.value) {
                    input.value = base64String;
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                showToast('Límite de 3 fotos alcanzado en el formulario', 'error');
            } else {
                renderUploadPreview();
            }
        };
        reader.readAsDataURL(file);
    });
    
    // Limpiar input file para permitir volver a cargar los mismos archivos si se desea
    event.target.value = '';
}

function renderUploadPreview() {
    const previewContainer = document.getElementById('upload-preview-container');
    if (!previewContainer) return;
    
    previewContainer.innerHTML = '';

    const imgInputs = [
        document.getElementById('prop-img-1'),
        document.getElementById('prop-img-2'),
        document.getElementById('prop-img-3')
    ];

    imgInputs.forEach((input, index) => {
        if (input.value) {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.style.width = '80px';
            wrapper.style.height = '60px';
            wrapper.style.borderRadius = '8px';
            wrapper.style.overflow = 'hidden';
            wrapper.style.border = '2px solid var(--gray-light)';
            wrapper.style.boxShadow = 'var(--shadow-sm)';

            const img = document.createElement('img');
            img.src = input.value;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            const delBtn = document.createElement('button');
            delBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
            delBtn.type = 'button';
            delBtn.style.position = 'absolute';
            delBtn.style.top = '2px';
            delBtn.style.right = '2px';
            delBtn.style.color = 'var(--cta)';
            delBtn.style.backgroundColor = 'var(--white)';
            delBtn.style.borderRadius = '50%';
            delBtn.style.width = '18px';
            delBtn.style.height = '18px';
            delBtn.style.display = 'flex';
            delBtn.style.alignItems = 'center';
            delBtn.style.justifyContent = 'center';
            delBtn.style.fontSize = '0.9rem';
            delBtn.style.cursor = 'pointer';
            delBtn.style.border = 'none';
            delBtn.style.padding = '0';
            delBtn.onclick = function() {
                input.value = '';
                renderUploadPreview();
            };

            wrapper.appendChild(img);
            wrapper.appendChild(delBtn);
            previewContainer.appendChild(wrapper);
        }
    });
}

/* ----------------------------------------------------
   J. SECCIÓN VENDER - SOLICITUDES DE PROPIETARIOS
   ---------------------------------------------------- */
const SELLER_REQUESTS_KEY = 'ambientes_seller_requests';

function getSellerRequests() {
    return JSON.parse(localStorage.getItem(SELLER_REQUESTS_KEY)) || [];
}

function saveSellerRequests(requests) {
    localStorage.setItem(SELLER_REQUESTS_KEY, JSON.stringify(requests));
    
    // Actualizar el contador de solicitudes en el panel admin si existe
    const badge = document.getElementById('badge-requests-count');
    if (badge) {
        badge.innerText = requests.length;
    }
}

function handleSellerRequest(event) {
    event.preventDefault();
    
    const requests = getSellerRequests();
    
    const newRequest = {
        id: 'req_' + Date.now(),
        date: new Date().toLocaleDateString('es-PE'),
        ownerName: document.getElementById('owner-name').value,
        ownerPhone: document.getElementById('owner-phone').value,
        ownerEmail: document.getElementById('owner-email').value,
        title: document.getElementById('seller-title').value,
        type: document.getElementById('seller-type').value,
        price: parseFloat(document.getElementById('seller-price').value),
        bedrooms: parseInt(document.getElementById('seller-bedrooms').value) || 0,
        bathrooms: parseInt(document.getElementById('seller-bathrooms').value) || 0,
        built: parseFloat(document.getElementById('seller-built').value) || 0,
        address: document.getElementById('seller-address').value,
        description: document.getElementById('seller-description').value
    };
    
    requests.push(newRequest);
    saveSellerRequests(requests);
    
    showToast('¡Propuesta recibida! Nos comunicaremos con usted a la brevedad.', 'success');
    event.target.reset();
    navigateTo('frontend');
}

// Alternar entre pestañas en el Panel Admin
let activeAdminTab = 'inventory';

function switchAdminTab(tab) {
    activeAdminTab = tab;
    
    const tabInventory = document.getElementById('tab-inventory');
    const tabRequests = document.getElementById('tab-requests');
    const inventorySection = document.getElementById('admin-inventory-section');
    const requestsSection = document.getElementById('admin-requests-section');
    
    if (tab === 'inventory') {
        tabInventory.classList.add('active');
        tabInventory.style.backgroundColor = 'var(--primary)';
        tabInventory.style.color = 'var(--white)';
        
        tabRequests.classList.remove('active');
        tabRequests.style.backgroundColor = 'transparent';
        tabRequests.style.color = 'var(--anthracite)';
        
        inventorySection.style.display = 'block';
        requestsSection.style.display = 'none';
        renderAdmin();
    } else {
        tabRequests.classList.add('active');
        tabRequests.style.backgroundColor = 'var(--primary)';
        tabRequests.style.color = 'var(--white)';
        
        tabInventory.classList.remove('active');
        tabInventory.style.backgroundColor = 'transparent';
        tabInventory.style.color = 'var(--anthracite)';
        
        inventorySection.style.display = 'none';
        requestsSection.style.display = 'block';
        renderSellerRequests();
    }
}

// Renderizar tabla de solicitudes de venta
function renderSellerRequests() {
    const requests = getSellerRequests();
    const tbody = document.getElementById('admin-requests-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Actualizar badge
    const badge = document.getElementById('badge-requests-count');
    if (badge) badge.innerText = requests.length;
    
    if (requests.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; opacity: 0.6;">
                    No hay solicitudes de venta pendientes de revisión.
                </td>
            </tr>
        `;
        return;
    }
    
    requests.forEach(req => {
        const tr = document.createElement('tr');
        
        // Generar enlace rápido a WhatsApp
        const waText = encodeURIComponent(`Hola ${req.ownerName}, nos contactamos de AmbientesArequipa sobre tu propiedad "${req.title}" que registraste para venta.`);
        const waUrl = `https://wa.me/51${req.ownerPhone.trim()}?text=${waText}`;
        
        tr.innerHTML = `
            <td>${req.date}</td>
            <td><strong>${req.ownerName}</strong></td>
            <td>
                <div style="font-size: 0.85rem;">
                    <div><a href="${waUrl}" target="_blank" style="color: var(--mint); font-weight:600;"><i class="fa-brands fa-whatsapp"></i> ${req.ownerPhone}</a></div>
                    <div style="opacity: 0.7;">${req.ownerEmail}</div>
                </div>
            </td>
            <td>
                <div style="font-weight: 600; max-width: 200px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" title="${req.title}">${req.title}</div>
                <div style="font-size: 0.8rem; opacity: 0.7;">${req.type} | ${req.bedrooms} Hab | ${req.bathrooms} Bñ | ${req.built}m²</div>
            </td>
            <td><div style="max-width: 150px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" title="${req.address}">${req.address}</div></td>
            <td style="font-weight: 700; color: var(--primary);">S/ ${req.price.toLocaleString('es-PE')}</td>
            <td>
                <div class="action-btns">
                    <button class="btn-action btn-edit" title="Aprobar y Publicar" onclick="approveSellerRequest('${req.id}')" style="background-color: rgba(46, 125, 94, 0.15); color: var(--mint); font-size:1rem; width: 36px; height: 36px;">
                        <i class="fa-solid fa-circle-check"></i>
                    </button>
                    <button class="btn-action btn-delete" title="Rechazar / Eliminar" onclick="deleteSellerRequest('${req.id}')" style="background-color: rgba(232, 106, 23, 0.15); color: var(--cta); font-size:1rem; width: 36px; height: 36px;">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Aprobar solicitud y publicarla automáticamente
function approveSellerRequest(id) {
    const requests = getSellerRequests();
    const req = requests.find(r => r.id === id);
    if (!req) return;
    
    const confirmApprove = confirm(`¿Desea aprobar y publicar en el catálogo la propiedad "${req.title}" de ${req.ownerName}?`);
    if (!confirmApprove) return;
    
    const properties = getProperties();
    
    // Crear objeto con estructura del catálogo
    const newRefNum = properties.length + 1;
    const nextRef = `AR-${String(newRefNum).padStart(4, '0')}`;
    
    const newProp = {
        id: 'prop_' + Date.now(),
        title: req.title,
        description: req.description,
        type: req.type,
        price: req.price,
        currency: "S/",
        status: "Disponible",
        reference: nextRef,
        surface_built: req.built,
        surface_usable: Math.round(req.built * 0.9),
        surface_plot: req.type === 'Casa' || req.type === 'Chalet' || req.type === 'Terreno' ? req.built : 0,
        bedrooms: req.bedrooms,
        bathrooms: req.bathrooms,
        toilets: req.bathrooms > 1 ? 1 : 0,
        floor: req.type === 'Piso' || req.type === 'Ático' ? 2 : 1,
        year_built: new Date().getFullYear(),
        address: req.address,
        city: "Arequipa",
        postal_code: "04000",
        province: "Arequipa",
        country: "Perú",
        lat: -16.3989 + (Math.random() - 0.5) * 0.04,
        lng: -71.5350 + (Math.random() - 0.5) * 0.04,
        features: ["Cocina Equipada", "Accesibilidad"],
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Foto de stock bonita
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        ],
        agent_name: "Juan Pérez", // Asignado a Juan por defecto
        agent_phone: "959656213",
        agent_email: "juan@ambientesarequipa.com",
        featured: false,
        created_at: new Date().toISOString().split('T')[0]
    };
    
    // Guardar propiedad
    properties.push(newProp);
    saveProperties(properties);
    
    // Quitar solicitud aprobada
    const newRequests = requests.filter(r => r.id !== id);
    saveSellerRequests(newRequests);
    
    showToast(`¡Propiedad aprobada y publicada con referencia ${nextRef}!`, 'success');
    
    // Recargar vistas
    renderSellerRequests();
    renderAdmin();
}

// Rechazar/Eliminar solicitud de propietario
function deleteSellerRequest(id) {
    const requests = getSellerRequests();
    const req = requests.find(r => r.id === id);
    if (!req) return;
    
    const confirmDelete = confirm(`¿Está seguro de que desea rechazar y eliminar la solicitud de "${req.title}" enviada por ${req.ownerName}?`);
    if (!confirmDelete) return;
    
    const newRequests = requests.filter(r => r.id !== id);
    saveSellerRequests(newRequests);
    
    showToast('Solicitud descartada.', 'error');
    renderSellerRequests();
}
