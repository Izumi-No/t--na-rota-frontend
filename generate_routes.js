import fs from 'fs';

const pages = [
  { path: 'login', component: 'LoginScreen', props: '' },
  { path: 'register', component: 'RegisterScreen', props: '' },
  { path: 'home', component: 'HomeScreen', props: 'activeTab="home"' },
  { path: 'routes', component: 'RoutesScreen', props: 'activeTab="routes"' },
  { path: 'profile', component: 'ProfileScreen', props: 'activeTab="profile"' },
  { path: 'recharge', component: 'RechargeScreen', props: '' },
  { path: 'help', component: 'HelpScreen', props: '' }
];

pages.forEach(p => {
  const content = `<script>
  import ${p.component} from '../../../pages/${p.component}.svelte';
  import { goto } from '$app/navigation';
  
  function handleNavigate(e) {
    const to = e.detail;
    goto('/' + to);
  }
</script>

<${p.component} on:navigate={handleNavigate} ${p.props} />
`;
  fs.writeFileSync(`src/routes/${p.path}/+page.svelte`, content);
});

// For root route, redirect to login
fs.writeFileSync('src/routes/+page.svelte', `<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  onMount(() => {
    goto('/login');
  });
</script>`);
