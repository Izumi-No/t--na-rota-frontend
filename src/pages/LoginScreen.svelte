<script>
  import { createEventDispatcher } from 'svelte';
  import StatusBar from './StatusBar.svelte';
  const dispatch = createEventDispatcher();

  let email = $state('');
  let password = $state('');
  let showPass = $state(false);

  function handleLogin() {
    dispatch('navigate', 'home');
  }
</script>

<div class="flex flex-col flex-1 bg-white overflow-hidden">
  <StatusBar />

  <div class="flex-1 flex flex-col px-6 pt-4 pb-8 overflow-y-auto">
    <!-- Illustration -->
    <div class="flex justify-center mb-6">
      <div class="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center">
        <svg viewBox="0 0 100 80" class="w-24 h-20">
          <!-- City skyline -->
          <rect x="5" y="40" width="12" height="30" rx="2" fill="#bfdbfe"/>
          <rect x="20" y="30" width="15" height="40" rx="2" fill="#93c5fd"/>
          <rect x="38" y="35" width="10" height="35" rx="2" fill="#bfdbfe"/>
          <!-- Bus -->
          <rect x="55" y="48" width="38" height="22" rx="4" fill="#2563eb"/>
          <rect x="58" y="52" width="8" height="8" rx="1.5" fill="#dbeafe"/>
          <rect x="70" y="52" width="8" height="8" rx="1.5" fill="#dbeafe"/>
          <rect x="82" y="52" width="8" height="8" rx="1.5" fill="#dbeafe"/>
          <circle cx="63" cy="72" r="4" fill="#1e40af"/>
          <circle cx="63" cy="72" r="2" fill="#dbeafe"/>
          <circle cx="85" cy="72" r="4" fill="#1e40af"/>
          <circle cx="85" cy="72" r="2" fill="#dbeafe"/>
          <!-- Road -->
          <rect x="0" y="72" width="100" height="8" rx="2" fill="#e2e8f0"/>
          <rect x="45" y="74" width="8" height="3" rx="1" fill="white"/>
        </svg>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-gray-900 text-center mb-1">Bem-vindo!</h1>
    <p class="text-sm text-gray-500 text-center mb-8">Acesse sua conta para continuar</p>

    <!-- Form -->
    <div class="space-y-4">
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
        <label class="text-xs font-medium text-gray-600 mb-1.5 block">Senha</label>
        <div class="relative">
          <input
            type={showPass ? 'text' : 'password'}
            bind:value={password}
            placeholder="Digite sua senha"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all pr-11"
          />
          <button
            onclick={() => showPass = !showPass}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {#if showPass}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>
            {:else}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            {/if}
          </button>
        </div>
      </div>

      <div class="text-right">
        <button class="text-blue-600 text-sm font-medium">Esqueceu sua senha?</button>
      </div>
    </div>

    <button
      onclick={handleLogin}
      class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors text-sm"
    >Entrar</button>

    <div class="flex items-center gap-3 my-5">
      <div class="flex-1 h-px bg-gray-200"></div>
      <span class="text-xs text-gray-400">ou</span>
      <div class="flex-1 h-px bg-gray-200"></div>
    </div>

    <button
      onclick={() => dispatch('navigate', 'register')}
      class="w-full border-2 border-blue-600 text-blue-600 font-semibold py-4 rounded-2xl hover:bg-blue-50 transition-colors text-sm"
    >Criar conta</button>

    <button
      onclick={() => dispatch('navigate', 'home')}
      class="mt-4 text-center text-blue-500 text-sm font-medium w-full"
    >Continuar como visitante</button>
  </div>
</div>
