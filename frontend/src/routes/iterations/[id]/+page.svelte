<script lang="ts">
	import type { PageData } from './$houdini';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Subjects from '$lib/components/Subjects.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import { enhance } from '$app/forms';

	export let data: PageData;

	let editNotes = false;

	function showSessionForm() {
		addSession = true;
		console.log(addSession);
	}

	$: ({ getIteration } = data);

	$: iteration = $getIteration?.data?.Iteration;
	$: sessions = $getIteration?.data?.Sessions?.docs || [];
</script>

{#if iteration}
	<div class="flex gap-4">
		<div class="w-3/4">
			<h2 class="text-4xl font-display">{iteration.name} / {iteration.theme}</h2>
			<h3 class="text-3xl text-indigo-500 font-display">{iteration.purpose}</h3>
			<div class="text-sm text-neutral-500 dark:text-neutral-300">
				{new Date(iteration.startDate).toDateString()} - {new Date(
					iteration.endDate
				).toDateString()}
			</div>

			<div class="mt-8 mb-4">
				{#if !editNotes}
					{iteration.notes || ''}
					<Button
						css="mt-2 "
						small={true}
						on:click={() => {
							editNotes = !editNotes;
						}}>Edit Notes</Button
					>
				{:else}
					<form method="post" action="/iterations/{iteration.id}?/updateNotes" use:enhance>
						<Textarea placeholder="Notes" name="notes" value={iteration.notes || ''} />
						<Button css="mt-2" type="submit">Save</Button>
					</form>
				{/if}
			</div>

			<div class="mt-10 text-2xl">Sessions</div>

			{#if sessions.length > 0}
				<ol class="border-l border-gray-100 dark:border-gray-500 mt-5 ml-2">
					{#each sessions as session}
						<li>
							<div class="flex-start flex items-center pt-3">
								<div
									class="-ml-[5px] mr-6 h-[9px] w-[9px] rounded-full bg-indigo-300 dark:bg-indigo-500"
								/>
								<p class="text-sm text-neutral-500 dark:text-neutral-300">
									{session?.name}
								</p>
							</div>
							<div class="mb-6 ml-8 mt-2">
								<h4 class="mb-1.5 text-xl font-semibold">{session?.subject.name}</h4>
								<div class="flex flex-wrap gap-2">
									{#if session?.subject?.tags}
										{#each session?.subject.tags as tag}
											<Tag>{tag.name}</Tag>
										{/each}
									{/if}
								</div>

								<p class="my-3 text-neutral-500 dark:text-neutral-300">
									{session?.subject.description || ''}
								</p>
								<!-- <p class="my-3 text-neutral-500 dark:text-neutral-300">add notes</p> -->
							</div>
						</li>
					{/each}
				</ol>
			{:else}
				<div class="text-slate-500 mt-4">No sessions recorded yet.</div>
			{/if}
		</div>
		<div class="w-1/4">
			<Subjects iterationId={iteration.id} />
		</div>
	</div>
{/if}
