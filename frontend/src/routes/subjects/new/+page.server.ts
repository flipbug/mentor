import { graphql } from '$houdini';
import { fail, redirect } from '@sveltejs/kit';

/* @type { import('./$types').Actions } */
export const actions = {
	create: async (event) => {
		const data = await event.request.formData();

		const tags = data.getAll('tags[]');

		const tagIds = tags
			? JSON.parse(tags.toString()).map((tag: { value: string; label: string }) => {
					return tag.value;
			  })
			: [];

		const newSubject = {
			name: data.get('name')?.toString() as string,
			description: data.get('description')?.toString() as string,
			tags: tagIds
		};

		const actionMutation = graphql(`
			mutation createSubject($data: mutationSubjectInput!) {
				createSubject(data: $data) {
					id
				}
			}
		`);

		const result = await actionMutation.mutate({ data: newSubject }, { event });

		if (result.errors) {
			return fail(400, { error: result.errors.map((e) => e.message).join('; ') });
		}

		throw redirect(307, `/`);
	}
};
