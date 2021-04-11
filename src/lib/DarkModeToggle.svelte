<script>
	export let enabled = false;
	const toggle = () => (enabled = !enabled);
</script>

<button
	type="button"
	class:bg-indigo-600={enabled}
	class="bg-gray-200 dark:(bg-gray-700 text-white) relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
	aria-pressed="false"
	on:click={toggle}
>
	<span class="sr-only">Use setting</span>
	<span
		class="{enabled
			? 'translate-x-5'
			: 'translate-x-0'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:(bg-black text-white) shadow transform ring-0 transition ease-in-out duration-200"
	>
		<span
			class="{enabled
				? 'opacity-0'
				: 'opacity-100'} ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		</span>
		<span
			class="{enabled
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</span>
	</span>
</button>
