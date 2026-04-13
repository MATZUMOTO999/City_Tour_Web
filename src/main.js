import './style.css'

// Catálogo enriquecido de Huanta, Ayacucho (Basado en RedBus y fuentes locales)
const imageFiles = [
  { 
    file: "plaza_de_armas_de_huanta.png", 
    name: "Plaza de Armas e Iglesia Matriz", 
    category: "Ciudad", 
    brief: "El corazón de la ciudad con su histórica Iglesia San Pedro de 1724.",
    desc: "La Plaza de Armas es el punto de inicio ideal. Aquí verás la Iglesia San Pedro de Huanta, que data de 1724, con sus dos torres de estilo gótico, relojes y campanas francesas. Los locales cercanos ofrecen deliciosos chicharrones para un desayuno tradicional."
  },
  { 
    file: "boques-de-piedra-de-Laupay.jpg", 
    name: "Bosque de Piedras de Laupay", 
    category: "Naturaleza",
    brief: "Paisaje místico con figuras poliformas de piedra a 3 horas de la ciudad.",
    desc: "Un espacio mágico con figuras poliformas de piedra que se asemejan a humanos, animales y plantas. Es un destino virgen ideal para el trekking y camping, famoso por la claridad de sus estrellas durante la noche."
  },
  { 
    file: "nevado_razuhuillca.png", 
    name: "Nevado y Lagunas de Razuhuillca", 
    category: "Naturaleza",
    brief: "El guardián de Huanta con lagunas glaciares a más de 4000 msnm.",
    desc: "Ubicado a una hora de la ciudad, este circuito incluye el majestuoso nevado y las lagunas Chacaqocha, Escoqocha, Yanaqocha y San Antonio. El trekking llega a los 4100 msnm, ofreciendo un contacto único con la flora y fauna de la zona."
  },
  { 
    file: "mirador_cristo_blanco.png", 
    name: "Mirador Cristo Blanco", 
    category: "Miradores",
    brief: "Escultura icónica con la mejor vista panorámica de todo el valle.",
    desc: "Sitio emblemático donde se encuentra la escultura gigante visible desde cualquier parte de Huanta. Es el lugar perfecto para tomar fotografías panorámicas del valle y admirar la naturaleza en todo su esplendor."
  },
  { 
    file: "catarata_paccha_cucho_sirenachayoq.png", 
    name: "Catarata Paccha Cucho", 
    category: "Naturaleza",
    brief: "Impresionante caída de agua cristalina rodeada de selva alta.",
    desc: "Una de las caídas de agua más bellas de la zona, conocida como Sirenachayoq. Sus aguas cristalinas y el entorno verde ofrecen una conexión directa con la naturaleza y un espacio de relajación total."
  },
  { 
    file: "santuario_señor_de_maynay.png", 
    name: "Santuario Señor de Maynay", 
    category: "Religioso",
    brief: "Hogar del patrón de Huanta y centro de la gran feria regional.",
    desc: "Un lugar de profunda fe católica. El santuario es el centro de las festividades en septiembre, donde se realiza la famosa Feria de Maynay, celebrando la agricultura, ganadería y artesanía de la región."
  },
  { 
    file: "arco_de_la_memoria.png", 
    name: "Arco de la Memoria", 
    category: "Cultura",
    brief: "Monumento histórico que marca la entrada triunfal a la ciudad.",
    desc: "Ubicado en la entrada de Huanta, este monumento histórico conmemora la valentía y el espíritu de los pobladores huanteños a lo largo de la historia peruana."
  },
  { 
    file: "laguna_verde_qocha_esmeralda.png", 
    name: "Laguna Verde Qocha", 
    category: "Naturaleza",
    brief: "Famosa por sus aguas de color esmeralda intenso y misticismo.",
    desc: "Una de las lagunas más hermosas de la cordillera de Razuhuillca. Su color verde esmeralda y el reflejo de las montañas crean un paisaje de ensueño para los amantes de la fotografía."
  },
  { file: "atardecer_huanta.png", name: "Atardecer Huantino", category: "Naturaleza", brief: "Cielos de colores intensos sobre el valle altoandino.", desc: "Los atardeceres en Huanta son famosos por sus tonos rojizos y violetas que bañan el valle de 'La Esmeralda de los Andes'." },
  { file: "catarata_potrero.png", name: "Catarata Potrero", category: "Naturaleza", brief: "Salto de agua escondido entre montañas, ideal para el senderismo.", desc: "Ubicada cerca de la comunidad de Potrero, esta catarata es un tesoro natural poco explorado pero de gran belleza." },
  { file: "convento_sagrado_corazon_de_jesus.png", name: "Convento Sagrado Corazón", category: "Religioso", brief: "Arquitectura religiosa imponente y patrimonio cultural.", desc: "Un templo de paz y espiritualidad que destaca por su diseño arquitectónico y su importancia histórica para las congregaciones locales." },
  { file: "cuidadela_huayra_patamarca.png", name: "Ciudadela Huayra Patamarca", category: "Cultura", brief: "Restos prehispánicos en las cumbres que vigilan el valle.", desc: "Sitio arqueológico que evidencia la presencia de civilizaciones antiguas que dominaron el manejo de las alturas en Huanta." },
  { file: "laguna_8_huayllay.png", name: "Laguna 8 Huayllay", category: "Naturaleza", brief: "Misteriosa laguna de altura rodeada de pampa altoandina.", desc: "Parte del sistema hídrico de las alturas de Huanta, ofrece un paisaje desolado pero majestuoso típico de la puna." },
  { file: "laguna_chacaccocha_razuhuillca.png", name: "Laguna Chacaccocha", category: "Naturaleza", brief: "Espejo de agua glaciar a los pies de las nieves eternas.", desc: "Ubicada en la base del nevado principal, es la primera de las grandes lagunas que se visitan en la ruta de Razuhuillca." },
  { file: "laguna_yanaccocha.png", name: "Laguna Yanaccocha", category: "Naturaleza", brief: "Laguna 'Negra' conocida por sus aguas oscuras y profundas.", desc: "Llamada así por la profundidad y el color de sus aguas, rodeada de mitos y leyendas locales sobre los espíritus de la montaña." },
  { file: "lagunas_de_huaper.png", name: "Lagunas de Huaper", category: "Naturaleza", brief: "Conjunto de lagunas rodeadas de una biodiversidad única.", desc: "Un ecosistema frágil y hermoso donde se pueden observar aves migratorias y ganado altoandino en su hábitat natural." },
  { file: "mirrador_cañon_de_huatuscalle.png", name: "Cañón de Huatuscalle", category: "Miradores", brief: "Profundo cañón con formaciones geológicas impresionantes.", desc: "Desde este mirador se puede apreciar la profundidad del cañón esculpido por el paso de los siglos y la fuerza del agua." },
  { file: "parque_de_los_heroes.png", name: "Parque de los Héroes", category: "Cultura", brief: "Solemne espacio dedicado a los valientes de la provincia.", desc: "Un lugar de reunión familiar y respeto histórico, rodeado de áreas verdes y bustos conmemorativos." },
  { file: "parroquia_san_pedro_matriz.png", name: "Parroquia San Pedro Matriz", category: "Religioso", brief: "La cúpula que destaca en el horizonte urbano de Huanta.", desc: "Complemento espiritual de la plaza principal, famosa por sus festividades y la calidez de su comunidad parroquial." },
  { file: "portada.png", name: "Portada Huantina", category: "Cultura", brief: "Antigua entrada principal con el sello distintivo de la ciudad.", desc: "Un hito arquitectónico que representa la elegancia de las casonas antiguas y la bienvenida al valle." },
  { file: "pozas_esmeralda_de_mayocc.png", name: "Pozas Esmeralda Mayocc", category: "Naturaleza", brief: "Pocitos naturales de color turquesa junto al río Mantaro.", desc: "Ubicadas en el límite con Huancavelica, estas pozas de agua tibia y color turquesa son un paraíso tropical en los Andes." },
  { file: "puente_huarpa.png", name: "Puente Huarpa", category: "Cultura", brief: "Puente histórico sobre el río que separa regiones.", desc: "Estructura vital que une Ayacucho con otras regiones, ofreciendo vistas espectaculares del cañón del río Huarpa." },
  { file: "puente_rumichaca.png", name: "Puente Rumichaca", category: "Cultura", brief: "Ancestral puente de piedra símbolo de la ingeniería colonial.", desc: "Su nombre significa 'Puente de Piedra'. Es un testimonio de la durabilidad de la arquitectura colonial en rutas comerciales antiguas." },
  { file: "mirador_cristo_blando_panoramico.jpg", name: "Vista Panorámica de Huanta", category: "Miradores", brief: "El valle en toda su magnitud desde las alturas de la ciudad.", desc: "Captura la esencia de 'La Esmeralda de los Andes', mostrando por qué Huanta es considerada uno de los valles más fértiles y hermosos del Perú." },
  { file: "Plaza-de-Armas-Huanta.jpg", name: "Plaza de Armas (Sunset)", category: "Ciudad", brief: "La luz dorada bañando la cuna del turismo ayacuchano.", desc: "La plaza en su hora más mágica, cuando las luces se encienden y el cielo se tiñe de colores sobre la Iglesia San Pedro." }
]

