import { auth } from '$lib/server/lucia';

export const GET = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) {
		auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}

	return new Response(null, {
		status: 302,
		headers: { location: '/' },
	});
};
