<script lang="ts">
	export let iteration: {
		id: string | null;
		name: string | null;
		theme: string | null;
		purpose: string | null;
		startDate: Date;
		endDate: Date;
	};

	const startDate = iteration.startDate;
	const endDate = iteration.endDate;

	const isFinished = endDate < new Date();
</script>

<section class="dark:hover:bg-slate-800 rounded-lg basis-1/3">
	<a href="/iterations/{iteration.id}" class="block p-5">
		<h2 class="text-3xl font-bold font-display tracking-tight {isFinished ? 'text-slate-600' : ''}">
			{iteration.name}
		</h2>

		<div class="leading-tight mb-2 text-xs text-gray-400">
			{startDate.toDateString()} - {endDate.toDateString()}
		</div>

		<p class="leading-loose text-xl text-indigo-500">{iteration.theme}</p>
		<p class="leading">{iteration.purpose}</p>
	</a>
</section>
