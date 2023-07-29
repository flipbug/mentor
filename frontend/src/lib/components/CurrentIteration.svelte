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

	function getDaysBetween(start: Date, end: Date) {
		const diffTime = Math.abs(end.getTime() - start.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	}

	const totalDays = getDaysBetween(startDate, endDate);
	const daysSinceStart = getDaysBetween(startDate, new Date());

	const progress = (100 / totalDays) * Math.min(totalDays, daysSinceStart);
</script>

<a href="/iterations/{iteration.id}">
	<div class="mb-10 rounded-lg p-5 bg-slate-800 hover:bg-slate-700">
		<div
			class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-xs mb-4"
		>
			In Progress
		</div>
		<h2 class="text-4xl font-display">
			{iteration.name} / {iteration.theme}
		</h2>
		<h3 class="text-3xl text-indigo-500 font-display">
			{iteration.purpose}
		</h3>
		<div class="text-sm text-neutral-500 dark:text-neutral-300">
			{iteration.startDate.toDateString()} - {iteration.endDate.toDateString()}
		</div>

		<div class="mt-5">
			<span id="ProgressLabel" class="sr-only">Loading</span>

			<span
				role="progressbar"
				aria-labelledby="ProgressLabel"
				aria-valuenow={progress}
				class="block rounded-full bg-slate-900"
			>
				<span class="block h-3 rounded-full bg-indigo-600" style="width: {progress}%" />
			</span>
		</div>
	</div>
</a>
