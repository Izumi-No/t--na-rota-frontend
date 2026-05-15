<script>
    import RechargeScreen from "../../pages/RechargeScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<RechargeScreen on:navigate={handleNavigate} />
