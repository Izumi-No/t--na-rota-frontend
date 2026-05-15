<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import StatusBar from "./StatusBar.svelte";
    const dispatch = createEventDispatcher();

    const amounts = [20, 40, 60, 100, 150];
    let selectedAmount: number | null = $state(20);
    let customAmount = $state("");
    let showCustom = $state(false);
    let paymentMethod = $state("pix");

    function select(val: number) {
        selectedAmount = val;
        showCustom = false;
        customAmount = "";
    }
</script>

<div class="flex flex-col flex-1 bg-slate-50 overflow-hidden">
    <div class="bg-white flex-shrink-0">
        <StatusBar />
        <div class="flex items-center px-4 pb-3 gap-3">
            <button
                onclick={() => dispatch("navigate", "profile")}
                class="text-gray-500"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg
                >
            </button>
            <h1 class="text-lg font-bold text-gray-900">
                Recarga da Carteirinha
            </h1>
        </div>
    </div>

    <div class="flex-1 overflow-y-auto px-4 pt-4 pb-8">
        <!-- Wallet balance card -->
        <div
            class="bg-blue-600 rounded-2xl p-4 flex items-center justify-between text-white mb-5"
        >
            <div>
                <p class="text-xs text-blue-200 mb-1">Saldo atual</p>
                <p class="text-3xl font-bold">R$ 42,50</p>
            </div>
            <div
                class="w-12 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
            >
                <svg class="w-7 h-5" viewBox="0 0 28 20" fill="none">
                    <rect width="28" height="20" rx="3" fill="#1d4ed8" />
                    <rect x="0" y="5" width="28" height="6" fill="#1e40af" />
                    <rect
                        x="2"
                        y="14"
                        width="6"
                        height="3"
                        rx="0.5"
                        fill="#60a5fa"
                    />
                    <rect
                        x="10"
                        y="14"
                        width="6"
                        height="3"
                        rx="0.5"
                        fill="#60a5fa"
                    />
                </svg>
            </div>
        </div>

        <!-- Choose amount -->
        <h2 class="text-sm font-semibold text-gray-700 mb-3">
            Escolha o valor
        </h2>
        <div class="grid grid-cols-3 gap-3 mb-3">
            {#each amounts as amt}
                <button
                    onclick={() => select(amt)}
                    class="py-3 rounded-xl text-sm font-semibold border-2 transition-all {selectedAmount ===
                        amt && !showCustom
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}"
                    >R$ {amt.toFixed(2).replace(".", ",")}</button
                >
            {/each}
            <button
                onclick={() => {
                    showCustom = true;
                    selectedAmount = null;
                }}
                class="py-3 rounded-xl text-sm font-semibold border-2 transition-all {showCustom
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}"
                >Outro valor</button
            >
        </div>

        {#if showCustom}
            <div class="mb-4">
                <input
                    type="number"
                    bind:value={customAmount}
                    placeholder="Digite o valor"
                    class="w-full px-4 py-3 bg-white border-2 border-blue-500 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
            </div>
        {/if}

        <!-- Payment methods -->
        <h2 class="text-sm font-semibold text-gray-700 mb-3 mt-2">
            Forma de pagamento
        </h2>
        <div class="space-y-2">
            {#each [{ id: "pix", label: "Pix", icon: "◈" }, { id: "credit", label: "Cartão de Crédito", icon: "💳" }, { id: "debit", label: "Cartão de Débito", icon: "💳" }] as method}
                <button
                    onclick={() => (paymentMethod = method.id)}
                    class="w-full flex items-center gap-3 px-4 py-4 rounded-2xl border-2 transition-all text-left {paymentMethod ===
                    method.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-100 bg-white hover:border-gray-200'}"
                >
                    <span class="text-xl">{method.icon}</span>
                    <span class="text-sm font-medium text-gray-700"
                        >{method.label}</span
                    >
                    {#if paymentMethod === method.id}
                        <div
                            class="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center"
                        >
                            <svg
                                class="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                viewBox="0 0 24 24"
                                ><path d="M5 13l4 4L19 7" /></svg
                            >
                        </div>
                    {/if}
                </button>
            {/each}
        </div>
    </div>

    <!-- CTA -->
    <div class="bg-white px-4 pt-3 pb-6 border-t border-gray-100 flex-shrink-0">
        <button
            onclick={() => dispatch("navigate", "profile")}
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-sm transition-colors"
            >Continuar para pagamento</button
        >
    </div>
</div>
