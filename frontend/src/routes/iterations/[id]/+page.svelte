<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Tag from '$lib/components/Tag.svelte';

	/* @type { import('./$houdini').PageData } */
	export let data;

	let addSession = false;

	function showSessionForm() {
		addSession = true;
		console.log(addSession);
	}

	$: ({ getIteration } = data);

	$: iteration = $getIteration?.data?.Iteration;
	$: sessions = $getIteration?.data?.Sessions?.docs;
	$: tags = $getIteration?.data?.Tags?.docs;
	$: subjects = $getIteration?.data?.Subjects?.docs;
</script>

{#if iteration}
	<article>
		<h2 class="text-4xl font-display">{iteration.name} / {iteration.theme}</h2>
		<h3 class="text-3xl text-indigo-500 font-display">{iteration.purpose}</h3>
		<div class="text-sm text-neutral-500 dark:text-neutral-300">
			{new Date(iteration.startDate).toDateString()} - {new Date(iteration.endDate).toDateString()}
		</div>

		<div class="mt-10 text-2xl">Sessions</div>

		<ol class="border-l border-gray-100 dark:border-gray-500 mt-5 ml-2">
			{#each sessions as session}
				<!--First item-->
				<li>
					<div class="flex-start flex items-center pt-3">
						<div
							class="-ml-[5px] mr-6 h-[9px] w-[9px] rounded-full bg-indigo-300 dark:bg-indigo-500"
						/>
						<p class="text-sm text-neutral-500 dark:text-neutral-300">
							{session.name}
						</p>
					</div>
					<div class="mb-6 ml-8 mt-2">
						<h4 class="mb-1.5 text-xl font-semibold">{session.subject.name}</h4>
						<div>
							<Tag>Oil Painting</Tag>
						</div>
						<p class="my-3 text-neutral-500 dark:text-neutral-300">add notes</p>
					</div>
				</li>
			{/each}

			<li>
				<div class="flex-start flex items-center pt-3">
					<div
						class="-ml-[10px] mr-6 h-[20px] w-[20px] rounded-full bg-indigo-300 dark:bg-indigo-500 text-center align-middle leading-tight"
					>
						+
					</div>
					{#if addSession}
						<form method="post" action="?/create">
							<Input
								type="text"
								placeholder="Session Name"
								value={`Session ${new Date().toLocaleDateString('de-CH')}`}
							/>
							<select
								name="subject"
								class="w-full rounded-lg border-gray-200 dark:bg-gray-800 p-4 pe-12 text-sm shadow-sm mb-2"
							>
								{#each subjects as subject}
									<option value={subject.id}>{subject.name}</option>
								{/each}
							</select>

							<Input type="text" placeholder="Tags" />
							<Input type="text" placeholder="Notes" />
							<Button type="submit">Create</Button>
						</form>
					{:else}
						<Button on:click={showSessionForm}>New Session</Button>
					{/if}
				</div>
			</li>
		</ol>
	</article>
{/if}
