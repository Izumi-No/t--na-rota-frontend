<script>
  import { createEventDispatcher } from 'svelte';
  import StatusBar from './StatusBar.svelte';
  import BottomNav from './BottomNav.svelte';
  const dispatch = createEventDispatcher();
  let { activeTab = 'profile' } = $props();

  const accountItems = ['Editar perfil', 'Alterar e-mail', 'Alterar senha'];
  const supportItems = ['Central de Ajuda', 'Fale com o suporte', 'Políticas de Privacidade', 'Termos de Uso'];
  const accountIcons = [
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  ];
  const supportIcons = [
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg>`,
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  ];
</script>

<div class="flex flex-col flex-1 bg-slate-50 overflow-hidden">
  <div class="bg-white flex-shrink-0">
    <StatusBar />
    <h1 class="text-xl font-bold text-gray-900 text-center pb-3">Meu Perfil</h1>
  </div>

  <div class="flex-1 overflow-y-auto">
    <!-- Profile header -->
    <div class="bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3">
      <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
      </div>
      <div class="flex-1">
        <p class="font-bold text-gray-900">João da Silva</p>
        <p class="text-sm text-gray-400">joao.silva@email.com</p>
      </div>
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
    </div>

    <!-- Wallet card -->
    <div class="mx-4 mt-4 bg-blue-600 rounded-2xl p-4 text-white">
      <p class="text-xs opacity-70 mb-1">Minha Carteirinha</p>
      <p class="text-xs text-blue-200 mb-2">Saldo atual</p>
      <div class="flex items-center justify-between">
        <p class="text-3xl font-bold">R$ 42,50</p>
        <button
          onclick={() => dispatch('navigate', 'recharge')}
          class="bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors"
        >Recarregar</button>
      </div>
      <p class="text-xs text-blue-200 mt-2">Última recarga: 10/05/2024 – R$ 20,00</p>
    </div>

    <!-- Account section -->
    <div class="mx-4 mt-4 bg-white rounded-2xl overflow-hidden">
      <p class="text-sm font-semibold text-gray-700 px-4 pt-4 pb-2">Conta</p>
      {#each accountItems as item, i}
        <button class="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors {i < accountItems.length - 1 ? 'border-b border-gray-100' : ''}">
          <span class="text-gray-400">{@html accountIcons[i]}</span>
          <span class="flex-1 text-left text-sm text-gray-700">{item}</span>
          <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      {/each}
    </div>

    <!-- Support section -->
    <div class="mx-4 mt-4 bg-white rounded-2xl overflow-hidden">
      <p class="text-sm font-semibold text-gray-700 px-4 pt-4 pb-2">Suporte e informações</p>
      {#each supportItems as item, i}
        <button
          onclick={() => { if (i === 0) dispatch('navigate', 'help'); }}
          class="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors {i < supportItems.length - 1 ? 'border-b border-gray-100' : ''}"
        >
          <span class="text-gray-400">{@html supportIcons[i]}</span>
          <span class="flex-1 text-left text-sm text-gray-700">{item}</span>
          <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      {/each}
    </div>

    <div class="mx-4 mt-4 mb-6 text-center">
      <button
        onclick={() => dispatch('navigate', 'login')}
        class="text-red-500 text-sm font-semibold"
      >Sair da conta</button>
    </div>
  </div>

  <BottomNav active={activeTab} on:navigate={e => dispatch('navigate', e.detail)} />
</div>
