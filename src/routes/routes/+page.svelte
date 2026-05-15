<script>
    import RoutesScreen from "../../pages/RoutesScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<RoutesScreen on:navigate={handleNavigate} activeTab="routes" />
