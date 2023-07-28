<script lang="ts">
	import IterationCard from '$lib/components/IterationCard.svelte';

	/* @type { import('./$houdini').PageData } */
	export let data;

	$: ({ allIterations } = data);
</script>

{#if $allIterations?.fetching }
	<p>loading</p>
{:else}
	<div class="flex gap-4">
		{#each $allIterations?.data?.Iterations.docs as iteration}
			<IterationCard {iteration} />
		{/each}
	</div>
{/if}
