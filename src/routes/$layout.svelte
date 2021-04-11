<script>
	import 'virtual:windi.css';
	import { onMount } from 'svelte';
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
	onMount(() => {
		import('virtual:windi-devtools');
	});
	let dark = false;
</script>

<div class:dark>
	<nav class="dark:bg-gray-800">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<span class="p-2 dark:text-white"> Hello, Tailwind! </span>
				<DarkModeToggle bind:enabled={dark} />
			</div>
		</div>
	</nav>

	<slot />
</div>
