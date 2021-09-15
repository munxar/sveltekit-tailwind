<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button
	class={`bg-red-500 dark:bg-purple-200 text-white dark:text-gray-900 hover:opacity-80 px-4 py-2 rounded ${className}`}
	><slot /></button
>
