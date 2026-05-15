<script>
    import HomeScreen from "../../pages/HomeScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<HomeScreen on:navigate={handleNavigate} activeTab="home" />
