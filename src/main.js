import './style.css'

// Catálogo HuantaTour con descripciones originales y estética de commit 9ec73ee
const statusConfig = {
  open: { label: "Espacio Libre", icon: "check-circle", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/10" },
  busy: { label: "Afluencia Alta", icon: "users", color: "bg-amber-500/20 text-amber-400 border-amber-500/10" }
}

const imageFiles = [
  { id: 0, file: "plaza_de_armas_de_huanta.png", name: "Plaza de Armas e Iglesia Matriz", category: "Ciudad", desc: "La Plaza de Armas es el punto de inicio ideal. Aquí podrás admirar la imponente Iglesia San Pedro de Huanta, que data de 1724, con sus dos torres góticas y campanas francesas. ¡No te vayas sin probar los famosos chicharrones en los locales cercanos!", map: "Plaza+de+Armas+Huanta", embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.9746636936443!2d-74.2478256!3d-12.939821199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910d824748e538a5%3A0x1e1d37f2c8a9e30f!2sPlaza%20de%20Armas%20-%20Huanta!5e1!3m2!1ses-419!2spe" },
  { id: 1, file: "boques-de-piedra-de-Laupay.jpg", name: "Bosque de Piedras de Laupay", category: "Naturaleza", desc: "Un espacio mágico lleno de figuras poliformas de piedra que parecen cobrar vida. Es un destino virgen perfecto para el trekking y camping, donde las estrellas brillan con una claridad asombrosa durante la noche.", map: "Bosque+de+Piedras+Laupay+Huanta", embed: "https://maps.google.com/maps?q=Bosque+de+Piedras+Laupay+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 2, file: "nevado_razuhuillca.png", name: "Nevado y Lagunas de Razuhuillca", category: "Aventura", desc: "El guardián místico de Huanta. Este circuito te lleva por el majestuoso nevado y sus lagunas de colores intensos como Chacaqocha y Yanaqocha. Alcanzar los 4100 msnm te regalará una conexión única con los Andes.", map: "Nevado+Razuhuillca+Huanta", embed: "https://maps.google.com/maps?q=Nevado+Razuhuillca+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 3, file: "mirador_cristo_blanco.png", name: "Mirador Cristo Blanco", category: "Mirador", desc: "La escultura gigante que vigila todo el valle. Es el sitio preferido por los viajeros para tomar esas fotografías panorámicas que parecen postales. Un lugar de paz para admirar la naturaleza en todo su esplendor.", map: "Mirador+Cristo+Blanco+Huanta", embed: "https://maps.google.com/maps?q=Mirador+Cristo+Blanco+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 4, file: "catarata_paccha_cucho_sirenachayoq.png", name: "Catarata Paccha Cucho", category: "Naturaleza", desc: "Conocida como Sirenachayoq, es una de las caídas de agua más hermosas y relajantes. Sus aguas cristalinas y el entorno verde profundo te invitan a desconectar del mundo y disfrutar del sonido de la naturaleza.", map: "Catarata+Paccha+Cucho+Huanta", embed: "https://maps.google.com/maps?q=Catarata+Paccha+Cucho+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 5, file: "santuario_señor_de_maynay.png", name: "Santuario Señor de Maynay", category: "Religioso", desc: "Centro de una profunda fe católica y hogar de la feria más importante de la región. En septiembre, este lugar se llena de vida celebrando la agricultura, ganadería y artesanía huanteña en honor a su patrón.", map: "Santuario+Señor+de+Maynay+Huanta", embed: "https://maps.google.com/maps?q=Santuario+Señor+de+Maynay+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 6, file: "arco_de_la_memoria.png", name: "Arco de la Memoria", category: "Cultura", desc: "Ubicado en la entrada triunfal de la ciudad, este monumento rinde homenaje a la valentía y el espíritu inquebrantable de los pobladores huanteños a lo largo de nuestra historia peruana.", map: "Arco+de+la+Memoria+Huanta", embed: "https://maps.google.com/maps?q=Arco+de+la+Memoria+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 7, file: "laguna_verde_qocha_esmeralda.png", name: "Laguna Verde Qocha", category: "Naturaleza", desc: "Su color esmeralda intenso parece sacado de un sueño. Rodeada de montañas que se reflejan en sus aguas tranquilas, es un paraíso para los amantes de la fotografía y el misticismo andino.", map: "Laguna+Verde+Qocha+Huanta", embed: "https://maps.google.com/maps?q=Laguna+Verde+Qocha+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 8, file: "atardecer_huanta.png", name: "Atardecer Huantino", category: "Paisaje", desc: "Los cielos de Huanta se tiñen de rojos y violetas al caer el sol, recordándonos por qué llaman a este valle 'La Esmeralda de los Andes'. Un espectáculo natural gratuito cada tarde.", map: "Valle+de+Huanta+Ayacucho", embed: "https://maps.google.com/maps?q=Valle+de+Huanta+Ayacucho&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 9, file: "catarata_potrero.png", name: "Catarata Potrero", category: "Naturaleza", desc: "Un tesoro natural escondido que recompensa a los aventureros con un salto de agua refrescante tras una caminata entre montañas. Ideal para quienes buscan salirse de la ruta tradicional.", map: "Catarata+Potrero+Huanta", embed: "https://maps.google.com/maps?q=Catarata+Potrero+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 10, file: "convento_sagrado_corazon_de_jesus.png", name: "Convento Sagrado Corazón", category: "Religioso", desc: "Arquitectura religiosa que impone por su diseño y paz interior. Un patrimonio espiritual que ha acogido a generaciones de huanteños en busca de reflexión y calma.", map: "Convento+Sagrado+Corazón+Huanta", embed: "https://maps.google.com/maps?q=Convento+Sagrado+Corazón+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 11, file: "cuidadela_huayra_patamarca.png", name: "Ciudadela Huayra Patamarca", category: "Cultura", desc: "Restos prehispánicos en las cumbres que vigilan el valle fértil. Un testimonio mudo de la grandeza de las civilizaciones locales que desafiaron las alturas.", map: "Ciudadela+Huayra+Patamarca+Huanta", embed: "https://maps.google.com/maps?q=Ciudadela+Huayra+Patamarca+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 12, file: "laguna_8_huayllay.png", name: "Laguna 8 Huayllay", category: "Naturaleza", desc: "Misteriosa laguna de altura rodeada de pampa altoandina y aire puro. El silencio de la altura te hará sentir en la cima del mundo en un entorno virgen.", map: "Laguna+Huayllay+Huanta", embed: "https://maps.google.com/maps?q=Laguna+Huayllay+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 13, file: "laguna_chacaccocha_razuhuillca.png", name: "Laguna Chacaccocha", category: "Naturaleza", desc: "Espejo de agua glaciar a los pies de las nieves eternas de Razuhuillca, puerta de entrada para descubrir los secretos de la cordillera andina.", map: "Laguna+Chacaccocha+Huanta", embed: "https://maps.google.com/maps?q=Laguna+Chacaccocha+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 14, file: "laguna_yanaccocha.png", name: "Laguna Yanaccocha", category: "Naturaleza", desc: "Conocida como la 'Laguna Negra', sus aguas oscuras están rodeadas de mitos y leyendas que fascinan a cada visitante. Un lugar cargado de energía andina.", map: "Laguna+Yanaccocha+Huanta", embed: "https://maps.google.com/maps?q=Laguna+Yanaccocha+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 15, file: "lagunas_de_huaper.png", name: "Lagunas de Huaper", category: "Naturaleza", desc: "Un conjunto hídrico lleno de vida donde el ganado altoandino y aves migratorias encuentran un refugio natural de una belleza y paz singular.", map: "Lagunas+de+Huaper+Huanta", embed: "https://maps.google.com/maps?q=Lagunas+de+Huaper+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 16, file: "mirrador_cañon_de_huatuscalle.png", name: "Cañón de Huatuscalle", category: "Mirador", desc: "Desde aquí podrás apreciar la fuerza del tiempo esculpida en piedra. Un cañón profundo con geologías impresionantes que te dejarán sin aliento.", map: "Cañón+de+Huatuscalle+Huanta", embed: "https://maps.google.com/maps?q=Cañón+de+Huatuscalle+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 17, file: "parque_de_los_heroes.png", name: "Parque de los Héroes", category: "Ciudad", desc: "Un espacio de reunión familiar y respeto histórico. Sus áreas verdes y bustos invitan a pasear mientras recordamos la valentía de nuestra querida provincia.", map: "Parque+de+los+Héroes+Huanta", embed: "https://maps.google.com/maps?q=Parque+de+los+Héroes+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 18, file: "parroquia_san_pedro_matriz.png", name: "Parroquia San Pedro Matriz", category: "Religioso", desc: "La cúpula que destaca en el horizonte urbano de Huanta. Corazón espiritual de la ciudad y centro de nuestras tradiciones religiosas más queridas.", map: "Parroquia+San+Pedro+Huanta", embed: "https://maps.google.com/maps?q=Parroquia+San+Pedro+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 19, file: "pozas_esmeralda_de_mayocc.png", name: "Pozas Esmeralda Mayocc", category: "Naturaleza", desc: "En el límite con Huancavelica, estas pozas de agua tibia y color turquesa son el refugio perfecto para relajarse junto al imponente río Mantaro.", map: "Pozas+Esmeralda+Mayocc", embed: "https://maps.google.com/maps?q=Pozas+Esmeralda+Mayocc&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 20, file: "puente_huarpa.png", name: "Puente Huarpa", category: "Arquitectura", desc: "Estructura histórica que une ciudades sobre el río Huarpa. Ofrece vistas espectaculares del cañón y la fuerza imparable de la naturaleza.", map: "Puente+Huarpa+Ayacucho", embed: "https://maps.google.com/maps?q=Puente+Huarpa+Ayacucho&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 21, file: "puente_rumichaca.png", name: "Puente Rumichaca", category: "Arquitectura", desc: "Su nombre significa 'Puente de Piedra'. Es un testimonio de la durabilidad de la arquitectura colonial en las rutas comerciales más antiguas.", map: "Puente+Rumichaca+Huanta", embed: "https://maps.google.com/maps?q=Puente+Rumichaca+Huanta&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 22, file: "mirador_cristo_blando_panoramico.jpg", name: "Vista Panorámica de Huanta", category: "Mirador", desc: "Toda la 'Esmeralda de los Andes' a tus pies en una sola mirada. Captura la inmensidad del valle y la belleza de la ciudad desde las alturas.", map: "Mirador+Huanta+Ayacucho", embed: "https://maps.google.com/maps?q=Mirador+Huanta+Ayacucho&t=&z=13&ie=UTF8&iwloc=&output=embed" },
  { id: 23, file: "Plaza-de-Armas-Huanta.jpg", name: "Plaza de Armas (Sunset)", category: "Ciudad", desc: "La plaza en su hora más mágica, cuando la luz dorada baña nuestra pileta central y las palmeras centenarias nos regalan sombra.", map: "Plaza+de+Armas+Huanta", embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.9746636936443!2d-74.2478256!3d-12.939821199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910d824748e538a5%3A0x1e1d37f2c8a9e30f!2sPlaza%20de%20Armas%20-%20Huanta!5e1!3m2!1ses-419!2spe" }
]

let currentView = 'catalogo'
let currentFilter = 'Todos'
let currentIdx = 0
let filteredZones = []
let activeMapId = null 

const zones = imageFiles.map((img) => ({
  ...img,
  image: `/img/${img.file}`,
  status: img.id % 5 === 0 ? "busy" : "open",
  occupancy: Math.floor(Math.random() * 40) + 20,
  routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${img.map}`
}))

function renderApp() {
  const app = document.querySelector('#app')
  filteredZones = currentFilter === 'Todos' ? zones : zones.filter(z => z.category === currentFilter)

  app.innerHTML = `
    <!-- Navbar Premium con mejor espaciado -->
    <nav class="sticky top-0 z-50 glass px-8 py-5 flex items-center justify-between border-b border-white/10 shadow-2xl">
      <div class="flex items-center gap-3 cursor-pointer group" onclick="window.setView('catalogo')">
        <div class="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 group-hover:scale-105 transition-transform">
          <i data-lucide="map-pin" class="text-white w-6 h-6"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 font-outfit uppercase tracking-tighter">HuantaTour</span>
          <span class="text-[10px] text-emerald-400 font-bold tracking-[0.25em] uppercase">La Bella Esmeralda de los Andes</span>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
        <button onclick="window.setView('catalogo')" class="${currentView === 'catalogo' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'hover:text-emerald-400 transition-all underline-animation'}">Catálogo</button>
        <button onclick="window.setView('mapa')" class="${currentView === 'mapa' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'hover:text-emerald-400 transition-all underline-animation'}">Rutas GPS</button>
        <a href="#" class="hover:text-emerald-400 transition-all underline-animation">Festividades</a>
      </div>
      <button class="md:hidden p-3 hover:bg-white/5 rounded-2xl text-slate-400">
        <i data-lucide="menu"></i>
      </button>
    </nav>

    ${currentView === 'catalogo' ? renderHero() : renderMapHeader()}

    <!-- Main Container con márgenes mejorados -->
    <main id="catalogo" class="max-w-[1440px] mx-auto px-8 md:px-12 pb-40">
      ${currentView === 'catalogo' ? renderCatalog() : renderMapCatalog()}
    </main>
  `

  if (window.lucide) window.lucide.createIcons()
  setupModalEvents()
}

function renderHero() {
  return `
    <header class="relative pt-32 pb-24 px-8 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-emerald-600/10 blur-[180px] rounded-full -z-10 animate-pulse"></div>
      <div class="max-w-5xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl">
           <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           Estado Turístico Actual
        </div>
        <h1 class="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
          Explora la Bella <br/>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Esmeralda de los Andes.</span>
        </h1>
        <p class="text-slate-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
          Descubre la magia, cultura y afluencia de los ${zones.length} destinos más emblemáticos. Haz clic para ampliar cada maravilla.
        </p>
        <a href="#catalogo" class="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-emerald-600/40 inline-block hover:-translate-y-1">
          Explorar Catálogo
        </a>
      </div>
    </header>
  `
}

function renderMapHeader() {
  return `
    <header class="relative pt-24 pb-16 px-8 overflow-hidden text-center">
      <h1 class="text-6xl md:text-7xl font-black mb-6 tracking-tighter text-white uppercase font-outfit">Rutas Dinámicas</h1>
      <p class="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium opacity-80 decoration-emerald-500/30">Trazamos tu camino hacia la aventura con mapas interactivos y rutas GPS precisas.</p>
    </header>
  `
}

function renderCatalog() {
  return `
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-white/10 pb-12">
      <div>
        <h2 class="text-4xl font-black mb-3 tracking-tight">Galería de Destinos</h2>
        <p class="text-slate-500 text-base italic font-medium">Mostrando las ${zones.length} maravillas que hacen único a nuestro valle.</p>
      </div>
      <div class="flex flex-wrap gap-3">
        ${['Todos', 'Naturaleza', 'Aventura', 'Religioso', 'Ciudad', 'Mirador', 'Cultura', 'Arquitectura'].map(cat => `
          <button 
            onclick="window.setFilter('${cat}')" 
            class="px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${currentFilter === cat ? 'bg-emerald-600 border border-emerald-500 shadow-lg shadow-emerald-600/20 text-white' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'}"
          >
            ${cat}
          </button>
        `).join('')}
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      ${filteredZones.map((zone, idx) => renderCard(zone, idx)).join('')}
    </div>
  `
}

function renderMapCatalog() {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      ${zones.map(zone => `
        <div class="bg-slate-900/60 border-2 border-white/5 rounded-[3rem] p-8 lg:p-10 flex flex-col gap-8 transition-all hover:border-emerald-500/30 shadow-2xl ${activeMapId === zone.id ? 'border-emerald-500/50 scale-[1.02]' : ''}">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-center gap-6">
               <div class="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-2xl">
                 <img src="${zone.image}" class="w-full h-full object-cover" />
               </div>
               <div>
                 <h3 class="font-black text-white text-2xl md:text-3xl tracking-tighter">${zone.name}</h3>
                 <span class="text-[11px] text-emerald-500 uppercase font-black tracking-[0.3em] font-outfit mt-1 block">${zone.category}</span>
               </div>
            </div>
            
            <div class="flex gap-4">
               <button onclick="window.toggleMap(${zone.id})" class="flex-1 md:flex-none px-7 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[11px] font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest outline-none shadow-xl">
                 <i data-lucide="${activeMapId === zone.id ? 'eye-off' : 'map-pinned'}" class="w-5 h-5"></i>
                 ${activeMapId === zone.id ? 'Ocultar' : 'Mapa'}
               </button>
               <a href="${zone.routeUrl}" target="_blank" class="flex-1 md:flex-none px-7 py-4 bg-emerald-600 text-white rounded-2xl text-[11px] font-black hover:bg-emerald-500 transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest shadow-emerald-600/20">
                 <i data-lucide="route" class="w-5 h-5"></i>
                 Ruta
               </a>
            </div>
          </div>

          ${activeMapId === zone.id ? `
            <div class="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-emerald-500/20 shadow-inner animate-fadeIn relative">
                <iframe 
                  src="${zone.embed}" 
                  class="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `
}

function renderCard(zone, idx) {
  const cfg = statusConfig[zone.status]
  return `
    <div 
      class="group relative bg-slate-900/40 border-2 border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-slate-900/60 hover:border-emerald-500/30 hover:scale-[1.03] cursor-pointer shadow-xl hover:shadow-emerald-900/20"
      onclick="window.openModalByIdx(${idx})"
    >
      <div class="relative h-72 overflow-hidden">
        <img src="${zone.image}" alt="${zone.name}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-emerald-950/30 backdrop-blur-[3px]">
           <div class="bg-white/10 p-5 rounded-full backdrop-blur-2xl border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-700">
             <i data-lucide="maximize-2" class="text-white w-7 h-7"></i>
           </div>
        </div>

        <div class="absolute top-5 left-5">
          <span class="px-4 py-2 rounded-full text-[10px] font-black border-2 flex items-center gap-2 ${cfg.color} backdrop-blur-2xl uppercase tracking-[0.15em] shadow-2xl">
            <i data-lucide="${cfg.icon}" class="w-3.5 h-3.5"></i>
            ${cfg.label}
          </span>
        </div>
      </div>
      
      <div class="p-8 relative">
        <span class="text-[10px] text-emerald-500 font-black mb-2 block uppercase tracking-[0.25em] font-outfit">${zone.category}</span>
        <h3 class="text-2xl font-black text-white mb-3 tracking-tighter group-hover:text-emerald-400 transition-colors">${zone.name}</h3>
        <p class="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2 font-medium opacity-80">${zone.desc}</p>
        
        <div class="flex items-center justify-between border-t border-white/10 pt-6">
           <div class="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden mr-5 shadow-inner">
              <div class="h-full rounded-full transition-all duration-1000 ${zone.occupancy > 70 ? 'bg-amber-500' : 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]'}" style="width: ${zone.occupancy}%"></div>
           </div>
           <span class="text-xs font-black text-slate-400 font-outfit uppercase tracking-tighter">${zone.occupancy}%</span>
        </div>
      </div>
    </div>
  `
}

window.setView = (view) => {
  currentView = view
  activeMapId = null
  renderApp()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

window.toggleMap = (id) => {
  activeMapId = (activeMapId === id) ? null : id
  renderApp()
}

window.setFilter = (filter) => {
  currentFilter = filter
  renderApp()
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
  const mapLink = document.querySelector('#map-link')

  modalImg.style.opacity = '0'
  modalImg.style.transform = 'scale(0.98)'
  
  setTimeout(() => {
    if (modalImg) modalImg.src = zone.image
    if (modalTitle) modalTitle.textContent = zone.name
    if (modalDesc) modalDesc.textContent = zone.desc
    if (modalCategory) modalCategory.textContent = zone.category
    if (mapLink) mapLink.href = zone.routeUrl
    
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
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); })
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImg()
    if (e.key === 'ArrowLeft') prevImg()
  })
}

// Init
document.addEventListener('DOMContentLoaded', renderApp)
