<script>
	/**
	 * @type {{ startDate: string | number | Date; endDate: string | number | Date; id: any; name: any; theme: any; purpose: any; }}
	 */
	export let iteration;

	const startDate = new Date(iteration.startDate);
	const endDate = new Date(iteration.endDate);

	/**
	 * @param {Date} start
	 * @param {Date} end
	 */
	function getDaysBetween(start, end) {
		const diffTime = Math.abs(end.getTime() - start.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	}

	const totalDays = getDaysBetween(startDate, endDate);
	const daysSinceStart = getDaysBetween(startDate, new Date());

	const progress = (100 / totalDays) * Math.min(totalDays, daysSinceStart);
</script>

<section class="block dark:hover:bg-gray-800 rounded">
	<a href="/iterations/{iteration.id}" class="block p-5">
		<div class="mb-5">
			<span id="ProgressLabel" class="sr-only">Loading</span>

			<span
				role="progressbar"
				aria-labelledby="ProgressLabel"
				aria-valuenow={progress}
				class="block rounded-full bg-gray-800"
			>
				<span class="block h-3 rounded-full bg-indigo-600" style="width: {progress}%" />
			</span>
		</div>

		<h2 class="mb-2 text-3xl font-bold font-display tracking-tight">
			{iteration.name}
		</h2>

		<div class="leading-tight mb-4 text-sm">
			{startDate.toDateString()} - {endDate.toDateString()}
		</div>

		<p class="leading-loose text-xl">{iteration.theme}</p>
		<p class="leading">{iteration.purpose}</p>
	</a>
</section>
