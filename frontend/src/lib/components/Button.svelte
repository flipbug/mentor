<script lang="ts">
	export let css: string = '';
	export let small: boolean = false;

	css = css + ' ' + (small ? 'px-3 py-2 text-xs' : 'px-5 py-3 text-sm');
</script>

<button
	on:click
	class="{css} block rounded-lg bg-indigo-600 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
	{...$$restProps}
>
	<slot />
</button>
