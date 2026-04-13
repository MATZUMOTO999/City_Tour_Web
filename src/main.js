import './style.css'

// Datos de ejemplo para las zonas turísticas
const zones = [
  {
    id: 1,
    name: "Parque de las Leyendas",
    image: "/imagenes/1b7e1eda6ae7cc0165b691e0795d99ec.png",
    status: "open", // open, closed, busy
    occupancy: 45,
    lastUpdate: "Hace 5 min",
    category: "Parques",
    address: "Av. La Marina, San Miguel"
  },
  {
    id: 2,
    name: "Museo de Arte Moderno",
    image: "/imagenes/24f8da1d69b24aa9a45cd860c9703ccd.png",
    status: "busy",
    occupancy: 92,
    lastUpdate: "Hace 2 min",
    category: "Museos",
    address: "Centro Histórico"
  },
  {
    id: 3,
    name: "Plaza de Armas",
    image: "/imagenes/2568e2c521e88ffc61014cf3baed5c60.png",
    status: "open",
    occupancy: 20,
    lastUpdate: "Hace 10 min",
    category: "Plazas",
    address: "Centro de la Ciudad"
  },
  {
    id: 4,
    name: "Miraflores Boardwalk",
    image: "/imagenes/37bf09286041885e4a11d236070eb3fe.png",
    status: "open",
    occupancy: 60,
    lastUpdate: "Hace 15 min",
    category: "Miradores",
    address: "Malecón de la Reserva"
  }
]

const statusConfig = {
  open: {
    label: "Abierto",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: 'check-circle-2'
  },
  busy: {
    label: "Mucha Afluencia",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: 'triangle-alert'
  },
  closed: {
    label: "Cerrado",
    color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    icon: 'x-circle'
  }
}

function renderApp() {
  const app = document.querySelector('#app')
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between border-b border-white/5">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <i data-lucide="map-pin" class="text-white w-6 h-6"></i>
        </div>
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">CityStatus</span>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#" class="hover:text-blue-400 transition-colors">Zonas</a>
        <a href="#" class="hover:text-blue-400 transition-colors">Mapa</a>
        <a href="#" class="hover:text-blue-400 transition-colors">Reportar</a>
      </div>
      <button class="p-2 hover:bg-white/5 rounded-lg transition-colors md:hidden">
        <i data-lucide="menu"></i>
      </button>
      <button class="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-600/20">
        Descargar App
      </button>
    </nav>

    <!-- Hero Section -->
    <header class="relative pt-20 pb-16 px-6 overflow-hidden">
      <!-- Background mesh -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Actualizaciones en tiempo real
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Explora tu ciudad <br/>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">sin sorpresas.</span>
        </h1>
        <p class="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Consulta la afluencia, clima y estado de los mejores lugares turísticos. Planifica tu visita perfecta hoy mismo.
        </p>
        
        <!-- Search Bar -->
        <div class="group relative max-w-xl mx-auto">
          <div class="absolute inset-y-0 left-4 flex items-center text-slate-500 group-focus-within:text-blue-400 transition-colors">
            <i data-lucide="search"></i>
          </div>
          <input 
            type="text" 
            placeholder="Buscar museos, parques, plazas..." 
            class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-lg shadow-xl"
          />
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-6 pb-24 w-full">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold">Zonas Populares</h2>
        <div class="flex gap-2">
          <button class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">Todos</button>
          <button class="px-4 py-2 text-slate-500 text-sm hover:text-white transition-colors">Parques</button>
          <button class="px-4 py-2 text-slate-500 text-sm hover:text-white transition-colors">Cultura</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${zones.map(zone => {
          const cfg = statusConfig[zone.status]
          return `
            <div class="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden card-hover glass">
              <div class="relative h-56 overflow-hidden">
                <img src="${zone.image}" alt="${zone.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${cfg.color} backdrop-blur-md">
                    <i data-lucide="${cfg.icon}" class="w-3.5 h-3.5"></i>
                    ${cfg.label}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span class="text-xs text-slate-400 mb-1 block">${zone.category}</span>
                    <h3 class="text-xl font-bold text-white">${zone.name}</h3>
                  </div>
                </div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center gap-4 text-slate-400 text-sm mb-6">
                  <div class="flex items-center gap-1.5">
                    <i data-lucide="map-pin" class="w-4 h-4"></i>
                    ${zone.address.split(',')[0]}
                  </div>
                  <div class="flex items-center gap-1.5">
                    <i data-lucide="clock" class="w-4 h-4"></i>
                    ${zone.lastUpdate}
                  </div>
                </div>

                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-sm font-medium text-slate-300">Afluencia Actual</span>
                      <span class="text-sm font-bold ${zone.occupancy > 80 ? 'text-amber-400' : 'text-blue-400'}">${zone.occupancy}%</span>
                    </div>
                    <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div class="h-full rounded-full transition-all duration-1000 ${zone.occupancy > 80 ? 'bg-amber-500' : 'bg-blue-500'}" style="width: ${zone.occupancy}%"></div>
                    </div>
                  </div>
                  
                  <button class="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all group-hover:bg-blue-600/10 group-hover:border-blue-500/30 group-hover:text-blue-400">
                    Ver Detalles Completos
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            </div>
          `
        }).join('')}
      </div>
    </main>
  `

  // Inicializar iconos de Lucide
  if (window.lucide) {
    window.lucide.createIcons()
  }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', renderApp)
