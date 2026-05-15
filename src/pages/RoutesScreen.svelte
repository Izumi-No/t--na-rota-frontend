<script>
    import { createEventDispatcher } from "svelte";
    import StatusBar from "./StatusBar.svelte";
    import BottomNav from "./BottomNav.svelte";
    const dispatch = createEventDispatcher();
    let { activeTab = "routes" } = $props();

    let activeFilter = $state("rotas");
    const filters = ["Rotas", "Pontos", "Favoritos"];

    const routes = [
        {
            num: "502",
            from: "Terminal Central",
            to: "Bairro Jardim",
            via: "Via Av. Brasil",
        },
        {
            num: "503",
            from: "Terminal Central",
            to: "Parque das Flores",
            via: "Via Centro",
        },
        {
            num: "504",
            from: "Terminal Central",
            to: "Vila Nova",
            via: "Via das Torres",
        },
    ];

    const stops = [
        { name: "Av. Brasil, 123", dist: "120 m de você" },
        { name: "Rua das Flores, 45", dist: "250 m de você" },
        { name: "Centro Comercial", dist: "400 m de você" },
    ];

    let favorites = $state([false, false, false]);
</script>

<div class="flex flex-col flex-1 bg-white overflow-hidden">
    <StatusBar />

    <div class="px-4 pb-3 flex-shrink-0">
        <h1 class="text-xl font-bold text-gray-900 text-center mb-4">
            Rotas e Pontos
        </h1>

        <!-- Search -->
        <div class="flex gap-2">
            <div
                class="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2.5"
            >
                <svg
                    class="w-4 h-4 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    ><circle cx="11" cy="11" r="8" /><path
                        d="M21 21l-4.35-4.35"
                    /></svg
                >
                <input
                    type="text"
                    placeholder="Buscar rota ou ponto"
                    class="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                />
            </div>
            <button
                class="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500"
            >
                <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    ><path d="M3 6h18M7 12h10M11 18h2" /></svg
                >
            </button>
        </div>

        <!-- Filter tabs -->
        <div class="flex gap-2 mt-3">
            {#each filters as f}
                <button
                    onclick={() => (activeFilter = f.toLowerCase())}
                    class="px-5 py-2 rounded-full text-sm font-medium transition-colors {activeFilter ===
                    f.toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
                    >{f}</button
                >
            {/each}
        </div>
    </div>

    <div class="flex-1 overflow-y-auto px-4 pb-4">
        <!-- Routes section -->
        <div class="mb-5">
            <h2 class="text-sm font-semibold text-gray-700 mb-3">
                Rotas cadastradas
            </h2>
            <div class="space-y-3">
                {#each routes as route, i}
                    <div
                        class="bg-gray-50 rounded-2xl p-4 flex items-center justify-between"
                    >
                        <div>
                            <p class="text-blue-600 font-bold text-base">
                                {route.num}
                            </p>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <span class="text-xs text-gray-700 font-medium"
                                    >{route.from}</span
                                >
                                <span class="text-gray-400 text-xs">↔</span>
                                <span class="text-xs text-gray-700 font-medium"
                                    >{route.to}</span
                                >
                            </div>
                            <p class="text-xs text-gray-400 mt-0.5">
                                {route.via}
                            </p>
                        </div>
                        <button
                            onclick={() => (favorites[i] = !favorites[i])}
                            class="transition-colors {favorites[i]
                                ? 'text-amber-400'
                                : 'text-gray-300 hover:text-gray-400'}"
                        >
                            <svg
                                class="w-5 h-5"
                                fill={favorites[i] ? "currentColor" : "none"}
                                stroke="currentColor"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                ><polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                /></svg
                            >
                        </button>
                    </div>
                {/each}
            </div>
            <button
                class="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1"
            >
                Ver todas as rotas
                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg
                >
            </button>
        </div>

        <!-- Nearby stops -->
        <div>
            <h2 class="text-sm font-semibold text-gray-700 mb-3">
                Pontos próximos
            </h2>
            <div class="space-y-3">
                {#each stops as stop}
                    <div
                        class="flex items-center gap-3 bg-gray-50 rounded-2xl p-4"
                    >
                        <div
                            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-4 h-4 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                ><path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                /></svg
                            >
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-800">
                                Ponto – {stop.name}
                            </p>
                            <p class="text-xs text-gray-400">{stop.dist}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <button
                class="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1"
            >
                Ver todos os pontos
                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg
                >
            </button>
        </div>
    </div>

    <BottomNav
        active={activeTab}
        on:navigate={(e) => dispatch("navigate", e.detail)}
    />
</div>
