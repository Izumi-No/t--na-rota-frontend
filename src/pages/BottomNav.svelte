<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let { active = 'home' } = $props();

  const tabs = [
    { id: 'home', label: 'Início', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>` },
    { id: 'routes', label: 'Rotas', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>` },
    { id: 'card', label: 'Cartão', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>` },
    { id: 'profile', label: 'Perfil', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>` },
  ];
</script>

<nav class="flex items-center justify-around bg-gray-900 h-16 border-t border-gray-800 flex-shrink-0">
  {#each tabs as tab}
    <button
      onclick={() => dispatch('navigate', tab.id === 'card' ? 'recharge' : tab.id)}
      class="flex flex-col items-center gap-0.5 py-2 px-3 transition-colors {active === tab.id ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'}"
    >
      {@html tab.icon}
      <span class="text-[10px] font-medium">{tab.label}</span>
    </button>
  {/each}
</nav>
