<script lang="ts">
	import type { PageData } from './$houdini';

	import IterationCard from '$lib/components/IterationCard.svelte';
	import Subjects from '$lib/components/Subjects.svelte';
	import CurrentIteration from '$lib/components/CurrentIteration.svelte';
	import InformationCircle from '$lib/icons/InformationCircle.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;

	$: ({ allIterations } = data);

	$: iterations = $allIterations?.data?.Iterations?.docs || [];

	$: currentIteration = iterations.find((iteration) => {
		if (iteration == null) {
			return false;
		}

		const now = new Date();
		return iteration.startDate <= now && iteration.endDate >= now;
	});
</script>

<div class="flex gap-4">
	<div class="w-3/4">
		{#if currentIteration}
			<CurrentIteration iteration={currentIteration} />
		{:else}
			<div class="mb-10 rounded-lg p-5 bg-slate-800">
				<div class="text-lg">
					<span class="text-indigo-500">
						<InformationCircle />
					</span> No Iteration in progress
				</div>
				<a href="/iterations/new" class="block mt-8">
					<Button>Create Iteration</Button>
				</a>
			</div>
		{/if}

		<div class="flex flex-row flex-wrap">
			{#if iterations}
				{#each iterations as iteration}
					{#if iteration}
						<IterationCard {iteration} />
					{/if}
				{/each}
			{/if}
		</div>
	</div>

	<div class="w-1/4">
		<Subjects iterationId={currentIteration?.id} />
	</div>
</div>
