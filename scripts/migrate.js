import 'dotenv/config';
import * as betterSqlite3 from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

if (!process.env.SQLITE_DB_PATH) {
	throw new Error('SQLITE_DB_PATH environment variable is not set');
}

const betterSqlite = new Database(process.env.SQLITE_DB_PATH);
const db = betterSqlite3.drizzle(betterSqlite);

console.log('Applying migrations...');
migrate(db, { migrationsFolder: 'drizzle' });
console.log('Done!');
