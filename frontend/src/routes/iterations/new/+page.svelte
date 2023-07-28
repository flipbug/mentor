<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	function getWeekNumber(date) {
		var startOfYear = new Date(date.getFullYear(), 0, 1);
		return Math.ceil(((date - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
	}

	const today = new Date();
	const defaultName = `Week ${getWeekNumber(today)}`;
</script>

<article>
	<h1 class="text-bold text-4xl font-display">New Iteration</h1>

	<form action="?/create" method="POST" class="mt-6 space-y-4 w-6/12" use:enhance>
		<div>
			<Input placeholder="Name" name="name" value={defaultName} />
		</div>

		<div class="flex gap-5">
			<Input placeholder="From" name="startDate" type="date" value={today.toISOString()} />
			<Input placeholder="Until" name="endDate" type="date" />
		</div>

		<div class="py-2">
			<p class="text-xl mb-2">What do you want to focus on?</p>
			<Input placeholder="Theme" name="theme"/>
		</div>

		<div class="py-2">
			<p class="text-xl mb-2">Why?</p>
			<Input placeholder="Purpose" name="purpose"/>
		</div>

		<Button type="submit">Create</Button>
	</form>
</article>
