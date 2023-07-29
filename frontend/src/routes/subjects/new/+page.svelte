<script lang="ts">
	import type { PageData } from './$houdini';

	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';

	export let data: PageData;

	$: ({ allTags } = data);

	$: tags = $allTags?.data?.Tags?.docs;

	$: options =
		tags?.map((tag) => ({
			id: tag!.id || '',
			label: tag!.name || ''
		})) || [];
</script>

<article>
	<h1 class="text-bold text-4xl font-display">New Subject</h1>

	<form action="?/create" method="POST" class="mt-6 space-y-4 w-6/12" use:enhance>
		<Input placeholder="Name" name="name" />

		<textarea
			placeholder="Description"
			name="description"
			class="w-full h-32 p-4 rounded-lg bg-gray-800 text-sm"
		/>
		<div class="themed">
			<Select {options} name="tags[]" multiple={true} class="w-full select" placeholder="Tags" />
		</div>

		<Button type="submit">Create</Button>
	</form>
</article>
