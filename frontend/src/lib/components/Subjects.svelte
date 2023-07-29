<script lang="ts">
	import { graphql } from '$houdini';
	import PlusCircle from '$lib/icons/PlusCircle.svelte';
	import Tag from '$lib/components/Tag.svelte';

	export let iterationId: string | null | undefined;

	const store = graphql(`
		query getData @load {
			Subjects {
				docs {
					id
					name
					description
					tags {
						id
						name
					}
				}
			}
		}
	`);

	$: subjects = $store.data?.Subjects?.docs;
</script>

<h2 class="font-display text-2xl ml-8 mb-4">New Session</h2>

<a href="/subjects/new">
	<div
		class="p-4 mb-4 border-2 border-slate-800 rounded-lg ml-8 hover:bg-indigo-500 hover:cursor-pointer"
	>
		<PlusCircle /> Add Subject
	</div>
</a>

{#if subjects}
	{#each subjects as subject}
		{#if iterationId}
			<form method="post" action="/iterations/{iterationId}?/addSession">
				<input type="hidden" name="subjectId" value={subject?.id} />
				<button type="submit" class="w-full text-left">
					<div
						class="p-4 mb-4 bg-slate-800 rounded-lg ml-8 hover:ml-4 hover:mr-4 hover:cursor-pointer"
					>
						<div class="mb-2">{subject?.name}</div>
						<div class="flex flex-wrap gap-2">
							{#if subject?.tags}
								{#each subject.tags as tag}
									<Tag>{tag.name}</Tag>
								{/each}
							{/if}
						</div>
					</div>
				</button>
			</form>
		{:else}
			<div class="p-4 mb-4 bg-slate-800 rounded-lg ml-8">
				<div class="mb-2">{subject?.name}</div>
				<div class="flex flex-wrap gap-2">
					{#if subject?.tags}
						{#each subject.tags as tag}
							<Tag>{tag.name}</Tag>
						{/each}
					{/if}
				</div>
			</div>
		{/if}
	{/each}
{/if}
