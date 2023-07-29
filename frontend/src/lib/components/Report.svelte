<script lang="ts">
	import { graphql } from '$houdini';

	const store = graphql(`
		query getAllSessions @load {
			Sessions(limit: 1000) {
				docs {
					id
					createdAt
				}
                totalDocs
			}
		}
	`);

	$: sessions = $store.data?.Sessions?.docs;

	let data: { date: Date; sessions: number }[] = [];

    const numberOfDays = 30;
    const width = `${Math.floor(100 / numberOfDays)}%`;

	const today = new Date();
	const startDate = new Date();
	startDate.setDate(today.getDate() - numberOfDays);

	$: if (sessions) {
		const sessionMap = new Map();
		sessions.forEach((session) => {
			const date = session!.createdAt!.toLocaleDateString();
            if (session!.createdAt! < startDate) {
                return;
            }
            
			if (sessionMap.has(date)) {
				sessionMap.set(date, [...sessionMap.get(date), session]);
			} else {
				sessionMap.set(date, [session]);
			}
		});

		for (let index = numberOfDays - 1; index >= 0; index--) {
			const date = new Date();
			date.setDate(today.getDate() - index);

			data = [
				...data,
				{
					date: date,
					sessions: sessionMap.get(date.toLocaleDateString())?.length || 0
				}
			];
		}
	}
</script>

<div class="mb-5 flex justify-between">
	<div class="w-1/4">
		<div class="mb-2">Total Sessions</div>
		<div class="text-indigo-500 text-7xl font-display">{ $store.data?.Sessions?.totalDocs || 0}</div>
	</div>
	<div class="w-3/4">
		<div class="mb-4">Last 30 Days</div>
		<div class="mb-3 flex flex-nowrap justify-between">
			{#each data as d}
				<div class="max-w-[1rem] w-[{width}]">
					<div
						title={d.date.toDateString()}
						class="{d.sessions > 0 ? 'bg-indigo-500' : 'bg-slate-700'} h-3 mx-[2px] rounded-full"
					/>
				</div>
			{/each}
		</div>
		<div class="flex justify-between text-sm text-slate-500 place-items-center">
			<div>{startDate.toLocaleDateString('de-CH')}</div>
			<div class="w-full bg-slate-700 h-[1px] mx-5" />
			<div>{today.toLocaleDateString('de-CH')}</div>
		</div>
	</div>
</div>