let currentFilter = 'Todos'
let currentIdx = 0
let filteredZones = []

const zones = imageFiles.map((img, index) => ({
  id: index,
  name: img.name,
  image: `/imagenes/${img.file}`,
  status: index % 4 === 0 ? "busy" : "open",
  occupancy: Math.floor(Math.random() * 60) + 10,
  lastUpdate: `Hace ${Math.floor(Math.random() * 15) + 2} min`,
  category: img.category,
  address: "Huanta, Ayacucho",
  brief: img.brief,
  description: img.desc
}))

const statusConfig = {
  open: { label: "Abierto", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", icon: 'check-circle-2' },
  busy: { label: "Afluencia Alta", color: "bg-amber-500/20 text-amber-400 border-amber-500/30", icon: 'triangle-alert' },
  closed: { label: "Cerrado", color: "bg-rose-500/20 text-rose-400 border-rose-500/30", icon: 'x-circle' }
}

function renderApp() {
  const app = document.querySelector('#app')
  filteredZones = currentFilter === 'Todos' ? zones : zones.filter(z => z.category === currentFilter)

  app.innerHTML = `
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between border-b border-white/5">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <i data-lucide="map-pin" class="text-white w-6 h-6"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-outfit">HuantaStatus</span>
          <span class="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">La Esmeralda de los Andes</span>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#catalogo" class="hover:text-emerald-400 transition-colors">Catálogo</a>
        <a href="#" class="hover:text-emerald-400 transition-colors">Mapa</a>
        <a href="#" class="hover:text-emerald-400 transition-colors">Festividades</a>
      </div>
      <button class="md:hidden p-2 hover:bg-white/5 rounded-lg">
        <i data-lucide="menu"></i>
      </button>
    </nav>

    <!-- Hero Section -->
    <header class="relative pt-24 pb-20 px-6 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full -z-10"></div>
      
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
           <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
           Estado Turístico Actual
        </div>
        <h1 class="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
          Explora la Bella <br/>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Huanta.</span>
        </h1>
        <p class="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
          Conoce la afluencia y el encanto de los ${zones.length} destinos más emblemáticos. Haz clic para ampliar.
        </p>
        <a href="#catalogo" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm transition-all shadow-2xl shadow-emerald-600/40 inline-block">
          Explorar Catálogo
        </a>
      </div>
    </header>

    <!-- Catalogue -->
    <main id="catalogo" class="max-w-7xl mx-auto px-6 pb-32">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
        <div>
          <h2 class="text-3xl font-bold mb-2">Galería de Destinos</h2>
          <p class="text-slate-500 text-sm italic">Mostrando las ${zones.length} maravillas huanteñas.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          ${['Todos', 'Naturaleza', 'Cultura', 'Religioso', 'Ciudad', 'Miradores'].map(cat => `
            <button 
              onclick="window.setFilter('${cat}')"
              class="px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${currentFilter === cat ? 'bg-emerald-600/20 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'}"
            >
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${filteredZones.map((zone, idx) => renderCard(zone, idx)).join('')}
      </div>
    </main>
  `

  if (window.lucide) window.lucide.createIcons()
  setupModalEvents()
}

function renderCard(zone, idx) {
  const cfg = statusConfig[zone.status]
  return `
    <div 
      class="group relative bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-slate-900/60 hover:border-emerald-500/20 hover:scale-[1.02] cursor-pointer"
      onclick="window.openModalByIdx(${idx})"
      role="button"
      tabindex="0"
    >
      <div class="relative h-64 overflow-hidden">
        <img src="${zone.image}" alt="${zone.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-emerald-950/20 backdrop-blur-[2px]">
           <div class="bg-white/10 p-4 rounded-full backdrop-blur-xl border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500">
             <i data-lucide="maximize-2" class="text-white w-6 h-6"></i>
           </div>
        </div>

        <div class="absolute top-4 left-4">
          <span class="px-3 py-1.5 rounded-full text-[9px] font-black border flex items-center gap-1.5 ${cfg.color} backdrop-blur-xl uppercase tracking-widest shadow-xl">
            <i data-lucide="${cfg.icon}" class="w-3 h-3"></i>
            ${cfg.label}
          </span>
        </div>
      </div>
      
      <div class="p-6 relative">
        <span class="text-[9px] text-emerald-500 font-black mb-1 block uppercase tracking-[0.2em] font-outfit">${zone.category}</span>
        <h3 class="text-lg font-bold text-white mb-2 line-clamp-1">${zone.name}</h3>
        <p class="text-slate-500 text-[11px] leading-relaxed mb-4 line-clamp-2">${zone.brief || zone.description}</p>
        
        <div class="flex items-center justify-between border-t border-white/5 pt-4">
           <div class="h-1 flex-1 bg-white/5 rounded-full overflow-hidden mr-4">
              <div class="h-full rounded-full ${zone.occupancy > 70 ? 'bg-amber-500' : 'bg-emerald-500'}" style="width: ${zone.occupancy}%"></div>
           </div>
           <span class="text-[10px] font-bold text-slate-400 font-outfit uppercase tracking-tighter">${zone.occupancy}%</span>
        </div>
      </div>
    </div>
  `
}

window.setFilter = (filter) => {
  currentFilter = filter
  renderApp()
  document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' })
}

window.openModalByIdx = (idx) => {
  currentIdx = idx
  updateModalContent()
  
  const modal = document.querySelector('#image-modal')
  modal.classList.remove('hidden')
  modal.classList.add('flex')
  document.body.style.overflow = 'hidden'
}

function updateModalContent() {
  const zone = filteredZones[currentIdx]
  const modalImg = document.querySelector('#modal-img')
  const modalTitle = document.querySelector('#modal-title')
  const modalDesc = document.querySelector('#modal-desc')
  const modalCategory = document.querySelector('#modal-category')

  modalImg.style.opacity = '0'
  modalImg.style.transform = 'scale(0.95)'
  
  setTimeout(() => {
    modalImg.src = zone.image
    modalTitle.textContent = zone.name
    modalDesc.textContent = zone.description
    modalCategory.textContent = zone.category
    
    modalImg.style.opacity = '1'
    modalImg.style.transform = 'scale(1)'
  }, 100)

  if (window.lucide) window.lucide.createIcons()
}

function setupModalEvents() {
  const modal = document.querySelector('#image-modal')
  const closeBtn = document.querySelector('#close-modal')
  const prevBtn = document.querySelector('#prev-btn')
  const nextBtn = document.querySelector('#next-btn')

  // Swipe Support
  let touchStartX = 0
  let touchEndX = 0

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) nextImg() // Swipe Left -> Next
      else prevImg() // Swipe Right -> Prev
    }
  }

  const closeModal = () => {
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    document.body.style.overflow = ''
  }

  const nextImg = (e) => {
    e?.stopPropagation()
    currentIdx = (currentIdx + 1) % filteredZones.length
    updateModalContent()
  }

  const prevImg = (e) => {
    e?.stopPropagation()
    currentIdx = (currentIdx - 1 + filteredZones.length) % filteredZones.length
    updateModalContent()
  }

  closeBtn?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); })
  prevBtn?.addEventListener('click', prevImg)
  nextBtn?.addEventListener('click', nextImg)

  // Touch Events for Swipe
  modal?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
  }, { passive: true })

  modal?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  }, { passive: true })

  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImg()
    if (e.key === 'ArrowLeft') prevImg()
  })
}

// Init
document.addEventListener('DOMContentLoaded', renderApp)
