import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	username: text('username').notNull().unique(),
});

export const userKey = sqliteTable('user_key', {
	id: text('id').notNull().primaryKey(),
	user_id: text('user_id')
		.notNull()
		.references(() => user.id),
	hashed_password: text('hashed_password'),
});

export const userSession = sqliteTable('user_session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	activeExpires: integer('active_expires').notNull(),
	idleExpires: integer('idle_expires').notNull(),
});
