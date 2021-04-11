<script>
	import 'virtual:windi.css';
	import { onMount } from 'svelte';
	onMount(() => {
		import('virtual:windi-devtools');
	});
</script>

<slot />
