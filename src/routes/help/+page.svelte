<script lang="ts">
    import HelpScreen from "../../pages/HelpScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e: CustomEvent) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<HelpScreen on:navigate={handleNavigate} />
