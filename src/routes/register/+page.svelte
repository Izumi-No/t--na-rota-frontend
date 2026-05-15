<script>
    import RegisterScreen from "../../pages/RegisterScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<RegisterScreen on:navigate={handleNavigate} />
