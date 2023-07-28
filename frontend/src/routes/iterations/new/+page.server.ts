import { graphql } from '$houdini';
import { fail, redirect } from '@sveltejs/kit';

/* @type { import('./$types').Actions } */
export const actions = {
	create: async (event) => {
		const data = await event.request.formData();

		const newIteration = {
			name: data.get('name')?.toString() as string,
			theme: data.get('theme')?.toString() as string,
			purpose: data.get('purpose')?.toString() as string,
			startDate: data.get('startDate')?.toString() as string,
			endDate: data.get('endDate')?.toString() as string
		};

		const actionMutation = graphql(`
			mutation createIteration($data: mutationIterationInput!) {
				createIteration(data: $data) {
					id
				}
			}
		`);

		const result = await actionMutation.mutate({ data: newIteration }, { event });

		if (result.errors) {
			return fail(400, { error: result.errors.map((e) => e.message).join('; ') });
		}

		const id = result.data?.createIteration?.id;
		throw redirect(303, `/iterations/${id}`);
	}
};
