import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

// ✅ Connect using the pooled URL from Supabase with prepare: false to avoid FetchPreparedStatement error
const client = postgres(process.env.POSTGRES_PRISMA_URL!, {
  prepare: false,
});

export const db = drizzle(client);
