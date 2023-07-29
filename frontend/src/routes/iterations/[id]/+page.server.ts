import { graphql } from '$houdini';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	addSession: async (event) => {
		const data = await event.request.formData();

		const iterationId = event.params.id;
		const name = `Session ${new Date().toLocaleDateString('de-CH')}`;

		const newSession = {
			name: name,
			subject: data.get('subjectId')?.toString() as string,
			iteration: iterationId
		};

		const actionMutation = graphql(`
			mutation createSession($data: mutationSessionInput!) {
				createSession(data: $data) {
					id
				}
			}
		`);

		const result = await actionMutation.mutate({ data: newSession }, { event });

		if (result.errors) {
			return fail(400, { error: result.errors.map((e) => e.message).join('; ') });
		}

		const sessionId = result.data?.createSession?.id;
		throw redirect(303, `/iterations/${iterationId}?sessionId=${sessionId}`);
	},

	updateIteration: async (event) => {
		// todo
	}
};
