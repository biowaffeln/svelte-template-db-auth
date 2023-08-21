import { auth } from '$lib/server/lucia';

export const handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return resolve(event);
};
