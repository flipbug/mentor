<script lang="ts">
	export let css: string = '';
</script>

<button
	on:click
	class="{css} block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
	{...$$restProps}
>
	<slot />
</button>
