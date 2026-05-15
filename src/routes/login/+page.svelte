<script>
    import LoginScreen from "../../pages/LoginScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<LoginScreen on:navigate={handleNavigate} />
