<script>
  import { createEventDispatcher } from 'svelte';
  import StatusBar from './StatusBar.svelte';
  import BottomNav from './BottomNav.svelte';
  const dispatch = createEventDispatcher();
  let { activeTab = 'home' } = $props();
</script>

<div class="flex flex-col flex-1 bg-slate-50 overflow-hidden">
  <!-- Header -->
  <div class="bg-white shadow-sm flex-shrink-0">
    <StatusBar />
    <div class="flex items-center justify-between px-4 pb-3">
      <button class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <h1 class="text-base font-semibold text-gray-900">Rota em tempo real</h1>
      <button class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 relative">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
    </div>
  </div>

  <!-- Route badge -->
  <div class="mx-4 mt-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex items-center gap-3 flex-shrink-0">
    <div class="bg-blue-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-xl">Linha 502</div>
    <div class="flex-1">
      <p class="text-sm font-semibold text-gray-800">Terminal Central</p>
      <p class="text-xs text-gray-500">Bairro Jardim</p>
    </div>
    <button class="text-blue-500">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
    </button>
  </div>

  <!-- Map area -->
  <div class="mx-4 mt-3 flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative min-h-[200px]">
    <!-- SVG map mockup -->
    <svg class="w-full h-full" viewBox="0 0 350 220" preserveAspectRatio="xMidYMid slice">
      <!-- Background -->
      <rect width="350" height="220" fill="#e8f0e0"/>
      <!-- Grid roads -->
      <line x1="0" y1="55" x2="350" y2="55" stroke="white" stroke-width="8"/>
      <line x1="0" y1="110" x2="350" y2="110" stroke="white" stroke-width="8"/>
      <line x1="0" y1="165" x2="350" y2="165" stroke="white" stroke-width="8"/>
      <line x1="70" y1="0" x2="70" y2="220" stroke="white" stroke-width="8"/>
      <line x1="140" y1="0" x2="140" y2="220" stroke="white" stroke-width="8"/>
      <line x1="210" y1="0" x2="210" y2="220" stroke="white" stroke-width="8"/>
      <line x1="280" y1="0" x2="280" y2="220" stroke="white" stroke-width="8"/>
      <!-- Buildings -->
      <rect x="80" y="60" width="50" height="42" rx="3" fill="#d4dfc8"/>
      <rect x="150" y="60" width="50" height="42" rx="3" fill="#d4dfc8"/>
      <rect x="80" y="116" width="50" height="42" rx="3" fill="#d4dfc8"/>
      <rect x="220" y="116" width="50" height="42" rx="3" fill="#d4dfc8"/>
      <rect x="220" y="60" width="50" height="42" rx="3" fill="#d4dfc8"/>
      <!-- Route line -->
      <polyline points="210,200 210,165 210,110 140,110 140,55 140,20" stroke="#2563eb" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="none"/>
      <!-- Bus icon -->
      <circle cx="210" cy="140" r="14" fill="#2563eb"/>
      <text x="210" y="145" text-anchor="middle" font-size="14" fill="white">🚌</text>
      <!-- Destination pin -->
      <ellipse cx="140" cy="22" rx="6" ry="3" fill="rgba(239,68,68,0.3)"/>
      <path d="M140 22 C140 22 134 14 134 10 A6 6 0 1 1 146 10 C146 14 140 22 140 22Z" fill="#ef4444"/>
      <circle cx="140" cy="10" r="3" fill="white"/>
      <!-- Origin dot -->
      <circle cx="210" cy="200" r="8" fill="#2563eb" stroke="white" stroke-width="2"/>
      <circle cx="210" cy="200" r="3" fill="white"/>
    </svg>
    <!-- Locate button -->
    <button class="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 border border-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
    </button>
  </div>

  <!-- Arrival info -->
  <div class="mx-4 mt-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex-shrink-0">
    <div class="flex items-center gap-2 mb-1">
      <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      <span class="text-xs text-gray-500">Chegada prevista ao seu ponto</span>
    </div>
    <div class="flex items-baseline gap-2">
      <span class="text-3xl font-bold text-gray-900">10:24</span>
      <span class="text-sm text-gray-500">AM</span>
      <span class="text-xs bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full">• Em 5 min</span>
    </div>
  </div>

  <!-- Delay alert -->
  <div class="mx-4 mt-3 mb-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex-shrink-0">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-amber-500 text-base">⚠️</span>
      <span class="text-sm font-semibold text-amber-700">Atraso identificado</span>
    </div>
    <p class="text-xs text-gray-600">Trânsito intenso na Av. Brasil</p>
    <p class="text-sm font-bold text-red-500 mt-1">+7 min de atraso</p>
  </div>

  <BottomNav active={activeTab} on:navigate={e => dispatch('navigate', e.detail)} />
</div>
