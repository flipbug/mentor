<script>
	export let value = '';
	export let type = 'input';
</script>

<input
	{type}
	class="w-full rounded-lg border-gray-200 dark:bg-gray-800 p-4 pe-12 text-sm shadow-sm mb-2"
	{value}
	{...$$restProps}
/>
