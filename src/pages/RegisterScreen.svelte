<script>
  import { createEventDispatcher } from 'svelte';
  import StatusBar from './StatusBar.svelte';
  const dispatch = createEventDispatcher();

  let name = $state(''), email = $state(''), phone = $state(''), password = $state(''), confirmPassword = $state('');
  let showPass = $state(false), showConfirm = $state(false), agreed = $state(false);

  function handleRegister() {
    if (agreed) dispatch('navigate', 'home');
  }
</script>

<div class="flex flex-col flex-1 bg-white overflow-hidden">
  <StatusBar />

  <div class="px-6 pb-3 flex-shrink-0">
    <button onclick={() => dispatch('navigate', 'login')} class="text-gray-500">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
    </button>
  </div>

  <div class="flex-1 overflow-y-auto px-6 pb-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-1">Criar conta</h1>
    <p class="text-sm text-gray-500 mb-6">Preencha os dados para se cadastrar</p>

    <div class="space-y-4">
      <div>
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">Nome completo</label>
        <input
          type="text"
          bind:value={name}
          placeholder="Digite seu nome"
          class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div>
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">E-mail</label>
        <input
          type="email"
          bind:value={email}
          placeholder="seu@email.com"
          class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div>
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">Telefone</label>
        <input
          type="tel"
          bind:value={phone}
          placeholder="(00) 00000-0000"
          class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div>
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">Senha</label>
        <div class="relative">
          <input
            type={showPass ? 'text' : 'password'}
            bind:value={password}
            placeholder="Crie uma senha"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all pr-11"
          />
          <button onclick={() => showPass = !showPass} class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>

      <div>
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">Confirmar senha</label>
        <div class="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            bind:value={confirmPassword}
            placeholder="Confirme sua senha"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all pr-11"
          />
          <button onclick={() => showConfirm = !showConfirm} class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>

      <!-- Terms -->
      <label class="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" bind:checked={agreed} class="mt-0.5 w-4 h-4 accent-blue-600 cursor-pointer rounded"/>
        <span class="text-xs text-gray-600">
          Li e aceito os
          <button class="text-blue-600 font-medium">Termos de Uso</button>
          e
          <button class="text-blue-600 font-medium">Política de Privacidade</button>
        </span>
      </label>
    </div>

    <button
      onclick={handleRegister}
      class="mt-6 w-full py-4 rounded-2xl font-semibold text-sm transition-all {agreed ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}"
    >Cadastrar</button>

    <p class="text-center text-sm text-gray-500 mt-5">
      Já tem uma conta?
      <button onclick={() => dispatch('navigate', 'login')} class="text-blue-600 font-semibold">Entrar</button>
    </p>
  </div>
</div>
