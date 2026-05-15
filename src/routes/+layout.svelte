<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
    class="flex items-center justify-center min-h-screen bg-slate-200 font-sans"
>
    <div
        class="w-[390px] min-h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative"
    >
        {@render children()}
    </div>
</div>
