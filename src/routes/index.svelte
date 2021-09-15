<script>
	import Button from '$lib/Button.svelte';
</script>

<p class="p-2 dark:(bg-gray-900 text-white)">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse, non fugiat nisi sapiente
	laborum sed modi, facilis itaque blanditiis dicta officia excepturi totam vero nesciunt
	consectetur illo, ex earum.
</p>
<div class="p-2 dark:(bg-gray-900 text-white)">
	<Button>Default Style</Button>
	<Button class="bg-blue-400">Overwrite Style</Button>
</div>
