<script>
  import { createEventDispatcher } from 'svelte';
  import StatusBar from './StatusBar.svelte';
  const dispatch = createEventDispatcher();

  const helpItems = [
    {
      icon: `<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg>`,
      bg: 'bg-blue-50',
      label: 'Dúvidas frequentes',
      desc: 'Tire suas dúvidas',
    },
    {
      icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
      bg: 'bg-orange-50',
      label: 'Relatar problema',
      desc: 'Informe um problema no app',
    },
    {
      icon: `<svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
      bg: 'bg-yellow-50',
      label: 'Sugestões',
      desc: 'Envie sua sugestão',
    },
    {
      icon: `<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
      bg: 'bg-green-50',
      label: 'Fale com o suporte',
      desc: 'Atendimento online',
    },
  ];
</script>

<div class="flex flex-col flex-1 bg-slate-50 overflow-hidden">
  <div class="bg-white flex-shrink-0">
    <StatusBar />
    <div class="flex items-center px-4 pb-3 gap-3">
      <button onclick={() => dispatch('navigate', 'profile')} class="text-gray-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div>
        <h1 class="text-lg font-bold text-gray-900">Central de Ajuda</h1>
        <p class="text-xs text-gray-400">Como podemos te ajudar?</p>
      </div>
    </div>
  </div>

  <div class="flex-1 overflow-y-auto px-4 pt-4 pb-8">
    <div class="space-y-3">
      {#each helpItems as item}
        <button class="w-full bg-white rounded-2xl p-4 flex items-center gap-4 text-left hover:shadow-md transition-shadow border border-gray-100">
          <div class="w-12 h-12 {item.bg} rounded-2xl flex items-center justify-center flex-shrink-0">
            {@html item.icon}
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold text-gray-800">{item.label}</p>
            <p class="text-xs text-gray-400">{item.desc}</p>
          </div>
          <svg class="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      {/each}
    </div>

    <!-- Office hours card -->
    <div class="mt-4 bg-blue-50 rounded-2xl p-4 flex items-center gap-4">
      <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
        <svg class="w-7 h-7 text-white" viewBox="0 0 28 22" fill="none">
          <rect x="2" y="4" width="24" height="14" rx="3" fill="currentColor" opacity="0.3"/>
          <rect x="4" y="6" width="20" height="10" rx="2" fill="currentColor" opacity="0.5"/>
          <circle cx="14" cy="17" r="4" fill="currentColor"/>
          <rect x="12" y="15" width="2" height="2.5" rx="0.5" fill="white"/>
          <rect x="14" y="17" width="2" height="1.5" rx="0.5" fill="white"/>
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-800">Horário de atendimento</p>
        <p class="text-xs text-gray-500">Segunda a Sexta, das 8h às 18h</p>
        <p class="text-xs text-gray-500">Sábado, das 8h às 12h</p>
      </div>
    </div>
  </div>
</div>
