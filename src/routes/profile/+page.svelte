<script>
    import ProfileScreen from "../../pages/ProfileScreen.svelte";
    import { goto } from "$app/navigation";

    function handleNavigate(e) {
        const to = e.detail;
        goto("/" + to);
    }
</script>

<ProfileScreen on:navigate={handleNavigate} activeTab="profile" />
