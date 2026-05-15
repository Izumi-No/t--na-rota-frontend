<script>
  let { light = false } = $props();
</script>

<div class="flex items-center justify-between px-6 py-3 {light ? 'text-white' : 'text-gray-800'} text-xs font-semibold flex-shrink-0">
  <span>9:41</span>
  <div class="flex items-center gap-1.5">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 8.5a13 13 0 0121 0M5 12a9 9 0 0114 0M8.5 15.5a5 5 0 017 0M12 19h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    <svg class="w-6 h-3" viewBox="0 0 24 12" fill="none">
      <rect x="0" y="1" width="20" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <rect x="1" y="2" width="16" height="8" rx="1.5" fill="currentColor"/>
      <path d="M21 4v4a2 2 0 000-4z" fill="currentColor"/>
    </svg>
  </div>
</div>
