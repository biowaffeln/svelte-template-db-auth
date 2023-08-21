import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { betterSqlite3 } from '@lucia-auth/adapter-sqlite';
import { discord } from '@lucia-auth/oauth/providers';
import {
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	DISCORD_REDIRECT_URI,
	SQLITE_DB_PATH,
} from '$env/static/private';
import Database from 'better-sqlite3';

const db = new Database(SQLITE_DB_PATH);

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: betterSqlite3(db, {
		user: 'user',
		key: 'user_key',
		session: 'user_session',
	}),
	getUserAttributes: (user) => ({
		username: user.username,
	}),
});

export const discordAuth = discord(auth, {
	clientId: DISCORD_CLIENT_ID,
	clientSecret: DISCORD_CLIENT_SECRET,
	redirectUri: DISCORD_REDIRECT_URI,
});

export type Auth = typeof auth;
